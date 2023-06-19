import Side from "../../components/board/side/side";
import Properties from "../../types/property";

export default function AllSides({ properties }: { properties: Properties[] }) {
  // Starting with one side

  const bottomProperties = properties.slice(0, 5);

  return (
    <div className="all-sides">
      <h1>All Sides</h1>
      <h2>Top Side</h2>
      <Side properties={bottomProperties} position="bottom" />
    </div>
  );
}
