import './App.css';
import { useState } from 'react'; 

function App() {

  // Dinamic code

  const [display, setDisplay] = useState('0');

  function click() 
  {
    console.log("Click");
  }

  // HTML
  return (
    <div className="App">

      <div className="container-calculator">

        <div className="calculator">

          <div className="container-button-changeMode-mic">
            <button onClick={click} className="mic">
              <i className="fa-solid fa-microphone fa-lg"></i>
            </button>
            <div className="changeMode">
              <i className="fa-solid fa-sun sun"></i>
              <i className="fa-solid fa-moon moon"></i>
              <div className="changeMode-button"></div>
            </div>
          </div>

          <div className="container-pantalla">
            <div className="operacion">{display}</div>
            <div className="resultado">{display}</div>
          </div>

          <div className="container-buttons-calculator"></div>

        </div>

      </div>



      <div className="container-buttons">
        <button className="buttom-view buttom-historial">View Historial</button>
        <button className="buttom-save buttom-historial">Save Historial</button>
      </div>

    </div>
  );
}

export default App;