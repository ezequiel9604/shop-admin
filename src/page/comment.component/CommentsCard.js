import React, { useState } from "react";

function CommentsCard(props) {
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  function switchDetailsOpen() {
    setDetailsOpen(!isDetailsOpen);
  }

  function formatItemStatus(status) {
    if (status === "visible") {
      return <mark className="box-table-success">Visible</mark>;
    } else if (status === "unvisible") {
      return <mark className="box-table-warning">No visible</mark>;
    }
  }

  function formatInputStatus(status, id) {
    if (status === "visible") {
      return (
        <React.Fragment>
          <label htmlFor={"visible-status-" + id}>
            <input
              type="radio"
              name="visibility"
              id={"visible-status-" + id}
              defaultChecked
            />{" "}
            Visible
          </label>
          <label htmlFor={"novisible-status-" + id}>
            <input
              type="radio"
              name="visibility"
              id={"novisible-status-" + id}
            />{" "}
            No visible
          </label>
        </React.Fragment>
      );
    } else if (status === "unvisible") {
      return (
        <React.Fragment>
          <label htmlFor={"visible-status-" + id}>
            <input type="radio" name="visibility" id={"visible-status-" + id} />{" "}
            Visible
          </label>
          <label htmlFor={"novisible-status-" + id}>
            <input
              type="radio"
              name="visibility"
              id={"novisible-status-" + id}
              defaultChecked
            />{" "}
            No visible
          </label>
        </React.Fragment>
      );
    }
  }

  const { comments } = props;

  return (
    <div className="box-table-body box-table-body-comment">
      <article>
        <p>{comments.id}</p>
        <p>{new Date(comments.postedDate).toLocaleDateString()}</p>
        <p>{comments.client}</p>
        <p>{comments.item}</p>
        <p>{formatItemStatus(comments.status)}</p>
        <p>
          <button
            onClick={switchDetailsOpen}
            type="button"
            className="btn-see-details"
          >
            <span className="material-icons-outlined">
              {isDetailsOpen ? "expand_less" : "expand_more"}
            </span>
          </button>
        </p>
      </article>
      <form
        style={isDetailsOpen ? { display: "flex" } : { display: "none" }}
        className="box-update-details box-update-details-comment"
      >
        <div>
          <article>
            <input type="text" defaultValue={comments.id} disabled />
            <input type="text" defaultValue={comments.client} disabled />
          </article>
          <article>
            <input type="text" defaultValue={comments.item} disabled />
            <input type="date" defaultValue={comments.postedDate} />
          </article>
          <article>
            <textarea
              name=""
              cols="30"
              rows="10"
              defaultValue={comments.text}
            ></textarea>
          </article>
          <br />
          <article>
            <button type="button">Eliminar</button>
            <button type="button">Actualizar</button>
          </article>
        </div>

        <div>
          <h4>Estado:</h4>
          {formatInputStatus(comments.status, comments.id)}
        </div>
      </form>
    </div>
  );
}

export default CommentsCard;
