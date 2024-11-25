import { Link } from 'react-router-dom';
import './index.css';

function Navigation() {
  return (
    <nav className="nav-buttons">
      <Link to="/">Page0</Link>
      <Link to="/Page1">Page1</Link>
      <Link to="/Page2">Page2</Link>
      <Link to="/Page3">Page3</Link>
      <Link to="/Page4">Page4</Link>
      <Link to="/Page5">Page5</Link>
      <Link to="/Page6">Page6</Link>
    </nav>
  );
}

export default Navigation;
