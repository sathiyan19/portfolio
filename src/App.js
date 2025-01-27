import './App.css';
import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import { Navbar,Footer } from './Components';
import { Home } from './Pages';

function App() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
