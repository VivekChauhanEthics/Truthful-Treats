import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

import  Header   from './header.js';
import  Footer   from './footer.js';

function FAQ() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
            {/* <!-- Frequently Asked Questions section--> */}
            <section>
                <div className="container-fluid ">
                    <div className="row FAQTopRow">
                        <h2 className="text-center FAQTopHeading text-uppercase mt-md-5">Frequently Asked Questions</h2>
                        <div className="input-group mb-3 FAQSearchBox">
                            <input type="text" className="form-control bg-transparent FAQInput" placeholder="what are you looking for?" aria-label="Username" aria-describedby="basic-addon1"/>
                            <button type="button" className="btn FAQBtn">Search</button>
                        </div>
                    </div>
                    <div className="container bg-transparent mb-md-5">
                        <div className="row justify-content-center d-flex my-lg-5 my-4">
                            <div className="accordion col-md-12 FAQcollapseCol" id="accordionExample">
                                <div className="accordion-item FAQcollapseCol2">
                                    <div className="accordion-header FAQaccordionBg1 border-0">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            1. What sets Truthful Treats apart from other dry fruit brands?
                                        </button>
                                    </div>
                                    <div id="collapseOne" className="accordion-collapse collapse FAQcollapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body FAQcollapseText">
                                            <ul><br/>
                                                Truthful Treats is committed to honesty and quality. We source only the finest, natural dry fruits without additives or preservatives, ensuring a genuine and wholesome snacking experience.
                                                <li>
                                                    Quality First: At Truthful Treats, quality is our North Star. We believe in the power of the finest ingredients, carefully sourced from the best places on Earth. Our dry fruits are handpicked, sun-dried, and masterfully blended to create an explosion of flavors and nutrition.
                                                </li>
                                                <li>
                                                    Sustainability Matters: We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.                                   
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item FAQcollapseCol2 my-3">
                                    <div className="accordion-header FAQaccordionBg1 border-0">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          2. Where does Truthful Treats source its dry fruits?
                                        </button>
                                    </div>
                                    <div id="collapseTwo" className="accordion-collapse collapse FAQcollapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body FAQcollapseText">
                                            <ul><br/>
                                                Truthful Treats is committed to honesty and quality. We source only the finest, natural dry fruits without additives or preservatives, ensuring a genuine and wholesome snacking experience.
                                                <li>
                                                    Quality First: At Truthful Treats, quality is our North Star. We believe in the power of the finest ingredients, carefully sourced from the best places on Earth. Our dry fruits are handpicked, sun-dried, and masterfully blended to create an explosion of flavors and nutrition.
                                                </li>
                                                <li>
                                                    Sustainability Matters: We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.                                   
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item FAQcollapseCol2">
                                    <div className="accordion-header FAQaccordionBg1 border-0">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          3. Are Truthful Treats products suitable for vegans and vegetarians?
                                        </button>
                                    </div>
                                    <div id="collapseThree" className="accordion-collapse collapse FAQcollapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body FAQcollapseText">
                                            <ul><br/>
                                                Truthful Treats is committed to honesty and quality. We source only the finest, natural dry fruits without additives or preservatives, ensuring a genuine and wholesome snacking experience.
                                                <li>
                                                    Quality First: At Truthful Treats, quality is our North Star. We believe in the power of the finest ingredients, carefully sourced from the best places on Earth. Our dry fruits are handpicked, sun-dried, and masterfully blended to create an explosion of flavors and nutrition.
                                                </li>
                                                <li>
                                                    Sustainability Matters: We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.                                   
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item FAQcollapseCol2 border-0 my-3">
                                    <div className="accordion-header FAQaccordionBg1">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            4. How does Truthful Treats ensure the freshness of its products?
                                        </button>
                                    </div>
                                    <div id="collapse4" className="accordion-collapse collapse FAQcollapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body FAQcollapseText">
                                            <ul><br/>
                                                Truthful Treats is committed to honesty and quality. We source only the finest, natural dry fruits without additives or preservatives, ensuring a genuine and wholesome snacking experience.
                                                <li>
                                                    Quality First: At Truthful Treats, quality is our North Star. We believe in the power of the finest ingredients, carefully sourced from the best places on Earth. Our dry fruits are handpicked, sun-dried, and masterfully blended to create an explosion of flavors and nutrition.
                                                </li>
                                                <li>
                                                    Sustainability Matters: We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.                                   
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item FAQcollapseCol2 border-0">
                                    <div className="accordion-header FAQaccordionBg1">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            5. Can I buy a gift packages for special occasions?
                                        </button>
                                    </div>
                                    <div id="collapse5" className="accordion-collapse collapse FAQcollapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body FAQcollapseText">
                                            <ul><br/>
                                                Truthful Treats is committed to honesty and quality. We source only the finest, natural dry fruits without additives or preservatives, ensuring a genuine and wholesome snacking experience.
                                                <li>
                                                    Quality First: At Truthful Treats, quality is our North Star. We believe in the power of the finest ingredients, carefully sourced from the best places on Earth. Our dry fruits are handpicked, sun-dried, and masterfully blended to create an explosion of flavors and nutrition.
                                                </li>
                                                <li>
                                                    Sustainability Matters: We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.                                   
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item FAQcollapseCol2 border-0 my-3">
                                    <div className="accordion-header FAQaccordionBg1">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                            6. Do you provide nutritional information for your products?
                                        </button>
                                    </div>
                                    <div id="collapse6" className="accordion-collapse collapse FAQcollapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body FAQcollapseText">
                                            <ul><br/>
                                                Truthful Treats is committed to honesty and quality. We source only the finest, natural dry fruits without additives or preservatives, ensuring a genuine and wholesome snacking experience.
                                                <li>
                                                    Quality First: At Truthful Treats, quality is our North Star. We believe in the power of the finest ingredients, carefully sourced from the best places on Earth. Our dry fruits are handpicked, sun-dried, and masterfully blended to create an explosion of flavors and nutrition.
                                                </li>
                                                <li>
                                                    Sustainability Matters: We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.                                   
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item FAQcollapseCol2 border-0">
                                    <div className="accordion-header FAQaccordionBg1">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                            7. How can I track my order?
                                        </button>
                                    </div>
                                    <div id="collapse7" className="accordion-collapse collapse FAQcollapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body FAQcollapseText">
                                            <ul><br/>
                                                Truthful Treats is committed to honesty and quality. We source only the finest, natural dry fruits without additives or preservatives, ensuring a genuine and wholesome snacking experience.
                                                <li>
                                                    Quality First: At Truthful Treats, quality is our North Star. We believe in the power of the finest ingredients, carefully sourced from the best places on Earth. Our dry fruits are handpicked, sun-dried, and masterfully blended to create an explosion of flavors and nutrition.
                                                </li>
                                                <li>
                                                    Sustainability Matters: We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.                                   
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item FAQcollapseCol2 border-0 mt-3">
                                    <div className="accordion-header FAQaccordionBg1">
                                        <button className="accordion-button combos-accordion-button collapsed bg-transparent border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                            8. How can I contact Truthful Treats customer support?
                                        </button>
                                    </div>
                                    <div id="collapse8" className="accordion-collapse collapse FAQcollapseBg" data-bs-parent="#accordionExample">
                                        <div className="accordion-body FAQcollapseText">
                                            <ul><br/>
                                                Truthful Treats is committed to honesty and quality. We source only the finest, natural dry fruits without additives or preservatives, ensuring a genuine and wholesome snacking experience.
                                                <li>
                                                    Quality First: At Truthful Treats, quality is our North Star. We believe in the power of the finest ingredients, carefully sourced from the best places on Earth. Our dry fruits are handpicked, sun-dried, and masterfully blended to create an explosion of flavors and nutrition.
                                                </li>
                                                <li>
                                                    Sustainability Matters: We're not just another brand; we're a community of snack enthusiasts who share a common vision of sustainability. Truthful Treats is dedicated to forming partnerships with growers who practice sustainable farming methods.                                   
                                                </li>
                                            </ul>
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

export default FAQ;