import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouteProvider } from "./router"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteProvider>
        <App />
    </RouteProvider>
  </StrictMode>
)
