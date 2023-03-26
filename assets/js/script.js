//! Put the class name that you want to use
// Class name that will be added to the navbar element in the "scrolled" state
const SCROLLED_STATE_CLASS = "my-bg-white"

//! Use your own ID or selector
// The id of navigation bar HTML element
const NAVBAR_ID = "my-nav"

// Get the navigation bar element
const navbar = document.getElementById(NAVBAR_ID)

// OnScroll event handler
const onScroll = () => {

  // Get scroll value
  const scroll = document.documentElement.scrollTop

  // If scroll value is more than 0 - means the page is scrolled, add or remove class based on that
  if (scroll > 0) {
    navbar.classList.add(SCROLLED_STATE_CLASS);
  } else {
    navbar.classList.remove(SCROLLED_STATE_CLASS)
  }
}

// Use the function
window.addEventListener('scroll', onScroll)