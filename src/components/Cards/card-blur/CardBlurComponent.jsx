import './cardblurcomponent.css'
import img1 from '../../../assets/PlaceholderIMG/placeholderIMG.jpg'

export default function CardBlurComponent() {
  return (
    <div className="card-blur">
      <div className="img-container">
        <img src={img1} alt="" />
      </div>
      <div className="content-container">
        <h2>Tittle Placeholder</h2>
        <p>Qui molestias est provident asperiores corporis dolorem explicabo consequatur aspernatur ipsam saepe voluptatibus, officia tempora vero soluta, ea cumque dolorum? Totam, neque.</p>
      </div>
    </div>
  )
}
