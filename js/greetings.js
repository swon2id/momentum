const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const savedUserName = localStorage.getItem(USERNAME_KEY);

function showGreetingMsg() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Have a nice day, ${userName}! 😃`;
}

function handleLoginSubmit(event) {
  event.preventDefault();

  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showGreetingMsg();
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  showGreetingMsg();
}
