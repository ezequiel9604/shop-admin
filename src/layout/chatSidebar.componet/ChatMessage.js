function ChatMessage(props) {
  const { client, admin, messages } = props;

  function formatedDate(d) {
    const thedate = new Date(d);
    return thedate.toLocaleDateString() + ", " + thedate.toLocaleTimeString();
  }

  return (
    <div className="bubbles-container">
      {messages.map((current) => {
        if (current.clientId === client.id && current.adminId === admin.id) {
          if (current.type === "question") {
            return (
              <div className="bubbles-user" key={current.id}>
                <figure>
                  <img src={client.image} alt="" />
                </figure>
                <div className="usr-msgs">
                  <p>{current.text}</p>
                  <time>{formatedDate(current.date)}</time>
                </div>
              </div>
            );
          }

          return (
            <div className="bubbles-admin" key={current.id}>
              <div className="admin-msgs">
                <p>{current.text}</p>
                <time>{formatedDate(current.date)}</time>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ChatMessage;
