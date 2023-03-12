
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode]=useState("light");
  const [alert, setAlert]=useState(null)
  const showAlert=(massege,type)=>{
    setAlert({
      msg:massege,
      type:type
    })
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor ="Gray";
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      showAlert("Dark mode has been disabled", "success")
    }
  }
  return (
  <>   
  <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <About  />
  <TextForm mode={mode}/>
  </>
  );
}

export default App;
