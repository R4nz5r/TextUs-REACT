import { useState } from 'react'
import About from './components/About'
import { Navbar } from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }


  const toggleMode = () =>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor="#445063"
      showAlert("Dark mode has been enabled", "success ")
      document.title ="TextUs -Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled", "success ")
      document.title ="TextUs -Light Mode"
    }
  }  


  return (
    <>

    <Router>
      <Navbar title="Ragib"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
