"use client";
import { useState } from "react";

const Tablets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    saveTask();
  };
  const [isDone, setIsDone] = useState(false);
  const writeTask = () => {
    setIsDone(true);
  };
  function saveTask() {
    let inputValue = document.getElementById("task-name").value;
    let statusValue = document.getElementById("task-status").value;
    const todo = [...todos];
    todo.push({ name: inputValue, status: statusValue });
    setTodos(todo);
    let modal = document.querySelector("#modal");
  }
  console.log({ todos });
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
                  <div key={index}>
                    <div>{todo.name}</div>
                    <div>{todo.status}</div>
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
          <div id="In-progress"></div>
        </div>

        <div className="card-box item-3">
          <div className="status-board">
            <div className="board-item-3"></div>
            <p className="board-text">Done</p>
          </div>
          <div id="Done"></div>
        </div>
        <div className="card-box item-4">
          <div className="status-board">
            <div className="board-item-4"></div>
            <p className="board-text">Blocked</p>
          </div>
          <div id="Blocked"></div>
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
