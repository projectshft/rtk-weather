'use client';
import './globals.css'
import { Provider } from 'react-redux';
import store from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';


export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body><Provider store={store}>{children}</Provider></body>
      </html>
    
  )
}
