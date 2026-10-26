const whatsappNumber = "255713204051";

function openWhatsApp() {
const message =
"Hello BEAUTEX SPA! I would like to book an appointment.";

const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

window.open(whatsappURL, "_blank");

}

const bookingButton = document.getElementById("booking-button");

if (bookingButton) {
bookingButton.addEventListener("click", openWhatsApp);
}

const contactBookingButton = document.getElementById(
"contact-booking-button"
);

if (contactBookingButton) {
contactBookingButton.addEventListener("click", openWhatsApp);
}