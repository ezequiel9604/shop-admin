import { useState, useEffect } from "react";

import "./css-styles/styles.css";
import CommentsCard from "./CommentsCard";
import FilterComments from "../filter.component/FilterComments";
import Loading from "../loading.component/Loading";
import { Comments } from "../../dummyData";

function Comment() {

  const [comments, setComments] = useState(null);
  const [dataToFilter, setDataToFilter] = useState(null);

  useEffect(()=>{
    setComments(Comments);
  }, []);

  function searchDataToFilter(data) {
    setDataToFilter(data);
  }

  function filterSelectedItem(item, data) {
    let chosen = item;

    if (data.status) {
      chosen = item.status === data.status ? item : null;
    }

    if (!chosen) return null;

    return chosen;
  }

  function getItems() {

    if (dataToFilter && comments) {
      let arr = [...comments];
      arr = arr.filter((current) => {
        switch (dataToFilter.option) {
          case "Codigo":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.id) {
                return filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return filterSelectedItem(current, dataToFilter);
            }

          case "Usuario":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.client) {
                return filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return filterSelectedItem(current, dataToFilter);
            }

          default:
            return current;
        }
      });

      return arr;
    }

    return comments;
  }

  return (
    <div id="comment">
        <div className="box-container">
          <div className="box box-header">
            <h2>Generales Comentarios</h2>
          </div>
        </div>

        <FilterComments onSearchDataToFilter={searchDataToFilter} />

        <div className="box-container">
          <div className="box box-table box-table-comment">
            <div className="box-table-head">
              <label>Codigo</label>
              <label>Fecha</label>
              <label>Usuario</label>
              <label>Articulo</label>
              <label>Estado</label>
              <label>Detalles</label>
            </div>
            {getItems()? 
              (getItems().map((current) => {
                return <CommentsCard comments={current} key={current.id} />;
              })) 
              : 
              (<Loading />)
            }
          </div>
        </div>
      </div>
  );
}

export default Comment;
