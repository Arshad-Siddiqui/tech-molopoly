// import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import cardData from "./data/properties.json";
import AllSpaces from './pages/AllSpaces/AllSpaces';
import AllProperties from './pages/AllProperties/AllProperties';
import AllCorners from './pages/AllCorners/AllCorners';

const App = () => {
  return (
    <div className="App">
      {/* <NavBar title='Tech Monopoly!' /> */}
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