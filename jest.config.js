export default {
	roots: [
		'<rootDir>/test'
	],
	testMatch: [
		'**/?(*.)+(spec|test).ts'
	],
	transform: {
		'^.+\\.(ts)$': 'ts-jest'
	},
	coveragePathIgnorePatterns: [
		'/node_modules/'
	]
}
