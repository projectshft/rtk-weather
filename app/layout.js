'use client'
import store from './store/configureStore';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
        </body>
    </html>
  )
}
