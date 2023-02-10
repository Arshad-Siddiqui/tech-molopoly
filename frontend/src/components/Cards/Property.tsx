import Card from "../../types/card";
import "./card.css"

export default function Property({ property }: { property: Card }) {

  return (
    <div className="property card">
      <div className={`property-header ${property.group}`}>
        <p>Title Deed</p>
        <div className="property__name">{property.name}</div>
      </div>
      <div className="property-rent">rent {property.price}</div>
      <div className="property__rent">rent with colour set {property.rent}</div>
    </div>
  );
}
