import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';

function App() {

  // Dinamic code
  // 600 la anchura de browser
  const [operacion, setOperacion] = useState('0');
  const [resultado, setResultado] = useState('0');
  const [isModeDark, setIsModeDark] = useState(true);
  const [positionChangeMode, setPositionChangeMode] = useState('35px');
  const [isViewHistorialClicked, setIsViewHistorialClicked] = useState(false);
  const [historialContent, setHistorialContent] = useState([]);

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

  const resolve = async () => 
  {
    try {
      setOperacion(resultado);
      setResultado(eval(resultado));
      await add();
      await get();
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

  function clickViewHistorial()
  {
    setIsViewHistorialClicked(!isViewHistorialClicked);
  }

  function click()
  {
    console.log('hole');
  }

  // Conexion BD

  const add = async () => {
    try {
      await Axios.post("http://localhost:3001/post", {
        resultado: resultado
      });
    } catch (error) {
      console.log("Error in add", error);
    }
  };

  const get = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/get");
      setHistorialContent(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

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
        <div 
          onClick={clickViewHistorial} 
          className={`buttom-view buttom-historial 
          ${isModeDark ? 'backgroundAzul colorWhite' : 'backgroundAzulClaro colorBlack'} 
          ${isViewHistorialClicked ? 'view-historial-clicked' : ''}`}
        >
          {isViewHistorialClicked ? (
            <ul>
              {historialContent.map((val, key) => (
                <li key={val.id}>
                  <i className='val-id'>{val.id}</i>
                  <i className='val-operacion'>{val.operacion}</i>
                </li>
              ))}
            </ul>
          ) : (
              'View Historial'
              )
          }
        </div>
      
      </div>

    </div>
  );
}

export default App;