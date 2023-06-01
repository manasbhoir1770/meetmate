




import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaFolder } from "react-icons/fa";
import './Audio.scss';
import BarLoader from 'react-spinners/BarLoader'
import img1 from './trans1.png'
import bulb from './bulb.png';
import os from './os.png'
import translate from './translate.png'
import clock from './clock.png'
import ai from './artificial-intelligence.png'
import safe from './safe.png'
import aud1 from  './aud.png'
import translatee from "translate";
import html2pdf from 'html2pdf.js';


const Audio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [summaryLength, setSummaryLength] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [lang, setLang] = useState("");
  const [translation, setTranslation] = useState("");
  const [tpc, setTpc] = useState("")
  const [file, setFile] = useState(null);
  const [topic, setTopic] = useState("");
  const [keyPoints, setKeyPoints] = useState([]);
  const [att, setatt] = useState(0)
  const fileInputRef = useRef(null);
  
  const [original_sentence_count , setOriginal_sen] =  useState(0)
  const [original_word_count, setOriginal_word] =  useState(0)
  const [original_char_count, setOriginal_char] = useState(0)
  const [summarized_sentence_count, setSummarized_sen] = useState(0)
  const [summarized_word_count, setSummarized_word] = useState(0)
  const [summarized_char_count, setSummarized_char] = useState(0)


  // waiting array
  const summaryMessages = [
    "While our team of robots writes your summary, why not grab a cup of coffee?",
    "We're unlocking the secrets of the universe to provide you with the best summary possible. Please hold on!",
    "Your summary is being written by highly trained ninja monkeys. We promise it will be worth the wait!",
    "We're brewing your summary like a fine cup of tea. It just needs a few more minutes to steep...",
    "Your summary is in the oven and will be ready soon! Please enjoy the aroma while you wait...",
    "We're crafting a summary that's as perfect as a freshly-baked croissant. It will be ready soon!",
    "We're putting the finishing touches on your summary. Thanks for holding tight!",
    "Your summary is currently in progress. We're crossing our t's and dotting our i's to ensure it's perfect!",
    "We're crafting a summary that's as unique as you are. Thanks for being patient with us!",
  ];
  const randomMessage = summaryMessages[Math.floor(Math.random() * summaryMessages.length)];


  const formData = new FormData();
  formData.append("file", file);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setSummary("");

  };
  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  const handleTranslation = async () => {
   
    const translatedText = await translatee(summary, {
      from: "en",
      to: lang
    });
  
    const translatedTopic = await translatee(topic, {
      from: "en",
      to: lang
    });
    setTranslation(translatedText);
    setTpc(translatedTopic);
  };
  


  function handleDownload() {
    // Get the topic, summary, and keywords from the DOM
    const topic = document.querySelector('.main-title').innerHTML;
    const summary = document.querySelector('.main-summary').outerHTML;
    const keywords = Array.from(document.querySelectorAll('.main-keyword'))
                        .map(span => span.outerHTML)
                        .join(' ');
  
    // Create a new div containing the content
    const content = document.createElement('div');
    content.innerHTML = `${topic}\n\n${summary}\n\nKeywords: ${keywords}`;
  
    // Generate a PDF from the div
    html2pdf(content, {
      filename: 'summary.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { dpi: 300, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      margin: 10,
      enableLinks: true,
      onAfterPdfGeneration: () => {
        // Clean up the generated content
        content.remove();
      },
    });
  }
