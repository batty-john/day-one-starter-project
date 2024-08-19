import Header from "../components/Header";
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);

  return (
    <div className="container-fluid px-0">
      <main className="main">
        <Header />
        <div className="row mx-0">
          <div className="col px-0">
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default MyApp;