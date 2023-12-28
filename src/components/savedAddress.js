import React from 'react'
import "../css/style.css";
import "../Js/custom.js";
//components
import  Header   from './header';
import  Footer   from './footer';
import ProfileSideBar from "./profileSideBar.js"


function SavedAddress() {
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
                            <div className="col-lg-8 col-sm-12 addressrightContainer mb-5">
                                <div className="row">
                                    <div className="d-flex">
                                        <h3 className="addressHeading me-auto">Address Page</h3>
                                        <button type="button" className="btn addressPgBtn">+ Add Address</button>
                                    </div>
                                </div>
                                <div className="row addressPgRows">
                                    <div className="d-flex ps-4">
                                        <div className="me-auto pt-3">
                                            <p>
                                                <span className="fTag">Home</span> <span className="sTag ms-3">Default</span>
                                            </p>
                                            <p className="mt-2 ms-1">
                                                <strong className="me-3">Ayush Marwah</strong><strong className="ms-5">+91 9015201602</strong>
                                            </p>
                                            <p className="my-2 adressListText">Block B, Army colony, near central park, New Delhi, Delhi - 110023</p>
                                        </div>
                                        {/* <!-- Edit list button --> */}
                                        <div className="btn-group dropstart">
                                            <button type="button" className="btn dropdown-toggle addressDropdown border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="./images/address page/• • •.png" alt="dotsImg" className="dostImg" />
                                            </button>
                                            <ul className="dropdown-menu addressDropdownList ps-3">
                                            {/* <!-- Dropdown menu links --> */}
                                            <li className="cursor-pointer">Edit</li>
                                            <li className="cursor-pointer">Delete</li>
                                            <li className="cursor-pointer">Set As Default</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row addressPgRows mt-3">
                                    <div className="d-flex ps-4">
                                        <div className="me-auto pt-3">
                                            <p>
                                                <span className="fTag">Work</span>
                                            </p>
                                            <p className="mt-2 ms-1">
                                                <strong className="me-3">Ayush Marwah</strong><strong className="ms-5">+91 9015201602</strong>
                                            </p>
                                            <p className="my-2 adressListText">17-18 Tag tower, near Bharti Airtel, gurugram, Haryana - 120023</p>
                                        </div>
                                        {/* <!-- Edit list button --> */}
                                        <div className="btn-group dropstart">
                                            <button type="button" className="btn dropdown-toggle addressDropdown border-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="./images/address page/• • •.png" alt="dotsImg" className="dostImg" />
                                            </button>
                                            <ul className="dropdown-menu addressDropdownList ps-3">
                                            {/* <!-- Dropdown menu links --> */}
                                            <li className="cursor-pointer">Edit</li>
                                            <li className="cursor-pointer">Delete</li>
                                            <li className="cursor-pointer">Set As Default</li>
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

export default SavedAddress;