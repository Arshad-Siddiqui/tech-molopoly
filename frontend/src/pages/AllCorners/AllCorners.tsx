import TopLeft from "../../components/Board/corner/TopLeft";
import BottomRight from "../../components/Board/corner/BottomRight";
import TopRight from "../../components/Board/corner/TopRight";
import "../../components/Board/corner/corners.css"
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
