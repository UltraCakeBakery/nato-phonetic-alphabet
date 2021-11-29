module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2021
	},
	rules: {
		'max-len': [ 'error', { code: 250 }],
		'arrow-spacing': [ 'error', { before: true, after: true }],
		indent: [ 'error', 'tab' ],
		'brace-style': [ 'error', 'allman' ],
		'keyword-spacing': [ 'error', { before: true, after: true }],
		'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false }],
		'object-curly-spacing': [ 'error', 'always' ],
		'space-in-parens': [ 'error', 'always', { exceptions: [ '{}' ] }],
		'padding-line-between-statements': [ 'error', { blankLine: 'always', prev: '*', next: 'return' }],
		camelcase: 'error',
		'comma-dangle': [ 'error', 'never' ],
		curly: [ 'error', 'multi-line' ],
		'eol-last': 'error',
		'import/no-unresolved': 'error',
		'no-unused-vars': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-cond-assign': 'error',
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-import-assign': 'error',
		'no-inner-declarations': 'error',
		'no-this-before-super': 'error',
		'no-var': 'error',
		'no-unreachable': 'error',
		'object-shorthand': [ 'error', 'always' ],
		'one-var': 'off',
		'prefer-arrow-callback': 'error',
		'prefer-const': [ 'error', { destructuring: 'all' }],
		quotes: [ 'error', 'single', { avoidEscape: true }],
		'quote-props': [ 'error', 'as-needed' ],
		'require-atomic-updates': 'warn',
		semi: [ 'error', 'never' ],
		'space-before-blocks': [ 'error', 'always' ],
		'valid-typeof': 'error',
		'@typescript-eslint/array-type': [ 'error', { default: 'array-simple' }],
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/class-name-casing': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/no-unused-vars': [ 'error', { args: 'none' }],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'@typescript-eslint/space-infix-ops': 'error'
	},
	env: {
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended'
	]
}
