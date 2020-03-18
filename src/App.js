import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
  const [presupuesto, updatePresupuesto] = useState(0);
  const [restante, updateRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
            updatePresupuesto={updatePresupuesto}
            updateRestante={updateRestante}
          />
          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">2</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
