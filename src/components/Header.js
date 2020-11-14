import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Router>
        <header>
          <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
            <li>
              <div className="logo-wrapper waves-light waves-effect waves-light">
                <Link to="">
                  <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="" className="img-fluid flex-center" />
                </Link>
              </div>
            </li>
            <li>
              <ul className="social">
                <li>
                  <Link to="" className="icons-sm fb-ic">
                    <i className="fa fa-facebook"> </i>
                  </Link>
                </li>
                <li>
                  <Link to="" className="icons-sm pin-ic">
                    <i className="fa fa-pinterest"> </i>
                  </Link>
                </li>
                <li>
                  <Link to="" className="icons-sm gplus-ic">
                    <i className="fa fa-google-plus"> </i>
                  </Link>
                </li>
                <li>
                  <Link to="" className="icons-sm tw-ic">
                    <i className="fa fa-twitter"> </i>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <form className="search-form" role="search">
                <div className="form-group waves-light waves-effect waves-light">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </form>
            </li>
            <li>
              <ul className="collapsible collapsible-accordion">
                <li>
                  <Link to="" className="collapsible-header waves-effect arrow-r">
                    <i className="fa fa-shopping-bag" /> Product Page
                    <i className="fa fa-angle-down rotate-icon"></i>
                  </Link>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="" className="waves-effect">Product Page V.1</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Product Page V.2</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Product Page V.3</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="active">
                  <Link to="" className="collapsible-header waves-effect arrow-r active">
                    <i className="fa fa-shopping-cart"></i> Cart Pages
                    <i className="fa fa-angle-down rotate-icon"></i>
                  </Link>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="" className="waves-effect">Page with shopping cart</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Page with contact form</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Page with contact form V.2</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Page with sign in form</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Page with 'terms of use'</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Page with 'FAQ'</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="" className="collapsible-header waves-effect arrow-r">
                    <i className="fa fa-dashboard"></i> Homepages
                    <i className="fa fa-angle-down rotate-icon"></i>
                  </Link>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="" className="waves-effect">Ecommerce homepage default</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Ecommerce homepage full width</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Ecommerce homepage V.3 Carousel</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Ecommerce homepage V.3 Full Page Carousel</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Ecommerce homepage V.3 Half Page Carousel</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Ecommerce homepage V.4</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="" className="collapsible-header waves-effect arrow-r">
                    <i className="fa fa-desktop"></i> Post Pages
                    <i className="fa fa-angle-down rotate-icon"></i>
                  </Link>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="" className="waves-effect">Page with column on the right</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Page with newsletter on the left</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Page with newsletter on the right</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Full width page with logged user</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Full width page with not logged user</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="" className="collapsible-header waves-effect arrow-r">
                    <i className="fa fa-diamond"></i> Category Pages
                    <i className="fa fa-angle-down rotate-icon"></i>
                  </Link>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="" className="waves-effect">Category list with left column</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Category list with right column</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Category grid with left column</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Category grid with right column</Link>
                      </li>
                      <li>
                        <Link to="" className="waves-effect">Category grid with left column carousel</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <div className="sidenav-bg mask-strong"></div>
            <div className="ps__scrollbar-x-rail">
              <div className="ps__scrollbar-x" tabIndex={0}></div>
            </div>
            <div className="ps__scrollbar-y-rail">
              <div className="ps__scrollbar-y" tabIndex={0}></div>
            </div>
          </ul>
          <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
            <div className="float-left">
              <Link to="" data-activates="slide-out" className="button-collapse">
                <i className="fa fa-bars"></i>
              </Link>
            </div>
            <div className="breadcrumb-dn mr-auto">
              <ol className="breadcrumb header-breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="">Trang Chủ</Link>
                </li>
              </ol>
            </div>
            <ul className="nav navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item dropdown">
                <Link to="" className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-user"></i> Tài Khoản</Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                  <Link to="" className="dropdown-item waves-effect waves-light">Đăng Ký</Link>
                  <Link to="" className="dropdown-item waves-effect waves-light">Đăng Nhập</Link>
                  <Link to="" className="dropdown-item waves-effect waves-light">Đăng Xuất</Link>
                </div>
              </li>
            </ul>
          </nav>
        </header>
      </Router>
    );
  }
}
export default Header;
