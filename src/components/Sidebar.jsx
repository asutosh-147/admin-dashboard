import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
const Sidebar = () => {
  // const active = true;
  const { activeMenu, setActiveMenu, screenSize,currentColor } = useStateContext();
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pb-2.5 pt-3 rounded-lg text-gray-200 text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pb-2.5 pt-3 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";
  return (
    <div className="ml-3 overflow-hidden md:overflow-auto hover:md:overflow-auto pb-10 h-screen">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center sticky top-0 bg-white dark:bg-secondary-dark-bg drop-shadow-sm">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl p-3 rounded-full hover:bg-light-gray mt-4 block "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item, index) => (
              <div key={index}>
                <p
                  className="text-gray-700 mt-4
                    m-3 uppercase dark:text-gray-400"
                >
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={`/${link.name}`}
                    onClick={handleCloseSidebar}
                    style={({isActive})=>({backgroundColor:isActive?currentColor:''})}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
