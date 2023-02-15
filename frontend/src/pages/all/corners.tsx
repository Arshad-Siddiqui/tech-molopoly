import TopLeft from "../../components/board/corner/top-left";
import BottomRight from "../../components/board/corner/bottom-right";
import TopRight from "../../components/board/corner/top-right";
import "./corners.css"
import { Link } from "react-router-dom";
import BottomLeft from "../../components/board/corner/bottom-left";

export default function AllCorners() {
  return (
  <div className="all-corners-container">
    <TopLeft />
    <BottomRight />
    <TopRight />
    <BottomLeft />
    <Link to="/">Home</Link>
    <Link to="/all/properties">Properties</Link>
    <Link to='/all/spaces'>Spaces</Link> 
  </div>
  )
}
