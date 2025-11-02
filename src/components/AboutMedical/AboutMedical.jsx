import "../AboutMedical/AboutMedical.css";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/p6.jpg"
const AboutMedical=()=>{
    return(
        <>
        <section className="AboutMedical py-5">
                <div className="AboutMedical-title text-center py-5">
                    <h1 className="fw-bold">About our <span className="h1 fw-bold text-main">Xtra Medical</span></h1>
                    <p>With over 15 years of experience</p>
                </div>
                <div className="wath-video">
                    <div className="container">
                        <div className="row gy-4 justify-content-center  align-items-center  ">
                        <div className="col-md-8">
                            <div className="About-img position-relative overflow-hidden rounded-2">
                                <a href="#" className="w-100 h-100" to="/about"><img className="w-100" src={img1} alt="Doctor" title="Doctor" /></a>
                                <div className="img-button d-flex rounded-3 overflow-hidden">
                                    <div className="btn-1 bg-white px-5 text-center d-flex align-items-center">
                                        <i className="fa-solid fa-play text-main fa-2xl"></i>
                                    </div>
                                    <div className="btn-2 text-center bg-main p-4 text-white ">
                                        <h6>About Medical</h6>
                                        <p>Watch the Video</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default AboutMedical;