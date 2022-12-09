import CardData from "../../data/properties.json";
import Space from "../../components/Board/Space";

const AllCards = () => {
  return (
    <div>
      {CardData.map((card) => {
        return <Space card={card} key={card.name} />;
      })}
    </div>
  );
};

export default AllCards;
