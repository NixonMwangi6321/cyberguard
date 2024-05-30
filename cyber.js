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

let currentlyOpenCard = null;

function toggleContent(card) {
  // Close the currently open card if it's different from the clicked card
  if (currentlyOpenCard && currentlyOpenCard !== card) {
    const currentlyOpenContent = currentlyOpenCard.querySelector('.hidden-content');
    currentlyOpenContent.style.display = 'none';
  }

  const hiddenContent = card.querySelector('.hidden-content');
  if (hiddenContent.style.display === 'block') {
    hiddenContent.style.display = 'none';
    currentlyOpenCard = null;  // No card is open now
  } else {
    hiddenContent.style.display = 'block';
    currentlyOpenCard = card;  // Set the currently open card
  }
}
//Event card JS

document.addEventListener("DOMContentLoaded", function() {
  const eventCards = document.querySelectorAll(".event-card");

  eventCards.forEach(card => {
    card.addEventListener("click", function() {
      this.classList.toggle("open");
    });
  });
});

//JS for hiding newsbox over some tabs 

// Function to handle tab navigation and content visibility, including conditional news box display
function loadContent(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const newsBox = document.getElementById('newsBox');

  // Hide all tab contents
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // Show the selected tab
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }

  // Hide the news box on 'profile' and 'events' tabs, show on others
  if (tabId === 'profile' || tabId === 'events') {
    newsBox.style.display = 'none';
  } else {
    newsBox.style.display = 'block';
  }
}

// Set up event listeners for DOM content loaded
document.addEventListener("DOMContentLoaded", function() {
  // Initialize the default tab and setup links for navigation
  loadContent('home');  // Load the home tab by default

  const navLinks = document.querySelectorAll('.navbar-left a, .navbar-right a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('href').replace('#', '');
      loadContent(tabId);
    });
  });
});
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
    window.scrollTo(0, 0); // Scroll to the top of the page
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
      openTab(targetId); // Show the clicked tab and scroll to the top
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

// Reset scroll position when navigating between tabs using browser history
window.addEventListener('popstate', function(event) {
  window.scrollTo(0, 0);
});

