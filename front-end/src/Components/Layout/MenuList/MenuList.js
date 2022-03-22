import React from "react";
import { NavLink } from "react-router-dom";

//import Icons
import {
  IoHomeOutline,
  IoShirtOutline,
  IoGlassesOutline,
} from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "home", path: "/", icon: <IoHomeOutline /> },
  {
    name: "men fashion",
    path: "/category/men's_clothing",
    icon: <IoShirtOutline />,
  },
  {
    name: "electronics",
    path: "/category/electronics",
    icon: <BsSmartwatch />,
  },
  {
    name: "Accessories",
    path: "/category/jewelery",
    icon: <IoGlassesOutline />,
  },
  {
    name: "customer service",
    path: "/customer-service",
    icon: <RiCustomerService2Line />,
  },
];
function MenuList({ setCloseMenu }) {
  return (
    <React.Fragment>
      <AnimatePresence>
        {links.map((link, i) => (
          <motion.li
            key={`key#${link.name}`}
            initial={{
              opacity: 0,
              translateX: -50,
              translateY: -50,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.3 }}
          >
            {setCloseMenu ? (
              <NavLink
                to={link.path}
                className="nav-link rounded-2"
                onClick={() => setCloseMenu(false)}
              >
                {link.name}
                <span className="nav-link-icon">{link.icon}</span>
              </NavLink>
            ) : (
              <NavLink to={link.path} className="nav-link">
                <span className="me-1">{link.icon}</span>
                {link.name}
              </NavLink>
            )}
          </motion.li>
        ))}
      </AnimatePresence>
    </React.Fragment>
  );
}

export default MenuList;
