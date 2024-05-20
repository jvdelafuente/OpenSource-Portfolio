import { useState } from 'react'; 
import './switchcomponent.css';


// eslint-disable-next-line react/prop-types
export default function SwitchComponent({ isGlowActive, setIsGlowActive }) {
  const [isOn, setIsOn] = useState(false); 

const handleToggle = () => {
    console.log("Switch clicked!");
    setIsOn(!isOn);
    setIsGlowActive(!isGlowActive); 
 // Use the received prop
  };
  return (
<div
      className={`toggle ${isOn ? 'toggle-on' : ''}`}
      id="switch"
      onClick={handleToggle}
      tabIndex={0} 
      role="button" 
      aria-pressed={isOn} 
    >    <div className='glow-comp'><div className='toggle-button'></div></div>
    
</div>
  );
}