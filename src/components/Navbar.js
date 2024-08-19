import React from 'react';
import iconImage from '../assets/logos.png';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftSection}>
        <img src={iconImage} alt="Icon" style={styles.icon} />
        <span style={styles.text}>Abstract</span>
        <div style={styles.verticalLine}></div>
        <span style={styles.text}>Help Center</span>
      </div>
      <button style={styles.button}>Submit a Request</button>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '20px', // Adjust size as needed
    height: '20px',
    marginRight: '10px',
  },
  text: {
    marginRight: '15px',
    fontSize: '16px',
  },
  verticalLine: {
    borderLeft: '1px solid #fff',
    height: '20px',
    marginRight: '15px',
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Navbar;
