import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'antd';
import { Card } from 'antd';
import './App.css';
import axios from 'axios'

const urlSchoolerMonth = 'http://localhost:3003/apiSchoolerDay';

function App() {
  //call data
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(urlSchoolerMonth);
      setData(res.data);
    }
    getData();
  }, [])

  console.log(data);

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
  ////////////////////////////////////////// 
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  // Delete task 
  ////////////////////////////////////////// 
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  }

  // mark task as done or completed
  ////////////////////////////////////////// 
  const markDone = (id) => {
    const newTasks = toDo.map((task) => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    });
    setToDo(newTasks);
  }

  // cancel update
  ////////////////////////////////////////// 
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ////////////////////////////////////////// 
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // update task 
  ////////////////////////////////////////// 
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  }


  return (

    <Row>
      <Col span={12}>

        <div className="container App">

          <br /><br />

          <h2>To Do List</h2>

          <br /><br />
          {updateData && updateData ? (
            <>
              <div className="row">
                <div className="col">
                  <input
                    value={updateData && updateData.title}
                    onChange={(e) => changeTask(e)}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-lg btn-success mr-20"
                    onClick={updateTask}
                  >Update</button>
                  <button
                    className="btn btn-lg btn-warning"
                    onClick={cancelUpdate}
                  >Cancel</button>
                </div>
              </div>
              <br />
            </>
          ) : (
            <>
              <div className="row">
                <div className="col">
                  <input
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-lg btn-success"
                    onClick={addTask}
                  >Add Task</button>
                </div>
              </div>
              <br />
            </>
          )}


          {/* If there are no to dos in state, display a message   */}
          {toDo && toDo.length ? '' : 'No tasks...'}

          {/* Show to dos   */}
          {toDo && toDo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>

                  <div className="col taskBg">

                    <div
                      // if task status is true, add class to this div named as done
                      className={task.status ? 'done' : ''}
                    >
                      {/* Show number of task */}
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
                    </div>

                    <div className="iconsWrap">
                      <span
                        onClick={(e) => markDone(task.id)}
                        title="Completed / Not Completed"
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>

                      {task.status ? null : (
                        <span
                          title="Edit"
                          onClick={() => setUpdateData({ id: task.id, title: task.title, satus: task.status ? true : false })}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}

                      <span
                        onClick={() => deleteTask(task.id)}
                        title="Delete"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>

                  </div>

                </React.Fragment>
              );
            })}

        </div>
      </Col>
      <Col span={12}>
        <Row className='schooler-card'>
          <Card title="L???ch H???c Ti???ng Nh???t" style={{ width: 300 }} >
            <p>T??n b??i h???c : {data ? data.name : ""}</p>
            <p>Ng??y : {data ? data.date : ""}</p>
            <p>N???i dung : {data ? data.content : ""}</p>
            <p>Gi???ng vi??n : {data ? data.teacher : ""}</p>
            <p>Ph??ng h???c : {data ? data.room : ""}</p>
            <p>Test : {data ? data.test : "Kh??ng c??"}</p>
          </Card>
        </Row>
        <Row></Row>
      </Col>
    </Row>


  );
}

export default App;