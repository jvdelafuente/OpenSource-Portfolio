import './Indexcards.css'
import GlowCursor from './Cursor/GlowCursor'

export default function IndexCursor() {
  return (
    <div className='index-card-container'>
      <GlowCursor />
      <div className="index-lane-separate"></div>
    </div>
  )
}
