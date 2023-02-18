// Author: Aman Arabzadeh

const clock = document.querySelector(".digits"); // get the class
// source I read about: https://developer.mozilla.org
// Update the time every second
setInterval(() => {
  // Get the current time
  const now = new Date();
  /// Source I read

  // Format the time as hours, minutes, and seconds, substring the useless part
  // take two digits of time.
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  // append the clock on the screen
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}, 5000); // delay 1 second
