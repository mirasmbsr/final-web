 // Отображение значения шкалы эмоций
const emotionalScale = document.getElementById('emotional-scale');
const emotionValue = document.getElementById('emotion-value');
emotionalScale.addEventListener('input', () => {
emotionValue.textContent = emotionalScale.value;
});

// Логика для To-Do List
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoItems = document.getElementById('todo-items');

// Функция для добавления задачи
addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span>
            <div>
                <button class="complete-todo">Выполнено</button>
                <button class="delete-todo">Удалить</button>
            </div>
        `;
        todoItems.appendChild(li);
        todoInput.value = ''; // Очистить поле ввода
    }
});

// Удаление или выполнение задачи
todoItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-todo')) {
        e.target.closest('li').remove();
    }
    if (e.target.classList.contains('complete-todo')) {
        const li = e.target.closest('li');
        li.classList.toggle('completed');
    }
});



// Логика для добавления благодарностей
const gratitudeInput = document.getElementById('gratitude-input');
const addGratitudeBtn = document.getElementById('add-gratitude-btn');
const gratitudeList = document.getElementById('gratitude-list');

// Функция для добавления записи благодарности
addGratitudeBtn.addEventListener('click', () => {
    const gratitudeText = gratitudeInput.value.trim();
    if (gratitudeText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${gratitudeText} <button class="delete-gratitude">Удалить</button>`;
        gratitudeList.appendChild(li);
        gratitudeInput.value = ''; // Очистить поле ввода
    }
});

// Удаление записи благодарности
gratitudeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-gratitude')) {
        e.target.parentElement.remove();
    }
});
