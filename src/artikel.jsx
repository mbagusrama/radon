import {Item} from './Artikel-item'
import  './artikel.css'

function Artikel() {
  return (
    <section className="Artikel">
      <div className="Row">
        <div className="Col">{Item()}</div>
        <div className="Col">{Item()}</div>
        <div className="Col">{Item()}</div>
        <div className="Col">{Item()}</div>
        <div className="Col">{Item()}</div>
        <div className="Col">{Item()}</div>
        <div className="Col">{Item()}</div>
        <div className="Col">{Item()}</div>
      </div>
      <div className='pages'>
        <div className='page'></div>
        <div className='page'></div>
        <div className='page'></div>
        <div className='page'></div>
        <div className='page'></div>
      </div>
    </section>
  );
}

export default Artikel;