import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [presupuesto, updatePresupuesto] = useState(0);
  const [restante, updateRestante] = useState(0);
  const [showPregunta, updateShowPregunta] = useState(true);
  const [expenses, updateExpenses] = useState([]);
  const [expense, updateExpense] = useState({});
  const [isCreatingExpense, updateIsCreatingExpense] = useState(false);

  useEffect(() => {
    if (isCreatingExpense) {
      updateExpenses([...expenses, expense]);

      const presupuestoRestante = restante - expense.quantity;
      updateRestante(presupuestoRestante);

      updateIsCreatingExpense(false);
    }
  }, [expense, expenses, isCreatingExpense, restante]);

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
                <Formulario
                  updateExpense={updateExpense}
                  updateIsCreatingExpense={updateIsCreatingExpense}
                />
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
