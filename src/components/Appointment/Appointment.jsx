import "../Appointment/Appointment.css";
import img1 from "../../assets/doctor-2.jpg";

const Appointment = () => {
  return (
    <section className="appointment-section py-5">
      <div className="container-fluid">
        <div className="row align-items-center g-0 gy-4">
          
          <div className="col-md-4 ">
            <div className="appointment-img h-100">
              <img
                className="w-100 h-100 rounded-3 shadow"
                src={img1}
                alt="Woman doctor"
                title="Woman doctor"
              />
            </div>
          </div>

          
          <div className="col-md-8 bg-main text-white rounded-3 p-5">
            <div className="appointment-form p-md-5">
              <div className="form-title mb-4 ">
                <h1 className="fw-bold">Make an Appointment</h1>
                <p className="h3">Primary care appointments and some specialties</p>
              </div>

              <form>
                <div className="row ">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input type="text" id="name" className="form-control" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Your Phone
                    </label>
                    <input type="number" id="phone" className="form-control" />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input type="date" id="date" className="form-control" />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label htmlFor="sickness" className="form-label">
                      Sickness
                    </label>
                    <input type="text" id="sickness" className="form-control" />
                  </div>

                  <div className="col-md-12 mb-4">
                    <label htmlFor="sickness-ex" className="form-label">
                      Sickness Explanation
                    </label>
                    <textarea
                      id="sickness-ex"
                      rows="3"
                      className="form-control"
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-end">
                    <button type="submit" className="btn btn-light fw-bold px-4">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
