import './Indexcards.css'
import Button1 from './Buttons/Button1'
import Button2 from './Buttons/Button2'
import Accordion1 from './Accordions/Accordion1'
import CardAbout1 from './Cards/Portfolio/CardsAbout'
import CardBlur from './Cards/CardsBlur'
import CardAbout2 from './Cards/Portfolio/CardsAboutTools'
import GlowCursor from './Cursor/GlowCursor'
import Dropdown1 from './Dropdowns/Dropdown1'
import FormHide from './Form/FormHide'
import NavbarSmall from './Navbars/NavbarSmall'
import NavbarSmallLinks from './Navbars/NavbarSmallLinks'
import Switch1 from './Switch/Switch1'

export default function IndexComponents() {
  return (
    <div className='index-card-container'>
      <div className='index-title-h1-container'>
      <h1 className='index-title-h1'>Components</h1>
      <p className='index-title-p'>Feel free to incorporate these open source , copy-and-paste UI components. <br/><br/>While these components are designed for React integration, basic CSS knowledge is required to customize them to your liking.</p>
      </div>
      <Accordion1 />
      <div className="index-lane-separate"></div>
      <Button1 />
      <div className="index-lane-separate"></div>
      <Button2 />
      <div className="index-lane-separate"></div>
      <CardBlur />
      <div className="index-lane-separate"></div>
      <CardAbout1 />
      <div className="index-lane-separate"></div>
      <CardAbout2 />
      <div className="index-lane-separate"></div>
      <GlowCursor />
      <div className="index-lane-separate"></div>
      <Dropdown1 />
      <div className="index-lane-separate"></div>
      <FormHide />
      <div className="index-lane-separate"></div>
      <NavbarSmall />
      <div className="index-lane-separate"></div>
      <NavbarSmallLinks />
      <div className="index-lane-separate"></div>
      <Switch1 />
      <div className="index-lane-separate"></div>
    </div>
  )
}
