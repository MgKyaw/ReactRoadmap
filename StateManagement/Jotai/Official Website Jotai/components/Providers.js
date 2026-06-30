// ./src/components/providers.js
'use client'

import { Provider } from 'jotai'

export const Providers = ({ children }) => {
  return (
    <Provider>
      {children}
    </Provider>
  )
}


// ./app/layout.js
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
