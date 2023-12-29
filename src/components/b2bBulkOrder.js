import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header.js';
import  Footer   from './footer.js';
//images
import B2BImg1 from "../images/b2b bulk order/Artboard 1 copy 11 1.png";
import B2BImg2 from "../images/b2b bulk order/Group 37674.png";
import B2BImg3 from "../images/b2b bulk order/Group 37725.png"



function B2BbulkOrder() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
          {/* <!-- shippingPolicy page --> */}
          <section>
            <div className="container-fluid ">
                <img src={B2BImg1} alt="bulkorder" className="img-fluid bulkorderTopImg" /> 
            </div>
            <div className="container-fluid">
              <div className="container bg-transparent bulkOrderPgCont">
                <div className="row">
                    <div className="col-lg-6 bulkOrderLeftCont">
                        <p className="bulkOrderLeftHeading">
                            Rewrite the snacking rules with Truthful Treats
                            because greatness starts with a bulked-up bite!
                        </p>
                        <p className="bulkOrderLeftText">
                            Reach out to our committed distributor team now, and let's explore how we can customize the ideal bulk package for your business. 
                        </p>
                        <div className="row d-flex bulkOrderContactRow">
                            <div className="">
                                <h2 className="bulkOrderLeftHeading mb-0">Ask a different question?</h2>
                                <p className="bulkOrderLeftText">Get in touch on call or mail to get a more clear communication.</p>
                            </div>
                            <div className="bulkOrderInfoCont">
                                <div className="">
                                    <ul className="bulkOrderInfoList  list-unstyled d-flex ps-4">
                                        <li><img src={B2BImg2} className="img-fluid bulkOrderIcons" /></li>
                                        <ul className="list-unstyled ms-3">
                                            <li><p className="contactPgText">Phone no.</p></li>
                                            <li><p className="contactPgInfoText">+91 888 888 8888</p></li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="">
                                    <ul className="bulkOrderInfoList list-unstyled d-flex ps-lg-4">
                                        <li><img src={B2BImg3} className="img-fluid bulkOrderIcons ms-4 ms-lg-0" /></li>
                                        <ul className="list-unstyled ms-3">
                                            <li><p className="contactPgText">Email Id</p></li>
                                            <li><p className="contactPgInfoText">care@truthfultreats.com</p></li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 bulkOrderrightCont">
                        <h4 className="contactPgRightHeading">Interested in discussing B2B/Bulk options?</h4>
                        <div className="input-group bulkOrderInputGroup">
                            <input type="text" aria-label="First name" className="form-control bulkOrderInputs" placeholder="Your name*"/>
                            <input type="phone" aria-label="Last name" className="form-control bulkOrderInputs" placeholder="Mobile No*"/>
                        </div>
                        <div className="input-group mt-3 bulkOrderInputGroup">
                            <input type="email" aria-label="First name" className="form-control bulkOrderInputs" placeholder="Email Id**"/>
                        </div>
                        <div className="bulkOrderRightRadioCont">
                            <p className="bulkOrderRightSubHead">Choose the most fitting option.</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input bulkOrderRadiosInputs" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="form-check-label bulkOrderRadiosText" for="inlineRadio1">Corporate gifting</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input bulkOrderRadiosInputs" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label bulkOrderRadiosText" for="inlineRadio2">Retail</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input bulkOrderRadiosInputs" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                <label className="form-check-label bulkOrderRadiosText" for="inlineRadio3">Co-working Spaces</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input bulkOrderRadiosInputs" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
                                <label className="form-check-label bulkOrderRadiosText" for="inlineRadio4">Bulk Order</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input bulkOrderRadiosInputs" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
                                <label className="form-check-label bulkOrderRadiosText" for="inlineRadio5">Others</label>
                            </div>
                        </div>
                        <div className="input-group mt-3">
                            <textarea className="form-control bulkOrdertextarea" id="feedbackMessage" rows="5" placeholder="Please leave us a message"></textarea>
                        </div>
                        <div className="d-flex bulkOrderCheckCont">
                            <div className="d-flex">
                                <div className="form-check form-check-inline me-0">
                                    <input className="form-check-input bulkOrderCheckInput" type="checkbox" id="inlineCheckboxB2B" value="optionB2B"/>
                                </div>
                                <p className="bulkOrderCheckBoxText">By signing up, you agree to receive marketing message at the phone number or email provided. Msg and data rates may apply. View our privacy policy and terms of service for more info.</p>
                            </div>
                            <button type="button" className="btn bulkOrderBtn">Submit</button>
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

export default B2BbulkOrder;