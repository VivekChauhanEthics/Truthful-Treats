// import React from 'react'
// import { NavLink } from 'react-router-dom';

// import "../css/style.css";
// import "../Js/custom.js";
// //images
// import ProfileSideBarImg1 from "../images/profile page/fi_1077063.png"
// import ProfileSideBarImg2 from "../images/profile page/Layer 32.png"
// import ProfileSideBarImg3 from "../images/profile page/9-Home.png"
// import ProfileSideBarImg4 from "../images/profile page/Group 37711.png"

// function ProfileSideBar() {
//   return (
//     <>
//         {/* <!-- Main Content --> */}
//         <div class="col-lg-4 col-sm-12 d-flex profileLeftCon">
//             <div class="profileLeftInCon">
//                 <div>
//                     <span>Hey!</span>
//                     <h3 class="userName">Ayush Marwah</h3>
//                 </div>
//                 <div class="mt-5">
//                     <ul class="list-unstyled sideBarul">
//                         <li class=" profileSideBarActive"><NavLink  to="/profile" class="icontext"><img class="profileIcons" src={ProfileSideBarImg1} /><span class="text-dark">Profile</span></NavLink></li>
//                         <li class=" profileSideBarActive"><NavLink  to="/orders"  class="icontext"><img class="profileIcons" src={ProfileSideBarImg2} />Orders</NavLink></li>
//                         <li class=" profileSideBarActive"><NavLink  to="/savedaddress" class="icontext"><img class="profileIcons" src={ProfileSideBarImg3} />Saved Address</NavLink></li>
//                         <li class=" profileSideBarActive"><NavLink  to="/changepassword" class="icontext"><img class="profileIcons" src={ProfileSideBarImg4} />Change password</NavLink></li>
//                     </ul>
//                 </div>
//                 <hr class="d-md-block d-lg-none mt-5"/>
//             </div>
//             <div class="vertical-line d-none d-lg-block"></div>
//         </div>
//     </>
    
//   )
// }

// export default ProfileSideBar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/style.css';
import '../Js/custom.js';
//images
import ProfileSideBarImg1 from '../images/profile page/fi_1077063.png';
import ProfileSideBarImg2 from '../images/profile page/Layer 32.png';
import ProfileSideBarImg3 from '../images/profile page/9-Home.png';
import ProfileSideBarImg4 from '../images/profile page/Group 37711.png';

function ProfileSideBar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const renderNavLink = (index, to, text, imgSrc) => (
    <li
      className={`profileSideBarActive ${
        activeItem === index ? 'active' : ''
      }`}
      key={index}
    >
      <NavLink
        to={to}
        className="icontext"
        onClick={() => handleItemClick(index)}
      >
        <img className="profileIcons" src={imgSrc} alt={`Icon ${index}`} />
        <span className="text-dark">{text}</span>
      </NavLink>
    </li>
  );

  return (
    <>
      {/* <!-- Main Content --> */}
      <div className="col-lg-4 col-sm-12 d-flex profileLeftCon">
        <div className="profileLeftInCon">
          <div>
            <span>Hey!</span>
            <h3 className="userName">Ayush Marwah</h3>
          </div>
          <div className="mt-5">
            <ul className="list-unstyled sideBarul">
              {renderNavLink(0, '/profile', 'Profile', ProfileSideBarImg1)}
              {renderNavLink(1, '/orders', 'Orders', ProfileSideBarImg2)}
              {renderNavLink(2, '/savedaddress', 'Saved Address', ProfileSideBarImg3)}
              {renderNavLink(3, '/changepassword', 'Change password', ProfileSideBarImg4)}
            </ul>
          </div>
          <hr className="d-md-block d-lg-none mt-5" />
        </div>
        <div className="vertical-line d-none d-lg-block"></div>
      </div>
    </>
  );
}

export default ProfileSideBar;
