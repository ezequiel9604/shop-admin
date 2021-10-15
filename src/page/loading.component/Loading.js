import "./css-styles/styles.css";
function Loading(props) {
    return (
        <div className="loading-container">
            <div></div>
            <strong>Cargando {props.title}...</strong>
        </div>
    );
}

export default Loading;