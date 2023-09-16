import Task from "./Task";

function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </>
  );
}

export default Tasks;
