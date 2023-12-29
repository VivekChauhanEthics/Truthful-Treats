import React from 'react'

import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header';
import  Footer   from './footer';
import ProfileSideBar from "./profileSideBar.js"


function Profile() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
        <section>
            <div className="container-fluid">
                <div className="container">
                    <div className="row profileRow ">
                        <ProfileSideBar />
                        <div className="col-lg-8 col-sm-12 rightContainer ">
                            <h3 className="userName2">Profile</h3>
                            <span className="profileLabels">Contact Information</span>
                            <div className="form-floating mb-3 mt-1">
                                <input type="email" className="form-control profilePgInput" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput" className="createPgLabels">Email ID</label>
                            </div>
                            <div className="input-group mb-3">
                                <input className="input-group-text profilecountryCodeInput" id="basic-addon1" placeholder="91+"></input>
                                <input type="text" className="form-control profilecountryCodeInput2" placeholder="Phone No." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <span className="profileLabels">Primary information</span>
                            <div className="row profileFLNameRow mt-1">
                                <div className="form-floating profileFNameInput mb-3 ">
                                    <input type="email" className="form-control profilePgInput" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput" className="createPgLabels">First Name</label>
                                </div>
                                <div className="form-floating profileLNameInput mb-3">
                                    <input type="email" className="form-control profilePgInput" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput" className="createPgLabels">Last Name</label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-check form-check-inline mt-2">
                                    <input className="form-check-input profile-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label ms-2" for="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline mt-2">
                                    <input className="form-check-input profile-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label ms-2" for="inlineRadio2">Female</label>
                                </div>
                                <button type="button" className="btn profileBtn text-center">Update</button>
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

export default Profile;