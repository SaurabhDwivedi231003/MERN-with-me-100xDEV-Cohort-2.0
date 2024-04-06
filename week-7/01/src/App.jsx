import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import React, { Suspense } from 'react';
import './App.css'

/*Lazy Loading*/
const Landing = React.lazy(()=> import('./components/Landing.jsx'));  
const Home = React.lazy(()=> import('./components/Home.jsx'));  

function App() {  
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

function Navigation() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{ navigate("/home") }}>Home</button>
      <button onClick={()=>{ navigate("/") }}>Landing</button>
    </div>
  )
}

export default App