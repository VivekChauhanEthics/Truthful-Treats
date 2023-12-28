import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

// social icons
import footerIcon1 from "../images/footer/Vector.png";
import footerIcon2 from "../images/footer/Link.png";
import footerIcon3 from "../images/footer/Instagram.png";
import footerIcon4 from "../images/footer/Link (1).png";
import footerIcon5 from "../images/footer/Link (2).png";
// payment images
import footerImg1 from "../images/footer/american1_60x38.png";
import footerImg2 from "../images/footer/maestro5_60x38.png";
import footerImg3 from "../images/footer/mastercard6_60x38.png";
import footerImg4 from "../images/footer/rupay12_60x38.png";
import footerImg5 from "../images/footer/visa13_60x38.png";
import footerImg6 from "../images/footer/Mask group.png";

function Footer  () {
  return (
    // Footer Content 
    <footer>
      <div className="container-fluid footer">
        <div className="container bg-transparent pt-5">
          <div className="row d-flex">
            <div className="col-lg-3 col-12 mb-4">
              <ul className="list-unstyled">
                  <li><h5 className="footerHeading ps-0">Connect With Us</h5></li>
                  <li className="footerSearchSec">            
                      <div className="input-group mb-3">
                        <input type="text" className="form-control footerSearch" placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      </div>
                      <button type="button" className="btn btn-danger footerBtn">Join Now</button>
                  </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 mb-4">
              <ul className="list-unstyled">
                  <li><h5 className="footerHeading">Information</h5></li>
                  <li><a href="./about.html" className="footerListItems text-decoration-none">About Us</a></li>
                  <li><a href="./Blog.html" className="footerListItems text-decoration-none">Blogs</a></li>
                  <li><a href="./career.html" className="footerListItems text-decoration-none">Careers</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 mb-4">
              <ul className="list-unstyled ">
                  <li><h5 className="footerHeading">Terms & Policy</h5></li>
                  <li><a href="./shippingPolicy.html" className="footerListItems text-decoration-none">Shipping & return policy</a></li>
                  <li><a href="./termofService.html" className="footerListItems text-decoration-none">Terms of service</a></li>
                  <li><a href="./privacyPolicy.html" className="footerListItems text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 mb-4">
              <ul className="list-unstyled">
                  <li><h5 className="footerHeading">Help</h5></li>
                  <li><a href="./contactus.html" className="footerListItems text-decoration-none">Contact Us</a></li>
                  <li><a href="./b2bBulkOrder.html" className="footerListItems text-decoration-none">B2B/Bulk Order</a></li>
                  <li><a href="./profile.html" className="footerListItems text-decoration-none">My account</a></li>
                  <li><a href="./orders.html" className="footerListItems text-decoration-none">Track Order</a></li>
                  <li><a href="./FAQ.html" className="footerListItems text-decoration-none">F.A.Q.</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <div className="row">
                <ul className="list-unstyled">
                    <li><h5 className="footerHeading">Contact</h5></li>
                    <li><a href="" className="footerListItems text-decoration-none">care@truthtreats.com</a></li>
                    <li><a href="" className="footerListItems text-decoration-none">+91 8888888888</a></li>
                </ul>
              </div>
              <div className="row mt-3">
                <h3 className="footerFollowHeading">Follow Us On</h3>
                <ul className="list-unstyled d-flex footerFollowIcons gap-1">
                  <li>
                      <img src={footerIcon1} alt="footerIcons" className="img-fluid footerIconsImg"/>
                  </li>
                  <li>
                      <img src={footerIcon2} alt="footerIcons" className="img-fluid mx-2 footerIconsImg" />
                  </li>
                  <li>
                      <img src={footerIcon3} alt="footerIcons" className="img-fluid footerIconsImg" />
                  </li>
                  <li>
                      <img src={footerIcon4} alt="footerIcons" className="img-fluid mx-2 footerIconsImg" />
                  </li>
                  <li>
                      <img src={footerIcon5} alt="footerIcons" className="img-fluid footerIconsImg" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container footerQuickSearchCont  my-4 ">
              <div className="">
                <p className="footerHeading1">Quick Searches</p>
                <ul className="footerQuickSearchList gap-2">
                  <ul className="d-flex list-unstyled gap-2">
                      <li><a href="" className="footerListItems1">Cashew</a></li>
                      <li>|</li>
                      <li><a href="" className="footerListItems1">Almonds</a></li>
                      <li>|</li>
                      <li><a href="" className="footerListItems1">Gifting Ideas</a></li>
                      <li>|</li>
                      <li><a href="" className="footerListItems1">Pistachew</a></li>
                      <li>|</li>
                  </ul>
                  <ul className="d-flex list-unstyled gap-2">
                      <li><a href="" className="footerListItems1">Sweetdish</a></li>
                      <li>|</li>
                      <li><a href="" className="footerListItems1">Raisins</a></li>
                      <li>|</li>
                      <li><a href="" className="footerListItems1">Dry fruits Gift packs</a></li>
                      <li>|</li>
                      <li><a href="" className="footerListItems1">Walnut</a></li>
                  </ul>
                  <ul className="d-flex list-unstyled gap-2">
                      <li>|</li>
                      <li><a href="" className="footerListItems1">Dry fruit combos</a></li>
                  </ul>
                </ul>
              </div>
              <ul className="list-unstyled d-flex footerPaymentIcons ">
                <li>
                    <img src={footerImg1} alt="footerIcons" className="img-fluid footerIconsImg" />
                </li>
                <li className="mx-1">
                    <img src={footerImg2} alt="footerIcons" className="img-fluid footerIconsImg " />
                </li>
                <li>
                    <img src={footerImg3} alt="footerIcons" className="img-fluid footerIconsImg" />
                </li>
                <li  className="mx-1">
                    <img src={footerImg4} alt="footerIcons" className="img-fluid footerIconsImg" />
                </li>
                <li>
                    <img src={footerImg5} alt="footerIcons" className="img-fluid footerIconsImg" />
                </li>
                <li  className="px-1">
                    <img src={footerImg6} alt="footerIcons" className="img-fluid footerIconsImg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid  copyrightcon  py-2 mt-4">
          <div className="container d-flex">
            <p className="me-auto ">© 2023 Truthful treats , All Right Reserved</p>
            <p className="me-5">Designed and Developed by : Ethics Infotech LLP</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;