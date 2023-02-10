import Space from "../../components/Board/Space";
import Card from "../../types/card";

const AllSpaces = ({ cardData }: { cardData: Card[]}) => {
  return (
    <>
    <div>
      {cardData.map((card) => {
        return <Space card={card} key={card.name} />;
      })}
    </div>
    <footer>
      <a href="/">Home</a>
      <a href="/allProperties">All Properties</a>
    </footer>
    </>
  );
};

export default AllSpaces;
