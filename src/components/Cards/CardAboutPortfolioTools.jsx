import "./cardaboutportfoliotools.css";
import img1 from '../../assets/PlaceholderIMG/placeholderIMG.jpg'

export default function CardAboutPortfolioTools() {
  return (
    <div className="card-img">
      <div className="card-img-container">
        <img src={img1} alt="" />
      </div>
      <div className="card-p-container">
        <h2>Tittle placeholder</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius culpa
          repellat sint.
        </p>
      </div>
      <div className="about-button">
        <button>Click here</button>
      </div>
    </div>
  );
}
