export default function House({
  houseNumber,
  houseAmount,
}: {
  houseNumber: number;
  houseAmount: number;
}) {

  return (
    <div className="house">
      <div className="house-number">With {houseNumber} house</div>
      <div className="house-amount">M{houseAmount}</div>
    </div>
  );
}
