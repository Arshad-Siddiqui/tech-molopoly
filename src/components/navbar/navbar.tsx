import './NavBar.css'

const NavBar = ({ title }: { title: string }) => {
  return (
    <nav>
      <h1 className='nav-title'>{title}</h1>
    </nav>
  )
}

export default NavBar;