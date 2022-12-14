import "./main.scss";
import Header from "../header/Header";

const Main = () => {
  return (
    <main className="to-do-container">
      <Header />
      <section className="task-bar">
        <div className="task-bar__input-container">
          <input
            type="text"
            className="task-bar__input"
            placeholder="Add your task here..."
            name="add-task"
          />
          <button className="task-bar__button button button-add-task">+</button>
          <label htmlFor="add-task" className="task-bar__label">
            Nothing to see here yet.. Add a task in the field above!
          </label>
        </div>
      </section>
      <section className="to-do-list-display">
        <div className="to-do-list-display__task-container">
          <button
            className="to-do-list-display__task-check-button button button-check"
            type="button"
          >
            #
          </button>
          <p className="to-do-list-display__task-text">this is my task</p>
        </div>
        <button
          className="to-do-list-display__task-delete-button button button-delete"
          type="button"
        >
          delete
        </button>
      </section>
    </main>
  );
};

export default Main;
