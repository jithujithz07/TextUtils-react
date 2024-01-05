

import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpclick =()=>{
        // console.log("clicked UP" + text);
        let up = text.toUpperCase();
        setText(up)
        props.showAlert("Converted to Uppercase",'success')
    }
    const handleLoclick =()=>{
        // console.log("clicked UP" + text);
        let up = text.toLowerCase();
        setText(up)
        props.showAlert("Converted to Lowercase",'success')
    }
    const handleClear =()=>{
        // console.log("clicked UP" + text);
        let up =""
        setText(up)
        props.showAlert("Cleared",'warning')
    }
    const HandleChange = (event)=>{
        // console.log("change")
        setText(event.target.value)
    }
    const HandleCopy =()=>{
        var textcpy=document.getElementById("exampleFormControlTextarea1")
        textcpy.select();
        navigator.clipboard.writeText(textcpy.value);
        props.showAlert("Text is copied to clipboard",'success')

    }
    const HandleExtraSpace =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space handled",'success')

    }
    const[text,setText] = useState('')
  return (
    <>
    <div className="container">
  <h1>{props.heading}</h1>
    <div className="mb-3">
    
    <textarea
        className="form-control" 
        style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}
        id="exampleFormControlTextarea1"
        onChange={HandleChange}
        value={text}
        rows="8"
    ></textarea>
    <button className="btn btn-primary mt-2 mx-2" onClick={handleUpclick} >Convert to uppercase</button>
    
    <button className="btn btn-primary mt-2 mx-2" onClick={handleLoclick} >Convert to Lowercase</button>
    <button className="btn btn-primary mt-2 mx-2" onClick={HandleCopy} >Copy Text</button>
    <button className="btn btn-primary mt-2 mx-2" onClick={HandleExtraSpace} >Remove extra space</button>
    <button className="btn btn-primary mt-2 mx-2" onClick={handleClear} >Clear</button>
    </div>
    </div>
    <div className="container">
        <h2>Your Text Details</h2>
        <p>Your text has {text.split(" ").length - 1} words and {text.length} characters</p>
        <p>Your text has {0.008 * text.split(" ").length} minutes of read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in Textbox above to preview it here"}</p>
    </div>
    </>
  );
}
