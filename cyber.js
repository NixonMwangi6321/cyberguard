function loadContent(tabName) {
  // Hide all tab-content sections
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(section => {
    section.classList.remove('active');
  });

  // Show the requested tab-content section
  const activeSection = document.getElementById(tabName);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  // Scroll to the top of the page
  window.scrollTo(0, 0);
}

// Ensure the default tab is displayed on page load
document.addEventListener('DOMContentLoaded', () => {
  loadContent('home'); // Replace 'home' with the ID of your default section
});



function loadContent(section) {
  // Hide all content sections
  var sections = document.getElementsByClassName('content-section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  // Show the selected content section
  document.getElementById(section + '_content').style.display = 'block';
}

// Initial load
window.onload = function() {
  loadContent('home'); // Load the home content by default
}

// Function to handle tab navigation
function openTab(tabId) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function(tab) {
    tab.style.display = 'none';
  });

  // Show the selected tab content
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }
}

// Initial tab to show
openTab('home');

document.addEventListener("DOMContentLoaded", function() {
  // Function to handle tab navigation
  const navLinks = document.querySelectorAll('.navbar-left a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default anchor link behavior
      const targetId = this.getAttribute('onclick').match(/\(([^)]+)\)/)[1].replace(/'/g, '');
      openTab(targetId); // Show the clicked tab
    });
  });

  // Dropdown toggle
  const dropdownToggle = document.querySelector('.dropdown .dropbtn');
  const dropdownMenu = document.querySelector('.dropdown .dropdown-content');
  dropdownToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Hide dropdown menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});

// Function to update the width of the progress bar based on the scroll position
function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = (document.documentElement.scrollTop / scrollTotal) * 100;
  progressBar.style.width = scrollProgress + '%';
}

// Attach the function to the window scroll event
window.addEventListener('scroll', updateProgressBar);

// Get the current date
function getCurrentDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}

// Update the date display
function updateDateDisplay() {
  const dateDisplay = document.getElementById('date-display');
  if (dateDisplay) {
    dateDisplay.textContent = getCurrentDate();
  }
}

// Update date display when the page loads
window.onload = function() {
  updateDateDisplay();
}

// Update date display every second to keep it current
setInterval(updateDateDisplay, 1000);


// cyber.js

// Function to animate solution icons on hover
document.addEventListener('DOMContentLoaded', function() {
  const solutionIcons = document.querySelectorAll('.solution-icon');

  solutionIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.classList.add('animate__animated', 'animate__bounce');
      this.style.cursor = 'url("https://example.com/custom-cursor.png"), auto'; // Replace with your custom cursor URL
    });

    icon.addEventListener('mouseleave', function() {
      this.classList.remove('animate__animated', 'animate__bounce');
      this.style.cursor = 'default';
    });
  });
});

function loadContent(contentId) {
  // Hide all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected content
  const contentToShow = document.getElementById(contentId + '_content');
  if (contentToShow) {
    contentToShow.style.display = 'block';
  }
}

function loadContent(tabName) {
  // Hide all content sections
  var contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(function(section) {
    section.style.display = 'none';
  });

  // Show the content section corresponding to the selected tab
  var selectedSection = document.getElementById(tabName);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}

function loadContent(tabName) {
  // Hide all content sections
  var contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(function(section) {
    section.style.display = 'none';
  });

  // Show the content section corresponding to the selected tab
  var selectedSection = document.getElementById(tabName);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}
function toggleNewsBox(tabName) {
    var newsContainer = document.getElementById("news-container");

    // Check if the current page is one where the news box should be displayed
    if (tabName === "FAQ" || tabName === "market"|| tabName === "solution") {
        newsContainer.style.display = "block"; // Show the news box
    } else {
        newsContainer.style.display = "none"; // Hide the news box
    }
}
function loadContent(tabName) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the content section corresponding to the selected tab
    var selectedSection = document.getElementById(tabName);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        toggleNewsBox(tabName); // Call toggleNewsBox() with the current tabName
    }
}
