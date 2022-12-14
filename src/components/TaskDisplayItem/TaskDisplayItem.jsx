import "./TaskDisplayItem.scss";

const TaskDisplayItem = () => {
  return (
    <div className="to-do-list-display__task-container">
      <button
        className="to-do-list-display__task-check-button button button-check"
        type="button"
      >
        #
      </button>
      <p className="to-do-list-display__task-text">this is my task</p>
      <button
        className="to-do-list-display__task-delete-button button button-delete"
        type="button"
      >
        delete
      </button>
    </div>
  );
};

export default TaskDisplayItem;
