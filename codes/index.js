const button = document.getElementById("btn1");
button.addEventListener("click",updateName);

function updateName(){
    const name = prompt("Enter a player name");
    button.textContent = `Player1: ${name}`;
}
function changeName(){
    const heading = document.getElementById("heading");
    heading.textContent = "MERN Stack"
    const paragraph = document.getElementById("content");
    paragraph.classList.add("highlight");
    paragraph.innerText = "new text";
}
function clearpwd() {
    const pwdInput = document.getElementById("pwd");
    if (pwdInput.type === "password") {
        pwdInput.type = "text"; 
    } else {
        pwdInput.type = "password";
    }
}