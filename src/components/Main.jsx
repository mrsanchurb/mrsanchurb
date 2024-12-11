import AddTask from "./AddTask";
import ListTask from "./ListTask";
import PropTypes from "prop-types";

Main.propTypes = {
  listTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      task: PropTypes.string,
    })
  ),
  onAddTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};
export default function Main({ listTasks, onAddTask, onDeleteTask }) {
  return (
    <main>
      <AddTask onAddTask={onAddTask} />
      <ListTask listTasks={listTasks} onDeleteTask={onDeleteTask} />
    </main>
  );
}
