import "./navigation.scss";

function Nav() {
  return (
    <nav className='nav'>
      <a href='/' className='nav__link'>
        home
      </a>
      <a href='/' className='nav__link'>
        about me
      </a>
      <a href='/' className='nav__link'>
        portfolio
      </a>
      <a href='/' className='nav__link'>
        contact
      </a>
    </nav>
  );
}

export default Nav;
