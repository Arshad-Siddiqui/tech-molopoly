import Property from "../../types/property";

export default function IconProperty({ property }: { property: Property }) {
  return (
    <div className="icon-property card">
      <div className="icon-property-header">
        <div className="icon-property-name property-name">{property.name}</div>
      </div>
      <div className="icon-property-image-container">FA-ICON goes here</div>
      <div className="icon-property-price">M{property.price}</div>
    </div>
  );
}
