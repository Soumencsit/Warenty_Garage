import { useState } from 'react'

import './App.css'
import Nav from './component/Nav'
import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import CustomerReview from './component/CustomerReview'
import Demo from './component/Demo'

function App() {
  

  return (
    <>
     <Nav/>
     <Home/>
     <About/>
     <Service/>
     <CustomerReview/>
     <Demo/>
    </>
  )
}

export default App
