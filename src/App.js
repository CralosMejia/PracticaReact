import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import { Juego } from "./components/juego/Juego";
import { VentanaInicio } from "./components/ventana-inicio";

function App() {
  
  const [nombreJugador, setNombreJugador] = useState("");
  const [juegoIniciado, setJuegoIniciado] = useState(false);

  const obtenerNombreJugador = (nombre) => {
    if (nombre.length !== 0) setJuegoIniciado(true);
    setNombreJugador(nombre);
  };

  const terminarJuego =()=>{
    setJuegoIniciado(false);
    Swal.fire('El juego Termino')
  }

  return (
    <div className="App">
      {juegoIniciado ? (
        <Juego 
          nombre= {nombreJugador}
          juegoTerminado={terminarJuego}
        />
      ) : (
        <VentanaInicio
          obtenerNombreJugador={obtenerNombreJugador}
        />
      )}
    </div>
  );
}

export default App;
