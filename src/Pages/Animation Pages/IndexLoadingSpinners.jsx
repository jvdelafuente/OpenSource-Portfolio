/* eslint-disable react/no-unescaped-entities */
import '../../Pages/Component Pages/Indexcards.css'
import LSBalls from './LSBalls'
import LSLines from './LSLines'
import LSSquare from './LSSquare'

export default function IndexLoadingSpinners() {
  return (
    <div className='index-card-container'>

      <LSSquare />
      <div className="index-lane-separate"></div>
      <LSBalls />
      <div className="index-lane-separate"></div>
      <LSLines />
      <div className="index-lane-separate"></div>
      </div>
  )}