// SPDX-License-Identifier: AGPL-3.0-or-later
/**
 * Verifies an npm pack tarball can be installed and imported by a blank consumer.
 * Usage: node scripts/smoke-consumer.mjs [path-to-tarball]
 */
import { execSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const tarballArg = process.argv[2]
const root = resolve(import.meta.dirname, '..')

let tarball = tarballArg ? resolve(tarballArg) : null
if (!tarball) {
  execSync('npm pack --pack-destination .', { cwd: root, stdio: 'inherit' })
  const packed = execSync('npm pack --dry-run --json', { cwd: root, encoding: 'utf8' })
  const list = JSON.parse(packed)
  tarball = join(root, list[0].filename)
}

if (!existsSync(tarball)) {
  console.error(`tarball not found: ${tarball}`)
  process.exit(1)
}

const dir = mkdtempSync(join(tmpdir(), 'foxnature-ui-smoke-'))
try {
  mkdirSync(join(dir, 'src'), { recursive: true })
  writeFileSync(
    join(dir, 'package.json'),
    JSON.stringify(
      {
        name: 'foxnature-ui-smoke',
        private: true,
        type: 'module',
        dependencies: {
          vue: '^3.5.0',
          '@kitsuneflora/ui': `file:${tarball}`,
        },
      },
      null,
      2,
    ),
  )
  writeFileSync(
    join(dir, 'src/main.mjs'),
    `
import { FxButton, createFxTheme, tokens } from '@kitsuneflora/ui'
import '@kitsuneflora/ui/style.css'
import '@kitsuneflora/ui/tokens.css'
if (typeof FxButton !== 'object' && typeof FxButton !== 'function') throw new Error('FxButton missing')
if (typeof createFxTheme !== 'function') throw new Error('createFxTheme missing')
if (!tokens?.color?.brand) throw new Error('tokens missing')
console.log('smoke-consumer ok')
`,
  )
  execSync('npm install', { cwd: dir, stdio: 'inherit' })
  execSync('node src/main.mjs', { cwd: dir, stdio: 'inherit' })
} finally {
  rmSync(dir, { recursive: true, force: true })
}
