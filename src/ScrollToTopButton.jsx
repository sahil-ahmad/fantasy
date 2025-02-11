import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Get the current route location

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Scroll to the top whenever the route changes
  useEffect(() => {
    scrollToTop(); // Scroll to top on route change
  }, [location]);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.button} // Inline styles
          aria-label="Scroll to top"
        >
          <img
            src="./images/element/top.png"
            alt="Scroll to top"
            style={styles.icon}
          />
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    // backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  icon: {
    width: "50px",
    height: "50px",
  },
};

export default ScrollToTopButton;
