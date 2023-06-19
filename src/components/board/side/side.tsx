import Space from "../space/space";
import Property from "../../../types/property";
import "./side.css";

export default function Side({ properties, position }: SideProps) {
  return (
    <div className={`side ${position}-side`}>
      {/* "top-side" || "right-side " etc */}
      {properties.map((property, index) => (
        <Space key={index} property={property} />
      ))}
    </div>
  );
}

interface SideProps {
  properties: Property[];
  position: "top" | "right" | "bottom" | "left";
}
