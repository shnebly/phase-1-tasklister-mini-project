document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value);
    form.reset()
  });
});

function addToDo(item){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', function(e){
    e.target.parentNode.remove() // here e.target refers to the clicked target and since we are wanting to remove itself and the task (the parent), we grab the parentNode before calling remove() - this will remove the parent and in turn the child(btn)
  })
  p.textContent = `${item}  `
  btn.textContent = ' X '
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}
