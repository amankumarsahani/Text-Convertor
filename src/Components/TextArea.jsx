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
      <h1 className="text-center">{props.heading}</h1>
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
        <button className='btn btn-primary mx-2 my-2' onClick={handleUpper}>Upper Case</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLower}>Lower Case</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear All</button>
    </div>
    <div>
        <h1>Text Summary : </h1>
        <p>{Text.split(" ").length} Words and {Text.length} Character</p>
    </div>
    <div>
    <h1>Preview : </h1>
        <p>{Text}</p>
    </div>
    </div>
  );
}
