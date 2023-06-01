import React, { useState , useRef} from "react";
import axios from "axios";
import './FileUpload.scss';
import {saveAs} from "file-saver";
import { faArrowRightFromFile} from "@fortawesome/free-solid-svg-icons";
import { faLightArrowDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBBtn } from 'mdb-react-ui-kit';








function FileUpload() {
  library.add(fas)
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [original_words, setOriginal_words] = useState(0);
  const [original_senctences, setOrgininal_sentences] = useState(0);
  const [orginal_char, SetOrginial_char] = useState(0);
  const [summaryLength, setSummaryLength] = useState("");
  const [sentence, Setsen] = useState(0)
  const [bullet_points, setBullet] = useState("");
  const [topic, setTopic] = useState("");

  const fileInputRef = useRef(null);
 



 //clear button fuction
  const handleClear = () => {
    
    setSummary("");
    setBullet("");
    setOrgininal_sentences(0);
    setOriginal_words(0);
    SetOrginial_char(0);
    
    Setsen(0)
    setTopic("")
    fileInputRef.current.value = null;
  };

  const formData = new FormData();
formData.append("file", file);

//
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setSummary("");

  };


// bullet pnts
const bulletpnt = () => {
  setSummary(bullet_points)
}

  // copy button fuction
const  handleCopy = () =>{
  
  navigator.clipboard.writeText(summary);
}


//download button fuctoin
const handleDownload = () => {
  const blob = new Blob([summary], { type: "text/plain" });
  
  saveAs(blob, "summary.txt");
  console.log("File downloaded");
};



//dropdown menu
const handleSummaryLengthChange = (e) => {
  
  setSummaryLength(e.target.value);
  let length = "medium";
  if (e.target.value === "0") {
    length = "short";
  } else if (e.target.value === "100") {
    length = "long";
  }
  setSummaryLength(length);
};


// Submit button function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file && summary === "" && bullet_points === "") {
      alert("Please select a file to get its summary");
    
      return;
    }
    
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    formData.append("summary_length", summaryLength); 
    
    axios
     
      .post("http://localhost:5000/summarize", formData)
      .then((response) => {
        console.log(response);
        setOrgininal_sentences(response.data.original_sentence_count);
        setOriginal_words(response.data.original_word_count);
        SetOrginial_char(response.data.original_char_count);
        setSummary(response.data.summary);
        setBullet(response.data.bullet_points);
        Setsen(response.data.summarized_sentence_count)
        setTopic(response.data.topics)
        setFile(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    
    <>
    <script src="https://kit.fontawesome.com/a4d0c762c0.js" crossorigin="anonymous"></script>


<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"/>

    <div className="container">


      <form onSubmit={handleSubmit}>
        
      
        <input ref={fileInputRef} placeholder="Put file" id = "file-input"className = "file-input" type="file"   name = "file" onChange={handleChange}accept=".txt,.docx"  />
        <label htmlFor="file-input">
        {/* <i class="fa-solid fa-folder-arrow-up"></i> */}
            Upload file
          </label>

        
        <button id = "multi-btn"className = "submit-btn" type="submit">Get Summary</button>
        <button id = "multi-btn" className = "bullet-btn" type="submit" onClick={summary.length === 0 ? () => {}:bulletpnt} >Key Sentences</button>
      
        
      


      </form >
    
     <div className="tsmain">
      <textarea placeholder="Summary..." className= "summary-text" value={summary} readOnly rows="13" cols="50"></textarea>
      <div className="icons">
      <i
       
       disabled = {summary.length===0}
        className="clear-icon fas fa-times"
        onClick={summary.length === 0 ? () => {} : handleClear}
        style={{
          color : "#5f6368",
          position: "relative",
          right: 30,
          top: 25,
          cursor: "pointer",
          fontSize : 25
          
          
        }}
        title ="Clear all text"
      />   
      

{/* 
   copy button */}
      <i 
          className="copy-icon fas fa-copy my-icon"
          onClick={summary.length === 0 ? () => {} : handleCopy}
          style={{
            color : "#5f6368",
            position: "relative",
          right: 49,
          top: 66,
            cursor: "pointer",
            fontSize : 19
            
            
          }}
          title ="Copy all Text"
          />


 {/* download button  */}
 <div id="copy-btn">
 
 <i 
      
      className="download-icon fas fa-download"
      onClick={summary.length === 0 ? () => {}: handleDownload}
      style={{
        color : "#5f6368",
        // position: "absolute",
        // right: 410,
        // top: 255,
        position: "relative",
          right: 35,
          top: 86,
        cursor: "pointer",
        fontSize : 21
      }}
      title="Download .txt file"
    />
    </div>
</div>
      <div className="ts">
      {/* <div className="stat"> */}
        <h3> <strong>Statistics </strong></h3>
       
        <h5> Before Summary:</h5>
        <p> Sentences - {original_senctences}, Words - {original_words} and Characters - {orginal_char}</p>
      
       
        <h5> After Summary:</h5>
        <p> Sentences - {sentence}, Words - {summary.trim().split(/\s+/).length} and Characters - {summary.length}</p>
        <br></br>
        <h3>Topic</h3>
        <p>topic - {topic} </p>
        
      </div>
    </div>
      
    {
    <>

    {/* clear button */}
      

</>
      }

    <div className="btm">
      <label>
        
        Summary length: 
        <input  id = "slength"type="range" min="0" max="100" step = "50" onChange={handleSummaryLengthChange} />
      
      </label>

    


      </div>

       
      </div>
    

      </>
      

    
  );
}

export default FileUpload;





