
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import {
//   BrowserRouter, 
//   Route, Routes,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type

    })
    // set time out to hide the err msg
    setTimeout(() => {
      setAlert(null) 
    }, 1500);
  }
  const toggleMode= ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      document.body.style.color='white';
      showAlert("Dark mode is enabled!", "success")
      document.title="Textutils- Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Dark mode is disabled!", "success")
      document.title="Textutils- Home"
  }
}
  return (
    <> 
    {/* <BrowserRouter> */}
    <Navbar title="Textutils" about="About Textutils" mode={mode} toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    
	  {/* <Routes> */}
		
	      {/* <Route exact path="/about" element={<About mode={mode}/>}>
          
        </Route> */}
        {/* <Route exact path="/" element={ }> */}
          
          {/* </Route>	 */}
	  {/* </Routes> */}

   
    {/*  */}
    {/* </BrowserRouter> */}
    <TextForm heading="Enter the text to analyze"mode={mode} showAlert={showAlert}/>
    </>
    
  );
}

export default App;
