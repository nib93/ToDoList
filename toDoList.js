document.addEventListener("DOMContentLoaded", function() {
    const form=document.getElementById("toDoForm");//Fetch form
    const task=document.getElementById("NewTask");//fetch unorder list of task
    
    //add task when submit button is clicked
    form.addEventListener("submit",function(event){
        event.preventDefault();
        //create new list element and store the task collected by form into it.
        let newTask=document.createElement("li");
        newTask.innerText=document.getElementById("ToDoTask").value;
        newTask.style.color="green";
    
        //Create close button
        let close=document.createElement("button");
        close.innerText="X";
        
    
        //add list element to HTML content
        task.appendChild(newTask);
        //add close button to task list
        newTask.appendChild(close);
    
    });
    
    task.addEventListener("click",function(event){
        const tageNameToDo=event.target.tagName.toLowerCase();
    
        //if tageName is butten then remove the task
        if(tageNameToDo==="button")
            {
                event.target.parentNode.remove();
            }
        else if(tageNameToDo==="li")
        {
            event.target.style.textDecoration = "line-through";
            event.target.style.color="red";
        }
    });
    });
    