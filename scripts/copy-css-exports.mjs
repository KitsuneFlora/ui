// SPDX-License-Identifier: AGPL-3.0-or-later
import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
mkdirSync(dist, { recursive: true })

// style.css is emitted by Vite from SFC + token imports; do not overwrite it.
const files = [
  ['src/styles/tokens.css', 'tokens.css'],
  ['src/styles/reset.css', 'reset.css'],
  ['src/styles/preset.css', 'preset.css'],
]

for (const [from, to] of files) {
  copyFileSync(join(root, from), join(dist, to))
}

console.log('copied CSS export entrypoints to dist/')
