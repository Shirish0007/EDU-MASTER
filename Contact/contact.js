document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('active');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentNode.classList.remove('active');
            }
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value.trim() === '') {
            setErrorFor(name, 'Name cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(name);
        }

        if (email.value.trim() === '') {
            setErrorFor(email, 'Email cannot be blank');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            setErrorFor(email, 'Email is not valid');
            isValid = false;
        } else {
            setSuccessFor(email);
        }

        if (message.value.trim() === '') {
            setErrorFor(message, 'Message cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(message);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        if (!errorMessage) {
            const msgElement = document.createElement('small');
            msgElement.className = 'error-message';
            msgElement.textContent = message;
            formGroup.appendChild(msgElement);
        } else {
            errorMessage.textContent = message;
        }
        
        formGroup.className = 'form-group error';
    }

    function setSuccessFor(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        if (errorMessage) {
            formGroup.removeChild(errorMessage);
        }
        
        formGroup.className = 'form-group success';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});



function handleSubmit(event) {
    event.preventDefault(); 

    const emailInput = document.querySelector('input[name="email"]');
    if (emailInput.checkValidity()) {

        window.location.href = '../Subscriptions/sub.html';
    }
}