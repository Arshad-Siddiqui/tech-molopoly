export default function House({
  houseNumber,
  houseAmount,
}: {
  houseNumber: number;
  houseAmount: number;
}) {
  return (
    <div className={"house" + houseNumber}>
      With {houseNumber} house {houseAmount}M
    </div>
  );
}
