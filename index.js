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
    'simple-import-sort/imports'    : [
      'warn',
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
    'import/newline-after-import'   : 'warn',
    'import/first'                  : 'warn',
    'comma-dangle'                  : [
      'warn',
      {
        'arrays' : 'always-multiline',
        'objects': 'always-multiline',
        'exports': 'always-multiline',
        'imports': 'always-multiline'
      }
    ],
    'func-style'                    : [
      'warn',
      'declaration',
      {
        'allowArrowFunctions': true
      }
    ],
    'no-var'                        : 'warn',
    'no-unused-vars'                : 'warn',
    'max-len'                       : [
      'warn',
      120
    ],
    'semi'                          : [
      'warn',
      'never'
    ],
    'eqeqeq'                        : [
      'warn',
      'smart'
    ],
    'quotes'                        : [
      'warn',
      'single',
      'avoid-escape'
    ],
    'jsx-quotes'                    : [
      'warn',
      'prefer-double'
    ],
    'arrow-spacing'                 : [
      'warn',
      {
        'before': true,
        'after' : true
      }
    ],
    'arrow-parens'                  : [
      'warn',
      'as-needed'
    ],
    'prefer-const'                  : 'warn',
    'no-throw-literal'              : 'warn',
    'no-undef'                      : 'error',
    'no-unused-expressions'         : [
      'warn',
      {
        'allowShortCircuit': true
      }
    ],
    'object-curly-spacing'          : [
      'warn',
      'always'
    ],
    'comma-spacing'                 : [
      'warn'
    ],

    'space-before-blocks'       : 'warn',
    'space-in-parens'           : 'warn',
    'keyword-spacing'           : 'warn',
    'brace-style'               : 'warn',
    'no-multi-spaces'           : 'warn',
    'spaced-comment'            : 'warn',

    'react/jsx-equals-spacing'      : [
      'warn',
      'never'
    ],
    'react/jsx-no-duplicate-props'  : [
      'warn',
      {
        'ignoreCase': true
      }
    ],
    'react/jsx-no-undef'            : 'warn',
    'react/jsx-pascal-case'         : [
      'warn',
      {
        'allowAllCaps': true,
        'ignore'      : []
      }
    ],
    'react/jsx-uses-react'          : 'warn',
    'react/jsx-uses-vars'           : 'warn',
    'react/jsx-wrap-multilines'     : 'warn',
    'react/jsx-curly-spacing'       : [
      'warn',
      'always',
      {
        'allowMultiline': false,
        'spacing'       : {
          'objectLiterals': 'never'
        }
      }
    ],
    'react/no-is-mounted'           : 'warn',
    'react/require-render-return'   : 'warn',
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        'props'   : 'never',
        'children': 'never'
      }
    ],
    'react/jsx-key'                 : ['warn', { 'checkFragmentShorthand': true }],
    /* https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules */
    'jsx-a11y/aria-role'        : 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key'    : 'warn'
  }
}
