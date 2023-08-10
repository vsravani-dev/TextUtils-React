import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick =()=>{
  // console.log("Uppercase was clicked",text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to uppercase!" , "success");
}
const handleLoClick =()=>{
  // console.log("Uppercase was clicked",text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lowercase!" , "success");
}
const handleInItClick =()=>{
  // console.log("Uppercase was clicked",text);

  let newText =text.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  setText(newText)
  props.showAlert("Text capitalized!" , "success");
}
const handleCopyClick=()=>{
  let newText = document.getElementById('myBox')
  newText.select();
  navigator.clipboard.writeText(newText.value);
  props.showAlert("Text copied to clipboard!" , "success");
}
const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!" , "success");
}
const handleOnChange = (event)=>{
  // console.log("On change");
  setText(event.target.value);
}

const [text,setText]=useState("Enter text here");

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleInItClick}>Capitalized Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Case</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>ExtraSpace Remove</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
