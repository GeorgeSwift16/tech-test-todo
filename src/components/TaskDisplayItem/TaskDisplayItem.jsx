import "./TaskDisplayItem.scss";

const TaskDisplayItem = ({ tasknumber, name }) => {
  return (
    <>
      <div className="to-do-list-display__task-container">
        <button
          className="to-do-list-display__task-check-button button button-check"
          type="button"
          value={tasknumber}
        >
          #
        </button>
        <p className="to-do-list-display__task-text">{name}</p>
        <button
          className="to-do-list-display__task-delete-button button button-delete"
          type="button"
          value={tasknumber}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default TaskDisplayItem;
