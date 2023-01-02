import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleCheck, faTrashCan, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import { Button } from 'bootstrap';

function App() {

  //task to do state
  const [toDo, setToDo] = useState(
    [
      { "id": 1, "tittle": "Task 1", "status": false },
      { "id": 2, "tittle": "Task 2", "status": false }
    ]
  );

  //temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //add task
  const addTask = () => {
    let num = toDo.length + 1;
    let newEntry = { id: num, tittle: newTask, status: false };
    if (newTask) {
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  //delete task
  const deleteTask = (id) => {
    let newTask = toDo.filter(task => task.id !== id);
    setToDo(newTask);
  }

  //update task
  const updateTask = () => {

  }
  //mark task as done ?
  const markDone = (id) => {

  }
  //cancel update
  const cancelUpdate = () => {

  }
  //change task for update
  const changeTask = (e) => {

  }

  return (
    <div className="container App">
      <br></br>
      <h2>To Do List</h2>
      <br></br>

      {/* update task */}
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20">
            Update
          </button>
          <button className="btn btn-lg btn-warning">
            Cancel
          </button>
        </div>
      </div>
      <br />

      {/* add task */}
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto" >
          <button
            className="btn btn-lg btn-success"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>
      <br />


      {/* display todo */}
      {toDo && toDo.length ? '' : 'No Tasks...'}

      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.tittle}</span>
                </div>
                <div className="iconsWrap">
                  <span>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faDeleteLeft}
                      onClick={() => deleteTask(task.id)}
                    />
                  </span>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }


    </div>
  );
}

export default App;
