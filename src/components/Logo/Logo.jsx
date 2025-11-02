import "./Logo.css";
import img1 from "../../assets/logo-1.jpg";
import img2 from "../../assets/logo-2.jpg";
import img3 from "../../assets/logo-3.jpg";
import img4 from "../../assets/logo-4.jpg";
import img5 from "../../assets/logo-5.jpg";
const Logo=()=>{
    return(
        <>
        <section className="Logo py-5">
                <div className="Logo-list container">
                    <div className="logo-1  logo-op">
                        <div className="logo-icon p-2 bg-second text-white rounded-3">Health Care Center</div>
                        <img className="w-100" src={img1} alt="" />
                    </div>
                    <div className="logo-2  logo-op">
                        <div className="logo-icon p-2 bg-second text-white rounded-3">Techno Care</div>
                        <img className="w-100" src={img2} alt="" />
                    </div>
                    <div className="logo-3  logo-op">
                        <div className="logo-icon p-2 bg-second text-white rounded-3">Medical Lab</div>
                        <img className="w-100" src={img3} alt="" />
                    </div>
                    <div className="logo-4  logo-op">
                        <div className="logo-icon p-2 bg-second text-white rounded-3">Medical Lab</div>
                        <img className="w-100" src={img4} alt="" />
                    </div>
                    <div className="logo-5  logo-op">
                        <div className="logo-icon p-2 bg-second text-white rounded-3">Healthy Life</div>
                        <img className="w-100" src={img5} alt="" />
                    </div>
                </div>
        </section>
        </>
    )
}

export default Logo;