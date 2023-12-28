import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//component
import  Header   from './header';
import  Footer   from './footer';
//images
import CombosPgSImg1 from "../images/combos page/key elements.png"
import CombosPgSImg2 from "../images/combos page/benefits copy.png"
import CombosPgSImg3 from "../images/combos page/veg mark copy.png"
import CombosPgSImg4 from "../images/combos page/veg mark.png"
import CombosPgLImg1 from "../images/combos page/Artboard 5 3.png"
import CombosPgStarImg from "../images/combos page/Group 37669.png"
import CombosPgWhite from "../images/combos page/white edge.png"
import CombosCardDisImg1 from "../images/Discount/Group 1.png"
import CombosCardDisImg2 from "../images/Discount/Group 1 (1).png"
import CombosCardDisImg3 from "../images/Discount/Group 1 (2).png"
import CombosCardDisImg4 from "../images/Discount/Group 1 (3).png"
import CombosCardImg1 from "../images/Combos/Frame 48096765.png"
import CombosCardImg2 from "../images/Combos/Frame 48096766.png"
import CombosCardImg3 from "../images/Combos/Frame 48096767.png"
import CombosCardImg4 from "../images/Combos/Frame 48096768.png"
import CombosMiddleImg from "../images/combos page/Artboard 4 1.png"
import CombosBottImg1 from "../images/CategorySecondSection/Vector.png"
import CombosBottImg2 from "../images/CategorySecondSection/Return Parcel.png"
import CombosBottImg3 from "../images/CategorySecondSection/Fast Time.png"
import CombosBottImg4 from "../images/CategorySecondSection/Card Security.png"

