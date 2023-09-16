import Button from "./Button";

function Header({ title }) {
  const onClick = () => {
    console.log("click");
  };
  return (
    <div>
      <h1 className="header">{title}</h1>
      <Button text="add" color="green" onClick={onClick} />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
