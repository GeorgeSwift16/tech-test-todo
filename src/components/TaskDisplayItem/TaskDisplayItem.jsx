import "./TaskDisplayItem.scss";

const TaskDisplayItem = ({ tasknumber, name, deleteFunction }) => {
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
          onClick={deleteFunction}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TaskDisplayItem;
