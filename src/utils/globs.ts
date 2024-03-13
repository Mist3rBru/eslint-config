export const GLOB_TS = '**/*.?([cm])ts'

export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_TS_TSX = '**/*.?([cm])ts?(x)'

const GLOB_SRC_EXT = '?([cm])[jt]s?(x)'

export const GLOB_TESTS = [
  `**/__tests__/**/*.${GLOB_SRC_EXT}`,
  `**/tests/**/*.${GLOB_SRC_EXT}`,
  `**/*.spec.${GLOB_SRC_EXT}`,
  `**/*.test.${GLOB_SRC_EXT}`,
  `**/*.bench.${GLOB_SRC_EXT}`,
  `**/*.benchmark.${GLOB_SRC_EXT}`,
]

export const GLOB_EXCLUDE = [
  '**/node_modules/**/*',
  '**/dist/**/*',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  '**/output/**/*',
  '**/coverage/**/*',
  '**/temp/**/*',
  '**/.temp/**/*',
  '**/tmp/**/*',
  '**/.tmp/**/*',
  '**/.history/**/*',
  '**/.vitepress/cache/**/*',
  '**/.nuxt/**/*',
  '**/.next/**/*',
  '**/.vercel/**/*',
  '**/.changeset/**/*',
  '**/.idea/**/*',
  '**/.cache/**/*',
  '**/.output/**/*',
  '**/.vite-inspect/**/*',
  '**/.yarn/**/*',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__/**/*',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]
