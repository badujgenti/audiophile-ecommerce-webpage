import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Person from "./components/Person.jsx";
import { Route, Routes } from 'react-router-dom';
import Categories from "./components/Categories.jsx";



function App() {
  return (
    <div className="App">
      <Header/>
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
