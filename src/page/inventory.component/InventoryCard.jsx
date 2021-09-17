import React, { useState } from "react";

function InventoryCard(props) {
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  function switchDetailsOpen() {
    setDetailsOpen(!isDetailsOpen);
  }

  function formatItemStatus(status) {
    if (status === "n") {
      return <mark className="box-table-success">Nuevo</mark>;
    } else if (status === "u") {
      return <mark className="box-table-warning">Usado</mark>;
    } else if (status === "r") {
      return <mark className="box-table-cancel">Reparado</mark>;
    } else if (status === "o") {
      return <mark className="box-table-error">Oculto</mark>;
    }
  }

  function moveSelectedImageForward(){
    setSelectedImage(
      (selectedImage < props.items.image.length-1)? selectedImage+1:selectedImage
    );
  }

  function moveSelectedImageBackward(){
    setSelectedImage(
      (selectedImage > 0)? selectedImage-1:selectedImage
    );
  }

  const { items } = props;

  return (
    <div className="box-table-body box-table-body-inventory">
      <article>
        <p>
          <img src={items.image[0]} alt="" />
          {items.id}
        </p>
        <p>{items.title}</p>
        <p>{formatItemStatus(items.status)}</p>
        <p>{items.stock}</p>
        <p>
          <button
            type="button"
            className="btn-see-details"
            onClick={switchDetailsOpen}
          >
            <span className="material-icons-outlined">
              {isDetailsOpen ? "expand_less" : "expand_more"}
            </span>
          </button>
        </p>
      </article>
      <form
        style={isDetailsOpen ? { display: "flex" } : { display: "none" }}
        className="box-update-details box-update-details-inventory"
      >
        <div>
          <figure>
            <img src={items.image[selectedImage]} alt='' />
          </figure>
          <figcaption>
            <button onClick={moveSelectedImageBackward} type="button">
              <span className="material-icons-outlined">arrow_back</span>
            </button>
            <cite>{selectedImage+1} de {items.image.length}</cite>
            <button onClick={moveSelectedImageForward} type="button">
              <span className="material-icons-outlined">arrow_forward</span>
            </button>
          </figcaption>
        </div>
        <div>
          <article>
            <textarea
              name=""
              id=""
              style={{ height: "70px" }}
              defaultValue={items.title}
            ></textarea>
          </article>
          <article>
            <input type="text" defaultValue={items.id} disabled />
            <input type="text" defaultValue={items.quality} />
          </article>
          <article>
            <select name="" id="">
              <option defaultValue="">{items.department}</option>
              <option defaultValue="">Electronica</option>
              <option defaultValue="">Ferreteria</option>
            </select>
            <select name="" id="">
              <option defaultValue="">{items.brand}</option>
              <option defaultValue="">Panasonic</option>
              <option defaultValue="">Makna</option>
            </select>
          </article>
          <article>
            <textarea
              name=""
              id=""
              style={{ height: "100px" }}
              defaultValue={items.description}
            ></textarea>
          </article>
        </div>
        <div>
          <h4>Estado:</h4>
          <label htmlFor={"new-status"+items.id}>
            <input type="radio" name="status" id={"new-status"+items.id} defaultChecked /> Nuevo
          </label>
          <label htmlFor={"used-status"+items.id}>
            <input type="radio" name="status" id={"used-status"+items.id} /> Usado
          </label>
          <label htmlFor={"repair-status"+items.id}>
            <input type="radio" name="status" id={"repair-status"+items.id} /> Reparado
          </label>
          <label htmlFor={"hide-status"+items.id}>
            <input type="radio" name="status" id={"hide-status"+items.id} /> Oculto
          </label>

          <br />
          <h4>Generos:</h4>
          <label htmlFor={"male-gender"+items.id}>
            <input type="radio" name="gender" id={"male-gender"+items.id} /> Hombre
          </label>
          <label htmlFor={"female-gender"+items.id}>
            <input type="radio" name="gender" id={"female-gender"+items.id} /> Mujer
          </label>
          <label htmlFor={"all-gender"+items.id}>
            <input type="radio" name="gender" id={"all-gender"+items.id} defaultChecked /> Todos
          </label>
        </div>

        <div className="box-inside-table-head">
          <label>Tamaño</label>
          <label>Color</label>
          <label>Capacidad</label>
          <label>Cantidad</label>
          <label>Precio original</label>
          <label>Precio venta</label>
          <label>Precio oferta</label>
        </div>

        {items.subItems.map((current) => {
          return (
            <div className="box-inside-table-body">
              <article>
                <p>
                  <select name="" id="">
                    <option defaultValue="">{current.size}</option>
                    <option defaultValue="">17"</option>
                    <option defaultValue="">32"</option>
                  </select>
                </p>
                <p>
                  <select name="" id="">
                    <option defaultValue="">{current.color}</option>
                    <option defaultValue="">Gray</option>
                    <option defaultValue="">Blue</option>
                  </select>
                </p>
                <p>
                  <select name="" id="">
                    <option defaultValue="">{current.capacity}</option>
                    <option defaultValue="">4GBs</option>
                    <option defaultValue="">6GBs</option>
                  </select>
                </p>
                <p>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    defaultValue={current.stock}
                  />
                </p>
                <p>
                  <input type="text" defaultValue={current.purchasedPrice} />
                </p>
                <p>
                  <input type="text" defaultValue={current.sellPrice} />
                </p>
                <p>
                  <input type="text" defaultValue={current.offerPrice} />
                </p>
              </article>
            </div>
          );
        })}

        <div className="box-inside-table-footer">
          <button type="button">Eliminar</button>
          <button type="button">Actualizar</button>
        </div>
      </form>
    </div>
  );
}

export default InventoryCard;
