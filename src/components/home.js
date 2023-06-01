import React from "react";
import './Home.scss';
import { useState } from 'react';
import { MDBFooter } from "mdb-react-ui-kit";

import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Audio  from "./Audio";
function Home() { 

    
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const Swal = require('sweetalert2');


   const handleInfoClick = () => {
       Swal.fire({
         title: '<strong>Summarize your meetings</strong>',
         icon: 'info',
         html:
         'The Summarizer condenses articles, papers, and other documents into a bulleted Key Sentences list or in a new paragraph.' + 
         'You can customize your summary in bullet points with only one click!',

         showConfirmButton : false,
         showCloseButton: true,
         
         
         CloseButtonColor: '#0b8',
         iconColor : "#0b8",
         color : "#0b8", 
         // timer : 2123,
         
         
       })
       setIsInfoVisible(!isInfoVisible);
     };

     
    return(

      <>
      
        <div className="App"
        // initial = {{width : 0}}
        // animate = {{width : "100%"}}
        // exit = {{x:window.innerWidth , transition : {duration : 0.1}}}
        >

          
        
            <div className = "main-content">
            <div className = "desc">
            <h1>Summarize your meetings using Text file or Audio file</h1>
        <div className="easy">    
        <div className="info-icon-container">
       
       <i className="fas fa-info-circle"  onClick={handleInfoClick}></i>
      
       
     </div>
            <h2>Easy-to-use, user-friendly and accurate summarizer</h2></div> 
            </div>
            <div className="boxx">

                <div className="box1">
                <Link to="/Text">
                <h3>Text file summary</h3>
                {/* <h6>summarize text file </h6> */}
                <p>(File accept: .docx, .txt & .vtt)</p>
                </Link>
                </div>
                <div className="box2">
                <Link to="/Audio">
                <h3>Audio file summary</h3>
                {/* <h6>summarize text file </h6> */}
                <p>(File accept: .wav, .ogg & .mp3)</p>
                </Link>
                </div>
                </div>
            </div>
          
        </div>
        </>
    );
}

export default Home;
