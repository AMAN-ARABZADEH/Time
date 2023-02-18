function updateTime() {
  // Get the current time
  const now = new Date();
  /// Source I read
  // https://www.oreilly.com/library/view/javascript-cookbook-3rd/9781492055747/ch04.html
  // Format the time as hours, minutes, and seconds
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Update the clock display with the new time
  const clock = document.querySelector(".digits");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Call the function once to set the initial time
updateTime();
