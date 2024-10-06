import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Optional: using react-icons for the arrow icon

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={scrollToTop}
            className="p-4 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-950 transition duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollUpButton;
