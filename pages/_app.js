import '../styles/globals.css'
import { CosineProvider } from '../context/CosineContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return( 
    <MoralisProvider
        serverUrl='https://yjckm9levsfb.usemoralis.com:2053/server'
        appId='orGqBskEYyxqQNrtiwFSLko5bGz78gi15agnaVNd'
        >
      <CosineProvider>
          <Component {...pageProps} />
      </CosineProvider>
    </MoralisProvider>
   )
}

export default MyApp
