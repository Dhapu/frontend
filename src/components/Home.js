import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HelpCenter from './HelpCenter'; // Import HelpCenter component

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:5000/cards/search?title=${query}`);
      setCards(response.data);
    } catch (error) {
      console.error('Error searching cards:', error);
    }
  };
  return (
    <div>
      <HelpCenter onSearch={handleSearch} />
    <div style={styles.Container}>
    
    <div style={styles.gridContainer}>
      {cards.map((card, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.cardHeading}>{card.title}</h2>
          <hr style={styles.cardLine} />
          <p style={styles.cardDescription}>{card.description}</p>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
};

const styles = {
  Container: {
    backgroundColor: '#f0f0f0',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    padding: '20px',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    backgroundColor: '#e3e3e3', // Light gray background
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '50%', // Reduce width of the card box
    textAlign: 'left', // Align text to the left
  },
  cardHeading: {
    fontSize: '20px', // Adjusted font size
    marginBottom: '8px',
  },
  cardLine: {
    border: 'none',
    height: '2px',
    backgroundColor: '#000',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '14px', // Adjusted font size
    lineHeight: '1.5',
    color: '#333',
  },
};

export default Home;
