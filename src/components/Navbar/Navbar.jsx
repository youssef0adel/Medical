import "../Navbar/Navbar.css";
import Logo from "../../assets/logo-logistic.png";
import Logo2 from "../../assets/medical-logo-white.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`first-Nav container  bg-white rounded-2 position-fixed fixed-top mt-3 ${scrolled ? "nav-1-active" : "nav-1"}`}
      >
        <div className="main-Nav">
          <div className="d-flex justify-content-between align-items-center p-4 navbar-top">
            <div className="Nav-icon">
              <img
                className="w-75"
                src={Logo}
                alt="Medical Logo"
                title="Medical Logo"
              />
            </div>
            <div className="Nav-info d-flex gap-5">
              <div className="nav-contact">
                <h6 className="fw-bold">
                  Phone: <span className="fw-normal">+201277840267</span>
                </h6>
                <h6 className="fw-bold">
                  Email: <span className="fw-normal">Medical@e.com</span>
                </h6>
              </div>
              <div className="Nav-Button">
                <button className="Btn py-2" type="button">
                  <a className="px-4" href="#">
                    <i className="fa-solid fa-plus fw-bold"></i> Make An
                    Appointment
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`second-Nav container${
              scrolled ? "show-nav" : "hide-nav"
            }`}
          >
            <div className=" bg-main rounded-2">
              <div className="Nav-links d-flex justify-content-between">
                <ul className="Links  m-0">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <i className="fa-solid fa-home"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faq"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      FAQ's
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <div className="social  d-flex  align-items-center">
                  <div className="facebook" title="FaceBook">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f fa-xl"></i>
                    </a>
                  </div>
                  <div className="linkedin" title="Linkedin">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in fa-xl"></i>
                    </a>
                  </div>
                  <div className="twitter" title="Twitter">
                    <a href="#">
                      <i className="fa-brands fa-twitter fa-xl"></i>
                    </a>
                  </div>
                  <div className="cart-link">
                    <NavLink to="/cart">
                      <i className="fa-solid fa-shopping-cart fa-xl"></i>
                    </NavLink>
                  </div>
                  <div className="cart-link">
                    <a href="#">
                      <i className="fa-solid fa-search fa-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className={`second-Nav position-fixed fixed-top  ${ scrolled ? "nav-2" : "nav-2-active"}`}>
        <div className="inner-nav ">
          <div className=" bg-main p-2">
            <div className="Nav-links d-flex justify-content-between">
              <ul className="Links  m-0 align-items-center">
                <li className="p-0">
                  <div className="nav-logo-2">
                    <img
                      className="w-100"
                      src={Logo2}
                      alt="medical logo"
                      title="medical logo"
                    />
                  </div>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <i className="fa-solid fa-home"></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    FAQ's
                  </NavLink>
                </li>
                
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div className="social  d-flex  align-items-center">
                <div className="facebook" title="FaceBook">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f fa-xl"></i>
                  </a>
                </div>
                <div className="linkedin" title="Linkedin">
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                  </a>
                </div>
                <div className="twitter" title="Twitter">
                  <a href="#">
                    <i className="fa-brands fa-twitter fa-xl"></i>
                  </a>
                </div>
                <div className="cart-link">
                  <NavLink to="/cart">
                    <i className="fa-solid fa-shopping-cart fa-xl"></i>
                  </NavLink>
                </div>
                <div className="cart-link">
                  <a href="#">
                    <i className="fa-solid fa-search fa-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="Nav-buttom">
        <div className="nav-buttom-inner position-fixed fixed-bottom rounded-top-5 overflow-hidden">
          <div className="inner bg-second text-center py-2">
            <div className="d-flex justify-content-around align-items-center p-1">
              <div className="item text-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  <i className="fa-solid fa-house d-block mb-1"></i>
                  Home
                </NavLink>
              </div>

              <div className="item text-white">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  <i className="fa-solid fa-info d-block mb-1"></i>
                  About
                </NavLink>
              </div>

              <div className="item text-white">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  <i className="fa-solid fa-network-wired d-block mb-1"></i>
                  Services
                </NavLink>
              </div>
              <div className="item text-white">
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  <i className="fa-solid fa-f d-block mb-1"></i>
                  FAQS
                </NavLink>
              </div>

              <div className="item text-white">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  <i className="fa-solid fa-envelope d-block mb-1"></i>
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
