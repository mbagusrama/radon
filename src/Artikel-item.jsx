import thumbnail from './img/Rectangle 4.png'
import './Artikel-item.css'

export function Item() {
  return (
    <div className="item">
      <img className='Thumbnail' src={thumbnail} alt="thumbnail artikel" />
      <h1>TITLE GOES HERE</h1>
    </div>
  );
}

export default Item;