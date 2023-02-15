import TopLeft from "../../components/board/corner/top-left";
import BottomRight from "../../components/board/corner/bottom-right";
import TopRight from "../../components/board/corner/top-right";
import "./corners.css"
import { Link } from "react-router-dom";

export default function AllCorners() {
  return (
  <div className="all-corners-container">
    <TopLeft />
    <BottomRight />
    <TopRight />
    <Link to="/">Home</Link>
  </div>
  )
}
