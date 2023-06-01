import React from 'react'
import Home from './home';
import About from './About'
import Text from './Text'
import {  Route, Routes , useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

 
 function Animationdm() {
    const location = useLocation(); 


    return (
      
      <>
        <AnimatePresence>
          <Routes location={location} key= {location.pathname}>
            <Route path = '/Text' element = {<Text />} />
            <Route path='/' element={<Home title = "STM"/>} />
            <Route path='About' element={<About />} />
          </Routes>
          </AnimatePresence>
  
         </>
      
    );
  }
  


  export default Animationdm;

