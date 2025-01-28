import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
import pluginCypress from 'eslint-plugin-cypress/flat';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}']
	},
	{
		name: 'app/files-to-ignore',
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
	},

	{
		...pluginVue.configs['flat/essential'],
		...vueTsEslintConfig(),
		rules: {
			'vue/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'prettier/prettier': 'error',
			'no-console': 'warn',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: ['function'],
					format: ['camelCase']
				},
				{
					selector: ['variable'],
					format: ['camelCase', 'UPPER_CASE']
				},
				{
					selector: ['class'],
					format: ['PascalCase']
				}
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports'
				}
			],
			'vue/attributes-order': [
				'error',
				{
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						'UNIQUE',
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'OTHER_ATTR',
						'EVENTS',
						'CONTENT'
					]
				}
			]
		}
	},

	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*']
	},

	{
		...pluginCypress.configs.recommended,
		files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}']
	},
	skipFormatting
];
