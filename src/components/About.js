import React from 'react'
import "./About.scss"
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

export default function About() {
 
  return (
    <>
    
    <div className='container3'>
      
    <div className='main'>
    <img  className = 'main-img'src={require('./meetmate-png.png')}alt = "headimg"/>

    <div className='main-text'>
    <div className='main-text-left'>
    {/* <h2>What is "MeetMate"?</h2> */}
    </div>
    <div className='main-text-right'>
    <p><span>M</span>eetMate specializes in summarizing online meeting transcripts and audio files using cutting-edge artificial intelligence technology. With MeetMate, users can quickly obtain accurate and concise summaries of their meetings, whether they have a transcript or an audio file. Our tool is incredibly easy to use, and users can even translate the summaries they receive into their preferred language. We believe that our service saves our users valuable time and allows them to focus on the most important parts of their meetings. Try MeetMate today and see how it can help streamline your online meetings!</p>
    </div>
    <div
      className = 'social-acc'>
    <Link className = 'social1' to= "https://instagram.com/knoxzaid/"><img height={30} id='main-title-img' src={require('./instagram.png')}alt = "insta"/></Link>
    <Link className = 'social2'to= "https://github.com/zaid5775"><img height={30} id='main-title-img' src={require('./github.png')}alt = "github"/></Link>
    <Link className = 'social3' to= "https://twitter.com/knoxzaid1"><img height={30} id='main-title-img' src={require('./twitter.png')}alt = "twitter"/></Link>
    <Link className = 'social4' to= "https://www.linkedin.com/in/zaid-shaikh-a59aa9215/"><img height={30} id='main-title-img' src={require('./linkedin.png')}alt = "linkedin"/></Link>

              
    </div>
    

    </div>
    </div>
    </div>
    </>
  )
}
