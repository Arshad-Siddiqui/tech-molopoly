import PropertyType from "../../types/property";
import Property from "../../components/cards/property";
import "./properties.css";
import { Link } from "react-router-dom";

const AllProperties = ({ properties }: { properties: PropertyType[] }) => {
  console.log(properties);
  return (
    <>
      <h1>All Properties</h1>
      <div className="all-properties">
        {properties.map((property: PropertyType, index: number) => {
          return <Property property={property} key={index} />;
        })}
      </div>
      <footer className="navigation-footer">
        <Link to="/">Home</Link>
        <Link to="/all/spaces">Spaces</Link>
        <Link to="/all/corners">Corners</Link>
      </footer>
    </>
  );
};

export default AllProperties;
