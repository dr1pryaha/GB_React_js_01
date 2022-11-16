import logo from "../logo.svg";
import Container from "@mui/material/Container";

export default function Header(props) {
  return (
    <header className="App-header">
      <Container maxWidth="xl">
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
    </header>
  );
}
