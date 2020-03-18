import React, { useState } from 'react';
import Error from './Error';

function Pregunta({ updatePresupuesto, updateRestante, updateShowPregunta }) {
  const [quantity, updateQuantity] = useState(0);
  const [error, updateError] = useState(false);

  const definePresupuesto = e => {
    updateQuantity(parseInt(e.target.value));
  };

  const addPresupuesto = e => {
    e.preventDefault();

    //validar
    if (validateNumberFormat()) {
      updateError(true);
      return;
    }

    //continuar con el proceso
    updateError(false);
    updatePresupuesto(quantity);
    updateRestante(quantity);
    updateShowPregunta(false);
  };

  const validateNumberFormat = () => {
    return quantity < 1 || isNaN(quantity);
  };

  return (
    <div>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message="El presupuesto es incorrecto" /> : null}
      <form onSubmit={addPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definePresupuesto}
        />
        <input
          type="submit"
          value="Definir Presupuesto"
          className="button-primary u-full-width"
        />
      </form>
    </div>
  );
}

export default Pregunta;
