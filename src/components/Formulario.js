import React, { useState } from 'react';
import Error from './Error';

function Formulario() {
  const [descriptionExpense, updateDescriptionExpense] = useState('');
  const [quantity, updateQuantity] = useState(0);
  const [error, updateError] = useState(false);

  const handleDescription = e => {
    updateDescriptionExpense(e.target.value);
  };
  const handleQuantity = e => {
    updateQuantity(parseInt(e.target.value, 10));
  };
  const handleSubmit = e => {
    e.preventDefault();

    //validar
    if (isNotValidData()) {
      updateError(true);
      return;
    }
    updateError(false);

    //construir el gasto

    //pasar el gasto al componente principal

    //resetear el form
  };

  const isNotValidData = () => {
    return quantity < 1 || isNaN(quantity) || descriptionExpense.trim() === '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Agrega tus gastos aqui</h2>
        {error ? (
          <Error message="Ambos campos son obligatorios o Presupuesto incorrecto" />
        ) : null}
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
