import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Person from "./components/Person.jsx";
import { Route, Routes } from 'react-router-dom';
import Categories from "./components/Categories.jsx";
import { useState } from "react";
import styled from "styled-components";
import Item from "./components/Item.jsx";
import Cart from "./components/Cart.jsx";



function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [cart , setCart] = useState([])

  const [menu , setMenu] = useState(false);

 


  return (
    <div className="App">
      {navbarOpen && <BlackBgd  />}

      
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} cart={cart} setCart={setCart} menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:category' element={<Categories />}/>
        <Route path='/category/:category/:slug' element={<Item cart={cart} setCart={setCart} />}/>

        


     
      </Routes>
     
    
    <Item/>

   

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