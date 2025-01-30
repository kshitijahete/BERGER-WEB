document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('paymentForm');

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Simulate payment processing (this is where you can add real payment gateway logic)
        alert('Payment is being processed...');
        
        // Redirect to a confirmation or success page
        window.location.href = 'confirmation.html';
    });
});
