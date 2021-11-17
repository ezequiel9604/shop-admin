import "./css-styles/styles.css";

function BoxType(props) {
  return (
    <div className="box-container box-normal-express">
      {props.types.map((current, ind) => {
        return (
          <div className={"box box-type type-column-"+props.column} key={ind}>
            <div className="total">
              <p>{current.title}:</p>
              <strong>{current.total}</strong>
            </div>
            <div className="shipping">
              {current.subtypes.map((vals, ind) => {
                return (
                  <article key={ind}>
                    <label>{vals.title}</label>
                    <strong>{vals.amount}</strong>
                  </article>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxType;
