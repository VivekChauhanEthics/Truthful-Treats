import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//Components
import  Header   from './header';
import  Footer   from './footer';
import ProfileSideBar from "./profileSideBar.js"


function CahngePassword() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
            <section>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row profileRow">
                            <ProfileSideBar />
                            <div className="col-lg-8 col-sm-12 PasswordrightContainer">
                                <h3 className="userName2">Change password</h3>
                                <div className="row mt-4">
                                    <div className="">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control passwordPgInputs" placeholder="current password" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control passwordPgInputs" placeholder="New password" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control passwordPgInputs" placeholder="Confirm new password" aria-label="Username" aria-describedby="basic-addon1"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="d-flex">
                                        <button type="button" className="btn passworChangeBtn1 me-auto">Update</button>
                                        <button type="button" className="btn passworChangeBtn2">cancel</button>
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

export default CahngePassword;