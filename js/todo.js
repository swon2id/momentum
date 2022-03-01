const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form > input:first-child");

const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos() {
  // localStrage는 item을 저장할 때 string으로 변환 (객체 저장 시 각 요소를 쉼표로 구분하여 저장)
  // 쉼표로 저장된 item은 다시 불러와 배열로 바꿀 수 없음

  // JSON.stringify(arg) : JavaScript 값이나 객체를 JSON 문자열로 변환
  // 따라서 객체를 localStorage에 넣을 때 stringify(arg)를 쓰고
  // localStorage에서 js로 가져올 때 JSON.parse(arg)를 사용
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoDelete(event) {
  const li = event.target.parentElement;
  //toDos = toDos.filter((element) => element.id !== parseInt(li.id));
  toDos = toDos.filter(function (element) {
    return element.id !== parseInt(li.id);
  });

  saveToDos();
  li.remove();
}

function addToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newToDo.text;
  button.innerText = "❌";

  button.addEventListener("click", handleToDoDelete);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = {
    id: Date.now(),
    text: toDoInput.value,
  };
  toDoInput.value = "";
  toDos.push(newToDo);
  saveToDos();
  addToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

//  arr 객체의 요소들이 forEach()의 콜백함수에 의해 순서대로 호출되고
//  이 때 콜백함수에서 각 요소는 element매개 변수로 접근 가능
//  arr.forEach(function(element){
//    console.log(element);
//  }

// 다음의 형태로 작성 가능
// 1. call-back형태로 작성
// 2. 1번과 유사하지만 (element) => console.log(element)
// 3. 외부에 함수 선언 후 forEach의 인자로 전달

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(addToDo);
  // parsedToDos.forEach((element) => addToDo(element));
}
