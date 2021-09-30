// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {

 tasks.slice(taskId,checked)
  
  // implement the delete task.
  // You are given the task id
  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  const newTask = {
    id:tasks[tasks.length-1].id+1,
    title: taskTitle,
    category:selectedCategory,
    done:false
  };
  tasks.push(newTask);
  renderTasks(tasks, "tasks-list");
  // continue the code here
}

function addCategory() {
  const newCategory = getNewCategoryText();
      categories.push(newCategory);
      renderCategories(categories, "categories-list")

  // continue the code here
  alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  

  const newList= tasks.filter(task => task.category === selectedCategory)

  renderTasks(newList,"categories-list-filter")
  
  // continue the code here
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}


  // const btn = document.querySelector('#btn');
  // const sb = document.querySelector('#framework')
  // btn.onclick = (event) => {
  //     event.preventDefault();
  //     // show the selected index
  //     alert(sb.selectedIndex);
  // };   to be used to onclick command.