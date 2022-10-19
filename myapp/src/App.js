import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Мои сообщения:</p>
        <Message text="Первое сообщение" />
        <Message text="Второе сообщение" />
        <Message text="Третье сообщение" />
      </header>
    </div>
  );
}

export default App;
