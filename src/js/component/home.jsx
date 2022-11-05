import React from "react";
import {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
	faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";


// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FontAwsomeIcon} from '@fortawesome/react-fontawesome';
// import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";

// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// import 'relative/path/to/stylesheet.scss;';

// faCircleCheck marks task as completed
//faPen add task
//faTrashCan delete task
// mport React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	// Task (list state)
	// Main state storing tasks
	const [toDo, setToDo] = useState([
		{"id": 1, "title": "Task 1", "status": false},
		{"id": 2, "title": "Task 2", "status": false}
	])

	// State
	const [newTask, setNewTask] = useState('');
	const [updateData, setupdateData] = useState('');

	//Add task
	//////////////////////
	const addTask = () => {
		//
	}
	//Deletetask
	//////////////////////
	const deletetask = (id) => {
		//
	}
	//mark task as done
	//////////////////////
	const markdone = (id) => {
		//
	}
	// cancel update
	//////////////////////
	const cancelupdate = (id) => {
		//
	}
	// change task for update
	//////////////////////
	const changetask = (id) => {
		//
	}
	// update task
	//////////////////////
	const updatetask = (id) => {
		//
	}



	return (
		<div className="container">
			<FontAwesomeIcon icon="fa-solid fa-x" />
			<br /><br />
		    <h2>To Do List App (ReactJS)</h2>
			<br /><br />
			{/*Display ToDos*/}

			{toDo && toDo.length ? '' : 'No tasks..'}
			{toDo && toDo
			  .map((task, index) => {
				return(
					<React.Fragment key={task.id}>
						<div className="col taskBg">

						<div className={task.status ? 'done' : ''}>
						 <span className= "taskNumber">{index + 1}</span>
						 <span className= "taskText">{task.title}</span>		
						</div>
							<div className="iconsWarp"> 
							<span>
							<FontAwesomeIcon icon="fa-solid fa-x" />
							</span>
							<span></span>
							<span></span>
							</div>
						</div>
					</React.Fragment>
				)
			  })
			}

		</div>
	);
};

export default Home;

