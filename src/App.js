import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const [bmi, setbmi] = useState("");
  const [message, setMessgae] = useState("");

  // logic

  let calculateBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('please enter a valid height or weight');
    }
    else {
      // let bmi = (weight / (height * height) * 703);
      
      let bmi = (weight / (height*height)) *10000;
      setbmi(bmi.toFixed(2));

      if (bmi < 25) {
        setMessgae('You are underweight');
      }
      else if(bmi >=25 && bmi <30 ){
        setMessgae('You have healthy weight');
      }
      else{
        setMessgae('You are overwight');
      }
    }

  }


let relode =()=>{
  window.location.reload();
}











  return (
    <div className="App">
      <div className="container">
        <h2>BMI calculator</h2>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Height [cm]</label>
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => { setHeight(e.target.value) }}
            ></input>
          </div>

          <div>
            <label>Weight [Kg]</label>
            <input
              type="number"
              placeholder="Enter your height"
              value={weight}
              onChange={(e) => { setWeight(e.target.value) }}
            ></input>
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={relode}>
              Relode
            </button>
          </div>

          <div>
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
