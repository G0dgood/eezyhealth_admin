import { useEffect, useState } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import SearchInput from './SearchInput';
import Badge from './Badge/Badge';
import pro_img from '../assets/img/eezy.png'
import { pageTitles } from './StateData';
import NetworkConnetion from './NetworkConnetion';
import Notification from './Notification/Notification';
import HeaderDate from './HeaderDate';
import ProfileDropDown from './ProfileDropDown';


const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [profile, setProfile] = useState(false)
  // @ts-ignore  
  const userInfo = JSON.parse(localStorage.getItem("eezy-user-info"));



  useEffect(() => {
    const path = window.location.pathname;
    const title = pageTitles[path] ? `eezy Health | ${pageTitles[path]}` : "eezy Health  | Page";
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);






  return (
    <div id="header">
      <SearchInput />
      <NetworkConnetion />
      <div className='FaPlus-icon-container' >
        <div className='FaPlus-icon-container_sup'>
          <IoCalendarOutline size={16} />
          <HeaderDate />
        </div>
        <div className='faplus-bell_container'>
          <Badge setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />
          <div className='profiledropdown_container'>
            <div>
              <h5 className='profiledropdown_container_h5'>	{userInfo?.firstname}</h5>
              <p className='profiledropdown_container_p'>{userInfo?.role}</p>
            </div>
            {/* <span className='FaPlus-name' onClick={() => navigate("/settings")}>
              <img src={pro_img} alt='logo' crossOrigin="anonymous" className="profile_img" />
            </span> */}
            <span className='FaPlus-name' onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
              <img src={pro_img} alt='logo' crossOrigin="anonymous" className="profile_img" />
              {profile && <ProfileDropDown />}
            </span>
          </div>
          <Notification isOpen={isDrawerOpen} onClose={setIsDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        </div>
      </div>
    </div>
  )
}

export default Header;





