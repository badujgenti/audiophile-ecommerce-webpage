import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Person from "./components/Person.jsx";
import { Route, Routes } from 'react-router-dom';
import Categories from "./components/Categories.jsx";
import { useState } from "react";
import styled from "styled-components";



function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);




  return (
    <div className="App">
      {navbarOpen && <BlackBgd  />}

      
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:category' element={<Categories />}/>
        


     
      </Routes>
     
   

     <Person/>
     <Footer/>
    
    </div>
  );
}

export default App;


const BlackBgd = styled.div`
height:100vh;
background: #000000;
mix-blend-mode: normal;
opacity: 0.4;
position: fixed;
top:0px;
z-index: 2;
width: 100%;
`