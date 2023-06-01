import React from 'react'
import './main.scss'
import headimg from './safe.png'
import safe from './mn.png'
import {Link} from 'react-router-dom'
export default function Mainpage() {
  return (

    <>

 
    <div className='container2'>
     
      <div className='headd'>
        <div className='headd1'>

        <h2>Extract insights, not noise - <span>Summarize</span> transcripts and audio with precision and speed!</h2>
        {/* <p>MeetMate is your go-to destination for efficient audio and transcript summarization. Our advanced tools can summarize lengthy audio files and transcripts quickly and accurately, saving you valuable time and effort. With MeetMate, you can obtain the key insights and highlights from any audio or transcript in just a few minutes. Whether you're a student, researcher, or busy professional, MeetMate makes it easy to stay on top of your work and achieve your goals. Try MeetMate today and discover the power of efficient summarization.</p> */}
       <p>MeetMate provides fast and accurate audio and transcript summarization tools to extract key insights and highlights from long files in minutes. It helps students, researchers, and busy professionals stay productive and achieve their goals. Try MeetMate now for efficient summarization.</p>
       {/* <button >Try for Free</button> */}
      
       <Link to="/Home">
       <div className='try-free'>
                <h6>Try for Free</h6>
                {/* <h6>summarize text file </h6> */}
                </div>
                </Link>
        </div>



        <div className='head-img'>
        <img src={require('./docc2.jpeg')}alt = "headimg"/>
        
        </div>
       
      </div>


      <div
       className='midd'>
        <h2>Work Smarter, Not Harder! Let "MeetMate" Simplify Your Tasks.</h2>
        <p>Stay organized and collaborate effortlessly with our user-friendly platform. Simplify your workflow with MeetMate.</p>

      </div>

      <div className='midd-top'>
            <div className='midd-top-left'>
              <h2>Transcript Summarization</h2>
              <p>Our transcript summarization service takes an online meeting transcription and distills it down into a concise and easy-to-read summary, highlighting the key points and takeaways of the conversation.</p>
              <Link className='go' to = "./Text">
                Try Now <img className='go-icon' src={require('./go.png')}alt = "go"/>
              </Link>
            </div>
            <div className='midd-top-right'>
            <img src={require('./text.png')}alt = "headimg"/>
            </div>
      </div>
      <div className='midd-top1'>
            <div className='midd-top-left1'>
              <h2>Audio Summarization</h2>
              <p>With our powerful audio summarization tool, you can easily extract the most important information from your recordings with just a few clicks.</p>
              <Link className='go' to = "./Audio">
                Try Now <img className='go-icon' src={require('./go.png')}alt = "go"/>
              </Link>
            </div>
            <div className='midd-top-right1'>
            <img src={require('./txt.png')}alt = "headimg"/>
            </div>
      </div>
      <hr/>

      <div className='How-to'>
        <h2> How to generate a concise summary from Transcript/Audio Files?</h2>
        <div className='How-to-main'>

        <div className='How-to-left'>
        <p>1. Upload your file by clicking "Select Your File".</p>
        <p>2. Choose short, medium, or long for a summary length.</p>
        <p>3. Now, wait for the tool to do its job.</p>
        <p>4. Download the summary and use it as needed!</p>
        </div>
        <div className='How-to-right'>
        <img src={require('./docc2.jpeg')}alt = "headimg"/>
        </div>
        </div>
        
      </div>

    </div>
    </>
  )
}
