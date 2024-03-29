import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              VIDEO PLAYER
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" href="./service">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="./about">
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                {/* <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      /> */}
                <a href="./signin">
                  <button className="btn btn-warning" type="submit">
                    Sign In
                  </button>
                </a>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

