// import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import properties from "./data/properties.json";
import AllSpaces from './pages/all/spaces';
import AllProperties from './pages/all/properties';
import AllCorners from './pages/all/corners';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allSpaces' element ={<AllSpaces properties={properties}/>} />
          <Route path='/allProperties' element={<AllProperties properties={properties} />} />
          <Route path='/allCorners' element={<AllCorners />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App