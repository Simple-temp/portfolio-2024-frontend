import React, { useState } from 'react';
import "./Sidebar.scss";
import Home from '../../Pages/Home/Home';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Profile from '../Profile/Profile';

const Sidebar = () => {

    const [ toggle, setToggle ] = useState(false)

    const toggleIcon = () =>{
        setToggle(!toggle)
    }

  return (
    <div className='side-bar-container'>
      <div className={ toggle ? "toggle toggle-icon my-img" : "sidebar" }>
        <div className='toggle-icon' onClick={()=>toggleIcon()}>
            {
                toggle ? (<KeyboardDoubleArrowRightIcon/>) : (<KeyboardDoubleArrowLeftIcon/>)
            }
        </div>
        <Profile toggle={toggle}/>
      </div>
      <div className='home-container'>
        <Home/>
      </div>
    </div>
  )
}

export default Sidebar
