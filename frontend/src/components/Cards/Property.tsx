import Card from "../../types/card";
import House from "./House";
import "./card.css";
import Hotel from "./Hotel";

export default function Property({ property }: { property: Card }) {
  const footerText =
    "If a player owns all the sites of any colour group, the rent is doubled on unimproved sites in that group.";

  return (
    <div className="property card">
      <div className={`property-header ${property.group}`}>
        <p className="title-deed">Title Deed</p>
        <p className="property-name">{property.name}</p>
      </div>
      <div className="property-rent">rent {property.price}M</div>
      <div className="property-wh">
        {property.house.map((house, index) => {
          return <House houseNumber={index + 1} houseAmount={house} />;
        })}
        <Hotel amount={property.hotel} />
      </div>
      <div className="mortgage-value">Mortgage Value Mph</div>
      <div className="houses-cost">Houses cost Mph</div>
      <div className="hotel-cost">Hotel cost Mph</div>
      <div className="property-footer">{footerText}</div>
    </div>
  );
}
