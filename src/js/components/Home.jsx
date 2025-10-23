import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState('')
	const [list, setList] = useState([])

	const handletask = (event) => {
		setTask(event.target.value)
	}

	const addtoList =(event)=>{
		if (event.key==='Enter') {
			if (task!=''){
				setList([...list, task])
				setTask('')
			}
		}
	}
	const deleteTask=(todelete)=>{
		setList(prev=>prev.filter(task => task !==todelete))
	}
	const taskcounter=(list)=>{
		if (list.length===0) {
			return ('No Tasks')			
		}else if (list.length===1) {
			return('1 Task')
		} else {
			return(list.length + 'Tasks')
		}
	}



	return (
		<div className="text-center d-flex justify-content-center align-items-center vh-100" >
			<div className="card paper" style={{ width: "18rem" }}>
				<input type="text" className="form-control" id="tasker" onKeyDown={addtoList} onChange={handletask} value={task} placeholder="What need to be done?"></input>
				<ul className="list-group list-group-flush">
					{list.map((item, index)=>(
						<li className="list-group-item d-flex justify-content-between">
							<span key={index}>{item}</span>
							<button type="button" className="btn-close" onClick={()=>deleteTask(item)} aria-label="Close"></button>
						</li>
						))}
				</ul>
				<p className='text-start ms-3 mt-2'>{taskcounter(list)}</p>
			</div>
		</div>
	);
};

export default Home;