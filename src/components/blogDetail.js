import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
import OwlCarousel from 'react-owl-carousel';
//components
import  Header   from './header.js';
import  Footer   from './footer.js';
//images
import BlogDetailTopImg1 from "../images/blog detail page/image 14 (1).png";
import BlogDetailMidImg1 from "../images/blog detail page/image 15.png";
import BlogDetailMidImg2 from "../images/blog detail page/71nwmrpK1gL 1 (1).png";
import BlogDetailMidImg3 from "../images/blog detail page/71BuDOeNjtL 1 (1).png";
import BlogDetailMid2Img1 from "../images/blog detail page/image 16.png";
import BlogDetailMid2Img2 from "../images/blog detail page/71BuDOeNjtL 3.png";
import BlogDetailMid2Img3 from "../images/blog detail page/71nwmrpK1gL 2.png";
import BlogDetailMid2Img4 from "../images/blog detail page/image 16.png";
import BlogDetailMid2Img5 from "../images/blog detail page/71BuDOeNjtL 3.png";
import BlogDetailIcons1 from "../images/blog detail page/Vector.png";
import BlogDetailIcons2 from "../images/blog detail page/fb_3x.png.png";
import BlogDetailIcons3 from "../images/blog detail page/Instagram.png";
import BlogDetailIcons4 from "../images/blog detail page/Link.png";
import BlogDetailIcons5 from "../images/blog detail page/Link (1).png";
import BlogDetailIcons6 from "../images/blog detail page/share button.png";
import BlogDetailSlider1 from "../images/blog detail page/image 15 (1).png";
import BlogDetailSlider2 from "../images/blog detail page/71BuDOeNjtL 1 (2).png"
import BlogDetailSlider3 from "../images/blog detail page/71nwmrpK1gL 1 (2).png"



