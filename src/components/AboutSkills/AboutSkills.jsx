import img1 from "../../assets/about-3.jpg";
import img2 from "../../assets/p6.jpg";
import img3 from "../../assets/p9.jpg";
import img4 from "../../assets/p7.jpg";
import img5 from "../../assets/p8.jpg";
import img6 from "../../assets/p5.jpg";
import { NavLink } from "react-router-dom";
const AboutSkills=()=>{
    return(
        <>
            <section className="AboutSkills">
                    <div className="sec1 container-fluid">
                        <div className="row gy-4 d-flex align-items-center  py-5">
                        <div className="col-md-6 py-5">
                            <div className="s2-img position-relative overflow-hidden rounded-2">
                                <a href="#" className="w-100 h-100" to="/about"><img className="w-100" src={img2} alt="Doctor" title="Doctor" /></a>
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
                        <div className="col-md-6">
                            <div className="s2-skills">
                                <div className="sk-1 p-3">
                                    <div className="sk-title d-flex justify-content-between">
                                        <p className="text-secondary fw-bold">Good Communication</p>
                                        <p className="text-main fw-bold">90%</p>
                                    </div>
                                    <div className="sk-percentage-1  rounded-2 w-100">
                                        <div className="sk-percentage-2 bg-second rounded-2"></div>
                                    </div>
                                </div>
                                <div className="sk-2 p-3">
                                    <div className="sk-title d-flex justify-content-between">
                                        <p className="text-secondary fw-bold">Organizational and clerical</p>
                                        <p className="text-main fw-bold">80%</p>
                                    </div>
                                    <div className="sk-percentage-1  rounded-2 w-100">
                                        <div className="sk-percentage-2 bg-second rounded-2"></div>
                                    </div>
                                </div>
                                <div className="sk-3 p-3">
                                    <div className="sk-title d-flex justify-content-between">
                                        <p className="text-secondary fw-bold">Medical knowledge</p>
                                        <p className="text-main fw-bold">95%</p>
                                    </div>
                                    <div className="sk-percentage-1  rounded-2 w-100">
                                        <div className="sk-percentage-2 bg-second rounded-2"></div>
                                    </div>
                                </div>
                                <div className="sk-4 p-3">
                                    <div className="sk-title d-flex justify-content-between">
                                        <p className="text-secondary fw-bold">Customer service</p>
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
                    <div className="sec2 bg-main py-5">
                        <div className=" p-3" >
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
                    </div>
            </section>
        </>
    )
}

export default AboutSkills;