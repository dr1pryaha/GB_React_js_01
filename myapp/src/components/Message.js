import "../App.scss";

export default function MessageItem(props) {
  return (
    <div className="App">
      <header className="App-header top">
        <h1 className="App-link">Это, {props.text} </h1>
        <p>{props.author}</p>
      </header>
    </div>
  );
}
