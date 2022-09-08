window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_task = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task_value = input.value;

    if (!task_value) {
      alert('Please enter task to add');
      return;
    }

    //added div task
    const task = document.createElement('div');
    task.classList.add('task');
    //added div content
    const content = document.createElement('div');
    content.classList.add('content');

    //appending
    task.appendChild(content);

    // creating inpunt task
    const text_input = document.createElement('input');
    text_input.type = 'text';
    text_input.classList.add('text');
    text_input.value = task_value;
    text_input.setAttribute('readonly', 'readonly');

    content.appendChild(text_input);

    const action_div = document.createElement('div');
    action_div.classList.add('actions');

    const btnedit = document.createElement('button');
    btnedit.innerHTML = 'Edit';
    btnedit.classList.add('edit');

    const btndelete = document.createElement('button');
    btndelete.innerHTML = 'Delete';
    btndelete.classList.add('delete');

    action_div.prepend(btnedit);
    action_div.appendChild(btndelete);

    content.appendChild(action_div);
    list_task.appendChild(task);
    input.value = '';

    //edit button

    btnedit.addEventListener('click', () => {
      if (btnedit.innerText == 'Edit') {
        text_input.removeAttribute('readonly');
        text_input.focus();
        btnedit.innerText = 'Save';
      } else {
        text_input.setAttribute('readonly', 'readonly');
        btnedit.innerText = 'Edit';
      }
    });

    btndelete.addEventListener('click', () => {
      list_task.removeChild(task);
    });
  });
});
