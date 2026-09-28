import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

const prerenderAliases = process.env.PRERENDER_CHILD === '1'
  ? [
      {
        find: /^react-router-dom$/,
        replacement: path.join(rootDir, 'node_modules/react-router-dom/dist/index.mjs'),
      },
      {
        find: /^react-router$/,
        replacement: path.join(rootDir, 'node_modules/react-router/dist/development/index.mjs'),
      },
      {
        find: /^react-modal$/,
        replacement: path.join(rootDir, 'scripts/react-modal-stub.js'),
      },
    ]
  : []

function prerenderRoutes() {
  return {
    name: 'prerender-routes',
    apply: 'build',
    async closeBundle() {
      if (process.env.PRERENDER_CHILD === '1') return
      const { spawn } = await import('node:child_process')
      await new Promise((resolve, reject) => {
        const child = spawn(process.execPath, ['scripts/prerender.mjs'], {
          stdio: 'inherit',
          env: { ...process.env, PRERENDER_CHILD: '1' },
        })
        child.on('error', reject)
        child.on('exit', (code) => {
          if (code === 0) resolve()
          else reject(new Error(`Prerender exited with code ${code}`))
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), prerenderRoutes()],
  resolve: {
    alias: prerenderAliases,
  },
  build: {
    manifest: true,
  },
  ssr: {
    noExternal: ['react-helmet-async', 'react-hot-toast', 'react-spinners'],
  },
})
