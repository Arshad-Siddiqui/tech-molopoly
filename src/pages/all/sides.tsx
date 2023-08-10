import Side from "../../components/board/side/side";
import Properties from "../../types/property";

export default function AllSides({ properties }: { properties: Properties[] }) {
  // Starting with one side

  const bottomProperties = properties.slice(0, 5);
  const leftProperties = properties.slice(5, 10);
  const topProperties = properties.slice(10, 15);
  const rightProperties = properties.slice(15, 20);

  return (
    <div className="all-sides">
      <h1>All Sides</h1>
      <h2>Bottom Side</h2>
      <Side properties={bottomProperties} position="bottom" />
      <h2>Left Side</h2>
      <Side properties={leftProperties} position="left" />
      <h2>Top Side</h2>
      <Side properties={topProperties} position="top" />
      <h2>Right Side</h2>
      <Side properties={rightProperties} position="right" />
    </div>
  );
}
