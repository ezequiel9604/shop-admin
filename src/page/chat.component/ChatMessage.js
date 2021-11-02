function ChatMessage(props) {
  const { client, admin, messages } = props;

  function formatedDate(d) {
    const thedate = new Date(d);
    return thedate.toLocaleDateString() + ", " + thedate.toLocaleTimeString();
  }

  return (
    <div className="messages-section">
      {messages.map((current) => {
        if (current.clientId === client.id && current.adminId === admin.id) {
          if (current.type === "question") {
            return (
              <div className="messages-user" key={current.id}>
                <p>{current.text}</p>
                <time>{formatedDate(current.date)}</time>
              </div>
            );
          }

          return (
            <div className="messages-admin" key={current.id}>
              <p>{current.text}</p>
              <time>{formatedDate(current.date)}</time>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ChatMessage;
