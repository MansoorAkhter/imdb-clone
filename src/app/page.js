import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className='text-blue-800 text-[50px] font-bold'>NEXT 13.2</h1>
    </main>
  )
}
