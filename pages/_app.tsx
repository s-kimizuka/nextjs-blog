import '../styles/global.css';
import { AppProps } from '../node_modules/next/app';

function App({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />;
}

export default App;