function Combos() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
            {/* <!-- Premium Californian Almonds (200gm) section--> */}
            <section>
                <div className="container-fluid">
                    <div className="container bg-transparent">
                        <div className="row premiumRow">
                            <div className="col-lg-6 d-flex py-2 mt-3">
                                <ul className="list-unstyled">
                                    <li><img src={CombosPgSImg1} alt="smallImg" className="img-fluid PremiumSmallImg mt-1"/></li>
                                    <li><img src={CombosPgSImg2} alt="smallImg" className="img-fluid PremiumSmallImg mt-3"/></li>
                                    <li><img src={CombosPgSImg3} alt="smallImg" className="img-fluid PremiumSmallImg mt-3"/></li>
                                    <li><img src={CombosPgSImg4} alt="smallImg" className="img-fluid PremiumSmallImg mt-3"/></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li><img src={CombosPgLImg1} alt="smallImg" className="img-fluid PremiumLargeImg ms-3"/></li>
                                    <li className="ZoomInItem justify-content-center mt-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-search ZoomIcon mt-1" viewBox="0 0 16 16">
                                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                        </svg>
                                        <p className="ms-2 ZoomText">Roll over image to zoom in</p> 
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 py-5">
                                <div className="row">
                                    <h2 className="premiumHeading">PREMIUM CALIFORNIAN ALMONDS (200GM)</h2>
                                    <ul className="list-unstyled d-flex">
                                        <li><img src={CombosPgStarImg} alt="star" className="img-fluid starImg"/></li>
                                        <li><img src={CombosPgStarImg} alt="star" className="img-fluid starImg"/></li>
                                        <li><img src={CombosPgStarImg} alt="star" className="img-fluid starImg"/></li>
                                        <li><img src={CombosPgStarImg} alt="star" className="img-fluid starImg"/></li>
                                        <li><img src={CombosPgStarImg} alt="star" className="img-fluid starImg"/></li>
                                        <li className="ms-2"><span className="rating">4.5 Rating</span></li>
                                    </ul>
                                    <ul className="list-unstyled mt-3">
                                        <li><span className="Size">Size:</span></li>
                                        <ul className="list-unstyled d-flex mt-3">
                                            <li><span className="SizeItems">200gm</span></li>
                                            <li><span className="SizeItems ms-3">500gm</span></li>
                                            <li><span className="SizeItems ms-3">1kg</span></li>
                                            <li><span className="SizeItems ms-3">1kg + 500gm</span></li>
                                        </ul>
                                    </ul>
                                    <ul className="list-unstyled d-flex mt-5">
                                        <li className="quantity">Quantity:</li>
                                        <ul className="list-unstyled d-flex ms-4 minusplusList">
                                            <li><button className="minusplus bg-transparent">-</button></li>
                                            <li className="text-center pt-1"><span className="text-center text-dark">1</span></li>
                                            <li><button className="minusplus bg-transparent">+</button></li>
                                        </ul>
                                    </ul>
                                    <ul className="list-unstyled d-flex mt-4">
                                        <li className="quantity">Coupon:</li>
                                        <ul className="list-unstyled ms-4">
                                            <li><span className="couponHeading">New 25</span></li>
                                            <li><span className="couponText">Get 25% off on your first order</span></li>
                                        </ul>
                                        <ul className="list-unstyled ms-4">
                                            <li><span className="couponHeading">Welcomeback10</span></li>
                                            <li><span className="couponText">Get 10% off on your second order</span></li>
                                        </ul>
                                    </ul>
                                    <ul className="list-unstyled mt-3">
                                        <ul className="list-unstyled d-flex">
                                            <li><span className="PremiumPrice text-danger">Rs. 420</span></li>
                                            <li className="DisPriceList"><span className="DisPrice text-secondary ms-3 text-decoration-line-through">Rs. 540</span></li>
                                            <li className="mt-3 pt-1"><span className="text-success discountText ms-3 px-3 py-1 rounded-pill">30% off</span></li>
                                        </ul>
                                        <li className=""><span className="taxesText">(incl. of all taxes)</span></li>
                                        <ul className="list-unstyled d-flex mt-2">
                                            <li><span><button type="button" className="btn text-danger border-danger rounded-pill border-3 premiumBtn px-2">Add to Cart</button></span></li>
                                            <li className="ms-4"><span><button type="button" className="btn btn-danger rounded-pill premiumBtn">Buy Now</button></span></li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container bg-transparent">
                        <div className="row my-5 selectBtnRow">
                            <div className="accordion selectBtnCol" id="accordionExample1">
                                <div className="accordion-item col-md-6 col-sm-12 border-0">
                                    <h2 className="accordion-header accordionItem1">
                                        <button className="accordion-button accordion-button-Top shadow-none bg-transparent border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                            Description
                                        </button>
                                    </h2>
                                    <div id="collapseOne1" className="accordion-collapse collapse collapseBg1" data-bs-parent="#accordionExample1">
                                        <div className="accordion-body ">
                                            <p className="accordionBodyText">
                                                Get ready to embark on a mouthwatering adventure with California almonds that'll delight your taste buds and boost your well-being. 
                                                California almonds are the ultimate must-have for health enthusiasts, delivering a powerful blend of nutrition and flavor. 
                                                It's time to savor the goodness and live your healthiest life!
                                                <br/>
                                                <strong>Rich:</strong>California almonds are a treasure trove of essential minerals like potassium, magnesium, copper, manganese, and iron for a healthy body and mind.
                                                <br/>
                                                <strong>Healthy Fats:</strong> Naturally packed with the good kind of fats, working wonders for your fitness, skin, and hair. They're a snack with a beauty secret!
                                                <br/>
                                                <strong>Healthy Snack:</strong>They keep you feeling full, making them an ideal, weight-conscious snack.
                                                <br/>
                                                <strong>High in Fiber:</strong>Almonds are fiber-rich, promoting digestive health and overall well-being.
                                                <br/>
                                                <strong>Protein Rich:</strong>A valuable protein source, especially for vegetarians, alongside essential nutrients.
                                                <br/>
                                                <strong>Premium Quality:</strong> They are gluten-free, and preservative-free almonds, perfect for the whole family.
                                                <br/>
                                                Discover the goodness of 100% natural raw California almonds with Truthful Treats.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item col-md-6 col-sm-12 border-0 ">
                                    <h2 className="accordion-header accordionItem2">
                                        <button className="accordion-button accordion-button-Top  shadow-none bg-transparent border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="true" aria-controls="collapseTwo2">
                                            Specifications
                                        </button>
                                    </h2>
                                    <div id="collapseTwo2" className="accordion-collapse collapse collapseBg2" data-bs-parent="#accordionExample1">
                                        <div className="accordion-body">
                                            <p className="accordionBodyText">
                                                Vacuum packed to retain product freshness<br/>
                                                Hygienically packed in facility meeting food safety standards<br/>
                                                Store in a cool, dry place in an airtight container and preferably refrigerate after opening<br/>
                                                Allergy caution: contains nuts<br/>
                                                Packed in an integrated nuts and dried fruits unit and may contain occasional traces of other nuts and dried fruits
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- You may also like --> */}
            <section>
                <div className="container-fluid combosPgContainer" id="combos">
                    <img src={CombosPgWhite} alt="whiteeage" className="img-fluid" />
                    <div className="container bg-transparent text-center justify-content-center pt-5 pb-5">
                        <h2 className="heading-text mb-3 text-uppercase">You may also like</h2>
                        <div className="row justify-content-center combosPgRow">
                            <div className="card combosPgCard pb-2">
                                <img src={CombosCardDisImg1} alt="discount" className="img-fluid combosPgCardDisImg" />
                                <img src={CombosCardImg1} className="img-fluid card-img-top combosPgCardImg mb-2" alt="..."/>
                                <div className="card-body mx-2">
                                    <h5 className="card-title combosPgcardtitle mb-3">Cashews (500g) + Almonds (500g)</h5>
                                    <p className="card-text pb-4"><span className="cardPrice text-success">Rs. 249.00</span><span className=" combPgcardDiscount "> Rs. 349.00</span></p>
                                    <a href="#" className="btn btn-danger combosPgAddToCard">Add to cart</a>
                                </div>
                            </div>
                            <div className="card combosPgCard pb-2">
                                <img src={CombosCardDisImg2} alt="discount" className="img-fluid combosPgCardDisImg" />
                                <img src={CombosCardImg2} className="img-fluid card-img-top combosPgCardImg mb-2" alt="..."/>
                                <div className="card-body mx-2">
                                    <h5 className="card-title combosPgcardtitle mb-3">Healthy Trail Mix (500 g) + Cranberries (200 g)</h5>
                                    <p className="card-text pb-4"><span className="cardPrice text-success">Rs. 249.00</span><span className="combPgcardDiscount "> Rs. 349.00</span></p>
                                    <a href="#" className="btn btn-danger combosPgAddToCard">Add to cart</a>
                                </div>
                            </div>
                            <div className="card combosPgCard pb-2">
                                <img src={CombosCardDisImg3} alt="discount" className="img-fluid combosPgCardDisImg" />
                                <img src={CombosCardImg3} className="img-fluid card-img-top combosPgCardImg mb-2" alt="..."/>
                                <div className="card-body mx-2">
                                    <h5 className="card-title combosPgcardtitle mb-3">Pistachios (250 g) & Raisins (250 g)</h5>
                                    <p className="card-text pb-4"><span className="cardPrice text-success">Rs. 249.00</span><span className="combPgcardDiscount "> Rs. 349.00</span></p>
                                    <a href="#" className="btn btn-danger combosPgAddToCard">Add to cart</a>
                                </div>
                            </div>
                            <div className="card combosPgCard pb-2">
                                <img src={CombosCardDisImg4} alt="discount" className="img-fluid combosPgCardDisImg" />
                                <img src={CombosCardImg4} className="img-fluid card-img-top combosPgCardImg mb-2" alt="..."/>
                                <div className="card-body mx-2">
                                    <h5 className="card-title combosPgcardtitle mb-3">Cashews (500 g) & Pistachios (450 g)</h5>
                                    <p className="card-text pb-4"><span className="cardPrice text-success">Rs. 249.00</span><span className="combPgcardDiscount "> Rs. 349.00</span></p>
                                    <a href="#" className="btn btn-danger combosPgAddToCard ">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- californian almonds image --> */}
            <section>
                <div className="container-fluid mt-4">
                    <img src={CombosMiddleImg} className="img-fluid" />
                </div>
            </section>
            {/* <!-- combosFiftSection --> */}
            <section>
                <div className="container-fluid">
                    <div className="container combosFiftSection my-md-5">
                        <div className="row justify-content-center py-md-4">
                            <div className="card bg-transparent combosFiftSectionCard border-0">
                                <img src={CombosBottImg1} className="card-img-top combosFiftSectionImg" alt="..."/>
                                <div className="card-body">
                                  <p className="card-text combosFiftSectionText">COD</p>
                                </div>
                            </div>
                            <div className="card bg-transparent combosFiftSectionCard border-0">
                                <img src={CombosBottImg2} className="card-img-top combosFiftSectionImg" alt="..."/>
                                <div className="card-body">
                                  <p className="card-text combosFiftSectionText">Non- Returnable</p>
                                </div>
                            </div>
                            <div className="card bg-transparent combosFiftSectionCard border-0">
                                <img src={CombosBottImg3} className="card-img-top combosFiftSectionImg" alt="..."/>
                                <div className="card-body">
                                  <p className="card-text combosFiftSectionText">Express Shipping</p>
                                </div>
                            </div>
                            <div className="card bg-transparent combosFiftSectionCard border-0">
                                <img src={CombosBottImg4} className="card-img-top combosFiftSectionImg" alt="..."/>
                                <div className="card-body">
                                  <p className="card-text combosFiftSectionText">Secure Checkout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Frequently Asked Questions section--> */}
            <section>
                <div className="container-fluid">
                    <div className="container bg-transparent mb-md-5">
                        <h2 className="text-center collapseTopHeading text-uppercase mt-md-5">Frequently Asked Questions</h2>
                        <div className="row justify-content-center d-flex my-5 ">
                            <div className="accordion col-md-12 collapseCol" id="accordionExample">
                                <div className="accordion-item border-0 collapseCol2">
                                    <div className="accordion-header accordionBg1">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What are the healthiest dry fruits to consume?
                                        </button>
                                    </div>
                                    <div id="collapseOne" className="accordion-collapse collapse collapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body collapseText">
                                          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 collapseCol2 my-3">
                                    <div className="accordion-header accordionBg2">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How should I properly store dry fruits?
                                        </button>
                                    </div>
                                    <div id="collapseTwo" className="accordion-collapse collapse collapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body collapseText">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item collapseCol2 border-0">
                                    <div className="accordion-header accordionBg3">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is the estimated delivery time for my orders?
                                        </button>
                                    </div>
                                    <div id="collapseThree" className="accordion-collapse collapse collapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body collapseText">
                                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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

export default Combos;