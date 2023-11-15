import { useState } from 'react';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/icon _hamburger menu.svg'

const links = [
  { href: '', name: 'Home' },
  { href: '', name: 'About' },
  { href: '', name: 'Menu' },
  { href: '', name: 'Reservations' },
  { href: '', name: 'Order Online' },
  { href: '', name: 'Login' },
];

function Nav() {

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <nav>
      <img src={logo} alt="Little Lemon logo" />
      <button onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
        <img src={menuIcon} alt="Menu expand icon" />
      </button>
      <ul className={isMenuExpanded ? 'expanded' : ''}>
        {links.map((item) =>
          <li>
            <a href={item.href}>
              {item.name}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;