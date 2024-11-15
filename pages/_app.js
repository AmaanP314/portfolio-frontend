import { ThemeProvider } from '../components/ThemeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
