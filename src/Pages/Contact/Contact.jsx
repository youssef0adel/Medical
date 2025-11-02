import Hero2 from "../../components/Hero2/Hero2";
import "../Contact/Contact.css";
const Contact = () => {
  return (
    <>
      <main>
        <Hero2 Title={"Contact Us"} />
        <section className="Contact py-5">
          <div className="container">
            <div className="contact-info">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="support-info info-sec ">
                    <div className="support-icon info-icon p-4  rounded-3">
                      <i className="fa-solid fa-envelope text-white fa-2x"></i>
                    </div>
                    <div className="support-caption">
                      <h4 className="fw-bold">Support</h4>
                      <p className="fw-light text-secondary">
                        Support@yoursite.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="Phone-info info-sec ">
                    <div className="Phone-icon info-icon p-4  rounded-3">
                      <i className="fa-solid fa-phone text-white fa-2x"></i>
                    </div>
                    <div className="Phone-caption">
                      <h4 className="fw-bold">Phone</h4>
                      <p className="fw-light text-secondary">01277840267</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="Location-info info-sec">
                    <div className="Location-icon info-icon p-4  rounded-3">
                      <i className="fa-solid fa-location-dot text-white fa-2x"></i>
                    </div>
                    <div className="Location-caption">
                      <h4 className="fw-bold">Location</h4>
                      <p className="fw-light text-secondary">
                        123 Bns street, Egypt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form pt-5 ">
              <div className="row gy-5">
                <div className="col-md-8 ">
                  <div className="inputs-form-2 rounded-2 overflow-hidden">
                    <div className="inputs-form-layer p-4 pe-5">
                      <div className="form-title ">
                        <h1 className="text-white fw-bold pt-5 ">
                          Get in touch with us
                        </h1>
                      </div>
                      <form>
                        <div className="row gy-4">
                          <div className="col-md-6 name">
                            <label className="text-white" htmlFor="name">
                              Full name
                            </label>
                            <input id="name" className="w-100" type="text" />
                          </div>
                          <div className="col-md-6 phone">
                            <label className="text-white" htmlFor="phone">
                              Phone
                            </label>
                            <input id="phone" className="w-100" type="number" />
                          </div>
                          <div className="col-md-6 date">
                            <label className="text-white" htmlFor="date">
                              Date
                            </label>
                            <input id="date" className="w-100" type="date" />
                          </div>
                          <div className="col-md-6 Sickness">
                            <label className="text-white" htmlFor="name">
                              Sickness
                            </label>
                            <input
                              id="Sickness"
                              className="w-100"
                              type="text"
                            />
                          </div>
                          <div className="col-md-12 massege">
                            <label className="text-white" htmlFor="massege">
                              Massege
                            </label>
                            <textarea
                              className="w-100"
                              name="massege"
                              id="massege"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            className="py-3 border-0 rounded-1 contact-btn w-100"
                            type="submit"
                          >
                            Send request
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="location-map h-100 rounded-3 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789559.3609568093!2d32.15163279118138!3d28.831918574387554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459809c6078ad8f%3A0x55cbaaf346a60b54!2z2YXYrdin2YHYuNipINio2YbZiiDYs9mI2YrZgQ!5e0!3m2!1sar!2seg!4v1762046496220!5m2!1sar!2seg"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Google Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
