import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header.js';
import  Footer   from './footer.js';

function Error404() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
            {/* <!-- 404 error section--> */}
            <section>
                <div className="container-fluid Container404">
                    <div className="container bg-transparent">
                        <div className="row row404">
                            <div className="Container404-2 justify-content-center">
                                <h1 className="Heading404error1">4</h1><span><img src="./images/404 error page/0.png" alt="404 img1" className="img-fluid img404-1" /><img src="./images/404 error page/Asset 1-8 2.png" alt="404 img2" className="img-fluid img404-2" /></span><h1 className="Heading404error2">4</h1>
                            </div>
                            <p className="text404error text-center">This page went on a journey through the dry fruits aisle of the digital world.</p>
                            <div className="text-center"><button type="button" className="btn btn404">Back to home</button></div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container404bottom">
                    <div className="container bg-transparent">
                        <ul className="list-unstyled d-flex justify-content-between Ullist404">
                            <li className="text404botttom">oops! the you are looking for does not exist</li>
                            <li className="text404botttom pt-0 d-none d-lg-block">.</li>
                            <li className="text404botttom d-none d-lg-block">oops! the you are looking for does not exist</li>
                            <li className="text404botttom pt-0  d-none d-lg-block">.</li>
                            <li className="text404botttom d-none d-lg-block">oops! the you are looking for does not exist</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
    
  )
}

export default Error404;