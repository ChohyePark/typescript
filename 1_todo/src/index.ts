let todoItems: {id:number,title:string,done:boolean}[];

// api
function fetchTodoItems() {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos():{id:number,title:string,done:boolean}[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo:{id:number, title:string, done:boolean}):void {
  todoItems.push(todo);
}

function deleteTodo(index:number):void {
  todoItems.splice(index, 1);
}

function completeTodo(index:number, todo:{id:number,title:string,done:boolean}):void{
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo():{id:number,title:string,done:boolean} {
  return todoItems[0];
}

function showCompleted():{id:number,title:string,done:boolean}[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems():void {
  addTodo({id:4, title : '타입스크립트 공부', done:true});
  addTodo({id:5, title : '또 타입스크립트 공부', done:true});
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();

// 반복되는 코드 줄이기 * 인터페이스 

interface Todo {
  id : number;
  title : string;
  done : boolean;
}