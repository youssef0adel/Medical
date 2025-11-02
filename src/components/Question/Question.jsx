import "../Question/Question.css";
import img1 from "../../assets/q.jpg";
const Question = () => {
  return (
    <>
      <section className="Question py-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-8">
              <div className="Questions">
                <div className="Questions-title">
                  <h1 className="fw-bold">
                    Have you{" "}
                    <span className="text-main h1 fw-bold">Question?</span>
                  </h1>
                  <p className="fw-light h4 py-4">
                    Feel free to contact us now
                  </p>
                  <p className="text-secondary lh-lg fw-light">
                    Please read questions bellow and if you can not find your
                    answer, please send us your question, we will answer you as
                    soon as possible.
                  </p>
                </div>
                <div className="slider-title d-flex align-items-center">
                  <div className="slider-icon p-4 rounded-3 bg-main">
                    <i className="fa-solid fa-question text-white fa-2x"></i>
                  </div>
                  <div className="slider-caption p-3">
                    <h4 className="fw-bold">F.A.Qs</h4>
                    <p className="fw-light text-secondary">
                      Frequently asked questions
                    </p>
                  </div>
                </div>
                <div className="s-slider rounded-4 d-flex flex-column justify-content-center py-3">
                  <div className="common-Questions p-2">
                    <div className="s-1   p-3 border border-1 rounded-3">
                      <div
                        tabindex="0"
                        className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center"
                      >
                        <h6>What types of bikes do you sell?</h6>
                        <span>
                          <i className="fa-solid fa-down-left-and-up-right-to-center "></i>
                        </span>
                      </div>
                      <div className="Questions-inner py-5 mt-2">
                        <p>
                          We offer a wide range of bikes including road bikes,
                          mountain bikes, hybrid bikes, electric bikes, and
                          kids' bikes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="common-Questions p-2">
                    <div className="s-1   p-3 border border-1 rounded-3">
                      <div
                        tabindex="0"
                        className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center"
                      >
                        <h6>Do you provide bike repair services?</h6>
                        <span>
                          <i className="fa-solid fa-down-left-and-up-right-to-center "></i>
                        </span>
                      </div>
                      <div className="Questions-inner py-5 mt-2">
                        <p>
                          We offer a wide range of bikes including road bikes,
                          mountain bikes, hybrid bikes, electric bikes, and
                          kids' bikes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="common-Questions p-2">
                    <div className="s-1   p-3 border border-1 rounded-3">
                      <div
                        tabindex="0"
                        className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center"
                      >
                        <h6>How long does a standard tune-up take?</h6>
                        <span>
                          <i className="fa-solid fa-down-left-and-up-right-to-center "></i>
                        </span>
                      </div>
                      <div className="Questions-inner py-5 mt-2">
                        <p>
                          We offer a wide range of bikes including road bikes,
                          mountain bikes, hybrid bikes, electric bikes, and
                          kids' bikes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="common-Questions p-2">
                    <div className="s-1   p-3 border border-1 rounded-3">
                      <div
                        tabindex="0"
                        className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center"
                      >
                        <h6>What brands of bikes do you carry?</h6>
                        <span>
                          <i className="fa-solid fa-down-left-and-up-right-to-center "></i>
                        </span>
                      </div>
                      <div className="Questions-inner py-5 mt-2">
                        <p>
                          We offer a wide range of bikes including road bikes,
                          mountain bikes, hybrid bikes, electric bikes, and
                          kids' bikes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="common-Questions p-2">
                    <div className="s-1   p-3 border border-1 rounded-3">
                      <div
                        tabindex="0"
                        className="Questions-upper d-flex justify-content-between position-relative overflow-hidden align-items-center"
                      >
                        <h6>Can I book a service appointment online?</h6>
                        <span>
                          <i className="fa-solid fa-down-left-and-up-right-to-center "></i>
                        </span>
                      </div>
                      <div className="Questions-inner py-5 mt-2">
                        <p>
                          We offer a wide range of bikes including road bikes,
                          mountain bikes, hybrid bikes, electric bikes, and
                          kids' bikes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="Question-form">
                <div className="img-form">
                  <img className="w-100" src={img1} alt="" />
                </div>
                <div className="inputs-form p-4 rounded-2 bg-second">
                  <div className="inputs-form-title d-flex align-items-center">
                    <div className="inputs-form-title-icon p-3 rounded-3 bg-white">
                      <i className="fa-solid fa-user-doctor text-second fa-2x"></i>
                    </div>
                    <div className="inputs-form-caption p-3">
                      <h4 className="fw-bold text-white">Ask Us</h4>
                      <p className="fw-light text-white">Quick contact form</p>
                    </div>
                  </div>
                  <div className="inputs">
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <input className="border-0 p-2 rounded-2 w-100" type="text" placeholder="Your Name (*)" />
                            </div>
                            <div className="col-md-6">
                                <input className="border-0 p-2 rounded-2 w-100" type="email" placeholder="Your Email (*)" />
                            </div>
                            <div className="col-md-12">
                                <input className="border-0 p-2 rounded-2 w-100" type="text" placeholder="Subject" />
                            </div>
                            <div className="col-md-12">
                                <textarea className="w-100 rounded-2 border-0 p-2" name="massegae" placeholder="Massege" id="#"></textarea>
                            </div>
                            <div className="col-md-12">
                                <button className=" border-0 p-3 rounded-3 w-100 ">Supmit</button>
                            </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Question;
