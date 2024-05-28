import { useState } from 'react'
import { MdInsights } from 'react-icons/md'
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineCalendar } from 'react-icons/hi';
import { BiHome } from 'react-icons/bi';
import { LuUsers } from 'react-icons/lu';
import { HiOutlineRectangleStack } from 'react-icons/hi2';



const BottomNavigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


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



      </div>
    </div>
  )
}

export default BottomNavigation