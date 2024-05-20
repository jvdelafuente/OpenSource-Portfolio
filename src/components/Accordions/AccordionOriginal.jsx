import './AccordionOriginal.css';
import { useState } from 'react';
import img1 from '../../assets/PlaceholderIMG/placeholderIMG.jpg';

export default function AccordionOriginal() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="accordion-container">
      <div
        className={`card ${activeCard === 0 ? 'active' : ''}`}
        onClick={() => handleCardClick(0)}
      >
        <img className="background" src={img1} alt="" />
        <div className="card-content">
          <h2 className="description">Tittle placeholder</h2>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dignissimos reiciendis veniam deleniti illum voluptas perspiciatis laboriosam.</p>
        </div>
        <div className="backdrop">

        </div>
      </div>

      <div
        className={`card ${activeCard === 1 ? 'active' : ''}`}
        onClick={() => handleCardClick(1)}
      >
        <img className="background" src={img1} alt="" />
        <div className="card-content">
          <h2 className="description">Tittle placeholder</h2>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dignissimos reiciendis veniam deleniti illum voluptas perspiciatis laboriosam.</p>
        </div>
        <div className="backdrop"></div>
      </div>

      <div
        className={`card ${activeCard === 2 ? 'active' : ''}`}
        onClick={() => handleCardClick(2)}
      >
        <img className="background" src={img1} alt="" />
        <div className="card-content">
          <h2 className="description">Tittle placeholder</h2>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dignissimos reiciendis veniam deleniti illum voluptas perspiciatis laboriosam.</p>
        </div>
        <div className="backdrop"></div>
      </div>
    </div>
  );
}