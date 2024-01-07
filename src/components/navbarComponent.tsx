import React from "react";
import NotificationIcon from "./notificationIcon";
import ProfileImage from "../images/2071c9fb6aac4865b76bb203111dfa5d.jpeg";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";

const NavbarComponent = () => {
  return (
    <div
      style={{ zIndex: 2 }}
      className="flex bg-white justify-between py-3 px-10 shadow-lg"
    >
      <div className="flex items-center">
        <h1
          className="font-black text-2xl text-blue"
          style={{ fontFamily: "Roboto" }}
        >
          TransMonitor
        </h1>
        <div className="ml-20 flex items-center">
          <IoSearchOutline size={15} />
          <div className="ml-2 text-xs text-secondary">Search...</div>
        </div>
      </div>
      {/* .......... */}
      <div>
        <div className="flex items-center ">
          <h1 className="mr-10 text-secondary text-sm">Support</h1>
          <h1 className="mr-10 text-secondary text-sm">FAQ</h1>
          <div className="mr-10 flex text-secondary">
            <NotificationIcon badgeCount={2} />
          </div>
          <div className="text-secondary">
            <div className="flex items-center">
              <div className="mr-2">
                <div className="text-xs">Hello</div>
                <div className="text-sm">Oluwaleke Ojo</div>
              </div>
              <div className="size-10 ">
                <img
                  style={{ height: 43, width: 50 }}
                  className="rounded-full"
                  src={ProfileImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
