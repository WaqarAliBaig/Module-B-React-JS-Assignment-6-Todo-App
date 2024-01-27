import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTaskHandle = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    // const newTodoList = [...todoList, newTask];
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTaskHandle = (id) => {
    // const newTodoList = todoList.filter((task) => task !== taskName);
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const editTaskHandle = (index) => {
    // const newTodoList = todoList.find((task) => task.id !== id);
    // setTodoList(todoList.map((task) => task.id !== id));
    // setNewTask(task.id);
    setEditingIndex(index);
    setNewTask(todoList[index].taskName);
    // setTitle(Todos[index].title);
    // setDescription(Todos[index].description);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>ToDo List</h1>

        <div className="addTask">
          <input value={newTask} onChange={handleChange} />
          <button className="add-btn" onClick={addTaskHandle}>
            Go
          </button>
        </div>

        <div className="list">
          {todoList.map((task, index) => {
            return (
              <>
                <ul className="all-todos">
                  <li className="single-todo">
                    <span className="todo-text">{task.taskName}</span>
                    <button onClick={() => editTaskHandle(index)}>Edit</button>
                    <button onClick={() => deleteTaskHandle(task.id)}>
                      Delete
                    </button>
                  </li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
