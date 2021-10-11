import { Fragment, useState } from "react";

function ClientsCard(props) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  function formatClientStatus(status) {
    if (status === "connected") {
      return <mark className="box-table-success">Conectado</mark>;
    } else if (status === "suspended") {
      return <mark className="box-table-cancel">Suspendido</mark>;
    } else if (status === "offline") {
      return <mark className="box-table-warning">Fuera de linea</mark>;
    } else if (status === "retired") {
      return <mark className="box-table-error">Retirado</mark>;
    }
  }

  function formatClientType(type, id) {
    if (type === "normal") {
      return (
        <Fragment>
          <label htmlFor={"normal-type" + id}>
            <input
              type="radio"
              name={"type" + id}
              id={"normal-type" + id}
              defaultChecked
            />{" "}
            Normal
          </label>
          <label htmlFor={"express-type" + id}>
            <input type="radio" name={"type" + id} id={"express-type" + id} />{" "}
            Expreso
          </label>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <label htmlFor={"normal-type" + id}>
          <input type="radio" id={"normal-type" + id} /> Normal
        </label>
        <label htmlFor={"express-type" + id}>
          <input type="radio" id={"express-type" + id} defaultChecked /> Expreso
        </label>
      </Fragment>
    );
  }

  function changeDetailsOpenHandler() {
    setIsDetailOpen(!isDetailOpen);
  }

  const { clients } = props;

  return (
    <div className="box-table-body box-table-body-client">
      <div>
        <article>
          <p>
            <img src={clients.image} alt="" />
            {clients.id}
          </p>
          <p>{clients.name}</p>
          <p>{clients.email}</p>
          <p>{clients.gender === "female" ? "Mujer" : "Hombre"}</p>
          <p>{formatClientStatus(clients.status)}</p>
          <p>
            <button
              onClick={changeDetailsOpenHandler}
              type="button"
              className="btn-see-details"
            >
              <span className="material-icons-outlined">
                {isDetailOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
          </p>
        </article>

        <form
          style={isDetailOpen ? { display: "flex" } : { display: "none" }}
          action="/"
          method="post"
          className="box-update-details box-update-details-client"
        >
          <div>
            <figure>
              <img src={clients.image} alt="" />
              <label htmlFor={"update-img" + clients.id}>
                <input type="file" id={"update-img" + clients.id} />
                <span className="material-icons-outlined">edit</span>
              </label>
            </figure>
            <h4>Tipo:</h4>

            {formatClientType(clients.type, clients.id)}

            <button type="button" className="btn-send-verification-code">
              Enviar codigo
            </button>
          </div>

          <div>
            <article>
              <input type="text" defaultValue={clients.id} disabled />
              <input type="text" defaultValue={clients.name} />
            </article>
            <article>
              <input type="text" defaultValue={clients.phone} />
              <input type="email" defaultValue={clients.email} />
            </article>
            <article>
              <input type="date" defaultValue={clients.birthday} />
              <input type="password" defaultValue={clients.password} />
            </article>
            <article>
              <input
                type="text"
                style={{ width: "10%" }}
                defaultValue={clients.streetNumber}
              />
              <input
                type="text"
                style={{ width: "80%" }}
                defaultValue={clients.streetName}
              />
              <select name="" id={"hood" + clients.id}>
                <option defaultValue="">{clients.hood}</option>
              </select>
              <select name="" id={"city" + clients.id}>
                <option defaultValue="">{clients.city}</option>
              </select>
            </article>
            <br />
            <article>
              <button type="button">Eliminar</button>
              <button type="submit">Actualizar</button>
            </article>
          </div>

          <div>
            <select name="" id={"gender" + clients.id}>
              <option defaultValue="">
                {clients.gender === "female" ? "Mujer" : "Hombre"}
              </option>
              <option defaultValue="">
                {clients.gender === "female" ? "Hombre" : "Mujer"}
              </option>
            </select>

            <h4>Estado:</h4>
            <label htmlFor={"connected-status" + clients.id}>
              <input
                type="radio"
                name={"status" + clients.id}
                id={"connected-status" + clients.id}
                defaultChecked
              />{" "}
              Conectado
            </label>
            <label htmlFor={"suspended-status" + clients.id}>
              <input
                type="radio"
                name={"status" + clients.id}
                id={"suspended-status" + clients.id}
              />{" "}
              Suspendido
            </label>
            <label htmlFor={"offline-status" + clients.id}>
              <input
                type="radio"
                name={"status" + clients.id}
                id={"offline-status" + clients.id}
              />{" "}
              Fuera de linea
            </label>
            <label htmlFor={"retired-status" + clients.id}>
              <input
                type="radio"
                name={"status" + clients.id}
                id={"retired-status" + clients.id}
              />{" "}
              Retirados
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClientsCard;
