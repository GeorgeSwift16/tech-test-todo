import "./TaskBar.scss";

const TaskBar = () => {
  return (
    <section className="task-bar">
      <div className="task-bar__input-container">
        <input
          type="text"
          className="task-bar__input"
          placeholder="Add your task here..."
          name="add-task"
        />
        <button className="task-bar__button button button-add-task">+</button>
      </div>
      <label htmlFor="add-task" className="task-bar__label">
        Nothing to see here yet.. Add a task in the field above!
      </label>
    </section>
  );
};

export default TaskBar;
