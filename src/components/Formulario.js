import React, { useState } from 'react';

function Formulario() {
  const [descriptionExpense, updateDescriptionExpense] = useState('');
  const [quantity, updateQuantity] = useState(0);

  const handleDescription = e => {
    updateDescriptionExpense(e.target.value);
  };
  const handleQuantity = e => {
    updateQuantity(parseInt(e.target.value, 10));
  };
  const handleSubmit = e => {
    e.preventDefault();

    //validar

    //construir el gasto

    //pasar el gasto al componente principal

    //resetear el form
  };

  return (
    <div>
      <h2>Agrega tus gastos aqui</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={descriptionExpense}
            onChange={handleDescription}
          />
        </div>
        <div className="campo">
          <label>Cantidad Gasto</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={quantity}
            onChange={handleQuantity}
          />
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
