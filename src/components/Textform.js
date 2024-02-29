import React, { useState } from "react";

export default function Textform(props) {
  const upper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const lower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const clear = () => {
    // let newtext = text.clear();
    setText("");
  };
  const copy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handle = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handle}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={upper}>
            Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={lower}>
            Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clear}>
            Clear
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={copy}>
            Copy
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary here</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} and characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
