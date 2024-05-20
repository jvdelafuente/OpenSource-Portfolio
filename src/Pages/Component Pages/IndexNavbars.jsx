import './Indexcards.css'
import NavbarSmall from './Navbars/NavbarSmall'
import NavbarSmallLinks from './Navbars/NavbarSmallLinks'


export default function IndexNavbars() {
  return (
    <div className='index-card-container'>
      <NavbarSmall />
      <div className="index-lane-separate"></div>
      <NavbarSmallLinks />
      <div className="index-lane-separate"></div>
    </div>
  )
}
