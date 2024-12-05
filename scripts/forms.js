function handleFormSubmit(event) {
    event.preventDefault();
    
    alert('Your email has been received. Please allow me to contact you back within 48 hours.');

    document.querySelector('form').reset();
}