import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

import  Header   from './header.js';
import  Footer   from './footer.js';

function ComingSoon() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
          {/* <!-- comming soon page --> */}
          <section>
            <div className="container-fluid comingsoonContainer1">
                <div className="container bg-transparent d-flex comingsoonContaineInner">
                    <div className="col-lg-5">
                        <div className="row comingsoonleftRow">
                            <div><img src="./images/coming soon page/Logo copy 1 (1).png" alt="cming img" className="img-fluid comingsoonLogoImg" /></div>
                            <h4 className="comingsoonHeading">Something Awesome is coming up</h4>
                            <p className="comingsoonText">It's going to be amazing! Sign up to find out when it's ready </p>
                            <div className="input-group comingsoonSearchCont gap-3">
                                <input type="text" className="form-control bg-transparent comingsoonInput" placeholder="Your Email Address" aria-label="Username" aria-describedby="basic-addon1"/>
                                <button type="button" className="btn comingsoonBtn2">Sign me up</button>
                            </div>
                            <div>
                                <img src="./images/coming soon page/Artboard 3 copy 12.png" alt="cming img" className="img-fluid comingsoonImg8" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="d-flex">
                                <div className="comingsoonRightCont">
                                    <img src="./images/coming soon page/Component 34.png" alt="coming img" className="img-fluid comingsoonImg1" />
                                    <img src="./images/coming soon page/assortment_of_nuts_and_fruits_against_transparent_background_g_1_3_1 copy 1.png" alt="cming img" className="img-fluid comingsoonImg2" />
                                    <img src="./images/coming soon page/Artboard 3.png" alt="cming img" className="img-fluid comingsoonImg3" />
                                    <img src="./images/coming soon page/Artboard 3 copy.png" alt="cming img" className="img-fluid comingsoonImg4" />
                                    <img src="./images/coming soon page/Artboard 3 copy 5.png" alt="cming img" className="img-fluid comingsoonImg5" />
                                    <img src="./images/coming soon page/Artboard 3 copy 11.png" alt="cming img" className="img-fluid comingsoonImg6" />
                                    <img src="./images/coming soon page/Artboard 3 copy 7.png" alt="cming img" className="img-fluid comingsoonImg7" />
                                </div>
                                <div><button type="button" className="btn comingsoonBtn1">Contact Us</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid comingsoonContainer2">
                </div>
            </div>
            <div className="container-fluid comingSooncontainerMiddle">
                <div className="container bg-transparent">
                    <ul className="list-unstyled d-flex justify-content-between Ullist404">
                        <li className="text404botttom">This website is currently undergoing design & development</li>
                        <li className="text404botttom pt-0 d-none d-lg-block">.</li>
                        <li className="text404botttom d-none d-lg-block">This website is currently undergoing design & development</li>
                        <li className="text404botttom pt-0  d-none d-lg-block">.</li>
                        <li className="text404botttom d-none d-lg-block">This website is currently undergoing design & development</li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">
              <div className="container bg-transparent my-5">
                <div className="row">
                    <div className="col-lg-5 contactusLeftCont">
                        <h2 className="comingSoonPgHeading">Give us a shout</h2>
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
                        <h2 className="comingSoonPgHeading">Ask a different question?</h2>
                        <p className="contactPgText">Get in touch on call or mail to get a more clear communication.</p>
                    </div>
                    <div className="col-lg-7 d-flex contactInfoDiv justify-content-center">
                        <div className="pe-xl-3">
                            <ul className="contactInfoList  list-unstyled d-flex ps-4">
                                <li><img src="./images/contact us page/Group 37674.png" className="img-fluid contactPgIcons" /></li>
                                <ul className="list-unstyled ms-3">
                                    <li><p className="contactPgText">Phone no.</p></li>
                                    <li><a href="" className="contactPgInfoText">+91 888 888 8888</a></li>
                                </ul>
                            </ul>
                        </div>
                        <div className="ps-xl-3">
                            <ul className="contactInfoList list-unstyled d-flex ps-lg-4">
                                <li><img src="./images/contact us page/Group 37725.png" className="img-fluid contactPgIcons ms-4 ms-lg-0" /></li>
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

export default ComingSoon;