import PropTypes from "prop-types";
import { useState } from "react";

AddTask.propTypes = {
  onAddTask: PropTypes.func,
};
export default function AddTask({ onAddTask }) {
  const [input, setInput] = useState("");
  function handleSumit(e) {
    e.preventDefault();
    if (input.length > 0) {
      onAddTask(input);
      setInput("");
    }
  }
  return (
    <form className="input-group mb-3" onSubmit={handleSumit}>
      <input
        type="text"
        className="form-control fs-1"
        placeholder="Add your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleSumit} className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </form>
  );
}
