import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

import  Header   from './header';
import  Footer   from './footer';

function Login() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
        <section>
            <div className="container fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 w-50 loginColunm">
                            <h2 className="loginHeading heading-text">LOGIN</h2>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control LoginInput" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput" className="LoginLabels">Mobile No. or Email i.d</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control LoginInput" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword" className="LoginLabels">Password</label>
                                <a className="text-primary forgetBtn">Forgot password?</a>
                            </div>
                            <a href="./profile.html">
                                <button type="button" className="btn LoginBtn">Login</button>
                            </a>
                            <div className="line">
                                <div className="text-on-line">or</div>
                            </div>
                            <div className="text-center createOneText">
                                <span >Don’t have an account? <a href="./signup.html" className="text-dark">create one</a></span>
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

export default Login;