import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'

import "./css/styles.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>
)