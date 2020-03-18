import React from 'react';
import { reviewPresupuesto } from '../helpers';

function ControlPresupuesto({ presupuesto, restante }) {
  return (
    <div>
      <div className="alert alert-primary">Presupuesto: ${presupuesto}</div>
      <div className={reviewPresupuesto(presupuesto, restante)}>
        Restante: ${restante}
      </div>
    </div>
  );
}

export default ControlPresupuesto;
