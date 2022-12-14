import "./Header.scss";
import ResetButton from "../../components/ResetButton/ResetButton";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">My Todos</h1>
      <ResetButton />
    </header>
  );
};

export default Header;
