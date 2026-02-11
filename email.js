(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // <-- inserirai la tua Public Key
})();

const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",   // es: service_xxxxx
      "YOUR_TEMPLATE_ID",  // es: template_xxxxx
      this
    )
    .then(
      () => {
        statusMessage.textContent = "Messaggio inviato con successo!";
        form.reset();
      },
      (error) => {
        statusMessage.textContent =
          "Errore nell'invio. Riprova più tardi.";
        console.error(error);
      }
    );
});