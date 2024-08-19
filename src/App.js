
import { useState } from "react";
import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { Component } from "react";
import Alert from "./components/Alert";



function App() {
  const [mode, setMode] = useState("light"); 
  const [alert, setAlert] = useState(null);
  const [modeRed, setModeRed] = useState("light");


  const showAlert = (message , type) => { 

    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
     
      document.body.style.background = 'white';
      document.title = "TextUtils - Light Mode";
      showAlert("Light Mode has been enabled.","success")
      

    } else {
      setMode("dark");
  
      document.body.style.background = "black";
      document.title = "TextUtils - Dark Mode";
   
      showAlert("Dark mode has been enabled.","success")
    }
  };

  const toggleModeRed = () => {
    if (modeRed == "light") {
      setModeRed("red");
     
      document.body.style.background = 'red';
    
      showAlert("red Mode has been enabled.","success")
      

    } else {
      setModeRed("light");
      
      document.body.style.background = "white";
   
      showAlert("light mode has been enabled.","success")
    }
  };

  return (
    <>

      
    
      {/* <BrowserRouter> */}
      <Navbar
        title={"Text Utils"}
        // AboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        toggleModeRed={toggleModeRed}
        modeRed={modeRed}
        // About={<About/>}
        
        />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element = { }>

            </Route>
        </Routes> */}
        <TextForm showAlert={ showAlert} heading="Enter text to analyze below" mode={ mode} />
        
      
           
           
        

      
      </div>
      
      
    </>
  );
}

export default App;
