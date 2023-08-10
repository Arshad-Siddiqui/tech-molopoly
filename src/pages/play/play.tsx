import { Link } from "react-router-dom";
import Board from "../../components/board/board";
import "./play.css";
import Property from "../../types/property";

const Home = ({ properties }: { properties: Property[] }) => {
  return (
    <div className="play-page">
      <Board properties={properties} />
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
