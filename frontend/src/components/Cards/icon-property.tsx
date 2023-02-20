import Property from "../../types/property";

export default function IconProperty({ property }: { property: Property }) {
  return (
    <div className="icon-property">
      <div className="property-name">{property.name}</div>
      <div className="property-icon"></div>
    </div>
  );
}
