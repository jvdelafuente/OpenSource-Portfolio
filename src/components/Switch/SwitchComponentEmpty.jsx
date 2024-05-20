import { useState } from 'react'; 
import './switchcomponent.css';

export default function SwitchComponent() {
  const [isOn, setIsOn] = useState(false); 

  const handleToggle = () => {
    setIsOn(!isOn); 
  };
  return (
<div className={`toggle ${isOn ? 'toggle-on' : ''}`} id="switch" onClick={handleToggle}>  
    <div className='glow-comp'><div className='toggle-button'></div></div>
    
</div>
  );
}