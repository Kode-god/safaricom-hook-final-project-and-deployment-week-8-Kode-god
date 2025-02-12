// Handles the form submission
document.getElementById("booking-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Gets form values
  const roomType = document.getElementById("room-type").value;
  const checkIn = document.getElementById("check-in").value;
  const checkOut = document.getElementById("check-out").value;
  const guests = document.getElementById("guests").value;

  // Validate the dates
  if (new Date(checkOut) <= new Date(checkIn)) {
    alert("Check-out date must be after check-in date.");
    return;
  }

  // booking confirmation
  alert(`Booking confirmed!\nRoom Type: ${roomType}\nCheck-In: ${checkIn}\nCheck-Out: ${checkOut}\nGuests: ${guests}`);

  // Resets the form
  document.getElementById("booking-form").reset();
});