import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//component
import  Header   from './header';
import  Footer   from './footer';
//images
import CatPgDisImg1 from "../images/Discount/Group 1.png";
import CatPgDisImg2 from "../images/Discount/Group 1 (1).png";
import CatPgDisImg3 from "../images/Discount/Group 1 (2).png";
import CatPgDisImg4 from "../images/Discount/Group 1 (3).png";
import CatPgProductImg1 from "../images/Combos/Frame 48096765.png";
import CatPgProductImg2 from "../images/Combos/Frame 48096766.png";
import CatPgProductImg3 from "../images/Combos/Frame 48096767.png";
import CatPgProductImg4 from "../images/Combos/Frame 48096768.png";
import CatPgBottImg1 from "../images/CategorySecondSection/Vector.png";
import CatPgBottImg2 from "../images/CategorySecondSection/Return Parcel.png";
import CatPgBottImg3 from "../images/CategorySecondSection/Fast Time.png";
import CatPgBottImg4 from "../images/CategorySecondSection/Card Security.png";

function Category() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
            <section>
                <div className="container-fluid categoryCon pt-2 pb-2">
                    <div className="container bg-transparent d-md-flex categoryCont ">
                        <div className="col-lg-3 col-md-12">
                            <div className="card categoryCardLeft mt-5">
                                <div className="card-body cardbody ps-0">
                                  <h5 className="card-title">Filter</h5>
                                  <div className="mt-3">
                                    <label for="customRange2" className="form-label">Price</label>
                                    <input type="range" className="form-range" min="0" max="5" id="customRange1"/>
                                  </div>
                                  <div className="card-text justify-content-between d-flex">
                                    <span className="text-danger rangeNumber px-3">₹ 250</span>
                                    <span className="mt-2">to</span>
                                    <span className="text-danger rangeNumber px-3">₹ 50,000</span>
                                  </div>
                                  <div className="mt-3 d-flex">
                                    <label for="customRange2" className="form-label me-auto">Size</label>
                                    <select className="form-select categoryselect bg-transparent border-0" aria-label="Default select example">
                                        <option selected>none</option>
                                        <option value="1">30g</option>
                                        <option value="2">150g</option>
                                        <option value="3">200g</option>
                                        <option value="4">500g</option>
                                        <option value="5">1kg (Pack of 2)</option>
                                        <option value="6">200g (Pack of 2)</option>
                                        <option value="7">200g (Pack of 5)</option>
                                        <option value="8">250g (Pack of 2)</option>
                                        <option value="9">250g (Pack of 4)</option>
                                        <option value="10">250g (Pack of 5)</option>
                                        <option value="11">500g (Pack of 2)</option>
                                    </select>
                                  </div>
                                  <div className="mt-3 d-flex">
                                    <label for="customRange2" className="form-label me-auto">Category</label>
                                    <select className="form-select categoryselect bg-transparent border-0" aria-label="Default select example">
                                        <option selected>none</option>
                                        <option value="1">Best Seller</option>
                                        <option value="2">Combos</option>
                                        <option value="3">Gifts</option>
                                    </select>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="row">
                                <div className="col-12 d-flex">
                                    <h2 className="categoryheading  me-auto">Almonds</h2>
                                    <p className="categoryheadText mt-3 d-flex">
                                        <span className="pt-lg-0 mt-1">Sort by:</span>
                                        <span>
                                            <select className="form-select Shortselect bg-transparent border-0 mb-2 " aria-label="Default select example">
                                                <option selected>Best Selling</option>
                                                <option value="1">Price: Low to High</option>
                                                <option value="2">Price: High to Low</option>
                                            </select>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row categoryRow">
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg1} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg1} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                      <h5 className="card-title categorycardtitle mb-3">Cashews (500g) + Almonds (500g)</h5>
                                      <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 249.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                      <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                    </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg2} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg2} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Healthy Trail Mix (500 g) + Cranberries (200 g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 319.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                    </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg3} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg3} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Pistachios (250 g) & Raisins (250 g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 150.00</span><span className="CategoryCardDiscount"> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                  </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg4} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg4} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Cashews (500 g) & Pistachios (450 g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 622.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                  </div>
                                </div>
                            </div>
                            <div className="row categoryRow mt-5">
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg1} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg1} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                      <h5 className="card-title categorycardtitle mb-3">Pistachios (250 g) & Raisins (250 g)</h5>
                                      <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 249.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                      <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                    </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg2} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg2} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Cashews (500 g) & Pistachios (450 g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success ">Rs. 622.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                    </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg3} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg3} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Healthy Trail Mix (500 g) + Cranberries (200 g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 319.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                  </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg4} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg4} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Cashews (500g) + Almonds (500g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 150.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                  </div>
                                </div>
                            </div>
                            <div className="row categoryRow mt-5 mb-5">
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg1} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg1} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                      <h5 className="card-title categorycardtitle mb-3">Healthy Trail Mix (500 g) + Cranberries (200 g)</h5>
                                      <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 622.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                      <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                    </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg2} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg2} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Pistachios (250 g) & Raisins (250 g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 849.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                    </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg3} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg3} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Cashews (500 g) & Pistachios (450 g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 465.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                  </div>
                                </div>
                                <div className="card categoryCard pb-2">
                                    <img src={CatPgDisImg4} alt="discount" className="img-fluid categoprydisImg" />
                                    <img src={CatPgProductImg4} className="img-fluid card-img-top CategoryCardImg mb-2" alt="product"/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title categorycardtitle mb-3">Cashews (500g) + Almonds (500g)</h5>
                                        <p className="card-text pb-4"><span className="CategoryCardPrice text-success">Rs. 249.00</span><span className="CategoryCardDiscount "> Rs. 349.00</span></p>
                                        <a href="#" className="btn btn-danger CategoryAddBtn">Add to cart</a>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid categorySecondSection">
                    <div className="container bg-transparent">
                        <div className="row justify-content-center py-5">
                            <div className="card bg-transparent categorySecondSectionCard  border-0">
                                <img src={CatPgBottImg1} className="card-img-top categorySecondSectionImg" alt="..."/>
                                <div className="card-body">
                                  <p className="card-text CategoryLastSectText">COD</p>
                                </div>
                            </div>
                            <div className="card bg-transparent categorySecondSectionCard border-0">
                                <img src={CatPgBottImg2} className="card-img-top categorySecondSectionImg" alt="..."/>
                                <div className="card-body">
                                  <p className="card-text CategoryLastSectText">Non- Returnable</p>
                                </div>
                            </div>
                            <div className="card bg-transparent categorySecondSectionCard border-0">
                                <img src={CatPgBottImg3} className="card-img-top categorySecondSectionImg" alt="..."/>
                                <div className="card-body">
                                  <p className="card-text CategoryLastSectText">Express Shipping</p>
                                </div>
                            </div>
                            <div className="card bg-transparent categorySecondSectionCard border-0">
                                <img src={CatPgBottImg4} className="card-img-top categorySecondSectionImg" alt="..."/>
                                <div className="card-body">
                                  <p className="card-text CategoryLastSectText">Secure Checkout</p>
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

export default Category;