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
          status: "visible",
          text: tlt,
        },
        {
          id: "CMT-025498",
          postedDate: "2021-05-16",
          client: "USR-025903",
          item: "ART-025741",
          status: "unvisible",
          text: tlt,
        },
        {
          id: "CMT-025332",
          postedDate: "2021-05-19",
          client: "USR-025402",
          item: "ART-025714",
          status: "visible",
          text: tlt,
        },
      ],

      dataToFilter: null,
    };

    this.searchDataToFilter = this.searchDataToFilter.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  searchDataToFilter(data) {
    this.setState({ dataToFilter: data });
  }

  filterSelectedItem(item, data) {
    let chosen = item;

    if (data.status) {
      chosen = item.status === data.status ? item : null;
    }

    if (!chosen) return null;

    return chosen;
  }

  getItems() {
    console.log(this.state.dataToFilter);

    const { dataToFilter } = this.state;
    const { comments } = this.state;

    if (dataToFilter) {
      const arr = comments.filter((current) => {
        switch (dataToFilter.option) {
          case "Codigo":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.id) {
                return this.filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return this.filterSelectedItem(current, dataToFilter);
            }

          case "Usuario":
            if (dataToFilter.search !== "") {
              if (dataToFilter.search === current.client) {
                return this.filterSelectedItem(current, dataToFilter);
              }

              return null;
            } else {
              return this.filterSelectedItem(current, dataToFilter);
            }

          default:
            return current;
        }
      });

      return arr;
    }

    return comments;
  }

  render() {
    return (
      <div id="comment">
        <div className="box-container">
          <div className="box box-header">
            <h2>Generales Comentarios</h2>
          </div>
        </div>

        <FilterComments onSearchDataToFilter={this.searchDataToFilter} />

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

            {this.getItems().map((current) => {
              return <CommentsCard comments={current} key={current.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
