import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  let click = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border:'1px solid white'
      });
      setmybtn('Enable  light mood')
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setmybtn('Enable  Dark mood')
    }
  };
  const [btn, setmybtn] = useState("Enable  Dark mood");

  return (
    <div className="container" style={myStyle}>
      <h1>About</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <h5>Convenient Copy and Clear Functions</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Streamline your workflow with CaseSwitch Pro's intuitive copy and clear functionalities. Easily copy your converted text to the clipboard for seamless integration into other applications or clear the text field with a click, ensuring a clutter-free writing environment.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h5>Word Count Analysis</h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Stay on top of your writing goals with CaseSwitch Pro's word count analysis feature. Instantly see the number of words in your paragraph, allowing you to track your progress, meet word count requirements, or gauge the length of your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
               <h5>Estimated Reading Time</h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Ever wonder how long it takes to read your paragraph? With CaseSwitch Pro's estimated reading time tool, wonder no more. Get a real-time estimate of how many minutes it would take the average reader to consume your content, helping you tailor your message to your audience's attention span.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <button onClick={click} type="button" class="btn btn-primary">
          {btn}
        </button>
      </div>
    </div>
  );
}
