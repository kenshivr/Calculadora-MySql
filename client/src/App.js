import './App.css';

function App() {

  // Dinamic code

  function click() 
  {
    console.log("Click");
  }

  // HTML
  return (
    <div className="App">

      <div className="container-calculator">

        <div className="calculator">

          <div className="container-buttom-changeMode-mic">
            <button onClick={click} className="mic">
              <i className="fa-solid fa-microphone fa-lg"></i>
            </button>
            <div className="changeMode">
              <i class="fa-solid fa-sun sun"></i>
              <i class="fa-solid fa-moon moon"></i>
              <div></div>
            </div>
          </div>

          <div className="container-pantalla"></div>

          <div className="container-buttoms"></div>

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