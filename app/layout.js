import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Provider store={store}>{children}</Provider> */}
      </body>
    </html>
  );
}
