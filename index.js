// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // Assuming you have a maximum width for the container (e.g., 400px)
    const maxWidth = 400; // Change this value to your container's maximum width
  
    if (left < maxWidth) {
      dodger.style.left = `${left + 1}px`;
    }
}