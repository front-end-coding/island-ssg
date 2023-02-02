import { createRoot } from 'react-dom/client'
import { App } from './App'

function renderInBrower() {
  const containEl = document.getElementById('root')
  if (!containEl) {
    throw new Error('#root element not found!')
  }
  createRoot(containEl).render(<App />)
}

renderInBrower()
