import './Header.css'
import logo from './logo.svg';
import NavBar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar"><NavBar /></div>
      <div className="logo">
        <img className='logo' src={logo} alt="Logo" />
      </div>
      <div className="avatar">Avatar</div>
    </header>
  );
}

export default Header;
