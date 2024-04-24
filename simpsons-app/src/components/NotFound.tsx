import { useEffect } from 'react';
import './NotFound.css';
import { NavLink } from 'react-router-dom';

export default function NotFoundPage() {

  useEffect(() => {
    document.body.style.backgroundColor = '#FFE20A';
    return () => {
      document.body.style.backgroundColor = '#01AED9';
    }
  }, []);

    return (
        <div className='notfound_page'>
        <header>
          <p className='errorTitle'>404</p>
        </header>
        <section>
        </section>
        <footer>
          <p><strong>D’OH we couldn’t find the page you’re looking for</strong></p>
          <p><NavLink to="/quotes">Back</NavLink></p>
        </footer>
      </div>
      )
}