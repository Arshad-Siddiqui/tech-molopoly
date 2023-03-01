import Property from "../../../types/property";
import "./space.css";

const Space = ({ property }: { property: Property }) => {
  const name = property.shortName || property.name;

  return (
    <div className="space">
      <div className={"space-header" + ` ${property.group}`} />
      <div className="space-body">
        <p className="space-name">{name}</p>
      </div>
      <div className="space-footer">
        <p className="space-price">${property.price}</p>
      </div>
    </div>
  );
};

export default Space;
