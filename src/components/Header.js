import Button from "./Button";

function Header({ title, toggleForm }) {
  return (
    <div>
      <h1 className="header">{title}</h1>
      <Button text="add" color="green" onClick={toggleForm} />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
