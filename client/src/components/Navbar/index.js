import React from "react";
import './index.css'
function Nav() {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <a className='navbar text-dark google' href='/'>
        Google Books
      </a>
      <div>
        <ul className='navbar-nav '>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              <button type='button' className='btn text-muted'>
                Search Books
              </button>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/saved'>
              <button type='button' className='btn text-muted'>
                Saved Books
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
