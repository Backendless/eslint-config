module.exports = {
  'parser'       : '@babel/eslint-parser',
  'plugins'      : [
    'react',
    'jsx-a11y',
    'import',
    'simple-import-sort'
  ],
  'env'          : {
    'browser' : true,
    'commonjs': true,
    'es6'     : true,
    'node'    : true,
    'jest'    : true,
  },
  'parserOptions': {
    'ecmaVersion' : 2015,
    'sourceType'  : 'module',
    'ecmaFeatures': {
      'jsx'                         : true,
      'generators'                  : true,
      'experimentalObjectRestSpread': true,
      'legacyDecorators'            : true
    }
  },
  'settings'     : {
    'react'            : {
      'version': 'detect'
    },
    'import/ignore'    : [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$'
    ],
    'import/extensions': [
      '.js'
    ],
    'import/resolver'  : {
      'node': {
        'extensions': [
          '.js',
          '.json'
        ]
      }
    }
  },
  'rules'        : {
    'simple-import-sort/imports' : [
      'error',
      {
        'groups': [
          /* Styles */
          [
            '^.+\\.less$'
          ],

          /* node_modules */
          [
            '^react',
            '^prop-types',
            '^@?\\w'
          ],

          /* Backendless related groups */
          [
            '^constants',
            '^utils',
            '^rt',
            '',
            '^contexts',
            '^hooks',
            '^actions',
            '^reducers',
            '^decorators',
            '^store'
          ],
          [
            '^views/bricks',
            '^views/common',
            '^views/'
          ],

          /* Relative imports */
          [
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$'
          ]
        ]
      }
    ],
    'import/newline-after-import': 'error',
    'import/first'               : 'error',
    'comma-dangle'               : [
      'error',
      {
        'arrays' : 'always-multiline',
        'objects': 'always-multiline',
        'exports': 'always-multiline',
        'imports': 'always-multiline'
      }
    ],
    'func-style'                 : [
      'error',
      'declaration',
      {
        'allowArrowFunctions': true
      }
    ],
    'no-var'                     : 'error',
    'no-unused-vars'             : 'warn',
    'max-len'                    : [
      'error',
      120
    ],
    'semi'                       : [
      'error',
      'never'
    ],
    'eqeqeq'                     : [
      'error',
      'smart'
    ],
    'quotes'                     : [
      'error',
      'single',
      'avoid-escape'
    ],
    'jsx-quotes'                 : [
      'error',
      'prefer-double'
    ],
    'arrow-spacing'              : [
      'error',
      {
        'before': true,
        'after' : true
      }
    ],
    'arrow-parens'               : [
      'error',
      'as-needed'
    ],
    'prefer-const'               : 'error',
    'no-throw-literal'           : 'error',
    'no-undef'                   : 'error',
    'no-unused-expressions'      : [
      'warn',
      {
        'allowShortCircuit': true
      }
    ],
    'object-curly-spacing'       : [
      'error',
      'always'
    ],
    'comma-spacing'              : [
      'error'
    ],

    'space-before-blocks': 'error',
    'space-in-parens'    : 'error',
    'keyword-spacing'    : 'error',
    'brace-style'        : 'error',
    'no-multi-spaces'    : 'error',
    'spaced-comment'     : 'error',

    'indent': ['error', 2, { 'SwitchCase': 1 }],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
    ],

    'react/jsx-equals-spacing'      : [
      'error',
      'never'
    ],
    'react/jsx-no-duplicate-props'  : [
      'error',
      {
        'ignoreCase': true
      }
    ],
    'react/jsx-no-undef'            : 'error',
    'react/jsx-pascal-case'         : [
      'error',
      {
        'allowAllCaps': true,
        'ignore'      : []
      }
    ],
    'react/jsx-uses-react'          : 'error',
    'react/jsx-uses-vars'           : 'error',
    'react/jsx-wrap-multilines'     : 'error',
    'react/jsx-curly-spacing'       : [
      'error',
      'always',
      {
        'allowMultiline': false,
        'spacing'       : {
          'objectLiterals': 'never'
        }
      }
    ],
    'react/no-is-mounted'           : 'error',
    'react/require-render-return'   : 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        'props'   : 'never',
        'children': 'never'
      }
    ],
    'react/jsx-key'                 : ['error', { 'checkFragmentShorthand': true }],
    /* https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules */
    'jsx-a11y/aria-role'        : 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key'    : 'error'
  }
}
