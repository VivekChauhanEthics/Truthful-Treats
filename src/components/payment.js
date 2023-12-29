import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header';
import  Footer   from './footer';
//images
import CCAvenueImg1 from "../images/footer/american1_60x38.png"
import CCAvenueImg2 from "../images/footer/maestro5_60x38.png"
import CCAvenueImg3 from "../images/footer/mastercard6_60x38.png"
import CCAvenueImg4 from "../images/footer/rupay12_60x38.png"
import CCAvenueImg5 from "../images/footer/visa13_60x38.png"
import CCAvenueImg6 from "../images/footer/Mask group.png"
import PaymentProductImg1 from "../images/order page/Artboard 5 4.png"
import PaymentProductImg2 from "../images/order page/Frame 48096768.png"
import PaymentPgDiscoumt from "../images/payment page/Discount Coupon.png"


function Payment() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
        <section>
            <div className="container-fluid">
                <div className="container">
                    <div className="row paymentPgRow">
                        <div className="col-lg-7 col-sm-12 paymentLeftCont">
                            <div className="ps-3 payRowBorder1">
                                <div className="d-flex">
                                    <span className="me-auto paymentPgTopTextL">Contact</span>
                                    <span className="paymentPgTopTextR">Have An Account?<a href="./login.html" className="text-dark ms-1">Log In</a></span>
                                </div>
                                <p className="mt-2 paymentPguserName"><strong>Ayush Marwah</strong><strong className="ms-4">+91 9015201602</strong></p>
                            </div>
                            <div className="row me-0 payRowBorder2">
                                <div className="d-flex me-0">
                                    <h3 className="paymentPgHeading me-auto ms-3">Delivery Address</h3>
                                    <button type="button" className="btn paymentPgBtn">+ Add Address</button>
                                </div>
                                <div className="form-check mt-md-3">
                                    <input className="form-check-input paymentPgRadio" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label ps-5 paymentPgLabel" for="flexRadioDefault1">
                                        <div className="row me-0  bg-transparent">
                                            <div className="d-flex ps-4 bg-transparent">
                                                <div className="me-auto py-2 bg-transparent">
                                                    <p>
                                                        <span className="paymentPgfTag">Home</span> <span className="paymentPgsTag ms-3">Default</span>
                                                    </p>
                                                    <p className="mt-2 ms-lg-1 PayAdressUserName">
                                                        <span >Ayush Marwah</span><span className="ms-lg-4 ms-3">+91 9015201602</span>
                                                    </p>
                                                    <p className="mt-2 adressListText">Block B, Army colony, near central park, New Delhi, Delhi - 110023</p>
                                                </div>
                                                {/* <!-- Edit list button --> */}
                                                <div className="btn-group dropstart bg-transparent">
                                                    <button type="button" className="btn dropdown-toggle addressDropdown border-0 pb-lg-5 pb-4 me-lg-2 me-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span className="text-warning">Edit</span> 
                                                    </button>
                                                    <ul className="dropdown-menu addressDropdownList ps-3">
                                                    {/* <!-- Dropdown menu links --> */}
                                                    <li className="cursor-pointer">Edit</li>
                                                    <li className="cursor-pointer">Delete</li>
                                                    <li className="cursor-pointer">Set As Default</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-check mt-3 mb-2">
                                    <input className="form-check-input paymentPgRadio" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label paymentPgLabel ps-5" for="flexRadioDefault2">
                                        <div className="row me-0">
                                            <div className="d-flex ps-4">
                                                <div className="me-auto py-2">
                                                    <p>
                                                        <span className="fTag">Work</span>
                                                    </p>
                                                    <p className="mt-2 ms-lg-1 PayAdressUserName">
                                                        <span>Ayush Marwah</span><span className="ms-lg-4 ms-3">+91 9015201602</span>
                                                    </p>
                                                    <p className="mt-2 adressListText">17-18 Tag tower, near Bharti Airtel, gurugram, Haryana - 120023</p>
                                                </div>
                                                {/* <!-- Edit list button --> */}
                                                <div className="btn-group dropstart">
                                                    <button type="button" className="btn dropdown-toggle addressDropdown border-0 pb-lg-5 pb-4 me-lg-2 me-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span className="text-warning">Edit</span> 
                                                    </button>
                                                    <ul className="dropdown-menu addressDropdownList ps-3">
                                                        {/* <!-- Dropdown menu links --> */}
                                                        <li className="cursor-pointer">Edit</li>
                                                        <li className="cursor-pointer">Delete</li>
                                                        <li className="cursor-pointer">Set As Default</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="row me-0 paymentModeRow">
                                <h3 className="paymentPgHeading me-auto ps-4">Payment</h3>
                                <p className="ps-4 paymentPgModeSubH">All transactions are secure and encrypted</p>
                                <div className="form-check mt-3 mb-2">
                                    <input className="form-check-input paymentPgCheckBox" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label paymentPgCheckLable ps-2" for="flexCheckDefault">
                                        <div className="row ">
                                            <div className="d-flex py-2 ps-5">
                                                <p className="mt-2 ms-1 me-auto">
                                                    <strong className="me-3">CCAvenue</strong>
                                                </p>
                                                <ul className="list-unstyled d-flex pe-3 py-1">
                                                    <li>
                                                        <img src={CCAvenueImg1} alt="footerIcons" className="img-fluid cursor-pointer" />
                                                    </li>
                                                    <li className="mx-2">
                                                        <img src={CCAvenueImg2} alt="footerIcons" className="img-fluid cursor-pointer " />
                                                    </li>
                                                    <li>
                                                        <img src={CCAvenueImg3} alt="footerIcons" className="img-fluid cursor-pointer" />
                                                    </li>
                                                    <li  className="mx-2">
                                                        <img src={CCAvenueImg4} alt="footerIcons" className="img-fluid cursor-pointer" />
                                                    </li>
                                                    <li>
                                                        <img src={CCAvenueImg5} alt="footerIcons" className="img-fluid cursor-pointer" />
                                                    </li>
                                                    <li  className="mx-2">
                                                        <img src={CCAvenueImg6} alt="footerIcons" className="img-fluid cursor-pointer" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="paymentPgModeText text-center pt-2">After clicking “Pay now”, you will be redirected to CCAvanue to complete your purchase securely.</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid px-3 mt-3">
                                <button className="btn paymentPgPayBtn" type="button">Pay Now</button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 paymentRightCont">
                            <div className="row me-0 paymentRightRow">
                                <div className="list-unstyled d-flex">
                                    <ul className="list-unstyled me-auto d-flex">
                                        <li><img src={PaymentProductImg1} alt="" className="img-fluid paymentPgimg" /></li>
                                        <li><p className="ms-2 paymentProductText">Premium Californian Almonds <br/> (200gm)<span className="footerListItems ms-2">x 1</span></p></li>
                                    </ul>
                                    <li><strong className="paymentProductPrice">Rs. 540</strong></li>
                                </div>
                                <div className="list-unstyled d-flex">
                                    <ul className="list-unstyled me-auto d-flex">
                                        <li><img src={PaymentProductImg2} alt="" className="img-fluid paymentPgimg2 " /></li>
                                        <li><p className="ms-2 paymentProductText">Premium Californian Almonds <br/> (200gm)<span className="footerListItems ms-2">x 2</span></p></li>
                                    </ul>
                                    <li><strong className="paymentProductPrice">Rs. 349</strong></li>
                                </div>
                                <div className="d-grid gap-2 list-unstyled d-flex">
                                    <input type="text" className="form-control me-auto discountCodeInput" placeholder=" Discount code" aria-label="Username" aria-describedby="basic-addon1"/>
                                    <button type="button" className="btn discountCodeBtn">Apply</button>
                                </div>
                                <div className="mt-3">
                                    <div className="paymentPgSubtotalText">
                                        <span className="">Subtotal</span><span className="float-end">Rs. 929</span>
                                    </div>
                                    <div className="paymentPgDisText">
                                        <p className="discoutCouponText1"><span>Discount</span><span className="float-end">-Rs. 496</span></p>
                                        <p className="discoutCouponText2"><span><img src={PaymentPgDiscoumt} alt="coupon" className="me-2"/>NEW10</span><span className="float-end">-Rs. 49</span></p>
                                        <p className="mt-2 discoutCouponText1"><span>Shipping</span><span className="float-end">Orders above Rs. 1000 enjoy free shipping</span></p>
                                    </div>
                                    <div className="totalAmountText"><span>Total</span><span className="float-end">Rs. 350</span ></div>
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

export default Payment;