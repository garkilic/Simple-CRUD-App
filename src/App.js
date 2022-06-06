import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
	// ! Variable that can be changed and sent to our database

	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [country, setCountry] = useState("");
	const [salary, setSalary] = useState(0);
	const [position, setPosition] = useState("");

	const addEmployee = () => {
		Axios.post("http://localhost:3001/create", {
			name: name,
			age: age,
			country: country,
			salary: salary,
			position: position,
		}).then(() => {
			console.log("success");
		});
	};

	return (
		<div className="App">
			<div className="information">
				<label>Name:</label>
				<input
					type="text"
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<label>Age:</label>
				<input
					type="number"
					onChange={(event) => {
						setAge(event.target.value);
					}}
				/>
				<label>Country:</label>
				<input
					type="text"
					onChange={(event) => {
						setCountry(event.target.value);
					}}
				/>
				<label>Salary:</label>
				<input
					type="number"
					onChange={(event) => {
						setSalary(event.target.value);
					}}
				/>
				<label>Position:</label>
				<input
					type="text"
					onChange={(event) => {
						setPosition(event.target.value);
					}}
				/>
				<button onClick={addEmployee}>Add Person</button>
			</div>
		</div>
	);
}

export default App;
