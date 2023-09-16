function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((task) => {
        return <h6 key={task.id}>{task.text}</h6>;
      })}
    </>
  );
}

export default Tasks;
