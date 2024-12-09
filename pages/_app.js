import { ThemeProvider } from '../components/ThemeContext';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Trigger a dummy request to wake up the server
    const wakeUpServer = async () => {
      try {
        await fetch('https://portfolio-backend-3upc.onrender.com/api/health-check/');
        console.log('Backend server triggered successfully');
      } catch (error) {
        console.error('Failed to trigger backend server:', error);
      }
    };

    wakeUpServer();
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
