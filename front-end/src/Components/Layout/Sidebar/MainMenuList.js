import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//import Icons
import {
  IoHomeOutline,
  IoBagCheckOutline,
  IoWalletOutline,
  IoRestaurantOutline,
  IoSettingsOutline,
  IoCashOutline,
  IoPricetagsOutline,
} from "react-icons/io5";
import { AiOutlineHistory } from "react-icons/ai";
const menuListItems = [
  // { name: "home", path: "/", icon: <IoHomeOutline /> },

  {
    name: "order",
    path: "/order",
    icon: <IoBagCheckOutline />,
  },
  {
    name: "menu",
    path: "/",
    icon: <IoRestaurantOutline />,
  },
  {
    name: "wallet",
    path: "/wallet",
    icon: <IoWalletOutline />,
  },

  {
    name: "history",
    path: "/history",
    icon: <AiOutlineHistory />,
  },
  {
    name: "bills",
    path: "/bills",
    icon: <IoCashOutline />,
  },
  {
    name: "settings",
    path: "/settings",
    icon: <IoSettingsOutline />,
  },
  {
    name: "promos",
    path: "/promos",
    icon: <IoPricetagsOutline />,
  },
];

function MainMenuList({ className }) {
  return (
    <div className={`main__menu ${className ? className : ""}`}>
      <div className="row">
        <AnimatePresence>
          {menuListItems.map((link, i) => (
            <motion.div
              className="col-6"
              key={`key#${link.name}`}
              initial={{
                opacity: 0,
                translateX: -50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.3 }}
            >
              <NavLink to={link.path}>
                <div className="link__item">
                  <div className="link__icon">{link.icon}</div>
                  <span className="link__lable">{link.name}</span>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MainMenuList;
