function handleSubmit(event) {
    event.preventDefault(); 

    const emailInput = document.querySelector('input[name="email"]');
    if (emailInput.checkValidity()) {

        window.location.href = '../Subscriptions/sub.html';
    }
}