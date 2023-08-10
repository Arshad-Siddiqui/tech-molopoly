import "./board.css";
import "./color/color.css";
import Side from "./side/side";
import Properties from "../../types/property";

const Board = ({ properties }: { properties: Properties[] }) => {
  const bottomProperties = properties.slice(0, 5);
  return (
    <div className="board outer">
      <Side position="bottom" properties={bottomProperties} />
      <div className="inner">
        <h1 className="diagonal">TECH MONOPOLY</h1>
      </div>
    </div>
  );
};

export default Board;
