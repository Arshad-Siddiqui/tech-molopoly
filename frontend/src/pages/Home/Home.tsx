import { Link } from 'react-router-dom'
import Board from '../../components/board/board'

const Home = () => {
  return (
    <div className='home-page'>
      <Board />
      <Link to='/all/spaces'>All Spaces</Link>
      <Link to='/all/properties'>All Properties</Link>
      <Link to='/all/corners'>All Corners</Link>
    </div>
  )
}

export default Home