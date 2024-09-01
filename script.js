document.getElementById('workoutForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const workoutType = document.getElementById('workoutType').value;
    const duration = parseInt(document.getElementById('duration').value);

    if (workoutType && duration > 0) {
        const caloriesBurned = calculateCalories(workoutType, duration);
        logWorkout(workoutType, duration, caloriesBurned);
        updateTotalCalories(caloriesBurned);
    } else {
        alert('Please fill in all fields correctly.');
    }
});

let totalCaloriesBurned = 0;

function calculateCalories(type, duration) {
    let caloriesPerMinute;

    switch (type) {
        case 'Running':
            caloriesPerMinute = 10;
            break;
        case 'Yoga':
            caloriesPerMinute = 4;
            break;
        case 'Strength Training':
            caloriesPerMinute = 8;
            break;
        default:
            caloriesPerMinute = 0;
    }

    return caloriesPerMinute * duration;
}

function logWorkout(type, duration, calories) {
    const workoutLog = document.getElementById('workoutLog');
    const logItem = document.createElement('li');
    logItem.textContent = `${type} - ${duration} minutes - ${calories} kcal`;
    workoutLog.appendChild(logItem);
}

function updateTotalCalories(calories) {
    totalCaloriesBurned += calories;
    document.getElementById('totalCalories').textContent = totalCaloriesBurned;
}
