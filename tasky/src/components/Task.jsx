const Task = (props) => {
    
    return (
        <div className="card"
        style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p> {props.children}</p>
           <p className="description">{props.description}</p>
           <p className="priorityLevel"
            style={{  backgroundColor: props.priorityLevel === "High"
            ? "red"
            : props.priorityLevel === "Medium"
            ? "#e8aa16"
            : "green"
  }}
>
  {props.priorityLevel}
</p>
            <button onClick={props.markDone} className="doneButton"> Done </button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;
