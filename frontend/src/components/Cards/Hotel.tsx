export default function Hotel ({ amount }: { amount: number }) {
  return (
    <div className="hotel">
      <div className="hotel-number">With HOTEL</div>
      <div className="hotel-amount">M{amount}</div>
    </div>
  );
}