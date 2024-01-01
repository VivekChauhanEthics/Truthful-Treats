import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header';
import  Footer   from './footer';
import ProfileSideBar from "./profileSideBar.js"
//images
import OrdersPgImg1 from "../images/order page/Artboard 5 3.png";
import OrdersPgImg2 from "../images/order page/Frame 48096768.png";
import OrdersPgImg3 from "../images/order page/Frame 48096766.png";
import OrederPgRefund from "../images/order page/Vector.png";
import OrdersPgBlueStar from "../images/order page/Group 37672.png";


function Orders() {
  return (
    <>
        <Header />
        
        {/* <!-- Main Content --> */}
        <main>
            <section>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row orderPgMainRow">
                           <ProfileSideBar />
                            <div className="col-lg-8 col-sm-12 OrderPgRightCon">
                                {/* <!-- Modal body --> */}
                                <div className="OrderId">Order Id: <span className="text-warning">1101543123121xknk</span></div>
                                <div className="row mt-4 OrderTrackRow">
                                    <div className="col-sm-2 col-md-2 text-center">
                                        <img src={OrdersPgImg1} alt="orderImg" className="orderTopImg" />
                                        <h3 className="orderPgHeading d-block d-sm-none text-center">
                                          Premium Californian Almonds (200gm) + Dried Sliced Cranberries (200gm)
                                          Roasted & Salted Cashews (200gm)
                                        </h3>
                                    </div>
                                    <div className="col-sm-9 col-md-9">
                                        <h3 className="orderPgHeading d-none d-md-block">
                                          Premium Californian Almonds (200gm) + Dried Sliced Cranberries (200gm)
                                          Roasted & Salted Cashews (200gm)
                                        </h3>
                                        <div className="modal-body">
                                            <div className="progress-track">
                                                <ul id="progressbar">
                                                    <li className="text-left " id="step1"><span>Order received</span></li>
                                                    <li className="text-center" id="step2"><span>In Transit</span></li>
                                                    <li className="text-center" id="step3"><span id="three">Out for Delivery</span></li>
                                                    <li className="text-center" id="step4"><span>Delivered</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 postOrderRow">
                                    <div className="col-md-12 col-sm-12">
                                        <h2 className="postorderHeading">Past  Orders</h2>
                                        {/* <!-- Your table HTML --> */}
                                        <div className="table-responsive">
                                            <table className="table" id="orderPgTable">
                                                <thead className="orderTable border-0">
                                                    <tr>
                                                        <th scope="col" className="bg-transparent border-0 theadText">Item</th>
                                                        <th scope="col" className="bg-transparent border-0 text-center theadText">Price</th>
                                                        <th scope="col" className="bg-transparent border-0 theadText">Status</th>
                                                        <th scope="col" className="bg-transparent border-0 theadText">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="border-0">
                                                            <div className="d-flex">
                                                                <img src={OrdersPgImg1} alt="postorderImg" className="postOrderImg1" />
                                                                <div className="ms-3">
                                                                    <h3 className="postOrderHeadings">Premium Californian Almonds (200gm)</h3>
                                                                    <p className="postOrderText">Order No.:  1101543</p>
                                                                    <p className="postOrderText">29 Nov 2023</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="border-0 text-center">Rs. 349</td>
                                                        <td className="border-0 postOrderHeadings">In Tansite</td>
                                                        <td className="border-0">
                                                            <div className="orderPgIcons">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt " viewBox="0 0 16 16">
                                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                                </svg>
                                                                <NavLink to="/orderDetail" className='cursor-pointer orderDetailLink'>Track Order</NavLink>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-0">
                                                            <div className="d-flex">
                                                                <img src={OrdersPgImg2} alt="postorderImg" className="postOrderImg" />
                                                                <div className="ms-3">
                                                                    <h3 className="postOrderHeadings">Premium Californian Almonds (200gm)</h3>
                                                                    <p className="postOrderText">Order No.:  1101543</p>
                                                                    <p className="postOrderText">29 Nov 2023</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="border-0 text-center">Rs. 429</td>
                                                        <td className="border-0 postOrderHeadings">Cancelled</td>
                                                        <td className="border-0">
                                                            <div className="orderPgIcons">
                                                                <img src={OrederPgRefund} alt='' className='img-fluid mt-1' style={{width: "16px", height: "16px"}}/>
                                                                <span className='cursor-pointer'>Refund Completed</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-0">
                                                            <div className="d-flex">
                                                                <img src={OrdersPgImg3} alt="postorderImg" className="postOrderImg" />
                                                                <div className="ms-3">
                                                                    <h3 className="postOrderHeadings">Premium Californian Almonds (200gm)</h3>
                                                                    <p className="postOrderText">Order No.:  1101543</p>
                                                                    <p className="postOrderText">29 Nov 2023</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="border-0 text-center">Rs. 379</td>
                                                        <td className="border-0 postOrderHeadings">
                                                           <div className='OrdersPgBlueStarCon'>
                                                                <span>Delivered on 26 Jan, 2023</span>
                                                                <span>
                                                                    <img src={OrdersPgBlueStar} alt='' className='img-fluid' />
                                                                    <NavLink to="/feedback" className='blueText'>Rate & review Product</NavLink>
                                                                </span>
                                                           </div>
                                                        </td>
                                                        <td className="border-0">
                                                            <div className="orderPgIcons">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                                                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                                                                </svg>
                                                                <span className='cursor-pointer'>
                                                                   Repeat order
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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

export default Orders;