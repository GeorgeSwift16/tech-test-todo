import "./main.scss";
import Header from "../header/Header";
import TaskBar from "../TaskBar/TaskBar";
import ToDoListDisplay from "../ToDoListDisplay/ToDoListDisplay";
const Main = () => {
  return (
    <main className="to-do-container">
      <Header />
      <TaskBar />
      <ToDoListDisplay />
    </main>
  );
};

export default Main;
