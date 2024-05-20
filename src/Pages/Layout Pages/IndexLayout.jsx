/* eslint-disable react/no-unescaped-entities */
import '../../Pages/Component Pages/Indexcards.css'
import Grid22Page from './Grid/Grid22'
import Grid223Page from './Grid/Grid223'
import Grid232Page from './Grid/Grid232'

export default function Index() {
  return (
    <div className='index-card-container'>
      <div className='index-title-h1-container'>

      <h1 className='index-title-h1'>Layouts</h1>

      <p className='index-title-p'>Here's a collection of simple, open-source grid layouts to use in your web development projects.</p>
      </div>
      <Grid223Page />
      <div className="index-lane-separate"></div>
      <Grid22Page />
      <div className="index-lane-separate"></div>
      <Grid232Page />
    </div>
  )
}
