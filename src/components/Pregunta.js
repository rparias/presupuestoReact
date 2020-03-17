import React from 'react';

function Pregunta() {
  return (
    <div>
      <h2>Coloca tu presupuesto</h2>
      <form action="">
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
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
