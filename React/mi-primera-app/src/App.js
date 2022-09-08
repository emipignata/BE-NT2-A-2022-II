import logo from './logo.svg';
import './App.css';
import Welcome from "./components/saludo";
import { useState } from 'react';

function App() {

  //const language = 'en'
  const [language, setLanguage] = useState()
  
  const clickCambiarLenguaje = ()=> {
    //setLanguage('es')
    setLanguage((estadoActual) => {
      //console.log(estadoActual)
      return estadoActual === 'es' ? 'en' : 'es' 
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome idioma={language} otroProp={'hola'}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Welcome idioma={'es'}/>
        <Welcome/> */}

        <button onClick={clickCambiarLenguaje}> Cambiar lenguaje </button>
      </header>
    </div>
  );
}

export default App;
