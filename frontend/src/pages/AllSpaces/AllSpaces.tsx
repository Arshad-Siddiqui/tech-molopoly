import Space from "../../components/Board/Space";
import Card from "../../types/card";

const AllSpaces = ({ cardData }: { cardData: Card[]}) => {
  return (
    <div>
      {cardData.map((card) => {
        return <Space card={card} key={card.name} />;
      })}
    </div>
  );
};

export default AllSpaces;
