import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <Link to="/play">
        <h2 className="controller-icon">
          <FontAwesomeIcon icon={faGamepad} />
        </h2>
      </Link>
    </div>
  );
}
