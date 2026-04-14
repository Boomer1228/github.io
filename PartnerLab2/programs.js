
// function to add the user's name to the page
function displayName() {
    let name = document.getElementById("username").value;
    document.getElementById("name").innerHTML = name;
}

//function to add the user's message to the page
function displayMessage() {
    let message = document.getElementById("usermessage").value;
    document.getElementById("message").innerHTML = message;
}

//function to change background color of page
function changeBackgroundColor() {
    let color = document.getElementById("usercolor");
    document.body.style.backgroundColor = color.value;
}

//function to call all functions with submit button
function userChanges() {
    displayName();
    displayMessage();
    changeBackgroundColor();
}

//function to add a task to the to do list
function addTodo() {

    let task = document.getElementById("todoInput").value;

    if(task !== ""){

        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(" " + task));

        document.getElementById("todoList").appendChild(li);

        document.getElementById("todoInput").value = "";
    }
}