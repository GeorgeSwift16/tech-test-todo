import "./main.scss";
import Header from "../header/Header";
import TaskBar from "../TaskBar/TaskBar";
import ToDoListDisplay from "../ToDoListDisplay/ToDoListDisplay";
import { useEffect, useState } from "react";

// notes for Kat - number steps by code
// 1. input box takes in what the user has typed which runs getTaskinput, this then sets the state of taskInput - ie user types hello - taskInput state variable is now "hello"
const Main = () => {
  const getTaskInput = (event) => {
    let userTaskInput = event.target.value;
    settaskInput(userTaskInput);
  };
  // 2. User now click add button - button on click runs function below - this takes whatever is in the taskInput variable and pushes it into the tasks array. then clears the taskInput variable ready for the next run.
  const getNewTaskItem = () => {
    settasks([...tasks, taskInput]);
    settaskInput("");
  };
  const [taskInput, settaskInput] = useState("");

  const [tasks, settasks] = useState([]);

  const getReset = () => {
    settaskInput("");
    settasks([]);
  };

  return (
    <main className="to-do-container">
      <Header resetfunction={getReset} />
      <TaskBar
        checkIfActive={taskInput}
        inputDisplayText={taskInput}
        taskInput={getTaskInput}
        addTask={getNewTaskItem}
      />
      {/* 3. the tasks array is passed as the array of items to map into a list item, so it maps a list item for each item in the array. exactly the same as passing the beers array for punk. */}
      <ToDoListDisplay tasklistArray={tasks} />
    </main>
  );
};

export default Main;
