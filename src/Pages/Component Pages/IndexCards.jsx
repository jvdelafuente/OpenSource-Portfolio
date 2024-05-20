import CardAbout1 from './Cards/Portfolio/CardsAbout'
import CardAbout2 from './Cards/Portfolio/CardsAboutTools'
import CardBlur from './Cards/CardsBlur'
import './Indexcards.css'

export default function IndexCards() {
  return (
    <div className='index-card-container'>
      <CardBlur />
      <div className="index-lane-separate"></div>
      <CardAbout2 />
      <div className="index-lane-separate"></div>
      <CardAbout1 />
      <div className="index-lane-separate"></div>
    </div>
  )
}
