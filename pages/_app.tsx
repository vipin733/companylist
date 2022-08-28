import '../styles/globals.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
