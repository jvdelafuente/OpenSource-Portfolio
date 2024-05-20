/* eslint-disable react/no-unescaped-entities */
import '../../Pages/Component Pages/Indexcards.css'
import LSBalls from './LSBalls'
import LSLines from './LSLines'
import LSSquare from './LSSquare'
import ScrollInfinite from './ScrollInfinite'

export default function IndexAnimations() {
  return (
    <div className='index-card-container'>
      <div className='index-title-h1-container'>

      <h1 className='index-title-h1'>Animations</h1>

      <p className='index-title-p'>Here's a collection of simple, open-source animations to use in your web development projects.</p>
      </div>
      <LSSquare />
      <div className="index-lane-separate"></div>
      <LSBalls />
      <div className="index-lane-separate"></div>
      <LSLines />
      <div className="index-lane-separate"></div>
      <ScrollInfinite />
      <div className="index-lane-separate"></div>
    </div>
  )
}
