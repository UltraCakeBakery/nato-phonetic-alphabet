import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['test/**/*.test.ts', 'test/**/*.spec.ts', 'test/**/*.ts'],
    coverage: {
      reporter: ['text', 'lcov'],
      all: true,
      exclude: ['benchmark/**', 'vitest.config.ts', 'jest.config.js', 'tsup.config.ts', 'coverage/**']
    }
  }
})
 
