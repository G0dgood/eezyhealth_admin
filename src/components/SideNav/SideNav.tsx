import { MdOutlineDashboard, MdOutlineMiscellaneousServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { LuTag } from "react-icons/lu";
import { IoMdOpen } from "react-icons/io";
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";
import logo from '../../assets/img/eezy.png'
import { RiAlarmWarningLine } from "react-icons/ri";
import { BsCalendar2Check } from "react-icons/bs";
import { getUserPrivileges } from "../../hooks/auth";
import { FiUpload } from "react-icons/fi";
import { VscCreditCard } from "react-icons/vsc";
import { FaUserInjured } from "react-icons/fa6";
import { FaUserMd } from "react-icons/fa";

const SideNav = () => {
  const {
    isSuperAdmin,
    isAdmin,
    isSupervisor,
    isITSupport,
    isTeamLead,

  } = getUserPrivileges();
  const [dropdownOpen, setDropdownOpen] = useState(
    localStorage.getItem('dropdownOpen') === 'true'
  );

  const toggleDropdown = () => {
    const newState: any = !dropdownOpen;
    setDropdownOpen(newState);
    localStorage.setItem('dropdownOpen', newState);
  };

  useEffect(() => {
    const storedState = localStorage.getItem('dropdownOpen') === 'true';
    if (dropdownOpen !== storedState) {
      setDropdownOpen(storedState);
    }
  }, [dropdownOpen]);


  return (
    <div id="side-nav">
      <div className="logo-area">
        <img src={logo} alt='logo' crossOrigin="anonymous" className="logo-area-img" />
        <h2>eezyhealth</h2>
      </div>
      <nav  >
        <NavLink to="/dashboard" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <MdOutlineDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
      </nav>

      <nav>
        <div className="nav-link" onClick={toggleDropdown}>
          <div className="nav_dropdown_container">
            <div className="nav_dropdown_container_sub">
              <BsFileEarmarkCheck size={20} />
              <span>Users</span>
            </div>
            {dropdownOpen ? <FiChevronDown
              size={25}
              className={'arrow'}
            /> : <FiChevronRight size={25}
              className={'arrow'} />}

          </div>
        </div>

        {dropdownOpen && (
          <div>
            <NavLink to="/doctor" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <FaUserMd size={20} />
                <span>Doctor</span>
              </div>
              <div className="side_number_three">34</div>
            </NavLink>
            <NavLink to="/patient" className={({ isActive }) =>
              ["nav-link_sup", isActive ? "active_sup" : null,]
                .filter(Boolean)
                .join(" ")
            }>
              <div className="nav_dropdown_sub">
                <FaUserInjured size={20} />
                <span>Patient</span>
              </div>
              <div className="side_number_five">4</div>
            </NavLink>
          </div>
        )}
      </nav>
      <nav>
        <NavLink to="/bookings" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <BsCalendar2Check size={20} />
          <span>Bookings</span>
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/payment" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <VscCreditCard size={20} />
          <span>Payment</span>
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/uploads" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <BsFileText size={20} />
          <span>Uploads</span>
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/settings" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <MdOutlineSettings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>

    </div>
  )
}

export default SideNav;





