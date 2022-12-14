import TaskDisplayItem from "../../components/TaskDisplayItem/TaskDisplayItem";
import "./ToDoListDisplay.scss";

const tasklistArray = ["task1", "task2", "task3"];

const ToDoListDisplay = () => {
  console.log(tasklistArray);
  const taskListJSX = tasklistArray.map((task, index) => {
    return <TaskDisplayItem key={index} name={task} />;
  });

  return <section className="to-do-list-display">{taskListJSX}</section>;
};

export default ToDoListDisplay;
