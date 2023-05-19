export function BottomLeft() {
  return <div className="corner bottom-left">In Jail/Just visiting</div>;
}

export function BottomRight() {
  return <div className="corner bottom-right">Go!</div>;
}

export function TopLeft() {
  return (
    <div className="corner top-left">
      <div className="top-left-first">Free</div>
      <div className="top-left-second">Parking</div>
    </div>
  );
}

export function TopRight() {
  return (
    <div className="corner top-right">
      <div className="corner-text">GO TO JAIL</div>
    </div>
  );
}
