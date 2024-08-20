function addTask(){
    const taskTesk = document.getElementById("taskInput").value

    const taskList =document.getElementById("task-list")


    if (taskTesk.length >0){
        // create a list item 
        const listItem = document.createElement("li") // <li></li>
      
        //create a span tag for text

        const spanTag = document.createElement("span")
        spanTag.textContent = taskTesk

        //append the span tag to list item 

        listItem.appendChild(spanTag)

        //append the listitem  to the task list 

        taskList.appendChild(listItem)

        //create delete button

        const deleteButton = document.createElement("button")

        deleteButton.textContent = "❌"
        deleteButton.id = "delete-button"

        // create comple button

        const completeButton = document.createElement("button")

        completeButton.textContent = "✅"
        completeButton.id = "complete-button"

        //append the delete button to listitem

        listItem.appendChild(deleteButton)

        //append the comple button to li 

        listItem.appendChild(completeButton)

        //delete button's work 

        deleteButton.addEventListener("click",()=>{
            taskList.removeChild(listItem)
        } )


        //clear the input field after adding the task
        document.getElementById("taskInput").value = ""

        //complete button's work

        completeButton.addEventListener("click",()=>{
            spanTag.style.textDecoration ="line-through"
        })


    }





}