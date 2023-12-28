import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

import  Header   from './header';
import  Footer   from './footer';
import ProfileSideBar from "./profileSideBar.js"


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
                                        <img src="./images/order page/Artboard 5 3.png" alt="orderImg" className="orderTopImg" />
                                        <h3 className="orderPgHeading d-block d-sm-none text-center">Premium Californian Almonds (200gm)</h3>
                                    </div>
                                    <div className="col-sm-9 col-md-9">
                                        <h3 className="orderPgHeading d-none d-md-block">Premium Californian Almonds (200gm)</h3>
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
                                                        <th scope="col" className="bg-transparent border-0 text-center theadText">Quantity</th>
                                                        <th scope="col" className="bg-transparent border-0 theadText">Status</th>
                                                        <th scope="col" className="bg-transparent border-0 theadText">Invoice</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="border-0">
                                                            <div className="d-flex">
                                                                <img src="./images/order page/Artboard 5 3.png" alt="postorderImg" className="postOrderImg1" />
                                                                <div className="ms-3">
                                                                    <h3 className="postOrderHeadings">Premium Californian Almonds (200gm)</h3>
                                                                    <p className="postOrderText">Order No.:  1101543</p>
                                                                    <p className="postOrderText">29 Nov 2023</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="border-0 text-center">1</td>
                                                        <td className="border-0 postOrderHeadings">Delivered</td>
                                                        <td className="border-0">
                                                            <div className="orderPgIcons ms-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-0">
                                                            <div className="d-flex">
                                                                <img src="./images/order page/Frame 48096768.png" alt="postorderImg" className="postOrderImg" />
                                                                <div className="ms-3">
                                                                    <h3 className="postOrderHeadings">Premium Californian Almonds (200gm)</h3>
                                                                    <p className="postOrderText">Order No.:  1101543</p>
                                                                    <p className="postOrderText">29 Nov 2023</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="border-0 text-center">1</td>
                                                        <td className="border-0 postOrderHeadings">Delivered</td>
                                                        <td className="border-0">
                                                            <div className="orderPgIcons ms-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="border-0">
                                                            <div className="d-flex">
                                                                <img src="./images/order page/Frame 48096766.png" alt="postorderImg" className="postOrderImg" />
                                                                <div className="ms-3">
                                                                    <h3 className="postOrderHeadings">Premium Californian Almonds (200gm)</h3>
                                                                    <p className="postOrderText">Order No.:  1101543</p>
                                                                    <p className="postOrderText">29 Nov 2023</p>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="border-0 text-center">2</td>
                                                        <td className="border-0 postOrderHeadings">Delivered</td>
                                                        <td className="border-0">
                                                            <div className="orderPgIcons ms-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                                                </svg>
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