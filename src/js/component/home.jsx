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
	

	return (
		<div className="container">
			<FontAwesomeIcon icon={faCircleCheck} />
			<br /><br />
		    <h2>To Do List App (ReactJS)</h2>
			<br /><br />
			There are no tasks selected
		</div>
	);
};

export default Home;

