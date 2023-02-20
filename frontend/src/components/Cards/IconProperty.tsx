import Property from "../../types/property";

export default function IconProperty({ property }: { property: Property }) {
  return (
    <div className="icon-property">
      <div className="icon-property__name">{property.name}</div>
      <div className="icon-property-image">FA-ICON goes here</div>
      <div className="icon-property-price">{property.price}</div>
    </div>
  );
}
