function Task({ task }) {
  return (
    <div className="task">
      <h6 key={task.id}>{task.text}</h6>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
