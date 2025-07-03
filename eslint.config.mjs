import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig({
  node: true,
  typescript: {
    tsconfigRootDir: import.meta.dirname,
  },
  rules: {
    'perfectionist/sort-classes': 'off',
    'import/no-cycle': 'off',
  },
});
