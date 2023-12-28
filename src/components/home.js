import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
import OwlCarousel from 'react-owl-carousel';
// components
import  Header   from './header';
import  Footer   from './footer';
//images
import HomePgBanner from "../images/Homepage Main Banner.png"
//shop by catyegory
import ShopByCat1 from "../images/cashew.png"
import ShopByCat2 from "../images/almonds.png"
import ShopByCat3 from "../images/raisins.png"
import ShopByCat4 from "../images/pista.png"
import ShopByCat5 from "../images/mix.png"
import ShopByCat6 from "../images/blueberry.png"
import ShopByCat7 from "../images/cranberry.png"
import ShopByCat8 from "../images/walnut.png"
//best seller
import BestSeller1 from "../images/white edge.png"
import BestSeller2 from "../images/Discount/Group 1.png"
import BestSeller3 from "../images/best seller/Cashew.png"
import BestSeller4 from "../images/Discount/Group 1 (1).png"
import BestSeller5 from "../images/best seller/almonds.png"
import BestSeller6 from "../images/Discount/Group 1 (2).png"
import BestSeller7 from "../images/best seller/pistachios.png"
import BestSeller8 from "../images/Discount/Group 1 (3).png"
import BestSeller9 from "../images/best seller/raisins.png"
import BestSeller10 from "../images/curve.png"
//What Makes Truthful Treats Special?
import SpecialImg1 from "../images/special icons/Group 16.png"
import SpecialImg2 from "../images/special icons/Group 15.png"
import SpecialImg3 from "../images/special icons/Group 19.png"
import SpecialImg4 from "../images/special icons/Group 18.png"
import SpecialImg5 from "../images/special icons/Cashew.png"
import SpecialImg6 from "../images/special icons/Group 20.png"
import SpecialImg7 from "../images/special icons/Group 11.png"
import SpecialImg8 from "../images/special icons/Group 17.png"
import SpecialImg9 from "../images/special icons/Group 13.png"
import SpecialImg10 from "../images/special icons/Group 14.png"
// combos images
import CombosSectImg1 from "../images/purple edge.png"
import CombosSectImg2 from "../images/Discount/Group 1.png"
import CombosSectImg3 from "../images/Combos/Frame 48096765.png"
import CombosSectImg4 from "../images/Discount/Group 1 (1).png"
import CombosSectImg5 from "../images/Combos/Frame 48096766.png"
import CombosSectImg6 from "../images/Discount/Group 1 (2).png"
import CombosSectImg7 from "../images/Combos/Frame 48096767.png"
import CombosSectImg8 from "../images/Discount/Group 1 (3).png"
import CombosSectImg9 from "../images/Combos/Frame 48096768.png"
//carousel imges
import CarouselImg1 from "../images//Slider/Property 1=Frame 48096753.png"
import CarouselImg2 from "../images//Slider/Property 1=Frame 48096752.png"
import CarouselImg3 from "../images//Slider/Property 1=Frame 48096751.png"
import CarouselImg4 from "../images//Slider/Property 1=Frame 48096750.png"
//BLOGS Section
import BlogImg1 from "../images/Blogs/image 14.png"
import BlogImg2 from "../images/Blogs/71BuDOeNjtL 1.png"
import BlogImg3 from "../images/Blogs/71nwmrpK1gL 1.png"
//imstagram images
import InstaImg1 from "../images/Instagram/Rectangle 40.png"
import InstaImg2 from "../images/Instagram/Rectangle 41.png"
import InstaImg3 from "../images/Instagram/Component 12.png"
import InstaImg4 from "../images/Instagram/Rectangle 44.png"
import InstaImg5 from "../images/Instagram/Rectangle 43.png"


