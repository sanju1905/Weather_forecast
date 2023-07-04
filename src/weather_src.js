import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const changeHandler = (e) => {
    setCity([e.target.value]);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response => response.json()
    ).then(
      data => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setResult("Temperature at" + " " + city + " : " + "\n" + Math.round(celsius) + "°C");
      }
    ).catch(error => console.log(error))
 
    setCity("");
  }
  return (
    <div className="container">
      <center>
        <div className="card">
          <form onSubmit={submitHandler}>
            <div className="card-title">
              <h2 style={{color:'blue'}}>Weather report App :</h2>
            </div>
            <div className="card-body">
              <input type="text" value={city} onChange={changeHandler} /><br /><br />
              <input type="button" value="Show weather" onClick={submitHandler} className="btn-btn-primary" style={{color:'green'}} />
            </div>
          </form>
          <h4>{result}</h4>
        </div>
      </center>
    </div>
  );
}

export default App;