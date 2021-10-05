module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				singleQuote: true,
				printWidth: 80,
				tabWidth: 2,
				endOfLine: "auto",
				arrowParens: "avoid",
			},
		],
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"no-use-before-define": 0,
	},
};
