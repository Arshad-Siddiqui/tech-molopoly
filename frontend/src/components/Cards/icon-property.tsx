import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Property from "../../types/property";
import getIcon from "../../utility/get-icon";

export default function IconProperty({ property }: { property: Property }) {
  const icon = getIcon(property.name);

  return (
    <div className="icon-property card">
      <div className="icon-property-header">
        <div className="icon-property-name property-name">{property.name}</div>
      </div>
      <div className="icon-property-image-container">
        <FontAwesomeIcon icon={icon} className="icon-property-image" />
      </div>
      <div className="icon-property-price">M{property.price}</div>
    </div>
  );
}
