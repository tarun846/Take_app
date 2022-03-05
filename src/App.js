import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Header from './Component/Header'
import ProductList from './Component/ProductList'
import ProductContainer from './Component/ProductContainer'


function App() {
    return (
        <div>
            Jay Jagannath
            <Router>
            <Header/>
            <Routes>
            <Route path = '/'  element = {<ProductList/>}  />
            <Route path = '/product/:productId'  element = {<ProductContainer/>}  />
            <Route path = '*' > 404 nOT FOUND </Route>
            </Routes>
          
            </Router>
        
        </div>
    )
} 

export default App
