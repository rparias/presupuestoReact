import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [presupuesto, updatePresupuesto] = useState(0);
  const [restante, updateRestante] = useState(0);
  const [showPregunta, updateShowPregunta] = useState(true);
  const [expenses, updateExpenses] = useState([]);

  const addExpense = expense => {
    updateExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {showPregunta ? (
            <Pregunta
              updatePresupuesto={updatePresupuesto}
              updateRestante={updateRestante}
              updateShowPregunta={updateShowPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario addExpense={addExpense} />
              </div>
              <div className="one-half column">
                <Listado expenses={expenses} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
