import { Component } from "react";

import "./css-styles/styles.css";

import CommentsCard from "./CommentsCard";
import FilterComments from "../filter.component/FilterComments";

class Comment extends Component {
  constructor(props) {
    super(props);

    const tlt =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
      "Libero repudiandae suscipit, sequi ex ipsam earum quia voluptas aliquid quaerat" +
      " commodi totam expedita exercitationem perferendis quae beatae tempora laborum at laboriosam?";

    this.state = {
      comments: [
        {
          id: "CMT-025984",
          postedDate: "2021-05-10",
          client: "USR-025789",
          item: "ART-025122",
          status: "v",
          text: tlt,
        },
        {
          id: "CMT-025498",
          postedDate: "2021-05-16",
          client: "USR-025903",
          item: "ART-025741",
          status: "n",
          text: tlt,
        },
        {
          id: "CMT-025332",
          postedDate: "2021-05-19",
          client: "USR-025402",
          item: "ART-025714",
          status: "v",
          text: tlt,
        },
      ],
    };
  }

  render() {
    return (
      <div id="comment">
        <div className="box-container">
          <div className="box box-header">
            <h2>Generales Comentarios</h2>
          </div>
        </div>

        <FilterComments />

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

            {this.state.comments.map((current) => {
              return <CommentsCard comments={current} key={current.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
