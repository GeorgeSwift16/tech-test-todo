import "./main.scss";
import Header from "../header/Header";
import TaskBar from "../TaskBar/TaskBar";
import ToDoListDisplay from "../ToDoListDisplay/ToDoListDisplay";
import { useState } from "react";

const Main = () => {
  const getTaskInput = (event) => {
    let userTaskInput = event.target.value;
    settaskInput(userTaskInput);
  };

  const getNewTaskItem = () => {
    settasks([...tasks, taskInput]);
    settaskInput("");
    setTasksExist(true);
  };
  const [taskInput, settaskInput] = useState("");

  const [tasks, settasks] = useState([]);

  const [tasksExist, setTasksExist] = useState(false);

  const getReset = () => {
    settaskInput("");
    settasks([]);
    setTasksExist(false);
  };

  const handleTaskDelete = (event) => {
    let x = tasks.splice(event.target.value, 1);
    const newTaskList = tasks.filter((element) => element !== x);
    settasks(newTaskList);
  };

  return (
    <main className="to-do-container">
      <Header resetfunction={getReset} />
      <TaskBar
        checkIfActive={tasksExist}
        inputDisplayText={taskInput}
        taskInput={getTaskInput}
        addTask={getNewTaskItem}
      />
      <ToDoListDisplay
        tasklistArray={tasks}
        deleteFunction={handleTaskDelete}
      />
    </main>
  );
};

export default Main;
