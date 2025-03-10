"use client";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const Tablets = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    saveTask();
  };
  const [todos, setTodos] = useState([]);
  function saveTask() {
    let inputValue = document.getElementById("task-name").value;
    let statusValue = document.getElementById("task-status").value;
    const todo = [...todos];
    todo.push({ name: inputValue, status: statusValue });
    setTodos(todo);
  }
  const [deleteTask, setdeleteTask] = useState(todos);
  function deleteOneAgain(index) {
    let arr = [];
    for (i = 0; i < deleteTask.length; i++) {
      if (i !== index) {
        arr.push(deleteTask[i]);
      }
    }
    todos = arr;
    setdeleteTask(todos);
  }

  return (
    <main className="background-image">
      <div className="add-button-home">
        <button onClick={openModal} className="add-button-style">
          Add task
        </button>
      </div>
      <div className="card-body">
        <div className="card-box item-1">
          <div className="status-board">
            <div className="board-item-1"></div>
            <p className="board-text">To do</p>
          </div>
          <div id="Todo" className="text-white">
            {todos.map(
              (todo, index) =>
                todo.status == "Todo" && (
                  <div key={index} className="list-item">
                    <div style={{ display: "flex", padding: "20px" }}>
                      {todo.name}
                      <MdOutlineDelete onClick={deleteTask} />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="card-box item-2">
          <div className="status-board">
            <div className="board-item-2"></div>
            <p className="board-text">In progress</p>
          </div>
          <div id="In-progress" className="text-white">
            {todos.map(
              (todo, index) =>
                todo.status == "In-progress" && (
                  <div key={index} className="list-item">
                    <div style={{ display: "flex", padding: "20px" }}>
                      {todo.name}
                      <MdOutlineDelete />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        <div className="card-box item-3">
          <div className="status-board">
            <div className="board-item-3"></div>
            <p className="board-text">Done</p>
          </div>
          <div id="Done" className="text-white">
            {todos.map(
              (todo, index) =>
                todo.status == "Done" && (
                  <div key={index} className="list-item">
                    <div style={{ display: "flex", padding: "20px" }}>
                      {todo.name}
                      <MdOutlineDelete />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="card-box item-4">
          <div className="status-board">
            <div className="board-item-4"></div>
            <p className="board-text">Blocked</p>
          </div>
          <div id="Blocked" className="text-white">
            {todos.map(
              (todo, index) =>
                todo.status == "Blocked" && (
                  <div key={index} className="list-item">
                    <div style={{ display: "flex", padding: "20px" }}>
                      {todo.name}
                      <MdOutlineDelete />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div id="modal">
          <div className="modal-content">
            <div className="box-head">
              <h1>Enter new task</h1>
              <span className="material-symbols-outlined" id="closeButton">
                close
              </span>
            </div>

            <input type="text" id="task-name" placeholder="Task name..." />
            <select name="Select status" id="task-status">
              <option value="" disabled>
                Select status
              </option>
              <option value="Todo">To do</option>
              <option value="In-progress">In-progress</option>
              <option value="Done">Done</option>
              <option value="Blocked">Blocked</option>
            </select>
            <button onClick={closeModal} className="submit-button">
              Submit
            </button>
          </div>
        </div>
      )}
      <div id="edit-modal">
        <div className="modal-content">
          <div className="box-head">
            <h1>Edit task</h1>
            <span className="material-symbols-outlined" id="closeButton">
              close
            </span>
          </div>
          <input type="text" id="edited-name" placeholder="New name..." />
          <select name="Select status" id="edited-status">
            <option value="" disabled>
              Select status
            </option>
            <option value="Todo">To do</option>
            <option value="In-progress">In-progress</option>
            <option value="Done">Done</option>
            <option value="Blocked">Blocked</option>
          </select>
          <button onClick={closeModal} className="submit-button">
            Save
          </button>
        </div>
      </div>
    </main>
  );
};

export { Tablets };
