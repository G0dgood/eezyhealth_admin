import { NavLink, useLocation } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { IoIosUnlock, IoMdNotifications } from 'react-icons/io';
import { FaPersonCircleXmark } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';

const SettingNavigation = () => {
  const { pathname } = useLocation();




  return (


    <div className="footer">
      <div className="footer_container">

        <div className={pathname === "/admindashboard" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/admindashboard" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <BiHome size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Home</h4>
        </div>

        <div className={pathname === "/generalsetting" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/generalsetting" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >

            <IoSettingsSharp size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">General</h4>
        </div>

        <div className={pathname === "/passwordsetting" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/passwordsetting" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <IoIosUnlock size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Password</h4>
        </div>

        <div className={pathname === "/notification" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/notification" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <IoMdNotifications size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Notification</h4>
        </div>


        <div className={pathname === "/deactivation" ? 'footerOption-active' : "footerOption"}>
          <NavLink to="/deactivation" className={({ isActive }) =>
            [
              "nav-link",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }  >
            <FaPersonCircleXmark size={25} className="footerOption_icon" />
          </NavLink>
          <h4 className="footerOption_title">Deactivation</h4>
        </div>
      </div>
    </div>
  )
}

export default SettingNavigation;