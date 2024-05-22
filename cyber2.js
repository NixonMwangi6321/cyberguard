// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown button
    var dropdownBtn = document.querySelector(".dropbtn");
    
    // Get the dropdown content
    var dropdownContent = document.querySelector(".dropdown-content");
    
    // Toggle the dropdown menu when the dropdown button is clicked
    dropdownBtn.addEventListener("click", function() {
      dropdownContent.classList.toggle("show");
    });
  
    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener("click", function(event) {
      if (!event.target.matches(".dropbtn")) {
        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }
      }
    });
  });
  let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px"; // Adjust the navbar height
  }
  prevScrollPos = currentScrollPos;
}

    