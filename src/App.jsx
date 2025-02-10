import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoIteam1 from "./TodoItem1";
import TodoIteam2 from "./TodoIteam2";
import "./App.css";
function App() {
  return (
    <div className="box">
      <center>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <div className="iteam-contenar">
          <TodoIteam1></TodoIteam1>
          <TodoIteam2></TodoIteam2>
        </div>
      </center>
    </div>
  );
}

export default App;
