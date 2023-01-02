import TaskDisplayItem from "../../components/TaskDisplayItem/TaskDisplayItem";
import "./ToDoListDisplay.scss";

const ToDoListDisplay = ({ tasklistArray, deleteFunction }) => {
  const taskListJSX = tasklistArray.map((task, index) => {
    return (
      <TaskDisplayItem
        key={index}
        name={task}
        tasknumber={index}
        deleteFunction={deleteFunction}
      />
    );
  });

  return <section className="to-do-list-display">{taskListJSX}</section>;
};

export default ToDoListDisplay;
