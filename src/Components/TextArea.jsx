import React, { useState } from "react";


export default function TextArea(props) {
    const [Text,setText]=useState("");

    const handleUpper=() => {
        setText(Text.toUpperCase());
    }

    function handleLower() {
        setText(Text.toLowerCase());
    }

    function handleClear() {
        setText("");
    }

    function handleChange(event){
        setText(event.target.value);
    }
    return(
    <div className="container my-4">
      <h1 className=" heading">{props.heading}</h1>
      <div className="form-floating mx-2 my-4 d-flex justify-content-center">
        <textarea
          className="form"
          id="floatingTextarea2"
          rows="10"
          cols={50}
          onChange={handleChange}
          value={Text}
          placeholder="Enter the Text Here"
        >

        </textarea>
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary mx-2 my-2' onClick={handleUpper}>UPPER CASE</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLower}>lower Case</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear All</button>
    </div>
    <div className="text-box my-3">
      <div>
        <img className="text-box-img" src="https://www.shapedivider.app/img/desktop_toolbar_x2.b278e25e.png" alt="destop"/>
      </div>
      <div className="my-3 mx-3">
        <div>
            <h3 className="title">Text Summary : </h3>
            <p className="para">{Text.split(" ").length-1} Words and {Text.length} Character</p>
        </div>
        <div className="">
        <h3 className="title">Preview : </h3>
            <p className="para">{Text}</p>
        </div>
      </div>
      </div>
      
      
    
    </div>
  );
}
