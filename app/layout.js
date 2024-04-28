'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { Inter } from 'next/font/google'
import store from './redux/store'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
        {children}
        </body>
      </Provider>
    </html>
  )
}