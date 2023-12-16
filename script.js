var selectedEnergy = 'low'; // Default value
var selectedTime = '10'; // Default value

function selectEnergy(energy) {
    selectedEnergy = energy;
    updateButtonStyles(document.querySelectorAll('.energy-button'), energy, true);
    suggestTasks();
}

function selectTime(time) {
    selectedTime = time;
    updateButtonStyles(document.querySelectorAll('.time-button'), time, false);
    suggestTasks();
}

function updateButtonStyles(buttons, value, isEnergyButton) {
    buttons.forEach(button => {
        var buttonText = button.innerText.trim();
        if ((isEnergyButton && buttonText.toLowerCase() === value) ||
            (!isEnergyButton && (
                (value === '60' && buttonText === '1 hour') ||
                (value === '120' && buttonText === '2 hours') ||
                (value === '240' && buttonText === '4 hours') ||
                (value === 'full' && buttonText === 'Full day') ||
                (buttonText === value + ' minutes')
            ))) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function suggestTasks() {
    var suggestions = document.getElementById("suggestions");
    var tasks = {
        low: {
            "10": ["Meditate", "Read a short article", "Quick sketch", "Listen to a song", "Write a haiku"],
            "30": ["Go for a walk", "Do light stretching", "Make a snack", "Read poetry", "Play a game"],
            "60": ["Watch a TV episode", "Cook a simple meal", "Yoga session", "Journaling", "Crafting"],
            "120": ["Visit a museum", "Long walk in nature", "Read a book", "Coffee with friends", "Explore a new place"],
            "240": ["Half-day workshop", "DIY home project", "Watch a movie", "Bake a cake", "Visit a local market"],
            "full": ["Day trip", "Marathon movie watching", "Attend a seminar", "Go on a hike", "Visit a theme park"]
        },
        normal: {
            "10": ["Brainstorm ideas", "Quick sketching", "Water plants", "Plan your day", "Dance to a song"],
            "30": ["Journaling", "Bake something simple", "Short workout", "Read a chapter", "Practice an instrument"],
            "60": ["Exercise session", "Gardening", "Cook a new recipe", "Clean a room", "Learn a new skill"],
            "120": ["Read a book", "Painting", "Go biking", "Study a topic", "Play a board game"],
            "240": ["Explore a new hobby", "Write a short story", "Visit a friend", "Go shopping", "Work on a puzzle"],
            "full": ["Hiking trip", "Start a DIY project", "Day at the beach", "Attend a workshop", "Go sightseeing"]
        },
        high: {
            "10": ["High-intensity workout", "Speed cleaning", "Organize a space", "Brainstorm session", "Quick run"],
            "30": ["Write rapidly", "Practice a musical instrument", "Do a complex puzzle", "Engage in a debate", "Short but intense workout"],
            "60": ["Deep clean a room", "Learning a new skill", "Cook an elaborate meal", "Work on a hobby", "Plan a project"],
            "120": ["Plan and start a new project", "Long bike ride", "Attend a fitness class", "Visit an escape room", "Explore a nature trail"],
            "240": ["Create a detailed artwork", "Study a complex topic", "Start writing a story", "Complete a fitness challenge", "Organize a small event"],
            "full": ["Organize a major event", "Long-distance run", "Participate in a marathon", "Complete a large-scale project", "Host a day-long workshop"]
        }
    };

    suggestions.innerHTML = "<u>Suggested Tasks</u> <ul>" +
        tasks[selectedEnergy][selectedTime].map(task => "<li>" + task + "</li>").join("") +
        "</ul>";
}

window.onload = function() {
    selectEnergy(selectedEnergy);
    selectTime(selectedTime);
};
