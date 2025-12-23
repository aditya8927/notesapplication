function addnotes() {
    const input = document.getElementById("inputnotes");
    const tasklist = document.getElementById("noteslist");

    if (input.value.trim() === "") return; // ignore empty input

    const newTask = document.createElement('li');
    newTask.className = 'note-item';
    
    const text = document.createElement('span');
    text.textContent = input.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = () => tasklist.removeChild(newTask);

    newTask.appendChild(text);
    newTask.appendChild(deleteBtn);
    tasklist.appendChild(newTask);

    input.value = '';
}



