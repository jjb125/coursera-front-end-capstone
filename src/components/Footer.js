import { Link } from 'react-router-dom'
import { links } from './Nav'
import logo from '../assets/logo.svg';
import './Footer.css'

export default function Footer() {
    return (
      <footer>
        <div>
        <img src={logo} alt="Little Lemon logo" width={140} height={40} />
        </div>
        <div>
          <h4>Site Navigation</h4>
          <ul>
        {links.map((item, index) =>
          <li key={index}>
            <Link to={item.href}>
              {item.name}
            </Link>
          </li>
        )}
      </ul>

        </div>
        <div>
          <h4>Contact</h4>
          <p>123 Central St.</p>
          <p>Chicago, IL</p>
          <p>(312) 555-1212</p>
        </div>
        <div>
          <h4>Social Media</h4>
          <p>facebook</p>
          <p>instagram</p>
        </div>
      </footer>
    );
  };