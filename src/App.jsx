import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Hero2 from './hero2'
import Hero3 from './Hero3'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import ProductList from './components/productList'


const App = () => {
  return (
    <div className=''>
      
      <BrowserRouter> 
      <Navbar />
      
      <Routes>

        <Route path='/' element={<ProductList/>}/>
        <Route path="/about" element= {<Hero2 />} />
      </Routes>
      </BrowserRouter>

      <Hero />
      <Hero2 />
      <Hero3 />
    
      
    </div>
  )
}

export default App
