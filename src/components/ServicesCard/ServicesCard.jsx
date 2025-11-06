import "../ServicesCard/ServicesCard.css";
import img1 from "../../assets/icon-1.png";
import img2 from "../../assets/icon-2.png";
import img3 from "../../assets/icon-3.png";
import img4 from "../../assets/icon-4.png";
import img1h from "../../assets/icon-1h.png";
import img2h from "../../assets/icon-2h.png";
import img3h from "../../assets/icon-3h.png";
import img4h from "../../assets/icon-4h.png";


const ServicesCard=()=>{
    return(
        <>
        <section className="ServicesCard bg-main py-5">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-md-3 col-6">
                        <div className="card text-center position-relative d-flex flex-column  align-items-center py-3">
                            <img className="img1" src={img1} alt="Stomach img" title="Stomach img" />
                            <img className="img2" src={img1h} alt="Stomach img" title="Stomach img" />
                            <h4 className="py-3">Digstve System</h4>
                            <button className="Btn p-2"><a className="p-2" href="#">More details</a></button>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="card text-center position-relative d-flex flex-column  align-items-center py-3">
                            <img className="img1" src={img2} alt="Lungs img" title="Lungs img" />
                            <img className="img2" src={img2h} alt="Lungs img" title="Lungs img" />
                            <h4 className="py-3">Urologist Clinic</h4>
                            <button className="Btn p-2"><a className="p-2" href="#">More details</a></button>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="card text-center position-relative d-flex flex-column  align-items-center py-3">
                            <img className="img1" src={img3} alt="Heart img" title="Heart img" />
                            <img className="img2" src={img3h} alt="Heart img" title="Heart img" />
                            <h4 className="py-3">Digestive System</h4>
                            <button className="Btn p-2"><a className="p-2" href="#">More details</a></button>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="card text-center position-relative d-flex flex-column  align-items-center py-3">
                            <img className="img1" src={img4} alt="Stomach img" title="Stomach img" />
                            <img className="img2" src={img4h} alt="Stomach img" title="Stomach img" />
                            <h4 className="py-3">Cardiologist</h4>
                            <button className="Btn p-2"><a className="p-2" href="#">More details</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ServicesCard;