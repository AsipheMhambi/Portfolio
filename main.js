document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    const sendEmail = (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        emailjs.sendForm('service_smaz2tv', 'template_c3yvopk', '#contactForm', 'YHUs78CNHJAZi-QwB')
            .then(() => {
                alert('Message sent successfully');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                alert('Message not sent. An error occurred. Please check the console for details.');
            });
    }

    contactForm.addEventListener('submit', sendEmail);
});