import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoginIn } from '../atoms';
import logo from './logo.svg';
import '../styles/component/Header.scss';

function Header() {
  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoginIn);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setLoggedIn(false);
    // Remove the legacy demo session; keep the saved timetable.
    try {
      window.localStorage.removeItem('userData');
    } catch {
      // Browsers that block storage can still end the in-memory session.
    }
    setMenuOpen(false);
    navigate('/', { replace: true });
  };

  const closeMenu = () => setMenuOpen(false);
  const navClassName = ({ isActive }) => `sido-nav__link${isActive ? ' is-active' : ''}`;

  return (
    <header className="navigation">
      <nav className="sido-nav" aria-label="주 메뉴">
        <div className="sido-nav__brand">
          <Link to="/" onClick={closeMenu} aria-label="시도 홈">
            <img src={logo} className="App-logo" alt="시도" />
          </Link>
          <p>대학생을 위한 시간표 도우미</p>
        </div>
        {isLoggedIn && (
          <>
            <button
              type="button"
              className="sido-nav__toggle"
              aria-controls="sido-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
            </button>
            <div id="sido-navigation" className={`sido-nav__links${menuOpen ? ' is-open' : ''}`}>
              <NavLink to="/" end className={navClassName} onClick={closeMenu}>이용안내</NavLink>
              <NavLink to="/my-timetable" className={navClassName} onClick={closeMenu}>내 시간표</NavLink>
              <NavLink to="/timetable-board" className={navClassName} onClick={closeMenu}>게시판</NavLink>
              <button type="button" id="Header__logoutBtn" onClick={logout}>로그아웃</button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
