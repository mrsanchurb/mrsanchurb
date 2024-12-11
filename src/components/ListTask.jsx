import ListItem from "./ListItem";
import PropTypes from "prop-types";

ListTask.propTypes = {
  listTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      task: PropTypes.string,
    })
  ),
  onDeleteTask: PropTypes.func,
};

export default function ListTask({ listTasks, onDeleteTask }) {
  return (
    <div>
      <ul
        className="list-group"
        style={{
          maxHeight: " 300px",
          marginBottom: "10px",
          overflowY: "scroll",
        }}
      >
        <li className="list-group-item fs-2 my-1">
          {listTasks.length >= 1 ? (
            listTasks.map((task) => (
              <ListItem
                key={task.id}
                tasks={task}
                onDeleteTask={onDeleteTask}
              />
            ))
          ) : (
            <p>There not tasks to show</p>
          )}
        </li>
      </ul>
    </div>
  );
}
