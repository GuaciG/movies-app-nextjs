import { Navigation } from './shared/Navigation'
import '../styles/globals.css'
import { Montserrat } from 'next/font/google'

const font = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Finder Movie App - Nextjs 13</title>
      </head>
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
