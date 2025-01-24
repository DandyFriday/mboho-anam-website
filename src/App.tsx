//import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//import Login from "./pages/Login";
import Members from "./pages/Members";
import Media from "./pages/Media";
import Student_forum from "./pages/Student_forum";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className=''>
    <Navbar /> 
     <Routes> 
       <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />}/>      
      <Route path="/Members" element={<Members />} />
      <Route path="/Media" element={<Media />} />
      <Route path="/Student_forum" element={<Student_forum />} />
       
     </Routes> 
     <Footer />  
    </div>
  );
}

export default App;

