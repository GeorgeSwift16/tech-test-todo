import TaskDisplayItem from "../../components/TaskDisplayItem/TaskDisplayItem";
import "./ToDoListDisplay.scss";

const ToDoListDisplay = ({ tasklistArray }) => {
  const taskListJSX = tasklistArray.map((task, index) => {
    return <TaskDisplayItem key={index} name={task} tasknumber={index} />;
  });

  return <section className="to-do-list-display">{taskListJSX}</section>;
};

export default ToDoListDisplay;
