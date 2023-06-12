import { update } from "./index";
let storeSavedString = localStorage.getItem('store');//переменная в которую попадает сохран. стор в формате строки
let Store = [
    // { text: '1 задача', id: 0, status: 'work' },
    // { text: '2 задача', id: 1, status: 'work' },
    // { text: '3 задача', id: 2, status: 'work' },
    // { text: '4 задача', id: 3, status: 'work' },
    // { text: '5 задача', id: 4, status: 'work' },
    
]
if(storeSavedString !== null){
    let storeSaved = JSON.parse(storeSavedString);//переменная в которую попадает сохран. стор в формате масива
    Store = storeSaved;//сохранённый стор подставляем в масив
}
export function addTask(text){
    let newTask = {text: text, id: "", status:"work"};
    Store.unshift(newTask); //добавляем в начало масива "стор" новую задачу
    updateId();
}
export function doneTaskStore(taskId){
    if(Store[taskId].status == 'work'){
        Store[taskId].status = 'done';
    }else{
        Store[taskId].status = 'work';
    };
    updateId();
}
export function deleteTaskStore(taskId){
    Store.splice(taskId, 1); 
    updateId();
}
function updateId(){
    for(let i = 0; i<Store.length; i++){
        Store[i].id = i;
    }
    StoreSave();
    update();
}
function StoreSave(){
     let StoreString = JSON.stringify(Store) //делаем из масива строку
     localStorage.setItem('store', StoreString);// сохраняем стор в локальное хранилище
}
export default Store;