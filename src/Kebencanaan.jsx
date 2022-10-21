import logo from './img/kebencanaan.png';
import searchlogo from './img/Vector search.png';
import './Kebencanaan.css'

function Kebencanaan() {
  return (
    <section className="Kebencanaan">
      <header className="Kebencanaan-header">
        <div className="Kebencanaan-search">
          <h1 className="Kebencanaan-title">Articles</h1>
          <p className="Kebencanaan-text">Discover more about environmental pollutions</p>
          <div className="search-bar">
            <img src={searchlogo} className="search-logo" alt="#" />
            <input type="text" placeholder="Enter a title or Author"></input>
          </div>
        </div>
        <img className="kebencanaan-logo" src={logo} alt="kebencanaan" />
      </header>
    </section>
  );
}

export default Kebencanaan;