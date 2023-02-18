import Space from "../../components/board/space/space";
import Property from "../../types/property";
import "./spaces.css";
import { Link } from "react-router-dom";

const AllSpaces = ({ properties }: { properties: Property[] }) => {
  return (
    <>
      <h1>All Spaces</h1>
      <div className="all-spaces">
        {properties.map((property, i: number) => {
          return <Space property={property} key={i} />;
        })}
      </div>
      <footer className="navigation-footer">
        <Link to="/">Home</Link>
        <Link to="/all/properties">Properties</Link>
        <Link to="/all/corners">Corners</Link>
      </footer>
    </>
  );
};

export default AllSpaces;
