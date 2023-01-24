import Brand from '../Brand/Brand';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import InputSearch from '../InputSearch/InputSearch';
import { useSearch } from '../../context/SearchContext';
import { useRef, useState } from 'react';

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
    <nav className='flex w-full nav-container justify-around py-5 items-center navbar text-white'>
      <div className='offcanvas' ref={offcanvasRef}>
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
      <InputSearch />
      <div className='hamburger' onClick={handleMenu}>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <div></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;