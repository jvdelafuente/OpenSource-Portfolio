import './Indexcards.css'
import Button1 from './Buttons/Button1'
import Button2 from './Buttons/Button2'

export default function IndexButtons() {
  return (
    <div className='index-card-container'>
      <Button1 />
      <div className="index-lane-separate"></div>
      <Button2 />
      <div className="index-lane-separate"></div>
    </div>
  )
}
