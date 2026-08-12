// SPDX-License-Identifier: AGPL-3.0-or-later
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // Cast avoids Vite 8 / Vitest nested-vite plugin type mismatch during editor checks.
  plugins: [vue() as never],
  resolve: {
    alias: {
      '@kitsuneflora/ui': resolve(root, 'src/index.ts'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.{test,spec}.ts'],
    setupFiles: ['tests/setup.ts'],
    css: true,
  },
})
