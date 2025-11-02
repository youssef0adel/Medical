import img1 from "../../assets/about-1.jpg";
import img2 from "../../assets/about-2.jpg";
import Tilt from "react-parallax-tilt";
import "../Mabout/Mabout.css";
const Mabout = () => {
  return (
    <>
      <section className="About-Services py-5">
        <div className="container">
          <div className="row py-5 gy-4">
            <div className="col-md-4">
              <div className="About-Services-caption ">
                <h1 className="fw-bold">
                  Patient <span className="text-main h1 fw-bold">Online</span>{" "}
                  Services
                </h1>
                <p className="h5">Manage all of your appointments</p>
                <p className="py-5 lh-lg">
                  Physicians, scientists and other medical experts dedicate
                  their clinical time to this site, we are in unique position to
                  give you access to the knowledge and experience of Medical.
                </p>
                <button className="Btn-2">Read More details</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="About-Services-img1 rounded-2 ">
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
            <div className="col-md-4">
              <div className="About-Services-img2 rounded-2 ">
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
                        src={img2}
                        alt="Bicycle"
                      />
                    </Tilt>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mabout;
