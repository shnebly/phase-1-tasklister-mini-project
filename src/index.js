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
  btn.addEventListener('click', function(){
    btn.remove()
  })
  p.textContent = `${item}  `
  btn.textContent = ' X '
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

// need to add function to X btn
// need to remove previos entry from task input 