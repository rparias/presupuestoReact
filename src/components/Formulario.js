import React, { useState } from 'react';

function Formulario() {
  return (
    <div>
      <h2>Agrega tus gastos aqui</h2>
      <form>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input type="number" className="u-full-width" placeholder="Ej. 300" />
        </div>
        <input
          type="submit"
          value="Agregar Gasto"
          className="button-primary u-full-width"
        />
      </form>
    </div>
  );
}

export default Formulario;
