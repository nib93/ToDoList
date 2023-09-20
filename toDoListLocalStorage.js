

const form = document.getElementById("toDoForm");//Fetch form
const task = document.getElementById("NewTask");//fetch unorder list of task

const parsedTodos = JSON.parse(localStorage.getItem("todos")) || [];
// retrieve from localStorage
for (let i = 0; i < parsedTodos.length; i++) {

    let newTask = document.createElement("li");//create element li
    
    newTask.innerText = parsedTodos[i].task;//store the task value

    newTask.isCompleted = parsedTodos[i].isCompleted ? true : false;//store the value of is the task completed? 
    if(newTask.isCompleted)
    {
        newTask.style.textDecoration = "line-through";
        newTask.target.style.color = "red";
    }else
    {
        newTask.style.color = "green";
    }
    
    task.appendChild(newTask);
}
form.addEventListener("submit", function (event) {
    event.preventDefault();

    //create new list element and it's value
    let newTask = document.createElement("li");
    newTask.innerText = document.getElementById("ToDoTask").value;
    //Create close button
    const close = document.createElement("button");
    close.innerText = "X";
    newTask.style.color = "green";
    //newTask.innerText=taskInfo;//assign the task information to newly
    newTask.isCompleted = false;//assign the valuevof a task is not completed
    form.reset();
    task.appendChild(newTask); //add a task
    newTask.appendChild(close);
    //PUSH TO LOCALSTORAGE
    parsedTodos.push({ task: newTask.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(parsedTodos));
});


    //onclick event
    task.addEventListener("click", function (event) {
        let clickedTask = event.target;
        const tageNameToDo = event.target.tagName.toLowerCase();
        //if the task is completed then mark it completed else do nothing
        //if tageName is butten then remove the task
        if (tageNameToDo === "button") {
            event.target.parentNode.remove();
        }
        else if (tageNameToDo === "li") {
            event.target.style.textDecoration = "line-through";
            event.target.style.color = "red";
            clickedTask.isCompleted = true;
            for (let i = 0; i < parsedTodos.length; i++) {
                if (parsedTodos[i].task === clickedTask.innerText) {
                    parsedTodos[i].isCompleted = !parsedTodos[i].isCompleted;
                    localStorage.setItem("todos", JSON.stringify(parsedTodos));
                    // parsedTodos.push({task: newTask.innerText, isCompleted: false});
                    //localStorage.setItem("todos", JSON.stringify(parsedTodos));
                }
            }
        }

     
        /*
           if (!clickedTask.isCompleted) {
               clickedTask.style.textDecoration = "line-through";
               clickedTask.isCompleted = true;
           } else {
             clickedListItem.style.textDecoration = "none";
             clickedListItem.isCompleted = false;
       
              for (let i = 0; i < savedTodos.length; i++) {
           if (savedTodos[i].task === clickedListItem.innerText) {
             savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
             localStorage.setItem("todos", JSON.stringify(savedTodos));
           }
         }
       
           }*/

    });
    //task.appendChild(newTask); //add a task
   // newTask.appendChild(close);

