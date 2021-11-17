import "./css-styles/styles.css";
import Loading from "../loading.component/Loading";
import { formatedNumber, renderingStatus } from "../../helpers";
function BoxTable(props) {
  function renderingKind(kind) {
    if (kind === "clients") {
      return (
        <div className="box-table-body">
          {props.values ? (
            props.values.map((current) => {
              return (
                <article key={current.id}>
                  <p>
                    <img src={current.image} alt="" />
                    {current.id}
                  </p>
                  <p>{current.name}</p>
                  <p>{current.email}</p>
                </article>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      );
    } else if (kind === "orders") {
      return (
        <div className="box-table-body">
          {props.values? (
            props.values.map((current) => {
              return (
                <article key={current.id}>
                  <p>{current.id}</p>
                  <p>{current.client.name}</p>
                  <p>{current.items.length}</p>
                  <p>${formatedNumber(current.total)}</p>
                  <p>{renderingStatus(current.status)}</p>
                  <p>{current.type}</p>
                  <p>{current.shippingMethod}</p>
                </article>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      );
    } else if(kind==="inventory"){
      return (
        <div className="box-table-body">
          {props.values? (
            props.values.map((current) => {
              return (
                <article key={current.id}>
                  <p>{current.id}</p>
                  <p>{current.client.name}</p>
                  <p>{current.items.length}</p>
                  <p>${formatedNumber(current.total)}</p>
                  <p>{renderingStatus(current.status)}</p>
                </article>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      );
    }
  }

  return (
    <div className={props.kind === "clients" ? "box-table-chart" : "box box-table"}>
      {props.children}
      <div className="box-table-head">
        {props.labels.map((current, ind) => {
          return <label key={ind}>{current}</label>;
        })}
      </div>
      {renderingKind(props.kind)}
    </div>
  );
}

export default BoxTable;
