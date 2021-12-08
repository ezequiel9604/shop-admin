import React from "react";

function UserResults(props) {
  return (
    <div className="results-users-container">
      <h4>Informacion del usuario:</h4>

      <div className="triple-block-add-item">
        <div className="input-add-item">
          <strong>
            Codigo: <span>{props.user.id}</span>
          </strong>
        </div>
        <div className="input-add-item">
          <strong>
            Telefono: <span>{props.user.phone}</span>
          </strong>
        </div>
        <div className="input-add-item">
          <strong>
            Genero: <span>{props.user.gender}</span>
          </strong>
        </div>
      </div>

      <div className="triple-block-add-item">
        <div className="input-add-item">
          <strong>
            Nombre: <span>{props.user.name}</span>
          </strong>
        </div>
        <div className="input-add-item">
          <strong>
            Email: <span>{props.user.email}</span>
          </strong>
        </div>
        <div className="input-add-item">
          <strong>
            Tipo: <span>{props.user.type}</span>
          </strong>
        </div>
      </div>

      <div className="single-block-add-item">
        <div className="input-add-item">
          <strong>
            Direccion: <span>{props.user.streetNumber}, {props.user.streetName}, 
            {props.user.hood}, {props.user.city}</span>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default UserResults;
