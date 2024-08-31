import { useState } from 'react'
import { links, social } from './data'
import { FaBars } from 'react-icons/fa'
// import './App.css'
import Navbar from './Navbar'

function App() {
  const [showLinks, setShowLinks] = useState(0)

  return (
    <main>
      <Navbar />
    </main>
  )
  
}

export default App
