document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value);
  });
});

function addToDo(item){
  let p = document.createElement('p')
  p.textContent = item
  console.log(p)
}