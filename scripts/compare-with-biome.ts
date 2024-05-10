/* eslint-disable unicorn/no-abusive-eslint-disable */

/* eslint-disable */
import type { EslintPlugin } from '../src/types.js'
import { toCamelCase } from '../src/utils/mappers.js'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'

;(async (): Promise<void> => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    'https://github.com/biomejs/biome/discussions/3#discussioncomment-9381916'
  )

  const biomeEquivalents = await page.evaluate(() => {
    const data: { eslint: string; biome: string }[] = []

    // @ts-expect-error
    for (const row of document.querySelectorAll('table tbody tr')) {
      const cells = row.querySelectorAll('td')

      // Extract text from Eslint and Biome columns
      const eslint = cells[0]?.textContent.trim()
      const biome = cells[2]?.textContent.trim()

      if (
        eslint?.split(' ').length > 1 ||
        eslint?.includes('\n') ||
        biome?.split(' ').length > 1 ||
        biome?.includes('\n')
      ) {
        continue
      }
      // Push data to array
      data.push({ eslint, biome })
    }

    return data
  })

  console.log(biomeEquivalents)

  const pluginsPath = path.resolve('src/plugins')
  const pluginFiles = readdirSync(pluginsPath).filter(
    fileName => !fileName.endsWith('.spec.ts')
  )
  let totalCounter = 0

  for (const pluginFile of pluginFiles) {
    const plugin = (await import(path.resolve(pluginsPath, pluginFile)))[
      `${toCamelCase(pluginFile.replace('.ts', ''))}Plugin`
    ] as unknown as EslintPlugin
    const pluginRules = Object.entries(plugin.rules)
    const pluginActiveRules = (
      pluginRules.length > 0 ? pluginRules : Object.entries(plugin.testRules)
    ).filter(([_, ruleEntry]) => ruleEntry !== 'off')
    let pluginCounter = 0

    for (const [ruleName] of pluginActiveRules) {
      const biomeEquivalent = biomeEquivalents.find(data =>
        ruleName.includes(data.eslint)
      )

      if (!biomeEquivalent?.biome) {
        process.stdout.write(`${plugin.name}: ${ruleName}\n`)
        pluginCounter++
      }
    }
    totalCounter += pluginCounter
    process.stdout.write(`${plugin.name}: TOTAL: ${pluginCounter}\n\n`)
  }
  process.stdout.write(`TOTAL: ${totalCounter}\n\n`)

  await browser.close()
})()
