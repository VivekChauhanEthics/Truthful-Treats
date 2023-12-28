import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header';
import  Footer   from './footer';
//images
import AboutCarouselImg1 from "../images/about page/Component 11.png";
import AboutCarouselImg2 from "../images/about page/Property 1=Frame 71.png";
import AboutCarouselImg3 from "../images/about page/Property 1=Frame 72.png";
import AboutCarouselImg4 from "../images/about page/Property 1=Frame 73.png";
import AboutLgImg from "../images/about page/Component 14.png";
import AboutVisonImg1 from "../images/about page/Quality Badge.png";
import AboutVisonImg2 from "../images/about page/Group 27.png";
import AboutVisonImg3 from "../images/about page/face savouring delicious food.png";
import AboutVisonImg4 from "../images/about page/Group.png";
import AboutQualityImg1 from "../images/about page/Vector.png";
import AboutQualityImg2 from "../images/about page/Group 26.png";
import AboutQualityImg3 from "../images/about page/Vector (1).png";
import AboutPromisImg from "../images/about page/love nuts 1.png"

function About() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
          {/* <!-- carousel section --> */}
          <section>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={AboutCarouselImg1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={AboutCarouselImg2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={AboutCarouselImg3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={AboutCarouselImg4} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>
          {/* <!-- our origin story section--> */}
          <section>
            <div className="container-fluid">
              <div className="container bg-transparent">
                <div className="row ">
                  <div className="col-md-12 d-flex origintextCol">
                    <img src={AboutLgImg} alt="originStory" className="img-fluid originStoryImg"/>
                    <div className="row origintextdiv">
                      <p className="origintext">
                        <h2 className="originheading">OUR ORIGIN STORY</h2>
                        Once upon a time, in a land not so far away (probably in your pantry), 
                        a group of health nuts and snack enthusiasts embarked on a quest. 
                        <br/><br/>
                        Their mission? <br/>
                        To rescue the world from the clutches of bland snacks and bring forth a treasure trove of taste 
                        and nutrition!
                        Picture this: a gang of friends who believed that snacking should be exciting, 
                        healthy, and utterly delectable. They knew that dry fruits held the key to this snacking utopia,
                          and so, the adventure began.
                        <br /><br/>
                        Our fearless founders were driven by fond memories of grandmas and grandpas 
                        sharing stories of their favorite dry fruits. They remembered the sweet aroma 
                        of dried pistachios and the satisfying crunch of almonds—they were on a mission 
                        to share that joy with the world.
                        <br/><br/>
                        But it wasn't as easy as snapping your fingers. They had to traverse vast orchards, 
                        dodge pistachio bandits, and negotiate with almond alchemists. Through it all, 
                        they remained unwavering in their commitment to sourcing the finest, 
                        most drool-worthy dry fruits and nuts.<br/>
                        As their quest continued, they realized it wasn't just about the products; 
                        it was about building a community of snack explorers. A place where folks could come together
                          to celebrate the magical goodness of nature's treats.
                        And so, they created a website where you could embark on your very own snacking adventure. 
                        A place where you could uncover a trove of premium dry fruits, nuts, and seeds—all waiting to 
                        ignite your taste buds.
                        <br/><br/>
                        But there's more to this story. 
                        Today, we offer not just snacks but a playground of flavors and fun.
                        Welcome to our world of naturally nutritious delights,
                        where you can embark on your snacking journey with a handful of happiness.
                      </p>
                      <button type="button" className="btn ExploreourrangeBtn">Explore our range</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* vision section  */}
          <section>
            <div className="container-fluid">
              <div className="container bg-transparent">
                <div className="row visionRow">
                  <div className="col-md-6">
                    <div className="row justify-content-center visioncardCont">
                      <div className="card visioncardL border-0 col-md-3">
                        <img src={AboutVisonImg1} className="card-img-top visionImg my-3" alt="..."/>
                        <div className="card-body bg-transparent">
                          <p className="card-text visioncardText">Exceptional Quality</p>
                        </div>
                      </div>
                      <div className="card visioncardS border-0 col-md-3  ms-5 ">
                          <img src={AboutVisonImg2} className="card-img-top visionImg visionImgIn my-3" alt="..."/>
                          <div className="card-body bg-transparent">
                            <p className="card-text visioncardText">Inventive</p>
                          </div>
                      </div>
                    </div>
                    <div className="row justify-content-center  my-5">
                      <div className="card visioncardS border-0">
                        <img src={AboutVisonImg3} className="card-img-top visionImg my-3" alt="..."/>
                        <div className="card-body bg-transparent">
                          <p className="card-text visioncardText">Delicious</p>
                        </div>
                      </div>
                      <div className="card visioncardL border-0 col-md- ms-5">
                          <img src={AboutVisonImg4} className="card-img-top visionImg my-3" alt="..."/>
                          <div className="card-body bg-transparent">
                            <p className="card-text visioncardText">Goodness at Its Heart</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <h2 className="visionheading">THE TRUTHFUL TREATS VISION</h2>
                      <p className="visiontext">We envision a world where snacking wasn't just about satisfying your taste buds;
                        it was about nourishing your body and soul. 
                        We aim to break free from the shackles of mundane, 
                        unhealthy snacks and introduce something extraordinary.
                      </p>
                      <button type="button" className="btn visionBtn">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Delivering Impeccable Quality section--> */}
          <section>
            <div className="container-fluid qualityContainer">
              <div className="container bg-transparent">
                <h2 className="text-center qualityHeading">DELIVERING IMPECCABLE QUALITY</h2>
                <div className="row pb-4">
                  <div className="col-md-4">
                    <img src={AboutQualityImg1} alt="qualityImg" className="img-fluid" />
                    <h5 className="qualitysUBHeading my-4">Quality First</h5>
                    <p className="qualitysText">At Truthful Treats, quality is our North Star. 
                      We believe in the power of the finest ingredients, 
                      carefully sourced from the best places on Earth. 
                      Our dry fruits are handpicked, sun-dried, 
                      and masterfully blended to create an explosion 
                      of flavors and nutrition.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img src={AboutQualityImg2} alt="qualityImg" className="img-fluid" />
                    <h5 className="qualitysUBHeading my-4">The Eco-Commitment</h5>
                    <p className="qualitysText">We're passionate about making choices that are kind to our planet. While we continue to indulge in the joy of snacking, we're on a mission to reduce our carbon footprint. Our packaging might not be eco-friendly yet, but we're tirelessly working on it.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img src={AboutQualityImg3} alt="qualityImg" className="img-fluid" />
                    <h5 className="qualitysUBHeading my-4">Sustainability Matters</h5>
                    <p className="qualitysText">We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Our Promise to You --> */}
          <section>
            <div className="container-fluid">
              <div className="container bg-transparent">
                <div className="row PromiseRow pt-5">
                  <div className="col-md-6">
                  <img src={AboutPromisImg} alt="PromiseImg" className="img-fluid PromiseImg" />
                  </div>
                  <div className="col-md-6">
                    <div className="row promiseRow">
                      <h2 className="promiseheading">OUR PROMISE TO YOU</h2>
                      <p className="promistext">
                        Every time you savor our delicious dry fruits, you're not just enjoying a snack; 
                        you're supporting a dream. Truthful Treats is committed to creating a delightful 
                        snacking experience that's both wholesome and guilt-free. We handpick our premium 
                        dry fruits from the finest farms, turning each bite into a burst of quality and flavor.
                      </p>
                      <button type="button" className="btn promisBtn mb-3">Shop Now</button>
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

export default About;