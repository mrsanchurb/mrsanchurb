import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

// const tasks = [
//   { id: "1", task: "Salir a comer" },
//   { id: "2", task: "Check Bike" },
//   { id: "3", task: "Call Mother" },
//   { id: "4", task: "Tidy room" },
// ];

export default function App() {
  const [listTasks, setListTask] = useState([]);
  function handleAddTask(text) {
    const newId = crypto.randomUUID();

    const newTask = {
      id: newId,
      task: text,
    };
    setListTask((tasks) => [...tasks, newTask]);
  }
  function handleDeleteTask(id) {
    setListTask((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container  bg-light my-3 " style={{ width: "34rem" }}>
      <Header />

      <Main
        listTasks={listTasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
      <Footer />
    </div>
  );
}
