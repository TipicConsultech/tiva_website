import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import Routes from './TivaRewire/Routes';
import PageRoutes from './TivaRewire/Routes';


// Keyframes for the pulse animation
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled component for the loading container
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white; // Uncomment if you want a black background
`;

// Styled component for the loading image with size adjustment
const LoadingImage = styled.img`
  animation: ${pulse} 2.5s infinite;
  width: 400px;  // Set the desired width
  height: 400px; // Set the desired height
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay time as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingContainer>
          <LoadingImage src={require("./TivaRewire/Logos/Tata_Logo.png")} alt="Loading..." />
        </LoadingContainer>
      ) : (
        <PageRoutes/>
      )}
    </div>
  );
}

export default App;