//
  //start over button
  const handleFalse = () => {
    setIsLoading(false)
    setSummary("")
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    // const fileInput = document.getElementById("file-upload");
    // const file = fileInput.files[0];
    setSummaryLength(event.target.value);
    if (file && !summary) {

      setIsLoading(true);

    }
    const endpoint = "";

    const formData = new FormData();
    formData.append("file", file);

    formData.append("summary_length", event.target.value);




    axios
      .post("http://localhost:5000/summarize", formData)
      .then(response => {
        setIsLoading(false);
        setSummary(response.data.summary); // replace with your summary page URL
        setTopic(response.data.topic)
        setKeyPoints(response.data.key)
        setatt(response.data.att)// replace with your summary page URL
        setSummarized_sen(response.data.summarized_sentence_count)
        setSummarized_char(response.data.summarized_char_count)
        setSummarized_word(response.data.summarized_word_count)
        setOriginal_char(response.data.original_char_count)
        setOriginal_word(response.data.original_word_count)
        setOriginal_sen(response.data.original_sentence_count)
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <><div className="container">
      <form onSubmit={handleSubmit}>

        {!summary && (<><div className='box0'>
          {/* <h2 className='mainHead' >Text File Summary</h2> */}
          <div className='main-head'>
            <h3 id='main-heading'>Audio file Summary</h3>
            <h5 id='main-heading1'>Get a summarized version of your Audio instantly with our online tool.</h5></div>
          <div className='main-box'>



            {/* <div className='iconss'>
              <TbFileUnknown id='file-txt' /><MdArrowRightAlt id="right-arr" /> <BsFillFileEarmarkFontFill id='sum-txt' />
            </div> */}
            {!isLoading && <> <img id="trans-img" src={img1} alt=" Transcript. logo" />
              <div className='btn'>

                <label htmlFor="file-upload" className="file-upload-label">
                  <div><FaFolder id='folder-icon' />Select a file</div>
                </label>
                <input type="file" name='file' id="file-upload" accept=".mp4, .mp3, .ogg " className="file-upload-input" onChange={handleChange} />
              </div>
              <h6>file accept: .txt, .docx & .vtt only...</h6>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button id="btn-short" onClick={handleSubmit} value="short" className="btn">Short</button>
                <button id="btn-med" onClick={handleSubmit} value="medium" className="btn">Medium</button>
                <button id="btn-long" onClick={handleSubmit} value="long" className="btn">Long</button>
              </div>  </>}

            {isLoading && !summary && <>



              <div className='loadd'>

                <div className='loader1'>
                  <h5 className="line1 anim-typewriter">{randomMessage}</h5>




                </div>

                <BarLoader id="loading21" color="#0b8" size='4' width='300' />
              </div>
            </>

            }

          </div>



          <div className='main3boxhead'>
            <h2>Enhance Your Meetings with MeetMate's Top-Tier Facilities.</h2>
          </div>
          <div className='main3box'>
            <div className='main-01'>
              <img id='bulb' src={bulb} alt="Easy" />
              <strong>  <p>Effortless Meeting Insights</p> </strong>
              <span>Effortlessly summarize meeting transcripts with our tool. Increase productivity and ensure key takeaways and action items are highlighted.</span>
            </div>

            <div className='main-02'>
              <img id='ai' src={ai} alt="Artificial Intelligence" />
              <strong><p>AI-Powered Summarization</p> </strong>
              <span>  Our service uses advanced AI algorithms to automatically summarize your meeting transcripts with the highest accuracy. Say goodbye to manual summarization and let our AI-powered tool do the work for you!</span>
            </div>

            <div className='main-03'>
              <img id='safee' src={safe} alt="Safe" />
              <strong> <p>Document Immolation</p></strong>
              <span> Our document processing service guarantees complete destruction of your files after one hour, leaving no trace of your sensitive information behind.</span>
            </div>
            
          </div>
          <div className='main3box1'>
        
            
            <div className='main-08'>
              <img id='translate' src={translate} alt="Translate" />
              <strong><p>Language-Agnostic Summaries</p></strong>
              <span>Translate your meeting summaries into any language of your choice, breaking down language barriers and ensuring seamless communication.</span>
            </div>
            
            <div className='main-05'>
              <img id='os' src={os} alt="Translate" />
              <strong><p>Summarize on Any Device</p></strong>
              <span>"Our online summarization tool is accessible through any browser on any device, including desktops, tablets, and mobile phones, allowing you to generate summaries of meeting transcripts and audio files on the go."</span>
            </div>
            <div className='main-07'>
              <img id='clock' src={clock} alt="Translate" />
              <strong><p>Time-Saving Automation</p></strong>
              <span>Our automation tools streamline your meeting processes, saving you valuable time and increasing efficiency. Spend less time on manual tasks and more time on what really matters.</span>
            </div>

          </div>

            
          
          <div className='How-txt'>
        <h2> How to generate a concise summary from Audio file?</h2>
        <div className='How-txt-main'>

        <div className='How-txt-left'>
        <p>1. Upload your file by clicking "Select Your File".</p>
        <p>2. Choose short, medium, or long for a summary length.</p>
        <p>3. Now, wait for the tool to do its job.</p>
        <p>4. Download the summary and use it as needed!</p>
        <p>Note: Choose "long" option for most accurate summary!</p>
        </div>
        <div className='How-txt-right'>
        <img src={require('./aud.png')}alt = "headimg"/>
        </div>
        </div>
        
      </div>
          </div>

      





        </>


        )}

      </form>

      {summary && <>
      
        <div className='summary-123'>

        <div className='start-btn'>
            <button onClick={handleFalse}> <img  className = 'main-sum-img'src={require('./reload.png')}alt = "relaod"/>Start Over</button>
            <button onClick={handleDownload}><img  className = 'main-sum-img'src={require('./download.png')}alt = "relaod"/>Download</button></div>
          {/* <h2>- Your summary -</h2>
          <br></br>
          <h3>Topic - {topic}</h3>
          <h5 id='sum-txt0'>
            <span className="first-letter">{summary.charAt(0)}</span>{summary.slice(1)}</h5> */}


       
       {/* <div class="main-box-sum">
           <div class="title">
               <h3>{topic}</h3>
           </div>
           <hr/>
           <div class="summary">
               <p>{summary}</p>
           </div>
           <hr/>
           
           {/* <div class="action-point">
  <h4>Action Points:</h4>
  
  <div style={{ backgroundColor: '#0b8', color: 'white', padding: '5px' }}>
    {keyPoints.map((word, index) => (
      <div key={index} style={{ display: 'inline-block', marginRight: '10px' }}>{word}</div>
    ))}
  </div>
</div> */}
{/* <div className="action-point">
        <h4>Action Points:</h4>
        <div className="keywords">
          {keyPoints.map((word, index) => (
            <span key={index} className="keyword">{word}</span>
          ))}
        </div>
      </div>

           <hr/>
           
       </div> */} 
       <div class="main-box-sum">
  <h3 class="main-title">{tpc ? (
        <h3 class="main-title">{tpc}</h3>
      ) : (
        <h3 class="main-title">{topic}</h3>
      )}</h3>
  <hr class="main-hr" />
  {translation ? (
        <p class="main-summary">{translation}</p>
      ) : (
        <p class="main-summary">{summary}</p>
      )}
  <div className="translation">
    <button className="translation-button" onClick={handleTranslation}>Translate</button>
    <div className="language-selector">
      <label htmlFor="language-select">Select Language:</label>
      <select id="language-select" onChange={handleLanguageChange}>
        {/* <option value="english">English</option> */}
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ur">Urdu</option>
        <option value="mr">Marathi</option>
      </select>
    </div>
  </div>
  <hr class="main-hr" />
  <div class="main-action-points">
    <h4 class="main-action-title">Keywords:</h4>
    <div class="main-keywords">
      {keyPoints.map((word, index) => (
        <span key={index} class="main-keyword">{word}</span>
      ))}
    </div>
    <hr class="main-hr" />
    <h4 className='main-att-title'>No of Attendees:</h4>
    <div className='main-att'>
      <h3>{att}</h3>
      <p>(Note: The No of Attendees provided is an estimate and may not be completely accurate. )</p>
    </div>
    <hr class="main-hr" />
    <h4 className='main-att-title'>Total Duration of Meeting:</h4>
    <div className='main-att'>
      <h3>{original_word_count/145 } Minutes</h3>
      {/* <p>(Note: The duration provided is an estimate and may not be completely accurate. )</p> */}
    </div>
    
  </div>
</div>

  
  

          
           </div>
           <div className='down1'>
           <h3 id='stat'>Statistics</h3>
           <div className='down10'>

           <div className='down11'>
            <h4 className='downh4'>Before Summary</h4>
            <hr class="main-hr" />
            <div className='down111'>
            <p className='down1110'>Sentences - {original_sentence_count} </p>
              <p className='down1110'>Words - {original_word_count}</p>
              <p className='down1110'>Character - {original_char_count}</p>
             
            </div>
           </div>
           {/* <div className='arrow'>
           <img src={require('./arrow.png')}alt = "headimg"/>
           </div> */}
           <div className='down12'>
            <h4 className='downh4'>After Summary</h4>

            <hr class="main-hr" />
            <div className='down121'>
            <p className='down1110'>Sentences - {summarized_sentence_count}</p>
              <p className='down1110'>Words - {summarized_word_count}</p>
              <p className='down1110'>Characters - {summarized_char_count}</p></div>
             
           </div>
           </div>
           </div>
      
      </>
      }



    </div>

</>

  );
}

export default Audio;
