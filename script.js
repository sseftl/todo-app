const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', () => li.remove());

  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
});