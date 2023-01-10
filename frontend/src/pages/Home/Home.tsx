import { Link } from 'react-router-dom'
import Board from '../../components/Board/Board'

const Home = () => {
  return (
    <div className='home-page'>
      <Board />
      <Link to='/allSpaces'>All Spaces</Link>
      <Link to='/allProperties'>All Properties</Link>
    </div>
  )
}

export default Home