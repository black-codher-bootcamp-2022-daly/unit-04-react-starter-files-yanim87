import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [color, setColor]= useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setAge(0);
    setName("");
    setColor("");
  }

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Pet's Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        {/* add age label */}
        <div>
          <label>
            Pet's Age:
            <input
              type="text"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        {/* set color label */}
        <div style={{ backgroundColor: color, padding: "24px" }}>
          Color: {color}
        
          <label>
            Pet's Colour:
            <input
              type="text"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        <input type="submit" value="Submit" id="submit-button" />
      </form>
      <div id="results">

       {
          submitted ? <div> "Thank you for submitting" </div> : null
        }
        <h3>Results</h3>
        Name: {name}
        Age: {age}
        Colour: {color}
        <br />
      </div>
    </div>
  );
};

export default PetForm;
