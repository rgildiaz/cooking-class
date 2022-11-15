import "./Header.css";

function Header(props) {
  return (
    <div className="header-container">
      <header>
        <a className="menu-icon">
          <div className="menu-icon-bar bar-1"></div>
          <div className="menu-icon-bar bar-2"></div>
          <div className="menu-icon-bar bar-3"></div>
        </a>
        <a className="logo">Logo</a>
        <nav>
          <a href="#">join</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
