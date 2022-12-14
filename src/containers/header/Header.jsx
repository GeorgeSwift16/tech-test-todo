import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">My Todos</h1>
      <button className="header_button button button-reset">Reset</button>
    </header>
  );
};

export default Header;
