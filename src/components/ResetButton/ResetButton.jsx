import "./ResetButton.scss";

const ResetButton = ({ resetfunction }) => {
  return (
    <button
      onClick={resetfunction}
      className="header__button button button-reset"
    >
      Reset
    </button>
  );
};

export default ResetButton;
