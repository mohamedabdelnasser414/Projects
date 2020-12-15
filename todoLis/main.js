const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".todo-filter");

 

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click", filterTodo);

function filterTodo(e){
    console.log(e.target.value);
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "All":
                todo.style.display = "flex";
                break;
            case "Completed":
                if (todo.classList.contains("completed")){
                    todo.style.display ="flex";
                } else{
                    todo.style.display ="none"
                }
                break;
            case "Uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display ="flex";
                }else{
                    todo.style.display ="none";
                }
                break;
        }   
    })
  
}

function addTodo(event){
    // Prevent form from submitting 
    event.preventDefault();
    // Creat Div element 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create todo item
    const newTodo = document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item")
    newTodo.classList.add("test")
    todoDiv.appendChild(newTodo);
    // create check button 
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     // create trash button 
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
    // add DIV element to Todo liest 
    todoList.appendChild(todoDiv);
    // Clearing input 
    todoInput.value = ""

    // var trashBtns = document.querySelectorAll(".trash-btn");
    // var completeBtns = document.querySelectorAll(".complete-btn");

    // for(var i = 0 ; i< trashBtns.length ; i++){
    // var trashBtn = trashBtns[i];
    // trashBtn.addEventListener("click",function(){
    //     this.parentElement.remove();
    // } );
    // };
    // for(var i = 0 ; i< completeBtns.length ; i++){
    // var checkBtn = completeBtns[i];
    // checkBtn.addEventListener("click",function(){
    //     console.log("check");
    // } );
    // };
    
}




function deleteCheck(event){
    var target = event.target;
    if(target.classList[0]==="trash-btn"){
        target.parentElement.classList.add("fall");
        target.parentElement.addEventListener("transitionend",function(){
            target.parentElement.remove();
        })
        
    }
    else if(target.classList[0]==="complete-btn"){
        target.parentElement.classList.toggle("completed");
    }

}
