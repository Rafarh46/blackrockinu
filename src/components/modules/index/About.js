/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import CountUp from "react-countup";
function About() {
  return (
    <section className="about about--style1 " id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">
            <div className="col-lg-6">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img
                      className="dark"
                      src="/images/about/pesh.png"
                      alt="about-image"
                    />
                    
                    <div className="floating-content__bottom-right">
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <span
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="30"
                          >
                            <CountUp end ={100} duration={5} />
                          
                          </span>
                          K+
                        </h3>
                        <p>Community Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <h2>
                    Meet <span>$BRINU</span> Mission: Unity and financial freedom {" "}
                  </h2>

                  <p className="mb-0">
                  Blackrock Inu is a community-driven cryptocurrency built on the Solana blockchain,
                   dedicated to providing a platform for individuals to achieve financial freedom. 
                   Our mission is to empower our members through education, collaboration, and access to 
                   innovative blockchain technology. With a focus on inclusivity and transparency, Blackrock
                    Inu aims to create a supportive environment where every member can thrive. Join us on our
                     journey towards a decentralized future where financial freedom is within reach for everyone.{" "}
                  </p>
                  <Link href="about"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    Explore More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
