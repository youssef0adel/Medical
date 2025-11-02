import "../Reviews/Reviews.css";
import img1 from "../../assets/t1.jpg";
import img2 from "../../assets/t2.jpg";
import img3 from "../../assets/t3.jpg";
const Reviews = () => {
  return (
    <>
      <section className="Reviews py-5">
        <div className="container">
          <div className="Reviews-title text-center py-5">
            <h1>
              See what said our{" "}
              <span className="h1 fw-bold text-main">Patient</span> and{" "}
              <span className="h1 fw-bold text-main">Visitors</span>
            </h1>
            <p className="fw-light h4">
              Our goal is your complete health and wellness
            </p>
          </div>
          <div className="Reviews-slider">
            <div id="carouselExampleIndicators" class="carousel slide">
             
              <div class="carousel-inner p-3">
                <div class="carousel-item active">
                    <div className="card-slide d-flex flex-column justify-content-center align-items-center">
                        <div className="card-1 p-5 rounded-3 ">
                                <div className="slide-img rounded-3 overflow-hidden mx-auto">
                            <img className="w-100" src={img1} alt="Man" title="Mohamed Gamal" />
                        </div>
                        <div className="slide-title text-center py-5">
                            <h5 className="text-main fw-bold">Mohamed Gamal <span className="text-secondary fw-light"> Businessman</span></h5>
                        </div>
                        <div className="slide-caption">
                            <p className="fw-light text-center text-black">
                                "My experience at West Hills Hospital was superior and well above <br /> medical treatment standards. The physicians, nurses and staff <br /> successfully eradicated (my disease) with unbelievable care <br /> and compassion. Their attention to ensuring my well-being <br /> was exceptional." 
                            </p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div class="carousel-item ">
                    <div className="card-slide d-flex flex-column justify-content-center align-items-center">
                        <div className="card-1 p-5 rounded-3 ">
                                <div className="slide-img rounded-3 overflow-hidden mx-auto">
                            <img className="w-100" src={img2} alt="Man" title="Mohamed Gamal" />
                        </div>
                        <div className="slide-title text-center py-5">
                            <h5 className="text-main fw-bold">Mohamed Gamal <span className="text-secondary fw-light"> Businessman</span></h5>
                        </div>
                        <div className="slide-caption">
                            <p className="fw-light text-center text-black">
                                "My experience at West Hills Hospital was superior and well above <br /> medical treatment standards. The physicians, nurses and staff <br /> successfully eradicated (my disease) with unbelievable care <br /> and compassion. Their attention to ensuring my well-being <br /> was exceptional." 
                            </p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div class="carousel-item ">
                    <div className="card-slide d-flex flex-column justify-content-center align-items-center">
                        <div className="card-1 p-5 rounded-3 ">
                                <div className="slide-img rounded-3 overflow-hidden mx-auto">
                            <img className="w-100" src={img3} alt="Man" title="Mohamed Gamal" />
                        </div>
                        <div className="slide-title text-center py-5">
                            <h5 className="text-main fw-bold">Mohamed Gamal <span className="text-secondary fw-light"> Businessman</span></h5>
                        </div>
                        <div className="slide-caption">
                            <p className="fw-light text-center text-black">
                                "My experience at West Hills Hospital was superior and well above <br /> medical treatment standards. The physicians, nurses and staff <br /> successfully eradicated (my disease) with unbelievable care <br /> and compassion. Their attention to ensuring my well-being <br /> was exceptional." 
                            </p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                
              </div>
              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                ><i className="fa-solid fa-angle-left text-main fa-2xl"></i></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                ><i className="fa-solid fa-angle-right text-main fa-2xl"></i></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
