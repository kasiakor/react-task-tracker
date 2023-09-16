import Button from "./Button";

function Header({ title }) {
  return (
    <div>
      <h1 className="header">{title}</h1>
      <Button text="add" color="green" />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
