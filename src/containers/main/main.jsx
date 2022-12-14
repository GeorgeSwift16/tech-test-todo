import "./main.scss";
import Header from "../header/Header";
import TaskBar from "../TaskBar/TaskBar";
import ToDoListDisplay from "../ToDoListDisplay/ToDoListDisplay";
import { useEffect, useState } from "react";

const Main = () => {
  const getTaskInput = (event) => {
    let userTaskInput = event.target.value;
    console.log(userTaskInput);
    settaskInput(userTaskInput);
  };

  const getNewTaskItem = () => {
    settasks([...tasks, taskInput]);
    settaskInput("");
  };
  const [taskInput, settaskInput] = useState("");

  const [tasks, settasks] = useState([]);

  return (
    <main className="to-do-container">
      <Header />
      <TaskBar
        checkIfActive={taskInput}
        inputDisplayText={taskInput}
        taskInput={getTaskInput}
        addTask={getNewTaskItem}
      />
      <ToDoListDisplay tasklistArray={tasks} />
    </main>
  );
};

export default Main;
