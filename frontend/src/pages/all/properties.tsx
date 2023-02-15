import PropertyType from "../../types/property";
import Property from "../../components/cards/Property";
import "./properties.css";

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
        <a href="/">Home</a>
        <a href="/allSpaces">All Spaces</a>
      </footer>
    </>
  );
};

export default AllProperties;
