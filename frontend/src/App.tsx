// import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import cardData from "./data/properties.json";
import AllSpaces from './pages/all/spaces/spaces';
import AllProperties from './pages/all/properties/properties';
import AllCorners from './pages/all/corners/corners';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allSpaces' element ={<AllSpaces cardData={cardData}/>} />
          <Route path='/allProperties' element={<AllProperties cardData={cardData}/>} />
          <Route path='/allCorners' element={<AllCorners />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App