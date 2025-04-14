function showPopupMessage() {
    alert("Thank you for clicking! Have a nice day. :)");
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("popupBtn");
    if (button) {
      button.addEventListener("click", showPopupMessage);
    }
  });
  