document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can add more logic here to handle the form submission, e.g., send data to a server
        // For now, we'll just display an alert

        alert(`Feedback submitted successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Reset the form after submission
        form.reset();
    });

    // Fade-in effect for content
    const contents = document.querySelectorAll('.content');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    contents.forEach(content => {
        observer.observe(content);
    });
});

