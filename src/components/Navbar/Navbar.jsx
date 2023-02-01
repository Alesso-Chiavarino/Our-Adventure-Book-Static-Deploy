import { Brand, NavLink, InputSearch, useSearch, useRef, useState } from '../../import'
import './Navbar.scss';

const Navbar = () => {

  const { getSearch } = useSearch();
  const [menu, setMenu] = useState(false);

  const resetSearch = () => {
    getSearch('');
  }

  const offcanvasRef = useRef(null);

  const handleMenu = () => {
    if (menu) {
      setMenu(false);
      offcanvasRef.current.classList = 'offcanvas'
    }
    else {
      setMenu(true);
      offcanvasRef.current.classList = 'offcanvas-open'
    }

  }

  return (
    <nav className='flex w-full navbar justify-around py-5 items-center text-white'>
      <div className='offcanvas' ref={offcanvasRef}>
        <div className='mb-5'>
          <Brand handleMenu={handleMenu} />
        </div>
        <hr className='text-white w-3/4 mb-5' />
        <InputSearch handleMenu={handleMenu} />
        <ul className='flex flex-col'>
          <li><NavLink className='link' to="/" onClick={() => {
            handleMenu()
            resetSearch();
          }} >Home</NavLink></li>
          <li><NavLink className='link' to="/adventures" onClick={handleMenu}>Adventures</NavLink></li>
          <li><NavLink className='link' to="/new" onClick={() => {
            handleMenu();
            resetSearch();
          }} >New Adventure</NavLink></li>
        </ul>
      </div>
      <Brand />
      <ul className='flex gap-5 nav-links'>
        <li><NavLink className='link' to="/" onClick={resetSearch} >Home</NavLink></li>
        <li><NavLink className='link' to="/adventures">Adventures</NavLink></li>
        <li><NavLink className='link' to="/new" onClick={resetSearch} >New Adventure</NavLink></li>
      </ul>
      <div className='search-hidden'> <InputSearch /> </div>
      <div className='hamburger' onClick={handleMenu}>
        {menu ? <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <div></div>
        </div> : <div id="menuToggleDefault">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <div></div>
        </div>}

      </div>
    </nav>
  )
}

export default Navbar;