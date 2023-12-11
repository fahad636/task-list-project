const taskButtonForm = document.querySelector("#task-form");
  taskButtonForm.addEventListener("submit",function(event) {
  event.preventDefault();
  const taskInput = document.querySelector("#task");
  const taskInputValue = taskInput.value;
  if (!taskInputValue) {
	alert("please fill input");
	return;
	}	
  const collection = document.querySelector(".collection");
  const selectTask = document.querySelector("#task-title");
  const createElement = document.createElement("li")
	  createElement.className = "collection-item";
 	  createElement.innerHTML = `${taskInputValue}
								 <a href="#" class ="delete-item secondary-content">
								 <i class="fa fa-remove" ></i> </a>`
	  collection.append(createElement);
	  taskInput.value = "";
      selectTask.innerText = "Tasks";
	});
  const collection = document.querySelector(".collection");
        collection.addEventListener("click",function(event) {
        event.preventDefault();
  				if (event.target.className === "fa fa-remove") {
    			if (confirm("are you sure?")) {
			      event.target.parentElement.parentElement.style.backgroundColor = "red";
      			event.target.parentElement.parentElement.style.color = "yellow";
      			setTimeout(()=> {
								event.target.parentElement.parentElement.remove();
							 },500);
                          }
                        }
                     });
  const searchTask = document.querySelector("#filter");
   searchTask.addEventListener("keyup",function(event) {
  const current = event.target;
  const currentValue = current.value;
  const selectAllCollection = document.querySelectorAll(".collection-item");
        selectAllCollection.forEach(function(singleElement) {
        if (singleElement.innerText.toLowerCase().indexOf(currentValue.toLowerCase()) === -1) {
             singleElement.style.display = "none";
          }else {
             singleElement.style.display = "block";
            }
         })
     })
 const clearTaskButton = document.querySelector(".clear-tasks");
       clearTaskButton.addEventListener("click",function(event) {
       event.preventDefault();
 const collection = document.querySelector(".collection");
 const selectTask = document.querySelector("#task-title");
   if (confirm("are you sure All delete")) {
       collection.innerHTML = "";
       selectTask.innerText = "Tasks Cleared 😀";
      };
   })