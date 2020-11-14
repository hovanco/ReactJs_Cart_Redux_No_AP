import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <Router>
      
        <footer className="page-footer center-on-small-only">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 ml-auto">
                <h5 className="title social-section-title">Social Media</h5>
                <div className="social-section text-md-left">
                  <ul className="text-center">
                    <li>
                      <Link to="" className="btn-floating  btn-fb waves-effect waves-light">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn-floating  btn-ins waves-effect waves-light">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn-floating  btn-tw waves-effect waves-light">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn-floating  btn-yt waves-effect waves-light">
                        <i className="fa fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn-floating  btn-li waves-effect waves-light">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn-floating  btn-dribbble waves-effect waves-light">
                        <i className="fa fa-dribbble left"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn-floating  btn-pin waves-effect waves-light">
                        <i className="fa fa-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="btn-floating  btn-gplus waves-effect waves-light">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <h5 className="title">Delivery</h5>
                <ul>
                  <li>
                    <Link to="">Store Delivery</Link>
                  </li>
                  <li>
                    <Link to="">Online Delivery</Link>
                  </li>
                  <li>
                    <Link to="">Delivery Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="">Tracking</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h5 className="title">Need help?</h5>
                <ul>
                  <li>
                    <Link to="">FAQ</Link>
                  </li>
                  <li>
                    <Link to="">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="">Return Policy</Link>
                  </li>
                  <li>
                    <Link to="">Product Registration</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5 className="title">Instagram Photos</h5>
                <ul className="instagram-photos">
                  <li>
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="" />
                      <Link to="">
                        <div className="mask waves-light waves-effect waves-light"></div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" />
                      <Link to="">
                        <div className="mask waves-light waves-effect waves-light"></div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg" alt="" />
                      <Link to="">
                        <div className="mask waves-light waves-effect waves-light"></div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg" alt="" />
                      <Link to="">
                        <div className="mask waves-light waves-effect waves-light"></div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg" alt="" />
                      <Link to="">
                        <div className="mask waves-light waves-effect waves-light"></div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg" alt="" />
                      <Link to="">
                        <div className="mask waves-light waves-effect waves-light"></div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" alt="" />
                      <Link to="">
                        <div className="mask waves-light waves-effect waves-light"></div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" alt="" />
                      <Link to="">
                        <div className="mask waves-light waves-effect waves-light"></div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container-fluid">
              © 2016 Copyright:
              <Link to="http://www.MDBootstrap.com"> MDBootstrap.com </Link>
            </div>
          </div>
        </footer>
      </Router>
    );
  }
}
