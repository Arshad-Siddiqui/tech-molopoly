import Card from "../../../types/property";
import Property from "../../../components/cards/property";
import "./properties.css";

const AllProperties = ({ cardData }: { cardData: Card[] }) => {
  console.log(cardData);
  return (
    <>
      <h1>All Properties</h1>
      <div className="all-properties">
        {cardData.map((property: Card, index: number) => {
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
