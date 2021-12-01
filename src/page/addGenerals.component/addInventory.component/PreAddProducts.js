import React from 'react';

function PreAddProducts(props) {

    return (
        <div>
            <div className="box-inside-table-head">
                <label>Tamaño</label>
                <label>Material</label>
                <label>Color</label>
                <label>Capacidad</label>
                <label>Cantidad</label>
                <label>Precio original</label>
                <label>Precio venta</label>
                <label>Precio oferta</label>
                <label>Remover</label>
            </div>
            <div className="box-inside-table-body">
                {props.items.map((current, ind)=>{

                    return (
                        <article key={ind}>
                            <p>{current.size}</p>
                            <p>{current.material}</p>
                            <p>{current.color}</p>
                            <p>{current.capacity}</p>
                            <p>{current.stock} </p>
                            <p>${current.purchasedPrice} </p>
                            <p>${current.sellPrice}</p>
                            <p>${current.offerPrice}</p>
                            <p>
                                <button type="button" onClick={()=> props.removeSubItem(current.uniqueId)} >
                                    <span className="material-icons-outlined">delete_forever</span>
                                </button>
                            </p>
                        </article>
                    );

                })} 

            </div>
        </div>
    );
}

export default PreAddProducts;