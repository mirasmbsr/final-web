        // График эмоций
        const ctx = document.getElementById('emotions-chart').getContext('2d');
        const emotionsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                datasets: [{
                    label: 'Уровень эмоций',
                    data: [3, 5, 7, 8, 6, 9, 4],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    borderWidth: 2,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // Статистика целей
        const completedGoalsStat = document.getElementById('completed-goals-stat');
        const ongoingGoalsStat = document.getElementById('ongoing-goals-stat');
        const totalGoalsStat = document.getElementById('total-goals-stat');

        function updateStats(completed, ongoing) {
            const total = completed + ongoing;
            completedGoalsStat.textContent = completed;
            ongoingGoalsStat.textContent = ongoing;
            totalGoalsStat.textContent = total;
        }

        // Пример статистики
        updateStats(5, 3);