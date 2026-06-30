// ./pages/_app.js
import { Provider } from 'jotai'

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}