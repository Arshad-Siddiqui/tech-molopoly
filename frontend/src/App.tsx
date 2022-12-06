// import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AllCards from './pages/AllCards/AllCards';

const App = () => {
  return (
    <div className="App">
      {/* <NavBar title='Tech Monopoly!' /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allCards' element ={<AllCards />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App