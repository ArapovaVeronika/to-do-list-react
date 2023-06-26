import logo from './logo.svg';
import './App.css';
import Task from './components/Task/Task';
import Store, { addTask } from './store';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  function setTask(e) {
    console.log(e.type);
    if(e.type == "click"){
      let button = e.target;
      let buttonParent = button.parentNode;
      let input = buttonParent.querySelector('input');
      if (input.value !== "") {
        addTask(input.value);
        input.value = '';
      } else {
        alert("Напиши задачу")
      }
    }else{
      if(e.key == "Enter") {
        let taskText = e.target.value;
        if(taskText !== "") {
          addTask(taskText);
          e.target.value = "";
          e.target.blur();
        }
      }
    }
  }

  let tasks = Store.map((taskInfo) => <Task text={taskInfo.text} id={taskInfo.id} status={taskInfo.status} />) //если используем что то с джава скриптом в штмл, то ставим фигупные скобки
  return (
    <div className="App">
      <h1>Список задач</h1>
      <div className='App__form'>
        <input onKeyDown={setTask} placeholder='Введите задачу'></input>
        <button onClick={setTask}>➕</button>
      </div>
      <div className='App__tasks'>
        {tasks}
      </div>
    </div>
  );
}

export default App;
