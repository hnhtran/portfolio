import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='grid grid-cols-12 gap-6  px-5 lg:px-48 my-14'>
    <div className='lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center'>
      <Sidebar />
    </div>
    <div className='lg:col-span-9 bg-white rounded-2xl col-span-12'>    
    <Component {...pageProps} />
    </div>
  </div>
}
