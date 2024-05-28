import React, { useState } from "react";
import Header from "../../components/Header";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
import GeneralSetting from "./GeneralSetting";
import PasswordSetting from "./PasswordSetting";
import SideNav from "../../components/SideNav/SideNav";
import SettingsNavigation from "../../components/SettingsNavigation";


const Setting = () => {
  const [activeTab, setActiveTab] = useState(1);
  // @ts-ignore 
  const userInfo = JSON.parse(localStorage.getItem("eezy-user-info"));

  const [userData, setUserData] = useState(userInfo)

  const handleTabClick = (tabNumber: any) => {
    setActiveTab(tabNumber);
  };
  const tabItems = [
    { id: 1, icon: <IoSettingsSharp size={20} />, text: 'General Settings' },
    { id: 2, icon: <IoIosUnlock size={20} />, text: 'Password Settings' },
  ];

  return (
    <div>
      <div id="page-wrapper">
        <SideNav />
        <Header />
        <SettingsNavigation />
        <main>
          <div id="setting-container">
            <div id="setting-side-nav">
              <div className="nav-tabs-setting">
                <div className="nav-tabs_title">
                  <h3>Settings</h3>
                  <p>You can find all settings here</p>
                </div>
                <ol className="mt-4">
                  {tabItems.map((item) => (
                    <li key={item.id} onClick={() => handleTabClick(item.id)} className={`nav-tabs_title-li ${activeTab === item.id ? 'nav-tabs_title-li-active' : ''}`}>
                      <span className="nav-tabs_title-icon">{item.icon}</span>
                      <span className="nav-tabs_title-icon-text">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="tab-panel">
              <div>
                {activeTab === 1 && <GeneralSetting userData={userData} />}
                {activeTab === 2 && <PasswordSetting />}

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Setting;
