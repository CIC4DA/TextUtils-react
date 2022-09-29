import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to UpperCase","success");
  };

  const countWords = (text) => {
    return text.split(' ').filter((a) => {return a.length!==0}).length;
  };


  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const handlecopy = ()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text have been copied!","success");
  }

  const removeExtraspace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    
    props.showalert("Removed Extra spaces","success");
  }

  const cleartext = ()=>{
    setText("");
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={removeExtraspace}>
            Remove extra space
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handlecopy}>
            Copy Text
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={cleartext}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {countWords(text)} words and {text.length} characters
        </p>
        <p>Time required to read -- {0.008 * text.split(' ').filter((a) => {return a.length!==0}).length} </p>
      </div>
    </>
  );
}
