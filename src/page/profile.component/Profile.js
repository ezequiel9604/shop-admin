import "./css-styles/styles.css";
import ManAvatar from "../../images/placeholder-man.png";

function Profile() {
  return (
    <div id="profile">
      <div className="box-container">
        <div className="box box-header">
          <h2>Perfil administrador</h2>
        </div>
      </div>

      <div className="box-container">
        <div className="box box-admin-profile">
          <div className="profile-left-side">
            <img src={ManAvatar} alt="" />
            <h4>Ezequiel Diaz Peña</h4>
            <h5>ezequiel9604@gmail.com</h5>
          </div>

          <div className="profile-right-side">
            <form action="/" method="post">
              <article>
                <label>Nombre:</label>
                <input type="text" defaultValue="Ezequiel" />
              </article>
              <article>
                <label>Apellido:</label>
                <input type="text" defaultValue="Diaz Peña" />
              </article>
              <article>
                <label>Dirección de correo:</label>
                <input type="email" defaultValue="ezequiel9604@gmail.com" />
              </article>
              <article>
                <label>Telefono:</label>
                <input type="text" defaultValue="809-111-2222" />
              </article>
              <article>
                <label>Contraseña:</label>
                <input type="password" defaultValue="password1234" />
              </article>
              <article>
                <label htmlFor="file-upload" className="custom-file-upload">
                  <span className="material-icons-outlined">upload_file</span>{" "}
                  Cargar Imagen
                  <input id="file-upload" type="file" />
                </label>
              </article>
              <div className="action-buttons">
                <button type="button">Actualizar</button>
                <button type="button">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
