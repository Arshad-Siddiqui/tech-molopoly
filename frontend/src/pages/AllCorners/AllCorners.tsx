import TopLeft from "../../components/Board/corner/TopLeft";
import BottomRight from "../../components/Board/corner/BottomRight";
import TopRight from "../../components/Board/corner/TopRight";
import "./corners.css"

export default function AllCorners() {
  return (
  <div className="all-corners-container">
    <TopLeft />
    <BottomRight />
    <TopRight />
  </div>
  )
}
