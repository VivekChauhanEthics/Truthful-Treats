import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header.js';
import  Footer   from './footer.js';
//images
import ContactUsImg1 from "../images/contact us page/Group 37674.png"
import ContactUsImg2 from "../images/contact us page/Group 37725.png"


function ContactUs() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
          {/* <!-- contact us page --> */}
          <section>
            <div className="container-fluid shippingPolicyCon">
              <div className="container bg-transparent">
                <h2 className="shippingPolicyHeading">CONTACT US</h2>
              </div>
            </div>
            <div className="container-fluid">
              <div className="container bg-transparent my-5">
                <div className="row">
                    <div className="col-lg-5 contactusLeftCont">
                        <h2 className="contactPgHeading">Give us a shout</h2>
                        <p className="contactPgText">
                            Got a question, comment, or just want to say hello?
                            We'd love to hear from you! Reach out to us using any of the methods.
                            Our dedicated team will get in touch with you within 48 hours.
                        </p>
                        <p className="mt-5">
                            <span className="contactPgText">We are available</span><br/> 
                            <span className="contactPgDarkText">Monday - Friday </span>:<span className="contactPgText ms-2">09:00am - 05:00pm</span><br/> 
                            <span className="contactPgDarkText">Saturday - Sunday</span>:<span className="contactPgText ms-2">Offline</span> 
                        </p>
                    </div>
                    <div className="col-lg-7 customerMessageCont pt-xl-4">
                        <h4 className="contactPgRightHeading">Send us a customer message</h4>
                        <div className="input-group contactUsInputGroup">
                            <input type="text" aria-label="First name" className="form-control contactPgInputs" placeholder="Your name*"/>
                            <input type="email" aria-label="Last name" className="form-control contactPgInputs" placeholder="Email*"/>
                        </div>
                        <div className="input-group mt-4 contactUsInputGroup">
                            <input type="number" aria-label="First name" className="form-control contactPgInputs" placeholder="Mobile number*"/>
                            <select className="contactSelectBox " aria-label="Default select example">
                                <option selected>Subject*</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="input-group mt-3">
                            <textarea className="form-control contactPgtextarea" id="feedbackMessage" rows="5" placeholder="Message"></textarea>
                        </div>
                        <button type="button" className="btn contactusBtn float-end mt-4">Join Now</button>
                    </div>
                </div>
                <div className="row contactusPgRow2">
                    <div className="col-lg-5 px-xl-5">
                        <h2 className="contactPgHeading">Ask a different question?</h2>
                        <p className="contactPgText">Get in touch on call or mail to get a more clear communication.</p>
                    </div>
                    <div className="col-lg-7 d-flex contactInfoDiv justify-content-center">
                        <div className="pe-xl-3">
                            <ul className="contactInfoList  list-unstyled d-flex ps-4">
                                <li><img src={ContactUsImg1} className="img-fluid contactPgIcons" /></li>
                                <ul className="list-unstyled ms-3">
                                    <li><p className="contactPgText">Phone no.</p></li>
                                    <li><a href="" className="contactPgInfoText">+91 888 888 8888</a></li>
                                </ul>
                            </ul>
                        </div>
                        <div className="ps-xl-3">
                            <ul className="contactInfoList list-unstyled d-flex ps-lg-4">
                                <li><img src={ContactUsImg2} className="img-fluid contactPgIcons ms-4 ms-lg-0" /></li>
                                <ul className="list-unstyled ms-3">
                                    <li><p className="contactPgText">Email Id</p></li>
                                    <li><a href="" className="contactPgInfoText">care@truthfultreats.com</a></li>
                                </ul>
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

export default ContactUs;