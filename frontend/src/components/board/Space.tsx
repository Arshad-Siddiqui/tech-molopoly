import Card from "../../types/card";

const Space = ({ card }: { card: Card }) => {
  return (
    <div className="space">
      <div className={"space-header" + ` ${card.color}`} />
      <div className="space-body">
        <p className="space-name">{card.name}</p>
      </div>
      <div className="space-footer">
        <p className="space-price">${card.price}</p>
      </div>
    </div>
  );
};

export default Space;
