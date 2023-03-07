import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
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
          <Navbar />
          <SearchBox />
          {children}
        </Provider>
      </body>
    </html>
  )
}
