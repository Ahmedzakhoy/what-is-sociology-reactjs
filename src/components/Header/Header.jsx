import sociologyImg from "../../assets/sociology.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "invaluable"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={sociologyImg} alt="Stylized atom" />
      <h1>Sociology</h1>
      <p>{description} insights into the complexities of human society</p>
    </header>
  );
}
