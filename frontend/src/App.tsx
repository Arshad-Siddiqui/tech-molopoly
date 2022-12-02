import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Space from './components/Board/Space';
import Card from './types/card';

const testCard = new Card('St. Charles Place', 'green', 100)

const App = () => {
  return (
    <div className="App">
      <NavBar title='Tech Monopoly!' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Space card={testCard}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App