import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="container">
          <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
              <div className="col-12 col-md">
                <img
                  className="mb-2"
                  src="https://img.favpng.com/5/2/5/video-player-computer-icons-media-player-png-favpng-rMGXUAXKHrTZxZ3NaWGHAvUYF.jpg"
                  alt=""
                  width={24}
                  height={19}
                />
                <small className="d-block mb-3 text-body-secondary">
                  © 2020–2023
                </small>
              </div>
              <div className="col-6 col-md">
                <h5>Links</h5>
                <ul className="list-unstyled text-small">
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Home
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Reviews
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Blogs
                    </a>
                  </li>
                  {/* <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li> */}
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Resource
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Resource name
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Another resource
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Final resource
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Team
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Locations
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Privacy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="link-secondary text-decoration-none" href="#">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

