// ./src/pages/_layout.js
import { Providers } from '../components/providers'

export default async function RootLayout({ children }) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}