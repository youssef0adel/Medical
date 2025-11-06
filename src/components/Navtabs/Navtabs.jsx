import "../Navtabs/Navtabs.css";
import img1 from "../../assets/about-3.jpg";
import img2 from "../../assets/p6.jpg";
import img3 from "../../assets/p9.jpg";
import img4 from "../../assets/p7.jpg";
import img5 from "../../assets/p8.jpg";
import img6 from "../../assets/p5.jpg";
import { NavLink } from "react-router-dom";
import Tilt from "react-parallax-tilt";
const Navtabs = () => {
  return (
    <>
      <section className="Navtabs">
        <div className="container-fluid">
          <ul
            className="nav nav-tabs justify-content-center border-bottom-1 pt-5"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active text-main"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#s1"
                type="button"
                role="tab"
                aria-controls="s1"
                aria-selected="true"
              >
                Experience and reach
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-main"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#s2"
                type="button"
                role="tab"
                aria-controls="s2"
                aria-selected="false"
              >
                Technology
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-main"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#s3"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Instiution
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-main"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#s4"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Experienced doctors
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-main"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#s5"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                one-stop care
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active p-3"
              id="s1"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row gy-4 d-flex align-items-center bg py-5">
                <div className="col-md-6">
                  <div className="s1-caption">
                    <h1 className="text-black">
                      Experience and <span className="h1 text-main">Reach</span>
                    </h1>
                    <p className="text-secondary h5 py-2">
                      The medical reach experience with knowledge
                    </p>
                    <p className="text-secondary py-4 lh-lg">
                      Physicians, scientists and other medical experts dedicate
                      a portion of their clinical time to this site, we are in
                      the unique position to give you access to the knowledge
                      and experience of Medical Physicians, scientists and other
                      medical experts dedicate a portion of their clinical time
                      to this site.
                    </p>
                    <button className="Btn-2">Read more details</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="s1-img rounded-2 overflow-hidden">
                    <Tilt
                      scale={1.05}
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px",
                        zIndex: 2,
                      }}
                    >
                      <img
                        className="w-100 rounded-3"
                        src={img1}
                        alt="Bicycle"
                      />
                    </Tilt>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade p-3"
              id="s2"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row gy-4 d-flex align-items-center bg py-5">
                <div className="col-md-6">
                  <div className="s2-img position-relative overflow-hidden rounded-2">
                    <NavLink className="w-100 h-100" to="/about">
                      <img
                        className="w-100"
                        src={img2}
                        alt="Doctor"
                        title="Doctor"
                      />
                    </NavLink>
                    <div className="img-button d-flex rounded-3 overflow-hidden ">
                      <div className="btn-1 bg-white p-3 text-center d-flex align-items-center">
                        <i className="fa-solid fa-play text-main fa-2xl"></i>
                      </div>
                      <div className="btn-2 text-center bg-main  ">
                        <h6>About Medical</h6>
                        <p>Watch the Video</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="s2-skills">
                    <div className="sk-1 p-3">
                      <div className="sk-title d-flex justify-content-between">
                        <p className="text-secondary fw-bold">
                          Good Communication
                        </p>
                        <p className="text-main fw-bold">90%</p>
                      </div>
                      <div className="sk-percentage-1  rounded-2 w-100">
                        <div className="sk-percentage-2 bg-second rounded-2"></div>
                      </div>
                    </div>
                    <div className="sk-2 p-3">
                      <div className="sk-title d-flex justify-content-between">
                        <p className="text-secondary fw-bold">
                          Organizational and clerical
                        </p>
                        <p className="text-main fw-bold">80%</p>
                      </div>
                      <div className="sk-percentage-1  rounded-2 w-100">
                        <div className="sk-percentage-2 bg-second rounded-2"></div>
                      </div>
                    </div>
                    <div className="sk-3 p-3">
                      <div className="sk-title d-flex justify-content-between">
                        <p className="text-secondary fw-bold">
                          Medical knowledge
                        </p>
                        <p className="text-main fw-bold">95%</p>
                      </div>
                      <div className="sk-percentage-1  rounded-2 w-100">
                        <div className="sk-percentage-2 bg-second rounded-2"></div>
                      </div>
                    </div>
                    <div className="sk-4 p-3">
                      <div className="sk-title d-flex justify-content-between">
                        <p className="text-secondary fw-bold">
                          Customer service
                        </p>
                        <p className="text-main fw-bold">87%</p>
                      </div>
                      <div className="sk-percentage-1  rounded-2 w-100">
                        <div className="sk-percentage-2 bg-second rounded-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade p-3"
              id="s3"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row gy-4 py-5 bg">
                <div className="s3-title text-center py-5">
                  <h1 className="text-black">
                    Achieving better health care one{" "}
                    <span className="text-main h1">patient at a time</span>
                  </h1>
                </div>
                <div className="col-md-4">
                  <a href="#" className="s3-item w-100 h-100 ">
                    <div className="s3-img position-relative overflow-hidden rounded-2">
                      <img className="w-100" src={img3} alt="" />
                      <div className="s3-layer d-flex flex-column justify-content-center align-items-center">
                        <div className="s3-inner d-flex flex-column justify-content-center align-items-center w-100">
                          <h3 className="bg-second w-100 text-center p-2">
                            Monthly Tests
                          </h3>
                          <p className="pt-5 h3 price">9.99$</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#" className="s3-item w-100 h-100">
                    <div className="s3-img position-relative overflow-hidden rounded-2">
                      <img className="w-100" src={img4} alt="" />
                      <div className="s3-layer d-flex flex-column justify-content-center align-items-center">
                        <div className="s3-inner d-flex flex-column justify-content-center align-items-center w-100">
                          <h3 className="bg-second w-100 text-center p-2">
                            Monthly Tests
                          </h3>
                          <p className="pt-5 h3 price">8.99$</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#" className="s3-item w-100 h-100">
                    <div className="s3-img position-relative overflow-hidden rounded-2">
                      <img className="w-100" src={img5} alt="" />
                      <div className="s3-layer d-flex flex-column justify-content-center align-items-center">
                        <div className="s3-inner d-flex flex-column justify-content-center align-items-center w-100">
                          <h3 className="bg-second w-100 text-center p-2">
                            Yearly Tests
                          </h3>
                          <p className="pt-5 h3 price">9.99$</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade p-3"
              id="s4"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="doctors">
                <div className="s4-item s4-item-1 position-relative overflow-hidden rounded-2">
                  <div className="s4-img ">
                    <img className="w-100 " src={img6} alt="" />
                  </div>
                  <div className="s4-layer d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-search fa-2xl"></i>
                  </div>
                </div>
                <div className="s4-item s4-item-2 position-relative overflow-hidden rounded-2">
                  <div className="s4-img ">
                    <img className="w-100 " src={img1} alt="" />
                  </div>
                  <div className="s4-layer d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-search fa-2xl"></i>
                  </div>
                </div>
                <div className="s4-item s4-item-3 position-relative overflow-hidden rounded-2">
                  <div className="s4-img ">
                    <img className="w-100 " src={img2} alt="" />
                  </div>
                  <div className="s4-layer d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-search fa-2xl"></i>
                  </div>
                </div>
                <div className="s4-item s4-item-4 position-relative overflow-hidden rounded-2">
                  <div className="s4-img ">
                    <img className="w-100 " src={img5} alt="" />
                  </div>
                  <div className="s4-layer d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-search fa-2xl"></i>
                  </div>
                </div>
                <div className="s4-item s4-item-5 position-relative overflow-hidden rounded-2">
                  <div className="s4-img ">
                    <img className="w-100 " src={img3} alt="" />
                  </div>
                  <div className="s4-layer d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-search fa-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade p-3"
              id="s5"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="container py-5 bg d-flex justify-content-center align-items-center flex-column">
                <div className="s5-icon bg-main text-center p-5 rounded-3">
                  <i className="fa-solid fa-play fa-2xl text-white"></i>
                </div>
                <div className="s5-phone text-center py-5">
                  <h1 className="text-secondary fw-bold">
                    Call Us Now:{" "}
                    <span className="text-main">(+02)1277840267</span>
                  </h1>
                </div>
                <div className="s5-location">
                  <p className="text-secondary text-center">
                    We are available 24/7 anywhere you want
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navtabs;
