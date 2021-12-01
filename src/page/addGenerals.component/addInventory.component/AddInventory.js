import { useState } from "react";
import "./css-styles/styles.css";
import PreAddProducts from "./PreAddProducts";

function AddInventory(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");
    const [images, setImages] = useState([]);
    const [quality, setQuality] = useState(0);
    const [brand, setBrand] = useState("");
    const [status, setStatus] = useState("new");
    const [purchasedPrice, setPurchasedPrice] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);
    const [offerPrice, setOfferPrice] = useState(0);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [amount, setAmount] = useState(0);
    const [capacity, setCapacity] = useState("");
    const [material, setMaterial] = useState("");
    const [offer, setOffer] = useState(false);
    const [subItemsToAdd, setSubItemsToAdd] = useState([]);

    function preAddItemsHandler(){
        const subItem = {
            uniqueId: parseInt(Math.floor(Math.random()*100)),
            purchasedPrice: purchasedPrice,
            sellPrice: sellPrice,
            offerPrice: offerPrice,
            color: color,
            size: size,
            stock: amount,
            material: material,
            capacity: capacity,
        }

        const arr = [...subItemsToAdd];
        arr.push(subItem);
        setSubItemsToAdd(arr);
    }

    function removeSubItemHandler(unique){
        const arr= subItemsToAdd.filter((current)=>{
            return current.uniqueId !== unique;
        });
        setSubItemsToAdd(arr);
    }

    return (
        <div id="add-inventory">
            
            <div className="box-container">
                <div className="box box-header">
                    <h2>Agregar productos</h2>
                </div>
            </div>

            <div className="box-container">
		
                <div className="box box-add-item">
                    
                    <form action="" method="" >

                        <div className="single-block-add-item">
                            <div className="input-add-item">
                                <strong>Titulo:</strong>
                                <input type="text" value={title} onChange={(ev)=>{setTitle(ev.target.value)}} />
                            </div>
                        </div>

                        <div className="double-block-add-item">
                            <div className="input-add-item">
                                <strong>Departamento:</strong>
                                <select onChange={(ev)=>{setDepartment(ev.target.value)}}>
                                    <option value="seleccionar">Seleccionar</option>
                                    <option value="electronica">Electronica</option>
                                    <option value="tecnologia">Tecnologia</option>
                                    <option value="ferreteria">Ferreteria</option>
                                    <option value="automotriz">Automotriz</option>
                                    <option value="hogar">Hogar</option>
                                    <option value="ropa">Ropa</option>
                                </select>
                            </div>
                            <div className="input-add-item">
                                <strong>Calificación:</strong>
                                <input type="text" value={quality} onChange={(ev)=>{setQuality(ev.target.value)}} />
                            </div>
                        </div>

                        <div className="double-block-add-item">
                            <div className="input-add-item">
                                <strong>Marca:</strong>
                                <select onChange={(ev)=>{setBrand(ev.target.value)}}>
                                    <option value="seleccionar">Seleccionar</option>
                                    <option value="brand 1">Brand 1</option>
                                    <option value="brand 2">Brand 2</option>
                                    <option value="brand 3">Brand 3</option>
                                </select>
                            </div>	
                            <div className="input-add-item">
                                <strong>Estado:</strong>
                                <label htmlFor="new">
                                    <input onClick={()=> setStatus("new")} type="radio" name="status" id="new" defaultChecked /> Nuevo</label>
                                <label htmlFor="used">
                                    <input onClick={()=> setStatus("used")} type="radio" name="status" id="used" /> Usado</label>
                                <label htmlFor="repair">
                                    <input onClick={()=> setStatus("repair")} type="radio" name="status" id="repair" /> Reparado</label>
                            </div>
                        </div>

                        <hr />

                        <div className="triple-block-add-item">
                            <div className="input-add-item">
                                <strong>Precio original:</strong>
                                <input type="text" name="" value={purchasedPrice} onChange={(ev)=>{setPurchasedPrice(ev.target.value)}} />
                            </div>
                            <div className="input-add-item">
                                <strong>Precio venta:</strong>
                                <input type="text" name="" value={sellPrice} onChange={(ev)=>{setSellPrice(ev.target.value)}} />
                            </div>
                            <div className="input-add-item">
                                <strong>Precio oferta:</strong>
                                <input type="text" name="" value={offerPrice} onChange={(ev)=>{setOfferPrice(ev.target.value)}} disabled={!offer} />
                            </div>
                        </div>

                        <div className="triple-block-add-item">
                            <div className="input-add-item">
                                <strong>Color:</strong>
                                <select onChange={(ev)=>{setColor(ev.target.value)}}>
                                    <option value="seleccionar">Seleccionar</option>
                                    <option value="black">negro</option>
                                    <option value="gray">gris</option>
                                    <option value="white">blanco</option>
                                </select>
                            </div>
                            <div className="input-add-item">
                                <strong>Tamaño:</strong>
                                <select onChange={(ev)=>{setSize(ev.target.value)}} >
                                    <option value="seleccionar">Seleccionar</option>
                                    <option value="17">17"</option>
                                    <option value="22">22"</option>
                                    <option value="32">32"</option>
                                </select>
                            </div>
                            <div className="input-add-item">
                                <strong>Cantidad:</strong>
                                <input type="text" name="" value={amount} onChange={(ev)=>{setAmount(ev.target.value)}} />
                            </div>
                        </div>

                        <div className="triple-block-add-item">
                            <div className="input-add-item">
                                <strong>Material:</strong>
                                <select name="" onChange={(ev)=>{setMaterial(ev.target.value)}}>
                                    <option value="seleccionar">Seleccionar</option>
                                    <option value="material 1">material 1</option>
                                    <option value="material 2">material 2</option>
                                    <option value="material 3">material 3</option>
                                </select>
                            </div>
                            <div className="input-add-item">
                                <strong>Tamaño:</strong>
                                <select onChange={(ev)=>{setCapacity(ev.target.value)}} >
                                    <option value="seleccionar">Seleccionar</option>
                                    <option value="2">2GBS</option>
                                    <option value="4">4GBS</option>
                                    <option value="6">6GBS</option>
                                </select>
                            </div>
                            <div className="input-add-item">
                                <strong>Oferta:</strong>
                                <label>En oferta: <input type="checkbox" onChange={(ev)=>{setOffer(ev.target.checked)}} /></label>
                            </div>
                        </div>

                        <div className="triple-block-add-item">
                            <div className="input-add-item">
                                <button type="button" onClick={preAddItemsHandler} >+ Agregar item</button>
                            </div>
                        </div>

                        <hr />

                        <PreAddProducts items={subItemsToAdd} removeSubItem={removeSubItemHandler} />

                        <hr />

                        <div className="single-block-add-item">
                            <div className="input-add-item">
                                <strong>Descripcion:</strong>
                                <textarea placeholder="Descripcion aqui..." value={description} onChange={(ev)=>{setDescription(ev.target.value)}} ></textarea>
                            </div>	
                        </div>

                        <div className="single-block-add-item">
                            <div className="input-add-item">
                                <strong>Imagenes:</strong>
                                <label htmlFor="file-upload" className="custom-file-upload">
                                    <span className="material-icons-outlined">upload_file</span> Cargar Imagenes
                                    <input id="file-upload" type="file"/>
                                </label>
                            </div>
                        </div>

                        <hr />

                        <div className="action-buttons">
                            <button type="button">Guardar</button>
                            <button type="button">Borrar todo</button>
                        </div>

                    </form>

                </div>	

            </div>

        </div>
    );
}

export default AddInventory;