import img3 from "../../assets/p9.jpg";
import img4 from "../../assets/p7.jpg";
import img5 from "../../assets/p8.jpg";
const ServicesMedical = () => {
  return (
    <>
      <section className="ServicesMedical py-5">
        <div className="ServicesMedical-title text-center">
          <h1 className="fw-bold">
            Our <span className="text-main fw-bold h1">Medical</span> Services
          </h1>
          <p>Best clinic with over 15 years of experience</p>
        </div>
        <div className="Services container-fluid">
          <div className="row gy-4 py-5 ">
            
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
      </section>
    </>
  );
};

export default ServicesMedical;
