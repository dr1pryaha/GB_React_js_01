import "../App.scss";

export default function MessageItem(props) {
  return (
    <div>
      <h1>{props.text} </h1>
      <p>{props.author}</p>
    </div>
  );
}
