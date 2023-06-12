import { doneTaskStore } from "../../store";
import { deleteTaskStore } from "../../store";
function Task(props) {
    function doneTask(e){
        let button = e.target;
        let buttonParent = button.parentNode;
        let taskId = buttonParent.id;
        doneTaskStore(taskId);
    }
    function deleteTask(e){
        let button = e.target;
        let buttonParent = button.parentNode;
        let taskId = buttonParent.id;
        deleteTaskStore(taskId);
    }
    return (
        <div id={props.id} className={"Task " + props.status}>
            <button onClick={deleteTask} className="delete">
                ❌
            </button>
            <button onClick={doneTask} className="done">
                ✅
            </button>
            <p>{props.text}</p>
        </div>
    )
}
export default Task;