import React from 'react';

const App = () => {
  // Access the API key from environment variables
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div>
      <h1>Hello from React boilerplate!</h1>
      <p>Your API Key: {apiKey}</p>
    </div>
  );
};

export default App;
