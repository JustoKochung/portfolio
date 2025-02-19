<<<<<<< HEAD
// js/scripts.js
=======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function () {
        const details = this.querySelector('.details');
        if (details) {
            details.classList.toggle('hidden');
        }
    });
});

document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});
>>>>>>> 5d509905a4b4fe2c43c35e9d98b6301cdc69964e
