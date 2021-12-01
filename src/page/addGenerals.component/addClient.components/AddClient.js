import { useState } from "react";
import "./css-styles/styles.css";

function AddClient(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("normal");
  const [gender, setGender] = useState("male");
  const [image, setImage] = useState(null);
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [hood, setHood] = useState("sector");
  const [city, setCity] = useState("ciudad");

  function resetInputs() {
    setName("");
    setPassword("");
    setDateOfBirth("");
    setEmail("");
    setPhone("");
    setType("");
    setGender("");
    setImage(null);
    setStreetNumber("");
    setStreetName("");
    setHood("sector");
    setCity("ciudad");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newClient = {
      cname: name,
      cimage: image,
      cpassword: password,
      cdateofbirth: dateOfBirth,
      cemail: email,
      cphone: phone,
      ctype: type,
      cgender: gender,
      cstreetnumber: streetNumber,
      cstreetname: streetName,
      chood: hood,
      ccity: city,
      cstatus: "offline",
    };
    console.log(newClient);
  }

  return (
    <div id="add-client">
      <div className="box-container">
        <div className="box box-header">
          <h2>Agregar Usuario</h2>
        </div>
      </div>

      <div className="box-container">
        <div className="box box-add-item">
          <form onSubmit={handleSubmit}>
            <div className="double-block-add-item">
              <div className="input-add-item">
                <strong>Nombre:</strong>
                <input
                  value={name}
                  type="text"
                  onChange={(ev) => {
                    setName(ev.target.value);
                  }}
                />
              </div>
              <div className="input-add-item">
                <strong>Contraseña:</strong>
                <input
                  type="password"
                  value={password}
                  onChange={(ev) => {
                    setPassword(ev.target.value);
                  }}
                />
              </div>
            </div>

            <div className="double-block-add-item">
              <div className="input-add-item">
                <strong>Fecha de nacimiento:</strong>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(ev) => {
                    setDateOfBirth(ev.target.value);
                  }}
                />
              </div>
              <div className="input-add-item">
                <strong>Telefono:</strong>
                <input
                  type="text"
                  value={phone}
                  onChange={(ev) => {
                    setPhone(ev.target.value);
                  }}
                />
              </div>
            </div>

            <div className="double-block-add-item">
              <div className="input-add-item">
                <strong>Dirección de correo:</strong>
                <input
                  type="email"
                  value={email}
                  onChange={(ev) => {
                    setEmail(ev.target.value);
                  }}
                />
              </div>
              <div className="input-add-item">
                <strong>Imagen:</strong>
                <label htmlFor="file-upload" className="custom-file-upload">
                  <span className="material-icons-outlined">upload_file</span>{" "}
                  Cargar Imagen
                  <input
                    id="file-upload"
                    type="file"
                    onChange={(ev) => {
                      setImage(ev.target.files[0]);
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="double-block-add-item">
              <div className="input-add-item">
                <strong>Tipo:</strong>
                <label htmlFor="typenormal">
                  <input
                    onClick={() => {
                      setType("normal");
                    }}
                    type="radio"
                    name="type"
                    id="typenormal"
                    defaultChecked
                  />{" "}
                  Normal
                </label>
                <label htmlFor="typexpress">
                  <input
                    onClick={() => {
                      setType("express");
                    }}
                    type="radio"
                    name="type"
                    id="typexpress"
                  />{" "}
                  Expreso
                </label>
              </div>
              <div className="input-add-item">
                <strong>Genero:</strong>
                <label htmlFor="genderman">
                  <input
                    onClick={() => {
                      setGender("male");
                    }}
                    type="radio"
                    name="gender"
                    id="genderman"
                    defaultChecked
                  />{" "}
                  Hombre
                </label>
                <label htmlFor="genderwoman">
                  <input
                    onClick={() => {
                      setGender("female");
                    }}
                    type="radio"
                    name="gender"
                    id="genderwoman"
                  />{" "}
                  Mujer
                </label>
              </div>
            </div>

            <div className="single-block-add-item">
              <div className="input-add-item">
                <strong>Dirección:</strong>
                <input
                  type="text"
                  id="street-no"
                  placeholder="no."
                  value={streetNumber}
                  onChange={(ev) => {
                    setStreetNumber(ev.target.value);
                  }}
                />
                <input
                  type="text"
                  id="street"
                  placeholder="calle y apartamento"
                  value={streetName}
                  onChange={(ev) => {
                    setStreetName(ev.target.value);
                  }}
                />
                <select
                  value={hood}
                  onChange={(ev) => {
                    setHood(ev.target.value);
                  }}
                  style={{ width: "43%" }}
                >
                  <option value="sector">Sector</option>
                  <option value="brisas del este">Brisas del este</option>
                  <option value="los frailes">Los frailes</option>
                  <option value="los corales">Los corales</option>
                </select>
                <select
                  value={city}
                  onChange={(ev) => {
                    setCity(ev.target.value);
                  }}
                  style={{ width: "42%" }}
                >
                  <option value="ciudad">Ciudad</option>
                  <option value="santo domingo este">Santo domingo este</option>
                  <option value="santo domingo oeste">
                    Santo domingo oeste
                  </option>
                </select>
              </div>
            </div>

            <div className="action-buttons">
              <button>Guardar</button>
              <button onClick={resetInputs} type="button">
                Borrar todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
