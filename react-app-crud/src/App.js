import React from 'react'
import Content from './components/Content'
import Navbar from './components/Navbar'
import './App.css'
import { FetchUsersProvider } from './context/FetchUsers'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <FetchUsersProvider>
        <Content />
      </FetchUsersProvider>
      <div className='footer'>
        <h6>Desarrollado por Joel Puco</h6>
      </div>
    </div>
  )
}
