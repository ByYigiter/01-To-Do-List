
const add=document.querySelector("#push")
const task =document.querySelector("#newtask input")
const tasks=document.getElementById("tasks")

add.onclick =function(){
    if(task.value.length ==0){
        alert("Pelase enter")
    }
else{
    tasks.innerHTML+=
    `<div class="task">
    <span id ="taskname">${task.value}</span>
    <button class="delete">
    <i class="fa-solid fa-trash-can"></i>
    </button>
    </div>`

    
    
    let current =document.querySelectorAll(".delete");

    for(let i =0;i<current.length;i++){

        current[i].onclick=function(){
            this.parentElement.remove()
    }
}
    let drawLine =document.querySelectorAll(".task");
    for(let i=0;i<drawLine.length;i++){
        drawLine[i].onclick=function(){
            this.classList.toggle("completed");
        }
    }

    task.value="";
}

}
