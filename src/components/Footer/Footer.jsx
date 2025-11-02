import "../Footer/Footer.css";
import img1 from "../../assets/f1.jpg";
import img2 from "../../assets/f2.jpg";
import img3 from "../../assets/f3.jpg";
import logo from "../../assets/medical-logo-white.png";
const Footer = () => {
  return (
    <>
      <footer className="Footer bg-main">
        <div className="container p-5">
          <div className="row text-white py-5 align-items-center">
            <div className="col-lg-3">
              <div className="footer-caption">
                <div className="footer-logo">
                  <img className="w-100" src={logo} alt="Medical logo" />
                </div>
                <div className="footer-p">
                    <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea deleniti, rerum magnam aliquid voluptate architecto dolorum. </p>
                </div>
                <div className="footer-clock">
                    <h6 className="pb-2">Mon - Fri---------9:00 to 16:30</h6>
                    <h6 className="pb-2">Sat - Sun---------9:00 to 13:30</h6>
                    <h6 className="pb-2">Holidays----------By Email</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
                <div className="footer-news">
                    <div className="news-title py-2">
                        <h5>Latest News</h5>
                    </div>
                    <div className="news-1 d-flex">
                        <div className="news-img p-2">
                            <img className="w-100 rounded-3" src={img3} alt="" />
                        </div>
                        <div className="news-caption p-2">
                            <h5>How to Be Ahead of Stock Changes</h5>
                            <span className="text-secondary"> <i className="fa-solid fa-clock"></i> 1 June 2024</span>
                        </div>
                    </div>
                    <div className="news-2 d-flex">
                        <div className="news-img p-2">
                            <img className="w-100 rounded-3" src={img2} alt="" />
                        </div>
                        <div className="news-caption p-2">
                            <h5>How to Be Ahead of Stock Changes</h5>
                            <span className="text-secondary"> <i className="fa-solid fa-clock"></i> 1 June 2024</span>
                        </div>
                    </div>
                    <div className="news-3 d-flex">
                        <div className="news-img p-2">
                            <img className="w-100 rounded-3" src={img1} alt="" />
                        </div>
                        <div className="news-caption p-2">
                            <h5>How to Be Ahead of Stock Changes</h5>
                            <span className="text-secondary"> <i className="fa-solid fa-clock"></i> 1 June 2024</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="footer-links">
                    <div className="links-title">
                        <h5 className="py-2">Useful links</h5>
                    </div>
                    <div className="links">
                        <div className="link py-2">
                            <a href="#"><i className="fa-solid fa-link text-second"></i> Support Medical</a>
                        </div>
                        <div className="link py-2">
                            <a href="#"><i className="fa-solid fa-link text-second"></i> Arts in Medicine</a>
                        </div>
                        <div className="link py-2">
                            <a href="#"><i className="fa-solid fa-link text-second"></i> Modern Facilities</a>
                        </div>
                        <div className="link py-2">
                            <a href="#"><i className="fa-solid fa-link text-second"></i> Simulation Center</a>
                        </div>
                        <div className="link py-2">
                            <a href="#"><i className="fa-solid fa-link text-second"></i> Like Our Website?</a>
                        </div>
                        <div className="link py-2">
                            <a href="#"><i className="fa-solid fa-link text-second"></i> Our Mission & Values</a>
                        </div>
                        <div className="link py-2">
                            <a href="#"><i className="fa-solid fa-link text-second"></i> Centers of Excellence</a>
                        </div>
                        <div className="link py-2">
                            <a href="#"><i className="fa-solid fa-link text-second"></i> Policies & Procedures</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="contact-info">
                    <div className="contact-title py-2">
                        <h5>Contact Information</h5>
                    </div>
                </div>
                <div className="info">
                    <ul className="d-block justify-content-between w-100 p-0">
                        <li className="d-flex align-items-center">
                            <div className="s1 rounded-2 bg-white overflow-hidden p-1">
                                <div className="icon  bg-white p-2 ">
                                        <i className="fa-solid fa-phone text-main"></i>
                                </div>
                                
                            </div>
                            <div className="s2 p-2">
                                <h5>01277840267</h5>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="s1 rounded-2 bg-white overflow-hidden p-1">
                                <div className="icon  bg-white p-2 ">
                                        <i className="fa-solid fa-envelope text-main"></i>
                                </div>
                                
                            </div>
                            <div className="s2 p-2">
                                <h5>x@ex.com</h5>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="s1 rounded-2 bg-white overflow-hidden p-2">
                                <div className="icon  bg-white p-2 ">
                                        <i className="fa-brands fa-facebook-f text-main"></i>
                                </div>
                                
                            </div>
                            <div className="s2 p-2">
                                <h5>Youssef Adel</h5>
                            </div>
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="s1 rounded-2 bg-white overflow-hidden p-1">
                                <div className="icon  bg-white p-2 ">
                                        <i className="fa-solid fa-location text-main"></i>
                                </div>
                                
                            </div>
                            <div className="s2 p-2">
                                <h5>Egypt-Cairo</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
