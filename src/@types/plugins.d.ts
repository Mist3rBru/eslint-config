/* eslint-disable no-duplicate-imports */
/* eslint-disable import/no-default-export */

declare module '@eslint/js' {
  import { type Linter } from 'eslint'

  declare const plugin: {
    configs: {
      all: {
        rules: Linter.RulesRecord
      }
      recommended: {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module '@typescript-eslint/eslint-plugin' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      all: {
        rules: Linter.RulesRecord
      }
      base: {
        rules: Linter.RulesRecord
      }
      'disable-type-checked': {
        rules: Linter.RulesRecord
      }
      'eslint-recommended': {
        rules: Linter.RulesRecord
      }
      recommended: {
        rules: Linter.RulesRecord
      }
      'recommended-requiring-type-checking': {
        rules: Linter.RulesRecord
      }
      'recommended-type-checked': {
        rules: Linter.RulesRecord
      }
      strict: {
        rules: Linter.RulesRecord
      }
      'strict-type-checked': {
        rules: Linter.RulesRecord
      }
      stylistic: {
        rules: Linter.RulesRecord
      }
      'stylistic-type-checked': {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-deprecation' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-jest-dom' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
      all: {
        rules: Linter.RulesRecord
      }
    }
  }

  export = plugin
}

declare module 'eslint-plugin-jest' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      all: {
        rules: Linter.RulesRecord
      }
      recommended: {
        rules: Linter.RulesRecord
      }
      style: {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-import' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
      errors: {
        rules: Linter.RulesRecord
      }
      warnings: {
        rules: Linter.RulesRecord
      }
      'stage-0': {
        rules: Linter.RulesRecord
      }
      react: {
        rules: Linter.RulesRecord
      }
      'react-native': {
        rules: Linter.RulesRecord
      }
      electron: {
        rules: Linter.RulesRecord
      }
      typescript: {
        settings: Record<string, unknown>
        rules: Linter.RulesRecord
      }
    }
  }

  export = plugin
}

declare module 'eslint-plugin-no-secrets' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-promise' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-unicorn' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
      all: {
        rules: Linter.RulesRecord
      }
      'flat/recommended': {
        rules: Linter.RulesRecord
      }
      'flat/all': {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-security' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-react' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
      all: {
        rules: Linter.RulesRecord
      }
      'jsx-runtime': {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-react-hooks' {
  import { type ESLint, type Linter } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module 'eslint-plugin-jsx-a11y' {
  import { type Linter, type ESLint } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
      strict: {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module '@next/eslint-plugin-next' {
  import { type Linter, type ESLint } from 'eslint'

  declare const plugin: ESLint.Plugin & {
    configs: {
      recommended: {
        rules: Linter.RulesRecord
      }
      'core-web-vitals': {
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}
