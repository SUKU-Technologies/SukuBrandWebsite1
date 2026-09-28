import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionGlobalConfig } from 'framer-motion'
import './index.css'
import App from './App.jsx'

document.querySelectorAll('[data-seo-static]').forEach((node) => node.remove())

const rootEl = document.getElementById('root')
const prerendered = Boolean(rootEl && rootEl.childElementCount > 0)

if (prerendered) {
  MotionGlobalConfig.skipAnimations = true
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if (prerendered) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelector('[data-prerender-visibility]')?.remove()
      MotionGlobalConfig.skipAnimations = false
    })
  })
}
