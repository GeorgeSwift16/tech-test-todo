import "./TaskDisplayItem.scss";

const TaskDisplayItem = ({ tasknumber, name, deleteFunction }) => {
  return (
    <>
      <div className="to-do-list-display__task-container">
        <input
          className="to-do-list-display__task-check-button button button-check"
          type="checkbox"
          value={tasknumber}
        ></input>
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
