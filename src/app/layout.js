import Header from './components/Header'
import './globals.css'
import Provider from './Provider'

export const metadata = {
  title: 'IMDB-clone',
  description: 'This is the IMDB clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>

      </body>
    </html>
  )
}
