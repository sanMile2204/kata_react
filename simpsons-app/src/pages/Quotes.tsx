import { useEffect, useState } from "react";
import { useSimpsonsQuotes } from "../hooks/useSimpsonsQuotes";
import { useNavigate } from "react-router-dom";
import { QuotesList } from "../components/QuotesList";
import simpsons_logo from "../images/logo.svg";


export default function Quotes() {

    const [error, setError] = useState<string>('');
    const [search, updateSearch] = useState<string>('homer simpson');
    const {quotes, getQuotes, loading} = useSimpsonsQuotes({search});
    const navigate = useNavigate();
  
    const handleSubmit = (event: any)=> {
      event.preventDefault();
      const field = new FormData(event.target);
      const search = field.get('search')?.toString();
      updateSearch(search ? search : '');
      getQuotes();
    }
  
    const handleChange = (event: any) => {
      updateSearch(event.target.value);
    }

    const handleClickLogo = () => {
      navigate("/home");
    };
  
    const handleClick = () => {
      navigate('/notfound');
    };

    useEffect(() => {
      if(search === '') {
        setError('Debe poner un texto');
      } else {
        setError('');
      }
    }, [search]);

    return (
        <div className='quotes_page'>
          <header className="App-header">
            <div className='images-header'>
              <img src={simpsons_logo} className="simpsons-logo" alt="simpsons-logo" onClick={handleClickLogo}/>
            </div>
          </header>
          <main>
            <h1 className='title'>Discover some Simpsons quotes</h1>
            <section className='search–section'>
              <form onSubmit={handleSubmit}>
                <input placeholder="Search" className='searchBar' name="search" onChange={handleChange} autoComplete='off'/>
              </form>
              {error && <p className='error-text'><i>{error}</i></p>}
              </section>
              <section>
                {loading ? <p className='loading-text'>Cargando...</p> : <QuotesList quotes={quotes}/>}
              </section>
              <aside>
              <button className='yellow-button' onClick={handleClick}>Show me more</button>
              </aside>
          </main>
        </div>
      );
}