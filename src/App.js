// import './App.css';
import About from './components/About';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light') 
  const change = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='grey'; 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'; 
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textapp" about="About" mode={mode} click={change} />
      {/* <About/> */}
      <div className="container">
      <Routes>
          <Route path="/about"
            element={<About />}
          />
          <Route path="/"
            element={<Textform heading="Enter the text to analyze" mode={mode} />}
          />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
