import {
  TopLeft,
  BottomRight,
  TopRight,
  BottomLeft,
} from "../../components/board/corner/corner";
import "./corners.css";
import { Link } from "react-router-dom";

export default function AllCorners() {
  return (
    <div className="all-corners-container">
      <TopLeft />
      <BottomRight />
      <TopRight />
      <BottomLeft />
      <Link to="/">Home</Link>
      <Link to="/all/properties">Properties</Link>
      <Link to="/all/spaces">Spaces</Link>
    </div>
  );
}
