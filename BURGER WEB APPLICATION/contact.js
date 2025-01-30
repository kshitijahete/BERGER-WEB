document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simulate sending message (this is where you can add real form submission logic)
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Clear the form
        contactForm.reset();
    });
});
