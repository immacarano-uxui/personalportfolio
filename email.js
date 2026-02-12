(function() {
    // Inizializzazione con la tua Public Key verificata dallo screenshot
    emailjs.init("6L5hLDMadD0fwSwTZ"); 
})();

window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Cambio testo bottone per dare feedback all'utente
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Invio in corso...';
            submitBtn.disabled = true;

            // Invio tramite i tuoi ID EmailJS
            emailjs.sendForm('service_3w1hea8', 'template_vp58beq', this)
                .then(function() {
                    alert('Messaggio inviato con successo! 🎉');
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, function(error) {
                    alert('Errore nell\'invio: ' + JSON.stringify(error));
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
}
