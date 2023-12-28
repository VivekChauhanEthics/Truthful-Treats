import React from 'react'
import { NavLink } from 'react-router-dom';

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
            <div class="container-fluid">
                <div class="container">
                    <div class="row profileRow ">
                        <ProfileSideBar />
                        <div class="col-lg-8 col-sm-12 rightContainer ">
                            <h3 class="userName2">Profile</h3>
                            <span class="profileLabels">Contact Information</span>
                            <div class="form-floating mb-3 mt-1">
                                <input type="email" class="form-control profilePgInput" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput" class="createPgLabels">Email ID</label>
                            </div>
                            <div class="input-group mb-3">
                                <input class="input-group-text profilecountryCodeInput" id="basic-addon1" placeholder="91+"></input>
                                <input type="text" class="form-control profilecountryCodeInput2" placeholder="Phone No." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <span class="profileLabels">Primary information</span>
                            <div class="row profileFLNameRow mt-1">
                                <div class="form-floating profileFNameInput mb-3 ">
                                    <input type="email" class="form-control profilePgInput" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput" class="createPgLabels">First Name</label>
                                </div>
                                <div class="form-floating profileLNameInput mb-3">
                                    <input type="email" class="form-control profilePgInput" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput" class="createPgLabels">Last Name</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="form-check form-check-inline mt-2">
                                    <input class="form-check-input profile-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label ms-2" for="inlineRadio1">Male</label>
                                </div>
                                <div class="form-check form-check-inline mt-2">
                                    <input class="form-check-input profile-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label ms-2" for="inlineRadio2">Female</label>
                                </div>
                                <button type="button" class="btn profileBtn text-center">Update</button>
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