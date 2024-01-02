import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header';
import  Footer   from './footer';
//images
import OrderDetailImg2 from "../images/cancel order page/Group 37739.png";
import OrderDetailImg3 from "../images/order detail page/Vector.png";
import OrderDetailImg4 from "../images/order detail page/Vector (1).png";
import OrderDetailImg5 from "../images/order page/Frame 48096768.png";
import OrderDetailImg6 from "../images/order detail page/Group 37672.png";


function CancelOrder() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
            <section>
                <div className="container-fluid">
                    <div className="container orderdetailCont">
                        <div className="row orderdetaiRow1">
                            <div className="col-lg-4 orderdetailInnCont1">
                                <ul className="list-unstyled">
                                    <li><h3 className="orderdetailheading">Delivery address</h3></li>
                                    <li className="">
                                        <p className="orderdetailSubheading">Ayush Marwah</p>
                                        <p className="orderdetailTopText">Block B, Army colony, near central park, New Delhi, Delhi - 110023</p>
                                    </li>
                                    <li className="mt-3">
                                        <p className="orderdetailSubheading">Phone No.:</p>
                                        <p className="orderdetailTopText">+91 9015201602</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 orderdetailInnCont2">
                                <ul className="list-unstyled">
                                    <li><h3 className="orderdetailheading">Information</h3></li>
                                    <li className="d-flex">
                                        <img src={OrderDetailImg2} className="img-fluid orderdetailIcon1" />
                                        <p className="orderdetailSubheading">This order has been cancelled on 8th Dec 2023</p>
                                    </li>
                                    <li className="d-flex mt-4">
                                        <span className="orderdetailIcon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3 img-fluid mb-1 ms-1" viewBox="0 0 16 16">
                                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                            </svg>
                                        </span>
                                        <span>
                                            <NavLink to=""  className="orderdetailSubheading">add this same product on cart</NavLink>
                                        </span >
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 orderdetailInnCont3">
                                <ul className="list-unstyled">
                                    <li><h3 className="orderdetailheading">? Need Help</h3></li>
                                    <li><p className="orderdetailSubheading">Contact Customer Support</p></li>
                                    <li className="d-flex mt-2"><img src={OrderDetailImg3} className="img-fluid orderdetailIcon2"/><p className="orderdetailSubheading ps-2 cursor-pointer">+91 8888888888</p></li>
                                    <li className="d-flex"><img src={OrderDetailImg4} className="img-fluid orderdetailIcon2"/><p className="orderdetailSubheading ps-2 cursor-pointer">care@truthtreats.com</p></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="row orderdetaiRow2">
                            <div className="col-lg-4">
                                <ul className="list-unstyled d-flex">
                                    <li><img src={OrderDetailImg5} alt="" className="img-fluid paymentPgimg2 " /></li>
                                    <ul className="list-unstyled ps-3">
                                        <p className="orderdetailSubheading">Premium Californian Almonds (200gm) x 2</p>
                                        <p className="orderdetailTopText">Order No.:  1101543</p>
                                        <p className="orderdetailTopText">Order Date: 29 Nov 2023</p>
                                        <p className="orderdetailSubheading">Rs. 349</p>
                                    </ul>
                                </ul>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="modal-body">
                                    <div className="progress-track">
                                        <ul id="progressbar">
                                            <li className="text-left cancelOrder1" id="step1"><span className="orderdetailTopText">Order received</span><p className="orderdetailTopText2">12 Aug 2023</p></li>
                                            <li className="text-center cancelOrder2" id="step2"><span className="orderdetailTopText">Cancelled</span><p className="orderdetailTopText2">13 Aug 2023</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <ul className="list-unstyled d-flex reviewProducttext">
                                    <li><img src={OrderDetailImg6} className="img-fluid"/></li>
                                    <NavLink to="/feedback"><li className="text-primary orderdetailTopText ms-2">Rate & review Product</li></NavLink>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="row orderdetaiRow3">
                            <div className="col-lg-12  orderdetaiRow3Cont">
                              <h5 className="mb-2 orderdetailBottheading" >Tracking history</h5>
                              <div className='d-flex gap-5 d-grid gap-lg-5'>
                                    <ul className="list-unstyled">
                                        <li className="cancelOrderBottText ">8th Dec 2023 <span>at 15:02pm</span></li>
                                        <li className="cancelOrderBottText">8th Dec 2023 <span>at 13:26pm</span></li>
                                    </ul>
                                    <div class="progress-container2">
                                        <div class="step-circle-cancelOrder"></div>
                                        <div class="step-circle2"></div>
                                        <div class="progress-bar" id="myProgressBar"></div>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li className="cancelOrderBottText">
                                           Order Cancelled
                                          <span>
                                           Reason: Placed an order by accident
                                          </span>
                                        </li>
                                        <li className="cancelOrderBottText">
                                           Order Confirmed
                                          <span>
                                            Shipment order created and confirmed by your merchant
                                          </span>
                                        </li>
                                    </ul>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
    
  )
}

export default CancelOrder;