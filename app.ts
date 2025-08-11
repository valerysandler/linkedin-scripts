import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Load environment variables from .env file

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());    
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Define a simple route
app.get('/', (req, res) => {
  res.send('LinkedIn Scripts API is running!');
});

// Start the server
const startServer = async () => {
  try {
    app.listen(3000);
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();

