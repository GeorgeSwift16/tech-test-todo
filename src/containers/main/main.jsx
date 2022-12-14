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
  const [taskInput, settaskInput] = useState("");

  const [tasks, settasks] = useState(["hello", "task", "task"]);

  const getNewTaskItem = () => {
    settasks([...tasks, taskInput]);
    settaskInput("");
  };

  return (
    <main className="to-do-container">
      <Header />
      <TaskBar
        inputDisplayText={taskInput}
        taskInput={getTaskInput}
        addTask={getNewTaskItem}
      />
      <ToDoListDisplay tasklistArray={tasks} />
    </main>
  );
};

export default Main;
