import Button from "./Button";

function Header({ title, toggleForm, showAddTaskForm }) {
  return (
    <div>
      <h1 className="header">{title}</h1>
      <Button
        text={showAddTaskForm ? "cancel" : "add"}
        color={showAddTaskForm ? "red" : "green"}
        onClick={toggleForm}
      />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
