document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value);
  });
});

function addToDo(item){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  p.textContent = `${item}  `
  btn.textContent = ' X '
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
  console.log(p)
}