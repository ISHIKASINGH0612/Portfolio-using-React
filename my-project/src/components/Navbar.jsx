


import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const handleInstagramClick = () => {
    alert('Follow @ishi_arth on Instagram!');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.spacer}></div> {/* This will take up the remaining space and push the icons to the right */}
      <div style={styles.iconContainer}>
        <a href="https://www.linkedin.com/in/ishika-singh-236552226/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaLinkedin style={styles.icon} />
        </a>
        <a href="https://github.com/ISHIKASINGH0612" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaGithub style={styles.icon} />
        </a>
        <a href="https://x.com/Ishi_arth" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaTwitter style={styles.icon} />
        </a>
        <button onClick={handleInstagramClick} style={styles.iconLink}>
          <FaInstagram style={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

// Inline styles
const styles = {
  navbar: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 0',
  },
  spacer: {
    flexGrow: 1, // This will take up the remaining space and push the icons to the right
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px', // Adjust gap between icons
    fontSize: '24px', // Adjust icon size
    marginRight: '8px',
  },
  iconLink: {
    color: 'inherit', // Inherit text color from parent element
    textDecoration: 'none', // Remove underline from links
  },
  icon: {
    cursor: 'pointer', // Change cursor to pointer on hover
  },
};

export default Navbar;

