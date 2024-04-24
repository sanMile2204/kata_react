import home_logo from "../images/home_logo.svg";
import "../components/Home.css";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quotes");
  };

  return (
    <>
      <div className="home_page" onClick={handleClick}>
        <header>
          <img
            src={home_logo}
            className="centered-image"
            alt="simpsons_home-logo"
          ></img>
        </header>
        <section>
          <main></main>
        </section>
      </div>
      <footer>
        <AudioPlayer></AudioPlayer>
      </footer>
    </>
  );
}
