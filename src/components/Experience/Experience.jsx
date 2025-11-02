import "../Experience/Experience.css";
import img1 from "../../assets/e1.jpg"
const Experience=()=>{
    return(
        <>
        <section className="Experience py-5">
            <div className="Experience-title text-center py-5">
                <h1>We take <span className="h1 text-main">the time</span> you need</h1>
                <p className="h5 text-secondary">Best Clinic with over 15 years of experience</p>
            </div>
            <div className="Experience-cards container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="Experience-card ">
                            <div className="card-top position-relative rounded-3 overflow-hidden">
                                 <div className="card-img ">
                                <img className="w-100" src={img1} alt="Expert Doctors" title="Expert Doctors" />
                            </div>
                            <div className="card-layer text-center  d-flex justify-content-center align-items-center">
                                <h1 className="text-white">37+</h1>
                            </div>
                            </div>
                           
                            <div className="card-caption text-main text-center py-4">
                                <h5>Years of Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="Experience-card ">
                            <div className="card-top position-relative rounded-3 overflow-hidden">
                                 <div className="card-img ">
                                <img className="w-100" src={img1} alt="Expert Doctors" title="Expert Doctors" />
                            </div>
                            <div className="card-layer text-center  d-flex justify-content-center align-items-center">
                                <h1 className="text-white">99+</h1>
                            </div>
                            </div>
                           
                            <div className="card-caption text-main text-center py-4">
                                <h5>Expert Personals</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="Experience-card ">
                            <div className="card-top position-relative rounded-3 overflow-hidden">
                                 <div className="card-img ">
                                <img className="w-100" src={img1} alt="Expert Doctors" title="Expert Doctors" />
                            </div>
                            <div className="card-layer text-center  d-flex justify-content-center align-items-center">
                                <h1 className="text-white">18k</h1>
                            </div>
                            </div>
                           
                            <div className="card-caption text-main text-center py-4">
                                <h5>Satisfy Customers</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Experience;