function BlogDetail() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
          {/* <!-- Blog detail content --> */}
          <section>
            <div className="container-fluid">
              <div className="container bg-transparent">
                <div className="row blogDetailTopRow">
                  <p className="blogDetailTopRowText"><span className="me-auto blogDetailTopText1"><span className="blogDetailTopText2">Home / Blog /</span> Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats </span> <span className="blogDetailTopText2">22 feb 2023  /  03 min read</span></p>
                </div>
                <img src={BlogDetailTopImg1} alt="blogDatailImg" className="img-fluid" />
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid">
              <div className="container bg-transparent">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <h3 className="blogDetailHeading">Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats</h3>
                      <p className="blogDetailText">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br/> <br/>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br/>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        <br/> <br/>
                      <span className="blogDetailTopText2">READ:</span><span className="blogDetailItalic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span> 
                      <br/><br/>
                      </p>
                      <img src={BlogDetailMidImg1} alt="BlogImg" className="img-fluid" />
                      <p className="blogDetailText">
                        <br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br/><br/>
                      </p>
                      <div className="blogDetailMiddleImg">
                        <img src={BlogDetailMidImg2} alt="BlogImg" className="img-fluid" />
                        <img src={BlogDetailMidImg3} alt="BlogImg" className="img-fluid" />
                      </div>
                      <p className="blogDetailText2"><br/>
                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”
                        <br/> <br/>
                      </p>
                      <h5 className="blogDetailSubHeading">(H2)  “Lorem Ipsum is simply dummy text</h5>
                      <p className="blogDetailText">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                        <div className="input-group d-flex gap-3 blogDetailSearcCont">
                            <input type="text" className="form-control blogDetailSearchBox" placeholder="what are you looking for?" aria-label="Username" aria-describedby="basic-addon1"/>
                            <button type="button" className="btn blogDetailSearchBtn ">Search</button>
                        </div>
                        <div>
                          <h3 className="blogDetailRightDeading">Popular Articles</h3>
                          <ul className="list-unstyled">
                            <li className="d-flex gap-2 blogDetailiconimg"><img src={BlogDetailMid2Img1} alt="blogImg" className="img-fluid" /><p className="blogDetailRightText">Headline sentence that attracts</p></li>
                            <li className="d-flex gap-2 my-3 blogDetailiconimg"><img src={BlogDetailMid2Img2} alt="blogImg" className="img-fluid" /><p className="blogDetailRightText">Top secret mail got leaked</p></li>
                            <li className="d-flex gap-2 blogDetailiconimg"><img src={BlogDetailMid2Img3} alt="blogImg" className="img-fluid" /><p className="blogDetailRightText">Govt. reduces tax rates on exports!</p></li>
                            <li className="d-flex gap-2 my-3 blogDetailiconimg"><img src={BlogDetailMid2Img4} alt="blogImg" className="img-fluid" /><p className="blogDetailRightText">Govt. might alter the export laws</p></li>
                            <li className="d-flex gap-2 blogDetailiconimg"><img src={BlogDetailMid2Img5} alt="blogImg" className="img-fluid" /><p className="blogDetailRightText">how diesel price effects inflation</p></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="my-3">
                    <ul className="list-unstyled d-flex gap-3">
                      <li><span className="blogdetailTag1">Tags:</span></li>
                      <li><span className="blogdetailTag2">Cashew</span></li>
                      <li><span className="blogdetailTag2">Kheer</span></li>
                      <li><span className="blogdetailTag2">Sweet Dish</span></li>
                    </ul>
                  </div>
                  <hr />
                  <div className="d-flex blogDetailSocialcont">
                    <ul className="list-unstyled me-auto d-flex gap-2">
                      <li><img src={BlogDetailIcons1} alt="social icons" className="img-fluid blogDetailiconimg" /></li>
                      <li><img src={BlogDetailIcons2} alt="social icons" className="img-fluid blogDetailiconimg" /></li>
                      <li><img src={BlogDetailIcons3} alt="social icons" className="img-fluid blogDetailiconimg" /></li>
                      <li><img src={BlogDetailIcons4} alt="social icons" className="img-fluid blogDetailiconimg" /></li>
                      <li><img src={BlogDetailIcons5} alt="social icons" className="img-fluid blogDetailiconimg" /></li>
                      <li className="blogDetailShareIcon blogDetailiconimg"><img src={BlogDetailIcons6} alt="social icons" className="img-fluid" /><span className="ms-1">Share</span></li>
                    </ul>
                    <p>
                      <span className="blogDetailRedTex1">
                        Next:
                      </span>
                      <span className="blogDetailRedTex2">
                        Unboxing Truthful Treats - Your Ultimate Snacking Experience.
                      </span>
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid">
              <div className="container bg-transparent">
                <div className="row mt-lg-5 justify-content-center blogDetailBotCont">
                  <h3 className="blogDetailBotHeading text-center">Related Articles</h3>
                  <OwlCarousel 
                     className="owl-carousel blog-OwlCarousel owl-theme"
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
                                items: 3, 
                                },
                            }}
                  >
                    <div className="item">
                      <img src={BlogDetailSlider1} alt="blogImg" className="img-fluid blogDetailBotImg" />
                      <p className="blogDetailBotSubHed ps-xl-3">Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats</p>
                      <p className="d-flex ps-xl-3"><span className="blogDetailBotText1 me-auto">Read More</span><span className="blogDetailBotText2 pe-xl-3">01 Jan 23</span></p>
                    </div>
                    <div className="item">
                      <img src={BlogDetailSlider2} alt="blogImg" className="img-fluid blogDetailBotImg" />
                      <p className="blogDetailBotSubHed ps-xl-3">From Orchard to Your Table: The Journey of Truthful Treats.</p>
                      <p className="d-flex ps-xl-3"><span className="blogDetailBotText1 me-auto">Read More</span><span className="blogDetailBotText2 pe-xl-3">01 Jan 23</span></p>
                    </div>
                    <div className="item ">
                      <img src={BlogDetailSlider3} alt="blogImg" className="img-fluid blogDetailBotImg" />
                      <p className="blogDetailBotSubHed ps-xl-3">Unboxing Truthful Treats - Your Ultimate Snacking Experience.</p>
                      <p className="d-flex ps-xl-3"><span className="blogDetailBotText1 me-auto">Read More</span><span className="blogDetailBotText2 pe-xl-3">01 Jan 23</span></p>
                    </div>
                    <div className="item ">
                      <img src={BlogDetailSlider1} alt="blogImg" className="img-fluid blogDetailBotImg" />
                      <p className="blogDetailBotSubHed ps-xl-3">Unboxing Truthful Treats - Your Ultimate Snacking Experience.</p>
                      <p className="d-flex ps-xl-3"><span className="blogDetailBotText1 me-auto">Read More</span><span className="blogDetailBotText2 pe-xl-3">01 Jan 23</span></p>
                    </div>
                    <div className="item">
                      <img src={BlogDetailSlider2} alt="blogImg" className="img-fluid blogDetailBotImg" />
                      <p className="blogDetailBotSubHed ps-xl-3">Almonds Unleashed: The Nutritional Marvel Behind Truthful Treats</p>
                      <p className="d-flex ps-xl-3"><span className="blogDetailBotText1 me-auto">Read More</span><span className="blogDetailBotText2 pe-xl-3">01 Jan 23</span></p>
                    </div>
                    <div className="item">
                      <img src={BlogDetailSlider3} alt="blogImg" className="img-fluid blogDetailBotImg" />
                      <p className="blogDetailBotSubHed ps-xl-3">From Orchard to Your Table: The Journey of Truthful Treats.</p>
                      <p className="d-flex ps-xl-3"><span className="blogDetailBotText1 me-auto">Read More</span><span className="blogDetailBotText2 pe-xl-3">01 Jan 23</span></p>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
    </>
    
  )
}

export default BlogDetail;