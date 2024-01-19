import './App.css';
import Axios from "axios";
import { useState } from 'react';

function App() {

  // Dinamic code

  const [isModeDark, setIsModeDark] = useState(true);
  const [operacion, setOperacion] = useState('0');
  const [resultado, setResultado] = useState('0');
  const [positionChangeMode, setPositionChangeMode] = useState('35px');

  function ClickButton(text) 
  {
    if (resultado == '0' || resultado == "Error!"){
      setResultado('' + text);
    } else {
      setResultado(resultado + text);
    } 
  };

  function plusMinus()
  {
    if (resultado != "Error!")
    {
      try {
        setOperacion(eval(resultado));
        let aux = eval(resultado);
        setResultado(eval(aux + "*-1"))
      } catch {
        setResultado("Error!");
      }
    } else {
      setResultado("Error!");
      setOperacion("Error!");
    }
  };

  function resolve()
  {
    try {
      setOperacion(resultado);
      setResultado(eval(resultado));
      add();
    } catch {
      setResultado("Error!");
    }
  };

  function ChangeMode() {
    if (positionChangeMode === '35px'){
      setPositionChangeMode('9px');
    } else {
      setPositionChangeMode('35px');
    }

    setIsModeDark(!isModeDark);
  };

  // Conexion BD

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      resultado: resultado
    }).catch(function(error){
      console.log("Error in add!");
    })
  };

  // HTML
  return (
    <div className="App">

      <div className="container-calculator">

        <div className={`calculator ${isModeDark ? 'backgroundBlack colorWhite' : 'backgroundWhite colorBlack'}`}>

          <div className="container-button-changeMode-mic">
            <button className={`mic ${isModeDark ? 'backgroundAzul colorWhite' : 'backgroundAzulClaro colorBlack'}`}>
              <i className="fa-solid fa-microphone fa-lg"></i>
            </button>
            <div onClick={ChangeMode} className={`changeMode ${isModeDark ? 'backgroundAzul colorWhite' : 'backgroundAzulClaro colorBlack'}`}>
              <i className="fa-solid fa-sun sun"></i>
              <i className="fa-solid fa-moon moon"></i>
              <div style={{ left: positionChangeMode }} className={`changeMode-button ${isModeDark ? 'backgroundVerde' : 'backgroundAzul'}`}></div>
            </div>
          </div>

          <div className="container-pantalla">
            <div className="operacion">{operacion}</div>
            <div className="resultado">{resultado}</div>
          </div>

          <div className="container-buttons-calculator">
            <button onClick={() => {setOperacion("0"); setResultado("0"); }} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>C</button>
            <button onClick={() => plusMinus()} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>±</button>
            <button onClick={() => setResultado("0")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>CE</button>
            <button onClick={() => ClickButton("+")} className={`btn ${isModeDark ? 'backgroundVerde colorWhite' : 'backgroundAzulClaro colorBlack'}`}>+</button>
            <button onClick={() => ClickButton("1")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>1</button>
            <button onClick={() => ClickButton("2")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>2</button>
            <button onClick={() => ClickButton("3")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>3</button>
            <button onClick={() => ClickButton("-")} className={`btn ${isModeDark ? 'backgroundVerde colorWhite' : 'backgroundAzulClaro colorBlack'}`}>-</button>
            <button onClick={() => ClickButton("4")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>4</button>
            <button onClick={() => ClickButton("5")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>5</button>
            <button onClick={() => ClickButton("6")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>6</button>
            <button onClick={() => ClickButton("*")} className={`btn ${isModeDark ? 'backgroundVerde colorWhite' : 'backgroundAzulClaro colorBlack'}`}>*</button>
            <button onClick={() => ClickButton("7")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>7</button>
            <button onClick={() => ClickButton("8")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>8</button>
            <button onClick={() => ClickButton("9")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>9</button>
            <button onClick={() => ClickButton("/")} className={`btn ${isModeDark ? 'backgroundVerde colorWhite' : 'backgroundAzulClaro colorBlack'}`}>/</button>
            <button onClick={() => ClickButton("0")} className={`btn cornerDownLeft ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>0</button>
            <button onClick={() => ClickButton(".")} className={`btn ${isModeDark ? 'backgroundBlack2 colorWhite' : 'backgroundGris colorBlack'}`}>.</button>
            <button onClick={() => resolve()} className="btn backgroundAzul equal cornerDownRight colorWhite">=</button>
          </div>

        </div>

      </div>

      <div className="container-buttons">
        <button className={`buttom-view buttom-historial ${isModeDark ? 'backgroundAzul colorWhite' : 'backgroundAzulClaro colorBlack'}`}>View Historial</button>
        <button className={`buttom-save buttom-historial ${isModeDark ? 'backgroundAzul colorWhite' : 'backgroundAzulClaro colorBlack'}`}>Save Historial</button>
      </div>

    </div>
  );
}

export default App;