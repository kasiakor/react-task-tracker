import { FaTimes } from "react-icons/fa";

function Task({ task }) {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes style={{ color: "red", curson: "pointer" }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