function Home() {
  return (
    <> 
      <section>
        <div className="toast align-items-center shadow-none bg-transparent show border-0 toastBar" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex toastBar">
                <div className="toast-body text-center toastBarText">
                    Get Extra 5% off on orders above Rs3,999
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto ToptoastBtn" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
      </section>
      <Header />
       {/* Banner contrent */}
      <section>
          <div className="container-fluid">
              <img src={HomePgBanner} alt="banner" className="img-fluid bannerImg" />
          </div>
      </section>
      {/* Main Content */}
      <main>
          {/* SHOP BY CATAGORY  */}
          <section>
              <div className="container-fluid">
                  <div className="container bg-transparent mt-5 text-center justify-content-center">
                      <h2 className="heading-text justify-content-center mb-5">SHOP BY CATAGORY</h2>
                      <div className="container ">
                          <div className="row justify-content-center catagoryRow">
                                  <div className="card catagorycard border-0 text-center cursor-pointer">
                                      <img src={ShopByCat1} className="card-img-top img-fluid catagoryImg" alt="cashew"/>
                                      <p className="card-text CardText mb-3">Cashew</p>
                                  </div>
                                  <div className="card catagorycard border-0 text-center cursor-pointer">
                                      <img src={ShopByCat2} className="card-img-top img-fluid catagoryImg" alt="almonds"/>
                                      <p className="card-text CardText mb-3">Almonds</p>
                                  </div>
                                  <div className="card catagorycard border-0 text-center cursor-pointer">
                                      <img src={ShopByCat3} className="card-img-top img-fluid catagoryImg" alt="raisins"/>
                                      <p className="card-text CardText mb-3">Raisins</p>
                                  </div>
                                  <div className="card catagorycard border-0 text-center cursor-pointer">
                                      <img src={ShopByCat4} className="card-img-top img-fluid catagoryImg" alt="pista"/>
                                      <p className="card-text CardText mb-3">Pistachios</p>
                                  </div>
                                  <div className="card catagorycard border-0 text-center cursor-pointer">
                                      <img src={ShopByCat5} className="card-img-top img-fluid catagoryImg" alt="mix" />
                                      <p className="card-text CardText mb-3">Nut Mix</p>
                                  </div>
                                  <div className="card catagorycard border-0 text-center cursor-pointer">
                                      <img src={ShopByCat6} className="card-img-top img-fluid catagoryImg" alt="blueberry" />
                                      <p className="card-text CardText mb-3">Blueberry</p>
                                  </div>
                                  <div className="card catagorycard border-0 text-center cursor-pointer">
                                      <img src={ShopByCat7} className="card-img-top img-fluid catagoryImg" alt="cranberry" />
                                      <p className="card-text CardText mb-3">Cranberry</p>
                                  </div>
                                  <div className="card catagorycard border-0 text-center cursor-pointer">
                                      <img src={ShopByCat8} className="card-img-top img-fluid catagoryImg" alt="walnut" />
                                      <p className="card-text CardText mb-3">Walnut</p>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* BEST SELLERS  */}
          <section>
              <div className="container-fluid bestContainer">
                  <img src={BestSeller1} className="img-fluid" />
                  <div className="container bg-transparent mt-5 text-center justify-content-center pt-4">
                      <h2 className="heading-text mb-5">BEST SELLERS</h2>
                      <OwlCarousel 
                        className="owl-carousel OwlCarousel owl-theme" 
                        items={4} 
                        loop margin={10} 
                        nav autoplay={true} 
                        autoplayTimeout={3000} 
                        dots={false}
                        responsive={{
                                0: {
                                items: 1,
                                },
                                768: {
                                items: 2, 
                                },
                                1000: {
                                items: 4, 
                                },
                            }}
                        >
                          <div className="item owlCarouselItems">
                              <div className="card bestSellerCard">
                                  <img src={BestSeller2} alt="discount" className="img-fluid bestdiscountImg" />
                                  <img src={BestSeller3} className="img-fluid card-img-top bestSellerImg cursor-pointer" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title cardtitle mb-3">Premium Cashews Nuts</h5>
                                    <p className="card-text pb-5"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                    <a href="#" className="btn btn-danger AddToCard">Add to cart</a>
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="card bestSellerCard ">
                                  <img src={BestSeller4} alt="discount" className="img-fluid bestdiscountImg" />
                                  <img src={BestSeller5} className="img-fluid card-img-top bestSellerImg cursor-pointer" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title cardtitle mb-3">Premium California Almond</h5>
                                      <p className="card-text pb-5"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                      <a href="#" className="btn btn-danger AddToCard">Add to cart</a>
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="card bestSellerCard ">
                                  <img src={BestSeller6} alt="discount" className="img-fluid bestdiscountImg" />
                                  <img src={BestSeller7} className="img-fluid card-img-top bestSellerImg cursor-pointer" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title cardtitle mb-3">Premium California Pistachios</h5>
                                      <p className="card-text pb-5"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                      <a href="#" className="btn btn-danger AddToCard">Add to cart</a>
                                </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="card bestSellerCard ">
                                  <img src={BestSeller8} alt="discount" className="img-fluid bestdiscountImg" />
                                  <img src={BestSeller9} className="img-fluid card-img-top bestSellerImg cursor-pointer" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title cardtitle mb-3">Premium Raisins</h5>
                                      <p className="card-text pb-5"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                      <a href="#" className="btn btn-danger AddToCard">Add to cart</a>
                                </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="card bestSellerCard">
                                  <img src={BestSeller2} alt="discount" className="img-fluid bestdiscountImg" />
                                  <img src={BestSeller3} className="img-fluid card-img-top bestSellerImg cursor-pointer" alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title cardtitle mb-3">Premium Cashews Nuts</h5>
                                    <p className="card-text pb-5"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                    <a href="#" className="btn btn-danger AddToCard">Add to cart</a>
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="card bestSellerCard">
                                  <img src={BestSeller4} alt="discount" className="img-fluid bestdiscountImg" />
                                  <img src={BestSeller5} className="img-fluid card-img-top bestSellerImg cursor-pointer" alt="..."/>
                                  <div className="card-body">
                                      <h5 className="card-title cardtitle mb-3">Premium California Almond</h5>
                                      <p className="card-text pb-5"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                      <a href="#" className="btn btn-danger AddToCard">Add to cart</a>
                                  </div>
                              </div>
                          </div>
                      </OwlCarousel>
                  </div> 
              </div>
              <img src={BestSeller10} className="img-fluid" />
          </section>
          {/* What Makes Truthful Treats Special?  */}
          <section>
              <div className="container-fluid SpecialContainer pb-5">
                  <div className="container bg-transparent   justify-content-center pt-0">
                      <h2 className="heading-text mb-3 text-center">What Makes Truthful Treats Special?</h2>
                      <p className="text-center mb-5">We're the tasty twist your taste buds have been waiting for!</p>
                      <div className="row specialRow">
                          <div className="col-md-4">
                              <ul className="list-unstyled">
                                  <li className="d-flex mb-2">
                                      <img src={SpecialImg1} alt="serviceicons" className="img-fluid specialeicons mt-2" />
                                      <div className="ms-3">
                                          <h5 className="SpecialConHeading">Rich in Nutrients</h5>
                                          <p className="SpecialConText">Our premium selection of dry fruits is treasure trove of essential vitamins, minerals, and antioxidants.</p>
                                      </div>
                                  </li>
                                  <li className="d-flex mb-2">
                                      <img src={SpecialImg2} alt="serviceicons" className="img-fluid specialeicons" />
                                      <div className="ms-3" >
                                          <h5 className="SpecialConHeading">Antioxidant Properties</h5>
                                          <p className="SpecialConText">We're like a shield against the daily battles of free radicals, fighting to keep you feeling fabulous.</p>
                                      </div>
                                  </li>
                                  <li className="d-flex mb-2">
                                      <img src={SpecialImg3} alt="serviceicons" className="img-fluid specialeicons" />
                                      <div className="ms-3">
                                          <h5 className="SpecialConHeading">Healthy Fats</h5>
                                          <p className="SpecialConText">Say hello to healthy fats that make your taste buds dance and your body smile.</p>
                                      </div>
                                  </li>
                                  <li className="d-flex">
                                      <img src={SpecialImg4} alt="serviceicons" className="img-fluid specialeicons" />
                                      <div className="ms-3">
                                          <h5 className="SpecialConHeading">Bone Health</h5>
                                          <p className="SpecialConText">Strengthen those bones with the calcium-rich goodness!</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="col-md-4">
                              <ul className="list-unstyled justify-content-center">
                                  <img src={SpecialImg5} alt="serviceicons" className="img-fluid specialeiconslg mb-2" />
                                  <li className="d-flex">
                                      <img src={SpecialImg6} alt="serviceicons" className="img-fluid specialeicons" />
                                      <div className="ms-3">
                                          <h5 className="SpecialConHeading">Heart Health</h5>
                                          <p className="SpecialConText">We're the heartbeat of your healthy lifestyle, promoting cardiovascular wellness one bite at a time.</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="col-md-4">
                              <ul className="list-unstyled">
                                  <li className="d-flex mb-2">
                                      <div className="me-3">
                                          <h5 className="SpecialConHeading">Natural Energy</h5>
                                          <p className="SpecialConText">Truthful Treats offer a natural on-the-go energy boost to keep you energized throughout the day.</p>
                                      </div>
                                      <img src={SpecialImg7} alt="serviceicons" className="img-fluid specialeicons" />
                                  </li>
                                  <li className="d-flex mb-2">
                                      <div className="me-3">
                                          <h5 className="SpecialConHeading">Weight Management</h5>
                                          <p className="SpecialConText">Elevate your daily routine with our delicious treats, making weight management a flavorful journey.</p>
                                      </div>
                                      <img src={SpecialImg8} alt="serviceicons" className="img-fluid specialeicons" />
                                  </li>
                                  <li className="d-flex mb-2">
                                      <div className="me-3">
                                          <h5 className="SpecialConHeading">Digestive Health</h5>
                                          <p className="SpecialConText">We keep things moving smoothly in your tummy, so you can focus on enjoying life.</p>
                                      </div>
                                      <img src={SpecialImg9} alt="serviceicons" className="img-fluid specialeicons" />
                                  </li>
                                  <li className="d-flex mb-2">
                                      <div className="me-3">
                                          <h5 className="SpecialConHeading">Diabetes Management</h5>
                                          <p className="SpecialConText">Keep those blood sugar levels in check with our natural and satisfying sweetness – a tasty way to stay on track!</p>
                                      </div>
                                      <img src={SpecialImg10} alt="serviceicons" className="img-fluid specialeicons" />
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
            {/* Combos  */}
          <section>
              <div className="container-fluid CombosContainer" id="combos">
                  <img src={CombosSectImg1} className="img-fluid" />
                  <div className="container bg-transparent text-center justify-content-center pt-5 pb-5">
                      <h2 className="heading-text mb-3">COMBOS</h2>
                      <div className="row justify-content-center CombosRow">
                          <div className="card CombosCard justify-content-center pb-2">
                              <img src={CombosSectImg2} alt="discount" className="img-fluid CombosCardDisImg" />
                              <img src={CombosSectImg3} className="img-fluid card-img-top CombosCardImg cursor-pointer mb-2" alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title Comboscardtitle mb-3">Cashews (500g) + Almonds (500g)</h5>
                                  <p className="card-text pb-4"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                  <a href="#" className="btn btn-danger CombosAddToCard">Add to cart</a>
                              </div>
                          </div>
                          <div className="card CombosCard pb-2">
                              <img src={CombosSectImg4} alt="discount" className="img-fluid CombosCardDisImg" />
                              <img src={CombosSectImg5} className="img-fluid card-img-top CombosCardImg cursor-pointer mb-2" alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title Comboscardtitle mb-3">Healthy Trail Mix (500 g) + Cranberries (200 g)</h5>
                                  <p className="card-text pb-4"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                  <a href="#" className="btn btn-danger CombosAddToCard">Add to cart</a>
                              </div>
                          </div>
                          <div className="card CombosCard pb-2">
                              <img src={CombosSectImg6} alt="discount" className="img-fluid CombosCardDisImg" />
                              <img src={CombosSectImg7} className="img-fluid card-img-top CombosCardImg cursor-pointer mb-2" alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title Comboscardtitle mb-3">Pistachios (250 g) & Raisins (250 g)</h5>
                                  <p className="card-text pb-4"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                  <a href="#" className="btn btn-danger CombosAddToCard">Add to cart</a>
                              </div>
                          </div>
                          <div className="card CombosCard pb-2">
                              <img src={CombosSectImg8} alt="discount" className="img-fluid CombosCardDisImg" />
                              <img src={CombosSectImg9} className="img-fluid card-img-top CombosCardImg cursor-pointer mb-2" alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title Comboscardtitle mb-3">Cashews (500 g) & Pistachios (450 g)</h5>
                                  <p className="card-text pb-4"><span className="cardPrice text-success">Rs. 249.00</span><span className="cardDiscount "> Rs. 349.00</span></p>
                                  <a href="#" className="btn btn-danger CombosAddToCard">Add to cart</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* carousel section */}
          <section>
              <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={CarouselImg1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={CarouselImg2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={CarouselImg3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src={CarouselImg4} className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
          </section>
          {/* BLOGS Section  */}
          <section>
              <div className="container-fluid">
                  <div className="container BlogsContainer  justify-content-center pt-5 pb-5 mt-5 ">
                      <h2 className="heading-text text-center mb-5">BLOGS</h2>
                      <div className="row justify-content-center BlogRow">
                        <div className="card BlogCard bg-transparent border-0">
                            <img src={BlogImg1} className="img-fluid card-img-top BlogImg cursor-pointer" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title Blogscardtitle cursor-pointer">Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats</h5>
                            <p className="card-text cursor-pointer"><span className="BlogsReadMore">Read More</span></p>
                            </div>
                        </div>
                        <div className="card BlogCard bg-transparent border-0">
                            <img src={BlogImg2} className="img-fluid card-img-top BlogImg cursor-pointer" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title Blogscardtitle cursor-pointer">From Orchard to Your Table: The Journey of Truthful Treats.</h5>
                                <p className="card-text cursor-pointer"><span className="BlogsReadMore ">Read More</span></p>
                            </div>
                        </div>
                        <div className="card BlogCard bg-transparent border-0">
                            <img src={BlogImg3} className="img-fluid card-img-top BlogImg cursor-pointer" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title Blogscardtitle cursor-pointer">Unboxing Truthful Treats - Your Ultimate Snacking Experience.</h5>
                                <p className="card-text cursor-pointer"><span className="BlogsReadMore ">Read More</span></p>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* Instagram section  */}
          <section>
                  <div className="container-fluid InstaContainer  justify-content-center pt-5 pb-5 mt-5 slidetrCon">
                      <h2 className="heading-text text-center ">INSTAGRAM</h2>
                      <p className="text-center mb-5">@Truthful Treats</p>
                      <div className="row InstaRow px-0">
                        <OwlCarousel
                            className="owl-carousel owl-carousel-instagram pe-0 owl-theme" 
                            items={4.5} 
                            loop margin={10} 
                            nav autoplay={true} 
                            autoplayTimeout={3000} 
                            dots={false}
                            responsive={{
                                0: {
                                items: 2,
                                },
                                768: {
                                items: 3, 
                                },
                                1000: {
                                items: 4.5, 
                                },
                            }}
                            >
                            <div className="item instaOwlCarouselItem">
                                <img src={InstaImg1} alt="Product 1" className="img-fluid sliderImg"/>
                            </div>
                            <div className="item instaOwlCarouselItem">
                                <img src={InstaImg2} alt="Product 1" className="img-fluid sliderImg"/>
                            </div>
                            <div className="item instaOwlCarouselItem">
                                <img src={InstaImg3} alt="Product 1" className="img-fluid sliderImg"/>
                            </div>
                            <div className="item instaOwlCarouselItem">
                                <img src={InstaImg4} alt="Product 1" className="img-fluid sliderImg"/>
                            </div>
                            <div className="item instaOwlCarouselItem">
                                <img src={InstaImg5} alt="Product 1" className="img-fluid sliderImg"/>
                            </div>
                        </OwlCarousel>
                      </div>
                  </div>
          </section>
      </main>
      <Footer />
    </>
    
  )
}

export default Home;