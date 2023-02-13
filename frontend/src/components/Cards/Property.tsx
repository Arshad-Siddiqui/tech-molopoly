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
        {
          property.house.map((house, index) => {
            return <House houseNumber={index + 1} houseAmount={house}/>
          })
        }
      </div>
      <div className="property-rent-ws">rent with colour set {property.rent}</div>
    </div>
  );
}
