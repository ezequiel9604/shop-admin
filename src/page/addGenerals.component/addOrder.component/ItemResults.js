import React, {useState} from "react";
import { formatedNumber } from "../../../helpers";

function ItemResults(props) {

  const [stock, setStock] = useState(1);

  function changeStock(event, uniquekey){
    props.onSetAmount(uniquekey, event.target.value);
    setStock(event.target.value);
  }

  function calculateSubTotal(subtotal){
    return subtotal * stock;
  }

  function removeItem(uniquekey) {
    props.onRemoveSelectedItem(uniquekey);
  }


  return (
    <div className="box-inside-table-body">
      <article>
        <p><img src={props.item.image} />
          {props.item.id}
        </p>
        <p>{props.item.title} / {props.item.brand} / {props.item.color} /
          {props.item.size} / {props.item.capacity}
        </p>
        <p>
          <input onChange={(ev)=>changeStock(ev, props.item.uniqueKey)} type="number" min="1" max={props.item.stock} value={stock} />
        </p>
        <p>${formatedNumber(calculateSubTotal(props.item.sellPrice))}</p>
        <p>
          <button
            onClick={() => removeItem(props.item.uniqueKey)}
            type="button"
          >
            <span className="material-icons-outlined">
              delete_forever
            </span>
          </button>
        </p>
      </article>
    </div>
  );
}

export default ItemResults;
