function BoxCategory(props) {
  function selectingAlertType(title) {
    if (title === "Recibidos") {
      return "box-alert-success";
    } else if (title === "De Salida") {
      return "box-alert-warning";
    } else if (title === "En camino") {
      return "box-alert-secundary";
    } else if (title === "Cancelados") {
      return "box-alert-cancel";
    } else if (title === "Error en Pago") {
      return "box-alert-error";
    }
  }

  return (
    <div className="box-container box-category-order">
      {props.children}
      {props.categories.map((current, ind) => {
        return (
          <div key={ind} className={"box box-category "}>
            <strong>{current.total}</strong>
            <p>{current.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BoxCategory;
