import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

function App() {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th at 3:30pm",
      reminder: false,
    },
  ]);

  // pass current tasks and return a new tasks state
  // delete Task
  const deleteTask = (id) => {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  };

  // toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

    // or
    // setTasks((tasks) => {
    //   return tasks.map((task) => {
    //     if (task.id === id) {
    //       return { ...task, reminder: !task.reminder };
    //     }
    //     return task;
    //   });
    // });
  };

  const addTask = (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    setTasks([...tasks, { id: crypto.randomUUID(), ...task }]);
    console.log(tasks);
  };

  const toggleForm = () => {
    setShowAddTaskForm((showForm) => !showForm);
  };

  return (
    <div className="container">
      <Header toggleForm={toggleForm} />
      {showAddTaskForm && <AddTask onAdd={addTask} />}
      {/* {tasks.length === 0 && "No tasks to track"} */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to track "
      )}
    </div>
  );
}

export default App;
