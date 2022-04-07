import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import './App.css'
import Store from './Pages/Store';

function App() {
    return (
        <div>
             <Router>

             <Routes>
            <Route path = '/' element = {<Home/>}  />
            <Route path = '/store/:Id'  element = {<Store/>}/>

            {/* <Route path = '*' > 404 NOT FOUND </Route> */}
            </Routes>

             </Router>
            
        </div>
    )
}

export default App
