import { Link } from "react-router-dom";
import Board from "../../components/board/board";
import "./play.css";

const Home = () => {
  return (
    <div className="play-page">
      <Board />
      <div className="nav-footer">
        <Link to="/">Home</Link>
        <Link to="/all/spaces">All Spaces</Link>
        <Link to="/all/properties">All Properties</Link>
        <Link to="/all/corners">All Corners</Link>
      </div>
    </div>
  );
};

export default Home;
