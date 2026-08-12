// SPDX-License-Identifier: AGPL-3.0-or-later
/**
 * Verifies an npm pack tarball can be installed and imported by a blank consumer.
 * Usage: node scripts/smoke-consumer.mjs [path-to-tarball]
 */
import { execSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join, resolve, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

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

const dir = mkdtempSync(join(tmpdir(), 'kitsuneflora-ui-smoke-'))
try {
  mkdirSync(join(dir, 'src'), { recursive: true })
  writeFileSync(
    join(dir, 'package.json'),
    JSON.stringify(
      {
        name: 'kitsuneflora-ui-smoke',
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
  // Node cannot load .css; verify JS import + CSS file exports on disk.
  writeFileSync(
    join(dir, 'src/main.mjs'),
    `
import { createRequire } from 'node:module'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { FxButton, createFxTheme, tokens } from '@kitsuneflora/ui'

if (typeof FxButton !== 'object' && typeof FxButton !== 'function') throw new Error('FxButton missing')
if (typeof createFxTheme !== 'function') throw new Error('createFxTheme missing')
if (!tokens?.color?.brand) throw new Error('tokens missing')

const require = createRequire(import.meta.url)
const pkgJson = require.resolve('@kitsuneflora/ui/package.json')
const pkgRoot = dirname(pkgJson)
const cssEntries = ['style.css', 'tokens.css', 'reset.css', 'preset.css']
for (const name of cssEntries) {
  const file = join(pkgRoot, 'dist', name)
  if (!existsSync(file)) throw new Error('missing CSS export file: ' + name)
}
// Ensure package exports map resolves (Node resolves to file path).
for (const sub of ['./style.css', './tokens.css', './reset.css', './preset.css']) {
  const resolved = require.resolve('@kitsuneflora/ui/' + sub.slice(2))
  if (!existsSync(resolved)) throw new Error('export resolve failed: ' + sub)
  void pathToFileURL(resolved)
}

console.log('smoke-consumer ok')
`,
  )
  execSync('npm install', { cwd: dir, stdio: 'inherit' })
  execSync('node src/main.mjs', { cwd: dir, stdio: 'inherit' })
} finally {
  rmSync(dir, { recursive: true, force: true })
  // Clean accidental pack artifacts in repo root.
  const packedName = 'kitsuneflora-ui-0.1.0-alpha.0.tgz'
  const localPack = join(root, packedName)
  if (!tarballArg && existsSync(localPack)) {
    rmSync(localPack, { force: true })
  }
}
