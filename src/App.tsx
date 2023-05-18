// import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/play/play";
import properties from "./data/properties.json";
import AllSpaces from "./pages/all/spaces";
import AllProperties from "./pages/all/properties";
import AllCorners from "./pages/all/corners";
import Home from "./pages/home/home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/all">
            <Route
              path="spaces"
              element={<AllSpaces properties={properties} />}
            />
            <Route
              path="properties"
              element={<AllProperties properties={properties} />}
            />
            <Route path="corners" element={<AllCorners />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
