import React from 'react';
import abstractIcon from '../assets/logos.png'; // Update this path to the location of your abstract icon image

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.gridContainer}>
        <div style={styles.column}>
          <h3 style={styles.heading}>Abstract</h3>
          <p style={styles.text}>Branches</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Resources</h3>
          <p style={styles.text}>Blog</p>
          <p style={styles.text}>Help Center</p>
          <p style={styles.text}>Release Notes</p>
          <p style={styles.text}>Status</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Community</h3>
          <p style={styles.text}>Twitter</p>
          <p style={styles.text}>Facebook</p>
          <p style={styles.text}>LinkedIn</p>
          <p style={styles.text}>Dribbble</p>
          <p style={styles.text}>Podcast</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.heading}>Company</h3>
          <p style={styles.text}>About Us</p>
          <p style={styles.text}>Careers</p>
          <p style={styles.text}>Legal</p>
          <h4 style={styles.subHeading}>Contact Us</h4>
          <p style={styles.text}>info@abstract.com</p>
        </div>
      </div>
      <div style={styles.bottomRight}>
        <img src={abstractIcon} alt="Abstract Icon" style={styles.icon} />
        <p style={styles.copyright}>© Copyright 2022</p>
        <p style={styles.companyName}>Abstract Studio Design, Inc.</p>
        <p style={styles.rightsReserved}>All rights reserved</p>
      </div>
    </div>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px 20px',
    position: 'relative',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    textAlign: 'left',
    margin: '0 auto',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  subHeading: {
    fontSize: '16px',
    marginTop: '20px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    marginBottom: '8px',
    color: '#ccc',
  },
  bottomRight: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    textAlign: 'left',
  },
  icon: {
    width: '30px', // Adjust size as needed
    height: '30px',
    marginBottom: '10px',
  },
  copyright: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  companyName: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  rightsReserved: {
    fontSize: '12px',
    color: '#ccc',
  },
};

export default Footer;
