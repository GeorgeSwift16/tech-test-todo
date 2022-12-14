import "./TaskBar.scss";

const TaskBar = ({ taskInput, addTask, inputDisplayText, checkIfActive }) => {
  return (
    <section className="task-bar">
      <div className="task-bar__input-container">
        <input
          type="text"
          className="task-bar__input"
          placeholder="Add your task here..."
          value={inputDisplayText}
          name="add-task"
          onChange={taskInput}
        />
        <button
          className="task-bar__button button button-add-task"
          onClick={addTask}
        >
          +
        </button>
      </div>
      <label
        htmlFor="add-task"
        className={checkIfActive ? "has-input" : "task-bar__label"}
      >
        Nothing to see here yet.. Add a task in the field above!
      </label>
    </section>
  );
};

export default TaskBar;
