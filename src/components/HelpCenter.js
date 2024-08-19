import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import axios from 'axios';

const HelpCenter = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>How can we help?</h1>
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.searchInput}
        />
        <div style={styles.searchIcon} onClick={handleSearch}>
          <FiArrowRight />
        </div>
      </div>
      <div style={styles.spacer}></div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#a2a8d3',
    padding: '20px 0',
    textAlign: 'center',
    borderRadius: '2px',
  },
  heading: {
    color: '#000',
    fontSize: '54px',
    marginBottom: '20px',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '100%',
    maxWidth: '500px',
    border: '1px solid #fff',
    borderRadius: '2px',
    backgroundColor: '#fff',
    marginBottom: '20px',
  },
  searchInput: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
    fontSize: '16px',
  },
  searchIcon: {
    padding: '10px',
    fontSize: '20px',
    cursor: 'pointer',
  },
  spacer: {
    height: '20px',
  },
};

export default HelpCenter;
