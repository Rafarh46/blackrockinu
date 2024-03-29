import React from "react";
const Newsletter = () => {
  return (
    <section className="cta padding-top padding-bottom bg-color" id="contact">
      <div className="container">
        <div className="cta__wrapper">
          <div className="cta__newsletter justify-content-center">
            <div
              className="cta__newsletter-inner"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="cta__thumb">
                <img src="/images/cta/peshi.png" alt="cta-thumb" />
              </div>
              <div className="cta__subscribe">
                <h2>
                  Subscribe to our news
                </h2>
                <p>
                Stay informed about the latest updates and opportunities in the world of Blackrock Inu by subscribing to our newsletter today.
                 Join us in the BlackRock revolution – subscribe now!
                </p>
                <form
                  className="cta-form cta-form--style2 form-subscribe"
                  action=""
                >
                  <div className="cta-form__inner d-sm-flex align-items-center">
                    <input
                      type="email"
                      className="form-control form-control--style2 mb-3 mb-sm-0"
                      placeholder="Email Address"
                    />
                    <button
                      className="trk-btn trk-btn--large trk-btn--secondary2"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="cta__shape">
            <span className="cta__shape-item cta__shape-item--1">
              <img src="/images/cta/2.png" alt="shape icon" />
            </span>
            <span className="cta__shape-item cta__shape-item--2">
              <img src="/images/cta/4.png" alt="shape icon" />
            </span>
            <span className="cta__shape-item cta__shape-item--3">
              <img src="/images/cta/5.png" alt="shape icon" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
