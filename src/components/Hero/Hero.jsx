import "../Hero/Hero.css";
const Hero = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner position-relative">
          <div className="carousel-item  " data-bs-interval="9000">
            <section className="hero slide-1 ">
              <div className="p-3 container d-flex align-items-center h-100 overflow-hidden">
                <div className="hero-caption text-center text-md-start">
                  <h5 className="text-main"> WE ARE MEDICAL</h5>
                  <h1 className=" fw-bold text-black">Miracles Made Daily</h1>
                  <p className="text-secondary lh-lg">
                    Serving all people through exemplary health care, education,{" "}
                    <br />
                    research and community outreach.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item active" data-bs-interval="9000">
            <section className="hero slide-2">
              <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="hero-caption text-center d-flex flex-column justify-content-center align-items-center">
                  <div className="bg-white text-main p-3 w-50 rounded-3 mb-3">
                    <h5 className=""> WE ARE MEDICAL</h5>
                  </div>

                  <div className="hero-card p-4 rounded-3 bg-main text-white">
                    <h1 className="fs-7 fw-bold">
                      Make a difference in the lives of others
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="buttons position-absolute d-flex gap-2 d-none">
          <button
            className="carousel-control-pr rounded-3 bg-main border-0  "
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-ne rounded-3 bg-main border-0 "
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
