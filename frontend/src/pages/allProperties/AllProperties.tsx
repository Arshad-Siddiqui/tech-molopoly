import Card from "../../types/card";
import Property from "../../components/Cards/Property";

const AllProperties = ({ cardData }: { cardData: Card[] }) => {
  console.log(cardData);
  return (
    <div>
      {cardData.map((property: Card) => {
        return <Property property={property} />;
      })}
    </div>
  );
};

export default AllProperties;
