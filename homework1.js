const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetinng = document.querySelector("#homework1");

function getMyName(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    greetinng.innerText = `당신의 이름은?  ${userName} !`;
    greetinng.classList.remove("hidden");
}

loginForm.addEventListener("submit", getMyName);