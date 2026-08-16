import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { createCore } from './provider/index.ts'

const core = createCore()

createRoot(document.getElementById('root')!).render(<StrictMode><App core={core} /></StrictMode>)
