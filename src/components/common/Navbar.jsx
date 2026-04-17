
import { RxCross1 } from "react-icons/rx";

import { useState, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import fullLogo from "../../assets/Images/new_logo.png";
import preview from "../../assets/Images/preview.png";
// import add from '../../assets/Images/address.jpeg'
// import add1 from '../../assets/Images/address1.jpg'

import NAV_DATA from "../../data/nav-data";

export default function Navbar() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeTimer = useRef(null);
  const openTimer = useRef(null);

  const openMenu = useCallback(
    (key) => {
      clearTimeout(closeTimer.current);
      if (activeMenu !== key) {

        setMenuVisible(false);
        openTimer.current = setTimeout(
          () => {
            setActiveMenu(key);
            setMenuVisible(true);
          },
          activeMenu ? 80 : 0
        );
      } else {
        setMenuVisible(true);
      }
      setActiveMenu(key);
    },
    [activeMenu]
  );

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setMenuVisible(false);
      setTimeout(() => setActiveMenu(null), 350);
    }, 120);
  }, []);

  
  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  const data = activeMenu ? NAV_DATA[activeMenu] : null;

  return (
  

    <div className="">
      <div className="fixed top-4 left-0 w-full z-[1000]">
        <nav
          className="max-w-7xl mx-auto  shadow-md bg-white/40  transparent  rounded-2xl   backdrop-blur-xl"
          onMouseLeave={closeMenu}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 h-[65px] sm:h-[70px] lg:h-[75px] max-w-screen-2xl mx-auto">
            <NavLink to="/" className="flex-shrink-0 text-black duration-200">
              <img
                src={preview}
                alt="BB Engineers logo"
                className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain"
              />
            </NavLink>

            <div className="hidden lg:flex items-center gap-6 text-[16px] font-medium tracking-wide">
              <div className="py-1 transition hover:text-or">
                <NavLink
                  to="/"
                  className="font-medium text-gray-800 hover:rounded-2xl hover:text-[#EB9A38]"
                >
                  Home
                </NavLink>
              </div>

              <div>
                <div
                 onMouseEnter={() => openMenu("About")}
                 onMouseLeave={closeMenu}
                  onClick={() => {navigate("/about")
                    setTimeout(() => {
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className={`relative hover:cursor-pointer  text-center py-1 px-2 font-medium text-gray-800 hover:text-[#EB9A38] transition duration-200 ${
                    activeMenu === "About" ? "text-black" : ""
                  }`}
                >
                  About  
                </div>

                  {activeMenu === "About" && menuVisible && (
                    
                    <div
              
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeMenu}

                    className={[
                      "absolute top-[100%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-40 rounded-2xl shadow-xl backdrop-blur-xl",
                      "transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                      menuVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none",
                    ].join(" ")}
                    style={{ background: "rgba(255,255,255,0.85)", fontFamily: "Poppins, sans-serif" }}
                
                  >
                    <div className="px-8 py-8">
                      <div className="grid md:grid-cols-2 gap-10 items-start">

                        <div
                          onClick={() => {
                            navigate("/about");
                          }}
                          className="cursor-pointer group relative rounded-2xl p-[2px] bg-gradient-to-br from-orange-400 via-orange-200 to-orange-400 transition-all duration-300 hover:scale-[1.03]"
                        >
                          <div className="rounded-2xl p-6 bg-white/90 backdrop-blur-xl h-full relative overflow-hidden">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-orange-100 via-transparent to-orange-100" />

                            <div className="flex flex-col gap-3 relative z-10">
                              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition">
                                About Us
                              </h2>

                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition">
                                To be a trusted partner delivering precision-engineered solutions for mobility,
                                infrastructure and innovation
                              </p>
                            </div>

                          </div>
                        </div>

                        <div className="flex flex-col justify-center gap-4">
                          <ul className="space-y-3 text-sm font-medium text-gray-700 pt-5">

                            <li
                              className="cursor-pointer border-b-[#EB9A38] border-2  hover:text-orange-500 transition"
                              onClick={() => {
                                navigate("/about");
                                setTimeout(() => {
                                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                                }, 100);
                              }}
                            >
                              Overview
                            </li>

                            <li
                              className="cursor-pointer border-b-[#EB9A38] border-2 hover:text-orange-500 transition"
                              onClick={() => {
                                navigate("/about");
                                setTimeout(() => {
                                  document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" });
                                }, 100);
                              }}
                            >
                              Leadership
                            </li>

                            <li
                              className="cursor-pointer border-b-[#EB9A38] border-2 hover:text-orange-500 transition"
                              onClick={() => {
                                navigate("/about");
                                setTimeout(() => {
                                  document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" });
                                }, 100);
                              }}
                            >
                              Our Vision
                            </li>

                            <li
                              className="cursor-pointer border-b-[#EB9A38] border-2 hover:text-orange-500 transition"
                              onClick={() => {
                                navigate("/about");
                                setTimeout(() => {
                                  document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
                                }, 100);
                              }}
                            >
                              Meet our team
                            </li>

                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>

                  )}

              </div>

              {Object.keys(NAV_DATA).map((key) => {
                const isActive = activeMenu === key;
              
                return (
                  <button
                    key={key}
                    onMouseEnter={() => {
                      openMenu(key);
                      setSearchOpen(false);
                    }}
                    onClick={() => openMenu(key)}
                    className={[
                      "relative h-[52px] text-gray-700  hover:text-[#EB9A38] transition duration-200",
                      isActive ? "text-black" : "",
                    ].join(" ")}
                  >
                    {key}
                    <span
                      className={[
                        "absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg- transition-all duration-300",
                        isActive && menuVisible
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0",
                      ].join(" ")}
                      style={{ transformOrigin: "left" }}
                    />
                  </button>
                );
              })}

              <div className="py-1 transition px-2 rounded-lg   ">
                <NavLink
                  to="/contact"
                  className="text-gray-700 hover:text-[#EB9A38] transition duration-200"
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Right Side — Quote button + Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="uppercase border border-[#EB9A38] text-[#EB9A38] hover:bg-[#EB9A38] hover:text-white transition-all duration-300 px-2 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs">
                <NavLink to="/contact#contact-form">Request quote</NavLink>
              </button>

             { !mobileMenuOpen && ( <button
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span className="w-5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
                <span className="w-5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
                <span className="w-5 h-0.5 bg-gray-700 rounded transition-all duration-300" />
              </button> )}

                {mobileMenuOpen  && (   <button onClick={() => setMobileMenuOpen((prev) => !prev) }>
                  <RxCross1 className="text-2xl block lg:hidden"/>
              </button> )}
            </div>
          </div>


          {/* Mobile Menu — visible on mobile/tablet only */}
          <div
            className={[
              "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-b-2xl",
              mobileMenuOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-[15px] font-medium border-t border-gray-100">
            <NavLink
                to="/"
                onClick={() => {
                  setMobileMenuOpen(false);
                  // setTimeout(() => {
                  //   document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                  // }, 100);
                }}
                className="text-gray-800 hover:text-[#EB9A38] transition"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 hover:text-[#EB9A38] transition"
              >
                About
              </NavLink>

              {Object.keys(NAV_DATA).map((key) => (
                
                <button
                  key={key}
                  onClick={() => {
                    openMenu(key);
                    
                  }}
                  className="text-left text-gray-700 hover:text-[#EB9A38] transition duration-200 "
                >
                  {key}
                </button>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#EB9A38] transition"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Dropdown Mega Menu — Desktop only */}
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={closeMenu}
            className={[
              "absolute left-0 right-0 bg-white border-t border-gray-400 shadow-2xl rounded-t-2xl rounded-b-2xl overflow-hidden z-40",
              "transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              activeMenu && menuVisible
                ? "max-h-[300px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-1 pointer-events-none",
            ].join(" ")}
          >

            {data && (
              <div className="w-full mx-auto   ">
      
                    <div className="flex lg:w-11/12  w-full px-5 h-72 mx-auto items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide">

                    <div className="flex  justify-start items-center  mx-auto   gap-x-10 md:gap-x-16 lg:gap-x-36 gap-y-28 flex-nowrap">

                      {data.grid.map((item, i) => (
                        <NavLink
                          key={i}
                          to={`/${data?.title
                            ?.toLowerCase()
                            .replace(/\s+/g, "-")}/${encodeURIComponent(item.name)}`}
                          state={{
                            name: item.name,
                            img: item.img,
                            details: item.details,
                            images: item.images,
                            para: item.para,
                            para1: item.para1,
                            sectionId: data?.title?.toLowerCase(),
                          }}
                          className="group  sm:min-w-[160px] md:min-w-0 flex-shrink-0  flex flex-col items-center text-center"
                        >
                          <div
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMenuVisible(false);
                            }}
                            className="w-40 h-36 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-orange-100 opacity-0 group-hover:opacity-100 transition duration-500" />
                            <img
                              src={item.img}
                              className="w-40 h-full object-cover p-3 rounded-3xl group-hover:scale-110 transition duration-500"
                            />

                          </div>

                          <p className="mt-3 whitespace-nowrap text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition leading-snug">
                            {item.name}
                          </p>

                        </NavLink>
                      ))}

                    </div>
                    </div>

                <div
                  className="w-52 border-l border-gray-100 px-6 py-8 flex-shrink-0"
                  style={{
                    transition:
                      "opacity 0.4s ease 120ms, transform 0.4s ease 120ms",
                    opacity: menuVisible ? 1 : 0,
                    transform: menuVisible
                      ? "translateX(0)"
                      : "translateX(8px)",
                  }}
                >
                  <ul className="space-y-[10px]">
                    {data.sidebar.map((s, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="block text-[13px] text-gray-500 hover:text-gray-900 transition-all duration-150 hover:translate-x-0.5"
                        ></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            )}
          </div>

        
        </nav>

       
        <div
          onClick={() => {
            setMenuVisible(false);
            setTimeout(() => setActiveMenu(null), 350);
          }}
          className={[
            "fixed top-[52px] bg-black/15 z-30 transition-opacity duration-350",
            activeMenu && menuVisible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          ].join(" ")}
        />

    
      </div>
    </div>
  );
}
