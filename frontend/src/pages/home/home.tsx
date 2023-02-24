import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <Link to="/play">Play!</Link>
    </div>
  );
}
