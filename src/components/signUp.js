import React from 'react'
import "../css/style.css";
import "../Js/custom.js";

import  Header   from './header';
import  Footer   from './footer';

function SignUp() {
  return (
    <>
        <Header />
        {/* <!-- Main Content --> */}
        <main>
            <section>
                <div className="container fluid">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 w-50 createPgColunm">
                                <h2 className="createPgHeading heading-text">CREATE ACCOUNT</h2>
                                <div className="row FLNameRow">
                                    <div className="form-floating FirstNameInput mb-3 ">
                                        <input type="email" className="form-control createPgInput" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput" className="createPgLabels">First Name</label>
                                    </div>
                                    <div className="form-floating LastNameInput mb-3">
                                        <input type="email" className="form-control createPgInput" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput" className="createPgLabels">Last Name</label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control createPgInput" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput" className="createPgLabels">Email Address</label>
                                </div>
                                <div className="input-group">
                                    <input className="input-group-text countryCodeInput mb-0" id="basic-addon1" placeholder="91+"></input>
                                    <input type="text" className="form-control countryCodeInput2" placeholder="Phone No." aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <button type="button" className="btn btn-outline-danger mb-3 float-end otpBtn">Send OTP</button>
                                <div className="form-floating">
                                    <input type="password" className="form-control createPgInput mb-0" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword" className="createPgLabels mt-5 pt-4">OTP</label>
                                </div>
                                <div className="OtpResponse">
                                  <i className="text-success">
                                    <img className="checkBoxImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADHElEQVR4nO2Za0gUURTHTxYVmb0+VBBEH/pSRC+ib6YUPiraoBJaW5fdVXtQSoTUVmaQQUaBBhVUVkJ9SWsjCcovbQ+j0l4SKaGFwmam1qZiPndPnAMTobvOzu7s3tltD5wvM/fO/f/uOffOnTmAEWKAEWKAEWKA/wPI966fmF9+BZdbLRhrSkLQx4fUY01JuOKwhTW0dzn9A6l4acc4c0rIxYMXn2ZJxTs1T5SBEMS49DXCxcMIj0lP8AoDntJJS5GAET49M9Vjmo0CoXwULRZkvKDiqjzIMqtZuFCQcdoAZEGmmpOFCwUZp9SXBREtEnz0KAhoIAoQjYg+9DM9ybg2/COytTgfm9ocuDgvI3xBVufvxN8D/awhp6wkPEHm7d2Cjh/tPH6p/X54pha93N43N/LYj+vf4cSMMFwjdJq997qax2342oIzszb43FdTIOceVPCYnT1duHD/dkV9NQOSdfk0jzcwNIiJhbmK+2sCJPnUARwaHka3240ZF0/69QxVQMbvSMBbLx6h5VKRYgGL8gzo7O3hsU7YyvyeDFVA6MVFRjPqy54v+exdOvzS3sp9aSIC+ZxWLbX2XS9Gl9vFfYoqb8q2n2xch88/feD2tZ8bcEqAf2VUXSOGC4Wc62Tnq2y8nXpqRzN/41kVt2vu+IZzdusCgoBgLHbdWSv2DQ5wXxI7wZA4qs3x29f4fndfLy49ZAoYAoK1a9H2SSLJKt9UcxpJ99JKCngtDbtcuOmMVRUICOb2u+poNnZ0/+Jn2D++5aMHXevt7+NrSjYFEAlCvuSgEVudnfycmqYG/kcmrR81ISAUL8QFuWnY2Ob4+7yHda88rhvNg4A+Hufu2Yx1LU1Y72jGGZnrVYeAUB5RZmVvxPk524ICAVo5a0VB9NGIxAtPIfB3jWi5NgL/VK9kQaheKFooyPjKI5nyIMfKS4ULBRmXDqFjglBZi0InWiyMUXqTznRjgpBRwdHbt4VIj0lPwLu1T5WVpwmG6LUUCZvS8rRkFEIqPNLiElGSizOn8NikwVM6+QwSTgYYIQYYIQaiBahlfwC9cGaGuJ5wHgAAAABJRU5ErkJggg=="/>
                                    OTP Verified
                                  </i>
                                  <i className="ms-2 text-danger">
                                  <img className="checkBoxImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVR4nO2YXwqDMAzGe47cQbaTiDvOPKg+eI5v4sPI6AZDRPzXtHFdPijuYZb8/GKT6DgTOc5EjjOR41xB+rJkEJ169VW1DqIdJDYuA8EJXIA5QvpPHuYI6T9tmCMj/aUjw/3Oj6IIDsrv4feCBshQ1+//P9s2CMbf6/fwGupawREfQNN8YLqOH9frfpDpHpeLTmoFwQRAIEqvdQQmEALRmsY9MAIQiNr9boERgkD0Nn4JRhACSeaRORhhCKQarMa1wV/HvyUKKJJOiCMXJJ3AKUCOFE2y1CIxJ77pJNHOUMrUWjqdhGHSFcS5F1sQJk2LsnQ6CcHEbxq3HLECMHHb+D11IhAm3mB1pNgFwExloy5y+fgA5TWVgcAcIUst2DtC+qcT7NSiTBzpq0o9SKys/nZbB/lVOc5EjjOR0w5ASi8eYBtYxpbK0wAAAABJRU5ErkJggg=="/>
                                    Wrong OTP
                                  </i>
                                </div>
                                <div className="form-floating mt-5">
                                    <input type="password" className="form-control createPgInput" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword" className="createPgLabels">Password</label>
                                </div>
                                <a href="./profile.html">
                                    <button type="button" className="btn createPgBtn">Sign up</button>
                                </a>
                                <div className="createPgline">
                                    <div className="text-on-createPgline">or</div>
                                </div>
                                <div className="text-center createPgcreateOneText">
                                    <span >Don’t have an account? <a href="./login.html" className="text-dark">Log In</a></span>
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

export default SignUp;