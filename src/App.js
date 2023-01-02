import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {

  //task to do state
  const [toDo, setToDo] = useState([
    { "id": 1, "tittle": "Task 1", "status": false },
    { "id": 2, "tittle": "Task 2", "status": false }
  ]);

  //temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //add task
  const addTask = () => {

  }

  //delete task
  const deleteTask = (id) => {

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

      {/* display todo */}
      {toDo && toDo.length ? '' : 'No Tasks...'}

      {toDo && toDo
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.tittle}</span>
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
