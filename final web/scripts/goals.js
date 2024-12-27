      // Элементы DOM
      const goalForm = document.getElementById('goal-form');
      const goalInput = document.getElementById('goal-input');
      const goalsList = document.getElementById('goals-list');
      const completedGoalsList = document.getElementById('completed-goals-list');
      const progressFill = document.getElementById('progress-fill');
      const progressText = document.getElementById('progress-text');

      // Добавление новой цели
      document.getElementById('add-goal-btn').addEventListener('click', () => {
          const goalText = goalInput.value.trim();
          if (goalText !== '') {
              const goalItem = document.createElement('li');
              goalItem.textContent = goalText;
              goalItem.classList.add('goal-item');

              // Кнопка завершения
              const completeBtn = document.createElement('button');
              completeBtn.textContent = '✔';
              completeBtn.classList.add('complete-btn');
              completeBtn.addEventListener('click', () => {
                  moveToCompleted(goalItem);
              });

              goalItem.appendChild(completeBtn);
              goalsList.appendChild(goalItem);

              goalInput.value = ''; // Очистить поле ввода
              updateProgress(); // Обновить прогресс
          }
      });

      // Перемещение цели в завершённые
      function moveToCompleted(goalItem) {
          const completedItem = document.createElement('li');
          completedItem.textContent = goalItem.textContent.replace('✔', '').trim();
          completedGoalsList.appendChild(completedItem);

          // Удаление из текущих целей
          goalItem.remove();
          updateProgress(); // Обновить прогресс
      }

      // Обновление прогресса
      function updateProgress() {
          const totalGoals = goalsList.childElementCount + completedGoalsList.childElementCount;
          const completedGoals = completedGoalsList.childElementCount;

          if (totalGoals > 0) {
              const progress = Math.round((completedGoals / totalGoals) * 100);
              progressFill.style.width = `${progress}%`;
              progressText.textContent = `${progress}% выполнено`;
          } else {
              progressFill.style.width = `0%`;
              progressText.textContent = `0% выполнено`;
          }
      }

      // Элементы для работы с мечтами
    const dreamForm = document.getElementById('dream-form');
    const dreamInput = document.getElementById('dream-input');
    const dreamImage = document.getElementById('dream-image');
    const dreamList = document.getElementById('dream-list');

    // Функция добавления мечты
    document.getElementById('add-dream-btn').addEventListener('click', () => {
        const dreamText = dreamInput.value.trim();
        const dreamImageFile = dreamImage.files[0];

        if (dreamText !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('dream-item');

            const textElement = document.createElement('p');
            textElement.textContent = dreamText;

            const imageElement = document.createElement('img');
            if (dreamImageFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageElement.src = e.target.result;
                };
                reader.readAsDataURL(dreamImageFile);
            } else {
                imageElement.src = ''; // Заглушка, если изображение не добавлено
            }

            listItem.appendChild(textElement);
            listItem.appendChild(imageElement);
            dreamList.appendChild(listItem);

            // Очистить поля формы
            dreamInput.value = '';
            dreamImage.value = '';
        }
    });
