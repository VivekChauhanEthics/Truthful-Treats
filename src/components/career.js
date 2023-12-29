import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

import  Header   from './header';
import  Footer   from './footer';

function Career() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
          {/* <!-- shippingPolicy page --> */}
          <section>
            <div className="container-fluid shippingPolicyCon">
              <div className="container bg-transparent">
                <h2 className="shippingPolicyHeading">CAREEER</h2>
              </div>
            </div>
            <div className="container-fluid">
              <div className="container bg-transparent my-lg-5">
                <div className="row careerPgRow">
                    <div className="col-lg-6 careerLeftCont">
                        <h2 className="careerPgHeading">Join, Thrive, Succeed!</h2>
                        <p className="careerPgText">
                            Are you ready to embark on a journey where your talents meet boundless opportunities? Join our dynamic team dedicated to satisfying the hunger for success!
                        </p>
                        <h2 className="careerPgHeading2">How to Join:</h2>
                        <p className="careerPgText">
                            Simply share your details, and our team will reach out to you.
                        </p>
                    </div>
                    <div className="col-lg-6 careerrightCont">
                        <h4 className="contactPgRightHeading">Apply Online</h4>
                        <div className="">
                            <input type="text" aria-label="First name" className="form-control CareerPgInputs" placeholder="Full name*"/>
                            <input type="email" aria-label="Last name" className="form-control CareerPgInputs" placeholder="Email address*"/>
                            <input type="number" aria-label="Last name" className="form-control CareerPgInputs" placeholder="Mobile no.*"/>
                            <input type="text" aria-label="Last name" className="form-control CareerPgInputs" placeholder="Interested Job role*"/>
                            <input type="text" aria-label="Last name" className="form-control CareerPgInputs" placeholder="Current address*"/>
                            <input type="number" aria-label="Last name" className="form-control CareerPgInputs" placeholder="Notice periods in days*"/>
                        </div>
                        <div className="ps-xl-4">
                            <div className="careerPgRadio1">
                              <div className="form-check-inline">
                                  <label className="careerPgLabels CareerPgRadioInput1">Select gender</label>
                              </div>
                              <div className="form-check form-check-inline careerPgGenderBox">
                                  <input className="form-check-input  careerPgRadioImg" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                  <label className="form-check-label ms-lg-2 careerPgRadioText" for="inlineRadio1">Male</label>
                              </div>
                              <div className="form-check form-check-inline careerPgGenderBox">
                                  <input className="form-check-input careerPgRadioImg" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                  <label className="form-check-label careerPgRadioText" for="inlineRadio2">Female</label>
                              </div>
                              <div className="form-check form-check-inline careerPgGenderBox">
                                  <input className="form-check-input careerPgRadioImg" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                  <label className="form-check-label careerPgRadioText" for="inlineRadio3">Others</label>
                              </div>
                            </div>
                            <div className="careerPgRadio2">
                                <div className="form-check-inline">
                                    <label className="careerPgLabels CareerPgRadioInput2">Ready to relocate</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input  careerPgRadioImg" type="radio" name="inlineRadioOptionOne" id="inlineRadioOne" value="optionOne"/>
                                    <label className="form-check-label ms-lg-2 careerPgRadioText" for="inlineRadioOne">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input careerPgRadioImg" type="radio" name="inlineRadioOptionOne" id="inlineRadioTwo" value="optionTwo"/>
                                    <label className="form-check-label careerPgRadioText" for="inlineRadioTwo">No</label>
                                </div>
                            </div>
                            <div className="input-group careerPgFilGroup">
                                <label className="border-0 careerPgLabels me-3" for="inputGroupFile01">Upload your resume </label>
                                <input type="file" className="form-control CareerPgFileInput py-2 ms-lg-2" id="inputGroupFile01"/>
                            </div>
                            <div className="input-group careerPgFilGroup">
                                <span className="border-0 careerPgLabels">Total work experience</span>
                                <div className="careerPgExpInputDiv">
                                  <input type="text" aria-label="First name" className="form-control CareerPgExpInputs" placeholder="Years"/>
                                  <input type="text" aria-label="Last name" className="form-control CareerPgExpInputs" placeholder="Months"/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="">
                            <input type="text" aria-label="First name" className="form-control CareerPgInputs" placeholder="Current CTC per month*"/>
                            <input type="email" aria-label="Last name" className="form-control CareerPgInputs" placeholder="Expected CTC per month*"/>
                            <input type="email" aria-label="Last name" className="form-control CareerPgInputs" placeholder="Write down your skills*"/>
                        </div>
                        <button type="button" className="btn contactusBtn mt-4">Submit</button>
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

export default Career;