import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public')
const pdfPath = join(publicDir, 'Guido_Gabriele_Peruilh_CV.pdf')
const b64Path = join(publicDir, 'Guido_Gabriele_Peruilh_CV.pdf.b64')

if (existsSync(pdfPath)) {
  process.exit(0)
}

let encoded = ''
if (existsSync(b64Path)) {
  encoded = readFileSync(b64Path, 'utf8')
} else {
  const parts = readdirSync(publicDir)
    .filter((name) => name.startsWith('Guido_Gabriele_Peruilh_CV.pdf.b64.') && name.endsWith('.part'))
    .sort()
  if (parts.length === 0) {
    console.error('Missing CV PDF and base64 fallback.')
    process.exit(1)
  }
  encoded = parts.map((name) => readFileSync(join(publicDir, name), 'utf8')).join('')
}

mkdirSync(dirname(pdfPath), { recursive: true })
writeFileSync(pdfPath, Buffer.from(encoded, 'base64'))
console.log('Restored CV PDF from base64 fallback.')
