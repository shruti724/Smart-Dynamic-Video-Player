import React from "react";
import Footer from "./Footer";

const About = () => {
    return (
      <>
        <div className="container">
          <main>
            <div className="container marketing">
              <div className="row">
                <div className="col-lg-4 my-4">
                  <img
                    className="rounded-circle"
                    width={140}
                    height={140}
                    src="https://th.bing.com/th/id/OIP.3oPyVxRQe7Secm_8vcOa3QAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    alt=""
                  />
                  <h2 className="fw-normal">Alex</h2>
                  <p>
                    This is the place where you can open youself up. Explore the
                    world of creativity.
                  </p>
                  <p>
                    <a className="btn btn-secondary" href="#">
                      View more»
                    </a>
                  </p>
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4 my-4">
                  <img
                    className="rounded-circle"
                    width={140}
                    height={140}
                    src="https://d319i1jp2i9xq6.cloudfront.net/upload/images/40606/40606_p.jpg?20150107041042"
                    alt=""
                  />
                  <h2 className="fw-normal">Helen</h2>
                  <p>
                    Another exciting bit of place where you can open youself up.
                    Explore the world of creativity.
                  </p>
                  <p>
                    <a className="btn btn-secondary" href="#">
                      View more»
                    </a>
                  </p>
                </div>

                {/* /.col-lg-4 */}
                <div className="col-lg-4 my-4">
                  <img
                    className="rounded-circle"
                    width={140}
                    height={140}
                    src="https://i.pinimg.com/originals/f8/29/31/f82931332c0920cd46985bcc7421697f.jpg"
                    alt=""
                  />
                  <h2 className="fw-normal">Zen</h2>
                  <p>
                    And this the place where you can open youself up. Explore
                    the world of creativity.
                  </p>
                  <p>
                    <a className="btn btn-secondary" href="#">
                      View more»
                    </a>
                  </p>
                </div>
                {/* /.col-lg-4 */}
              </div>
              {/* /.row */}
              {/* START THE FEATURETTES */}
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">
                    Whenever you see a successful business, someone once made a
                    courageous decision{" "}
                    <span className="text-body-secondary">
                      It’ll blow your mind.
                    </span>
                  </h2>
                  <p className="lead">
                    Risk-taking is the cornerstone of empires.
                  </p>
                </div>
                <div className="col-md-5">
                  <svg
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width={500}
                    height={500}
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 500x500"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-bg)"
                    />
                    <text
                      x="50%"
                      y="50%"
                      fill="var(--bs-secondary-color)"
                      dy=".3em"
                    >
                      500x500
                    </text>
                  </svg>
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading fw-normal lh-1">
                    Oh yeah, it’s that good.{" "}
                    <span className="text-body-secondary">
                      See for yourself.
                    </span>
                  </h2>
                  <p className="lead">
                    A brand for a company is like a reputation for a person. You
                    earn reputation by trying to do hard things well.
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <svg
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width={500}
                    height={500}
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 500x500"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-bg)"
                    />
                    <text
                      x="50%"
                      y="50%"
                      fill="var(--bs-secondary-color)"
                      dy=".3em"
                    >
                      500x500
                    </text>
                  </svg>
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">
                    And lastly, this one.{" "}
                    <span className="text-body-secondary">Checkmate.</span>
                  </h2>
                  <p className="lead">
                    I think a simple rule of business is, if you do the things
                    that are easier first, then you can actually make a lot of
                    progress.
                  </p>
                </div>
                <div className="col-md-5">
                  <svg
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width={500}
                    height={500}
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 500x500"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect
                      width="100%"
                      height="100%"
                      fill="var(--bs-secondary-bg)"
                    />
                    <text
                      x="50%"
                      y="50%"
                      fill="var(--bs-secondary-color)"
                      dy=".3em"
                    >
                      500x500
                    </text>
                  </svg>
                </div>
              </div>
              <hr className="featurette-divider" />
              {/* /END THE FEATURETTES */}
            </div>
            {/* /.container */}
            {/* FOOTER */}
            <footer className="container">
              <p className="float-end">
                <a href="#">Back to top</a>
              </p>
              <p>
                © 2020–2023 Company, Inc. · <a href="#">Privacy</a> ·{" "}
                <a href="#">Terms</a>
              </p>
            </footer>
          </main>
        </div>
        <div className="container"></div>
        <Footer />
      </>
    );
}

export default About;