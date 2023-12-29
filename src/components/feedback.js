import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

import  Header   from './header.js';
import  Footer   from './footer.js';

function Feedback() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
        <section>
            <div className="container-fluid">
                <div className="container feedbackCont">
                    <div className="row">
                        <div className="col-lg-3 border-end feedbackleftcont">
                            <div className="">
                                <h3 className="feedbackleftHeading">Reviews & ratings</h3>
                                <p className="feedbackSubHeading">Have you used this product?</p>
                                <p className="feedbackleftText">your review should be about your experience with the product.</p>
                            </div>
                            <hr />
                            <div className="">
                                <p className="feedbackSubHeading">Why review a product?</p>
                                <p className="feedbackleftText">Your Valuable feedback will help fellow shoppers decide.</p>
                            </div>
                            <hr />
                            <div className="">
                                <p className="feedbackSubHeading">How to review a product?</p>
                                <p className="feedbackleftText">your review should include facts. An honest opinion is always appreciated. If you have an issue with the product or service please contact us from the help center.</p>
                            </div>
                        </div>
                        <div className="col-lg-9 feedbackrightcont">
                            <div className="list-unstyled d-flex">
                                <ul className="list-unstyled me-auto d-flex">
                                    <li><img src="./images/order page/Frame 48096768.png" alt="" className="img-fluid paymentPgimg2 " /></li>
                                    <ul className="list-unstyled">
                                        <li><p className="ms-2 feedbackProductText">Premium Californian Almonds (200gm)<span className="text-body-tertiary ms-2">x 2</span></p></li>
                                        <li><p className="ms-2 feedbackProductSubText">Order No.:  1101543</p></li>
                                        <li><p className="ms-2 feedbackProductSubText">Order Date: 29 Nov 2023</p></li>
                                    </ul>
                                </ul>
                                <li><p className="feedbackProductText">Delivered on 26 Jan, 2023</p></li>
                            </div>
                            <hr/>
                            <div>
                                <p className="feedbackRatingText">Rate this product</p>
                                <ul className="list-unstyled d-flex d-grid gap-2">
                                    <li><img src="./images/combos page/Group 37669.png" alt="rating star" className="img-fluid" /></li>
                                    <li><img src="./images/combos page/Group 37669.png" alt="rating star" className="img-fluid" /></li>
                                    <li><img src="./images/combos page/Group 37669.png" alt="rating star" className="img-fluid" /></li>
                                    <li><img src="./images/combos page/Group 37669.png" alt="rating star" className="img-fluid" /></li>
                                    <li><img src="./images/feedback page/Vector.png" alt="rating star" className="img-fluid " style="height: 19PX; width: 19PX;"/></li>
                                    <li><p className="ps-4 feedbackRatingSubText pt-1">Excellent</p></li>
                                </ul>
                            </div>
                            <hr />
                            <div>
                                <div className="mb-3">
                                    <label for="feedbackMessage" className="form-label">Why review a product?</label>
                                    <textarea className="form-control feedbackPgInput" id="feedbackMessage" rows="5" placeholder="Please leave us a message"></textarea>
                                </div>
                                <div className="feedbackBtnCont">
                                    <span><img src="./images/feedback page/Add A Photo.png" alt="photoImg" className="img-fluid p-2 feedbackPhoto" /></span>
                                    <button type="submit" className="btn btn-danger float-end feedbackSubBtn">Submit</button>
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

export default Feedback;