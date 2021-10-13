import { Fragment } from "react";

function ChatMessage(props) {
  const { client } = props;

  return (
    <div className="bubbles-user">
      <figure>
        <img src={client.image} alt="" />
      </figure>
      <div className="usr-msgs">
      {client.messages.map((current) => {
        return (
          <Fragment>
            <p>{current.text}</p>
            <time>{new Date(current.date).toLocaleDateString()}</time>
          </Fragment> 
        );
      })}
      </div>
    </div>
  );
}

export default ChatMessage;
