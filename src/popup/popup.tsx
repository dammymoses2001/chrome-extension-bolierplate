import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'

const App: React.FC<{}> = () => {
  return (
    <div className='h-[200px] w-[200px]'>
      <img src="icon.png" className='w-[20px]' style={{width:'100px'}} />
      hello
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
