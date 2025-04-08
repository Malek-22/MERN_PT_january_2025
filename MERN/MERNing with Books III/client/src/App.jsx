import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import EditeBook from './components/EditBook'
import './App.css'

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books/:id/edit' element={<EditeBook/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App