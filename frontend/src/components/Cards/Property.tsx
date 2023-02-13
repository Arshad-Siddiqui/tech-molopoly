import Card from "../../types/card";
import "./card.css"

export default function Property({ property }: { property: Card }) {

  return (
    <div className="property card">
      <div className={`property-header ${property.group}`}>
        <p className="title-deed">Title Deed</p>
        <p className="property-name">{property.name}</p>
      </div>
      <div className="property-rent">rent {property.price}M</div>
      <div className="property-wh">
        <div className="property-rent-wh house1">rent with house {property.house1}</div>
        <div className="property-rent-wh house2">rent with house {property.house2}</div>
        <div className="property-rent-wh house3">rent with house {property.house3}</div>
        <div className="property-rent-wh house4">rent with house {property.house4}</div>
      </div>
      <div className="property-rent-ws">rent with colour set {property.rent}</div>
    </div>
  );
}
