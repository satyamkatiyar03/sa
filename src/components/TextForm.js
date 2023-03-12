import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text hear")
  return (
    <div className="container">
    <div className='container'style={{color:props.mode==='light'?"black":"white"}}>
    <h1>Enter your text here</h1>
    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?"white":"gray",color:props.mode==='light'?"black":"white"}} id="myBox"rows="8"></textarea>
    </div>
    <button className='btn btn-primary m-3' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
