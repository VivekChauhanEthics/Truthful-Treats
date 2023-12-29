import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
import { NavLink } from 'react-router-dom';

//components
import  Header   from './header.js';
import  Footer   from './footer.js';
import BlogArticleImg1 from "../images/blog page/image 14.png"
import BlogArticleImg2 from "../images/blog page/71BuDOeNjtL 1.png"
import BlogArticleImg3 from "../images/blog page/71nwmrpK1gL 1.png"


function Blogs() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
          {/* <!-- Blog top content --> */}
          <section>
            <div className="container-fluid BlogPgContainer">
              <div className="container bg-transparent">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="row">
                            <h1 className="blogPgTopHeading">DISCOVER GREAT RECIPE HERE</h1>
                            <p className="blogPgTopText">Dive into a world of insightful content, carefully curated to inspire, inform, and entertain. Pride ourselves on offering a diverse range of articles that cater to various recipes and usage of dry fruits.</p>
                            <div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control bg-transparent blogPgSearchBox" placeholder="what are you looking for?" aria-label="Username" aria-describedby="basic-addon1"/>
                                    <button type="button" className="btn blogPgSearchBtn ">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 blogPgTopRightCont">
                        <div className="row careerPgRadioRow">
                            <div className="btn-group  blogPgCheckBoxDiv1" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check " id="btncheck1" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck1">Cashew</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck2">Almonds</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck3">Sweetdish</label>

                                <input type="checkbox" className="btn-check" id="btncheck4" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck4">Gifting Ideas</label>

                                <input type="checkbox" className="btn-check" id="btncheck5" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck5">Pistachew</label>
                            </div>
                            <div className="btn-group  blogPgCheckBoxDiv2" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="btncheck6" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck6">Sweetdish</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck7" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck7">Raisins</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck8" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck8">Gifting Ideas</label>

                                <input type="checkbox" className="btn-check" id="btncheck9" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck9">Walnut</label>

                                <input type="checkbox" className="btn-check" id="btncheck10" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck10">Weight Loss</label>

                                <input type="checkbox" className="btn-check" id="btncheck11" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck11">Walnut</label>
                            </div>
                            <div className="btn-group blogPgCheckBoxDiv2" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="btncheck12" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck12">Raisins</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck13" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck13">Gifting Ideas</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck14" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck14">Almonds</label>

                                <input type="checkbox" className="btn-check" id="btncheck15" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck15">Pistachew</label>

                                <input type="checkbox" className="btn-check" id="btncheck16" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck16">Weight Loss</label>

                                <input type="checkbox" className="btn-check" id="btncheck17" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck17">Walnut</label>
                            </div>
                            <div className="btn-group  blogPgCheckBoxDiv2" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="btncheck18" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck18">Gifting Ideas</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck19" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck19">Almonds</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck20" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck20">Pistachew</label>

                                <input type="checkbox" className="btn-check" id="btncheck21" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck21">Weight Loss</label>

                                <input type="checkbox" className="btn-check" id="btncheck22" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck22">Walnut</label>

                                <input type="checkbox" className="btn-check" id="btncheck23" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs" for="btncheck23">Almonds</label>
                            </div>
                            <div className="btn-group  blogPgCheckBoxDiv1" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="btncheck24" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck24">Pistachew</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck25" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck25">Weight Loss</label>
                              
                                <input type="checkbox" className="btn-check" id="btncheck26" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck26">Walnut</label>

                                <input type="checkbox" className="btn-check" id="btncheck27" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck27">Gifting Ideas</label>

                                <input type="checkbox" className="btn-check" id="btncheck28" autocomplete="off"/>
                                <label className="btn btn-outline-primary blogCheckBoxs2" for="btncheck28">Almonds</label>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- articles --> */}
          <section>
            <div className="container-fluid">
                <div className="container bg-transparent blogPgBottomCont">
                    <div className="blogPgLine">
                        <div className="blogPgArticlesHaeding">Articles</div>
                    </div>
                    <div className="row blogPgArticlesRows">
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink to="/blogdetail">
                                <div className="blogPgArticleImgCont">
                                  <img src={BlogArticleImg1} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats</p>
                            <div className="blogPgArticleText">
                                <NavLink to="/blogdetail" className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink to="./blogdetail">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg2} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">From Orchard to Your Table: The Journey of Truthful Treats.</p>
                            <div className="blogPgArticleText">
                                <NavLink to="/blogdetail" className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink to="/blogdetail">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg3} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">Unboxing Truthful Treats - Your Ultimate Snacking Experience.</p>
                            <div className="blogPgArticleText">
                                <NavLink to="/blogdetail" className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink to="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg2} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">Unboxing Truthful Treats - Your Ultimate Snacking Experience.</p>
                            <div className="blogPgArticleText">
                                <NavLink to="" className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink href="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg3} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats</p>
                            <div className="blogPgArticleText">
                                <NavLink className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink href="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg1} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">From Orchard to Your Table: The Journey of Truthful Treats.</p>
                            <div className="blogPgArticleText">
                                <NavLink className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink href="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg3} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats</p>
                            <div className="blogPgArticleText">
                                <NavLink className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink href="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg1} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">From Orchard to Your Table: The Journey of Truthful Treats.</p>
                            <div className="blogPgArticleText">
                                <NavLink className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink href="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg2} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">Unboxing Truthful Treats - Your Ultimate Snacking Experience.</p>
                            <div className="blogPgArticleText">
                                <NavLink className="BlogPgReadMore" >Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink href="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg1} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">Unboxing Truthful Treats - Your Ultimate Snacking Experience.</p>
                            <div className="blogPgArticleText">
                                <NavLink className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink href="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg2} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats</p>
                            <div className="blogPgArticleText">
                                <NavLink className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 blogPgArticleConts">
                            <NavLink href="">
                                <div className="blogPgArticleImgCont">
                                    <img src={BlogArticleImg3} alt="blogimage" className="img-fluid blogPgArticleImg" />
                                </div>
                            </NavLink>
                            <p className="blogPgArticleHeadings">From Orchard to Your Table: The Journey of Truthful Treats.</p>
                            <div className="blogPgArticleText">
                                <NavLink className="BlogPgReadMore">Read More</NavLink>
                                <span className="float-end BlogPgdate">01 Jan 23</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                      <div className="BlogPgPagination">
                            <div className="text-center">
                                <button type="button" className="btn blogPgBtn1">Prev</button>
                                <button type="button" className="btn blogPgBtn2">Next</button>
                            </div>
                            <div className="blogPgPaginationText">Page <span>1</span> of 30</div>
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

export default Blogs;