import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

import  Header   from './header';
import  Footer   from './footer';

function ShippingPolicy() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
          {/* <!-- shippingPolicy page --> */}
          <section>
            <div className="container-fluid shippingPolicyCon">
              <div className="container bg-transparent">
                <h2 className="shippingPolicyHeading">SHIPPING POLICY</h2>
              </div>
            </div>
            <div className="container fluid">
              <div className="container bg-transparent my-4">
                <div className="row justify-content-center">
                  <p className="shippingPolicyText">
                    Our goal is to ensure the safe and timely delivery of products to
                    all regions within India. We work with trusted logistics service
                    providers to achieve this. Here are some key details regarding our
                    shipping policy:
                    <br/> 
                    Delivery Times: 
                    <br/>
                    <ul className="shippingPolicyTextUl">
                      <li className="shippingPolicyTextli">
                        Local Orders: We aim to deliver
                        local orders within 7 working days.
                      </li>
                      <li className="shippingPolicyTextli">
                        Outstation Orders: Outstation
                        orders typically take 7 working days for delivery.
                      </li>
                      <li className="shippingPolicyTextli">
                        Orders to JK,
                        North East India & Kerala: Please allow 9-10 working days for
                        orders delivered to these regions.
                      </li>
                    </ul>
                  </p>
                  <p className="shippingPolicyText">
                    Delivery Days: We process and
                    ship orders from Monday to Saturday, excluding Sundays and Public
                    Holidays. Tracking: Once your order has been dispatched, you will
                    receive an email containing the tracking number and information
                    about the courier company handling your order. You can usually
                    start tracking your package within 24 hours of the order being
                    dispatched. However, please note that in some cases, tracking
                    updates may be delayed due to factors beyond our control, such as
                    technical issues with the logistics company disruptions caused by
                    weather conditions or force majeure events like strikes, lockouts,
                    server disruptions, etc.<br/> Shipping Charges: Shipping charges may
                    vary from time to time and will be clearly displayed to you on the
                    Site and/or Application before you place your order. We are
                    committed to providing transparency in this regard.<br/> For any
                    inquiries or concerns related to shipping, please feel free to
                    reach out to us at care@truthfultreats.com. We are here to assist
                    you with any shipping-related queries.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
    </>
    
  )
}

export default ShippingPolicy;