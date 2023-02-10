import Card from "../../types/card";
import Property from "../../components/Cards/Property";

const AllProperties = ({ cardData }: { cardData: Card[] }) => {
  console.log(cardData);
  return (
    <>
      <h1>All Properties</h1>
      <div className="all-properties">
        {cardData.map((property: Card) => {
          return <Property property={property} />;
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
