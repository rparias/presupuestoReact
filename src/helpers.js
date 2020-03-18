export const reviewPresupuesto = (presupuesto, restante) => {
  let colorAlert;

  if (presupuesto / 4 > restante) {
    colorAlert = 'alert alert-danger';
  } else if (presupuesto / 2 > restante) {
    colorAlert = 'alert alert-warning';
  } else {
    colorAlert = 'alert alert-success';
  }

  return colorAlert;
};
