import Space from "../../components/board/space/space";
import Property from "../../types/property";
import "./spaces.css";

const AllSpaces = ({ properties }: { properties: Property[]}) => {
  return (
    <>
    <h1>All Spaces</h1>
    <div className="all-spaces">
      {properties.map((property, i: number) => {
        return <Space property={property} key={i} />;
      })}
    </div>
    <footer className="navigation-footer">
      <a href="/">Home</a>
      <a href="/allProperties">All Properties</a>
    </footer>
    </>
  );
};

export default AllSpaces;
