import "../Features/Features.css";
import img1 from "../../assets/woman-doctor.jpg";
import Tilt from "react-parallax-tilt";
const Features = () => {
  return (
    <>
      <section className="Features py-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="features-img ">
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
            <div className="col-lg-6">
                <div className="title py-2">
                    <p className=" h4">Fast and professional</p>
                    <h2 className=" pt-2 fw-bold">Why choose medical?</h2>
                </div>
              <ul className="aboutCaption d-flex justify-content-between flex-wrap  align-items-center  row-gap-3">
                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Preparing patients</span>
                  </div>
                </li>

                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Patients medications</span>
                  </div>
                </li>

                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Helping physicians</span>
                  </div>
                </li>

                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Information insurance</span>
                  </div>
                </li>

                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Replacement recovery</span>
                  </div>
                </li>

                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Ostomy and Continence</span>
                  </div>
                </li>
                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Helping physicians</span>
                  </div>
                </li>
                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Electronic records</span>
                  </div>
                </li>
                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Electronic records</span>
                  </div>
                </li>
                <li className="p-2">
                  <div className="list d-flex align-items-center">
                    <span className="icon-circle me-2">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span>Electronic records</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
