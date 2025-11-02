import "../PackagesMedical/PackagesMedical.css"
const PackagesMedical=()=>{
    return(
        <>
        <section className="PackagesMedical py-5">
                <div className="container">
                    <div className="PackagesMedical-title text-center py-5">
                        <h1 className="fw-bold">Our <span className="fw-bold text-mein h1">Medical</span> Packages</h1>
                        <p className="fw-light">Health Insuranse Plans For Everyone</p>
                    </div>
                    <div className="row g-5 ">
                        <div className="col-md-4 hover">
                            <div className="PackagesMedical-item border border-2 p-4 rounded-3">
                                <div className="item-head d-flex justify-content-between">
                                    <div className="head-s1">
                                        <h1 className="text-main"><span className="h4">$</span>1200</h1>
                                        <p className="text-secondary">Basic Plan</p>
                                    </div>
                                    <div className="head-s2">
                                        <i className="fa-solid fa-user fa-5x text-secondary"></i>
                                    </div>
                                </div>
                                <hr />
                                <div className="item-footer">
                                    <p className="text-secondary lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate voluptates doloribus. Nam dolor voluptatibus ipsam esse libero quasi .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 middle">
                            <div className="PackagesMedical-item border border-2 p-4 rounded-3 bg-main text-white">
                                <div className="item-head d-flex justify-content-between">
                                    <div className="head-s1">
                                        <h1 className=""><span className="h4">$</span>3400</h1>
                                        <p className="">Special Plan</p>
                                    </div>
                                    <div className="head-s2">
                                        <i className="fa-solid fa-user-nurse fa-5x text-secondary"></i>
                                    </div>
                                </div>
                                <hr />
                                <div className="item-footer">
                                    <p className=" lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate voluptates doloribus. Nam dolor voluptatibus ipsam esse libero quasi .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 hover">
                            <div className="PackagesMedical-item border border-2 p-4 rounded-3">
                                <div className="item-head d-flex justify-content-between">
                                    <div className="head-s1">
                                        <h1 className="text-main"><span className="h4">$</span>4900</h1>
                                        <p className="text-secondary">Premium Plan</p>
                                    </div>
                                    <div className="head-s2">
                                        <i className="fa-solid fa-user-tie fa-5x text-secondary"></i>
                                    </div>
                                </div>
                                <hr />
                                <div className="item-footer">
                                    <p className="text-secondary lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate voluptates doloribus. Nam dolor voluptatibus ipsam esse libero quasi .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default PackagesMedical;