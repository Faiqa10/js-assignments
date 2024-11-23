
const tasks = document.querySelectorAll('#taskList li');
tasks.forEach(task => {
    task.addEventListener('click', () => {
        tasks.forEach(item => item.classList.remove('highlight')); 
        task.classList.add('highlight'); 
    });
});


const toggleBtn = document.getElementById('toggleBtn');
const textParagraph = document.getElementById('textParagraph');
toggleBtn.addEventListener('click', () => {
    if (textParagraph.style.display === 'none') {
        textParagraph.style.display = 'block';
    } else {
        textParagraph.style.display = 'none';
    }
});


const userForm = document.getElementById('userForm');
const nameDisplay = document.getElementById('nameDisplay');
const emailDisplay = document.getElementById('emailDisplay');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    nameDisplay.textContent = name;
    emailDisplay.textContent = email;
});


const body = document.body;
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    if (theme === 'dark') {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
    } else {
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.style.backgroundColor === 'rgb(51, 51, 51)' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
});


document.getElementById('checkStatus').addEventListener('click', () => {
    simulateAPICall()
        .then(response => alert(response))
        .catch(error => alert(error))
        .finally(() => alert("Operation completed"));
});

function simulateAPICall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Success: Data fetched!");
            } else {
                reject("Error: Failed to fetch data.");
            }
        }, 3000);
    });
}
