import "../App.css";

export default function Message(props) {
  return (
    <div className="App">
      <header className="App-header top">
        <h1 className="App-link">Это, {props.text}</h1>
      </header>
    </div>
  );
}
