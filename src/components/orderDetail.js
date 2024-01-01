import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header';
import  Footer   from './footer';
//images
import OrderDetailImg1 from "../images/order detail page/Group 37738.png";
import OrderDetailImg2 from "../images/order detail page/Group 37739.png";
import OrderDetailImg3 from "../images/order detail page/Vector.png";
import OrderDetailImg4 from "../images/order detail page/Vector (1).png";
import OrderDetailImg5 from "../images/order page/Frame 48096768.png";
import OrderDetailImg6 from "../images/order detail page/Group 37672.png";


function OrderDetail() {
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
                                    <li><h3 className="orderdetailheading">More Actions</h3></li>
                                    <li className="d-flex">
                                        <img src={OrderDetailImg1} alt='' className="img-fluid orderdetailIcon1" />
                                        <p className="orderdetailSubheading">Download Invoice</p>
                                        <button type="button" className="btn orderdetailBtn">Download</button>
                                    </li>
                                    <li className="d-flex mt-4">
                                        <img src={OrderDetailImg2} alt='' className="img-fluid orderdetailIcon1" />
                                        <span>
                                            <p className="orderdetailSubheading">Cancel Order</p>
                                            <p className="orderdetailTopText2">You can only cancel your order before shipping</p>
                                        </span >
                                        <NavLink to="/cancelOrder" className="text-primary orderdetailTopText2 cancellink">Click here to cancel</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 orderdetailInnCont3">
                                <ul className="list-unstyled">
                                    <li><h3 className="orderdetailheading">? Need Help</h3></li>
                                    <li><p className="orderdetailSubheading">Contact Customer Support</p></li>
                                    <li className="d-flex mt-2"><img src={OrderDetailImg3} alt='' className="img-fluid orderdetailIcon2"/><p className="orderdetailSubheading ps-2 cursor-pointer">+91 8888888888</p></li>
                                    <li className="d-flex"><img src={OrderDetailImg4} alt='' className="img-fluid orderdetailIcon2"/><p className="orderdetailSubheading ps-2 cursor-pointer">care@truthtreats.com</p></li>
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
                                            <li className="text-left " id="step1"><span className="orderdetailTopText">Order received</span><p className="orderdetailTopText2">12 Aug 2023</p></li>
                                            <li className="text-center" id="step2"><span className="orderdetailTopText">In Transit</span><p className="orderdetailTopText2">13 Aug 2023</p></li>
                                            <li className="text-center" id="step3"><span id="three" className="orderdetailTopText">Out for Delivery</span></li>
                                            <li className="text-center" id="step4"><span className="orderdetailTopText">Delivered</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <ul className="list-unstyled d-flex reviewProducttext">
                                    <li><img src={OrderDetailImg6} alt='' className="img-fluid"/></li>
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
                                        <li className="orderdetailBottText ">9th Dec 2023 <span>at 10:00pm</span></li>
                                        <li className="orderdetailBottText">9th Dec 2023 <span>at 13:00pm</span></li>
                                        <li className="orderdetailBottText">8 Dec 2023 <span>at 19:49pm</span></li>
                                        <li className="orderdetailBottText">8 Dec 2023 <span>at 17:10pm</span></li>
                                        <li className="orderdetailBottText">9 Dec 2023 <span>at 13:26pm</span></li>
                                    </ul>
                                    <div class="progress-container">
                                        <div class="step-circle"></div>
                                        <div class="step-circle2"></div>
                                        <div class="step-circle2"></div>
                                        <div class="step-circle2"></div>
                                        <div class="step-circle2"></div>
                                        <div class="progress-bar" id="myProgressBar"></div>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li className="orderdetailBottText">
                                          Out for delivery
                                          <span>
                                           from janakpuri center
                                          </span>
                                        </li>
                                        <li className="orderdetailBottText">
                                          In Transit
                                          <span>
                                            From Mumbai to Delhi
                                          </span>
                                        </li>
                                        <li className="orderdetailBottText">
                                          In Transit
                                          <span>Package arrive at Mumbai Warehouse</span>
                                        </li>
                                        <li className="orderdetailBottText">
                                          Package Received
                                          <span>
                                            Package received at courier facility Mumbai
                                          </span>
                                        </li>
                                        <li className="orderdetailBottText">
                                          Order Confirmed
                                          <span>Shipment order created and confirmed by your merchant</span>
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

export default OrderDetail;