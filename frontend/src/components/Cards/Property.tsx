import Card from "../../types/card";
import House from "./House";
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
        <House houseNumber={1} houseAmount={property.house[0]}/>
        <House houseNumber={2} houseAmount={property.house[1]}/>
        <House houseNumber={3} houseAmount={property.house[2]}/>
        <House houseNumber={4} houseAmount={property.house[3]}/>
      </div>
      <div className="property-rent-ws">rent with colour set {property.rent}</div>
    </div>
  );
}
