import './App.css';
import Navbar from './components/Navbar';
// import FileUpload from './components/FileUpload';
import Audio from "./components/Audio"
import Home from './components/home';
import About from './components/About'
import Text from './components/Text'
import Mainpage from './components/mainpage'
// import Animationdm from './components/animation'
import { BrowserRouter, Route, Routes} from 'react-router-dom';


 
function App() {
  return (
    
    <>
 <BrowserRouter>
 <Navbar title= "MeetMate"/>
        <Routes>
          

          <Route path='/meetmate' element={<Mainpage/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path = '/Text' element = {<Text />} />
          <Route path = '/Audio' element = {<Audio />} />
          <Route path='/About' element={<About />} />
        </Routes>
        

      {/* <Animationdm/> */}
     
       </BrowserRouter>

       </>
    
  );
}

export default App;