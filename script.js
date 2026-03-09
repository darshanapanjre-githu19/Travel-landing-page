function toggleMenu(){

let nav = document.getElementById("navMenu");

nav.classList.toggle("show");

}

function scrollToBooking(){

document.getElementById("booking").scrollIntoView({
behavior:"smooth"
});

}

function bookTrip(){

alert("Your trip request has been submitted!");

return false;

}