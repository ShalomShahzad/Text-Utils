import React, { useState } from 'react'


export default function (props) {

  const handleUpClick = () => {
    setText("You have clicked on handle up click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLoClick = () => {
    setText("You have clicked on handle up click" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleClearClick = () => {
    setText("You have clicked on handle up click" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  
  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="conatiner" style={{color:props.mode === `dark`? `white` : `black`}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === `dark`? `#13466e` : `white`, color:props.mode === `dark`? `white` : `black`}} id="myBox" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-4" style={{color:props.mode === `dark`? `white` : `black`}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} charcters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
