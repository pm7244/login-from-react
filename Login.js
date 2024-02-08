import React from 'react'
import { Link } from 'react-router-dom';
// import { a } from 'react-router-dom';

function Login() {
  return (
    
    <div className="main-wrapper " >

      <div
        className="
          auth-wrapper
          d-flex
          no-block
          justify-content-center
          align-items-center "



        // style= { "background: url(C:\Users\Lenovo\Downloads\react-m\new-app\src\components) no-repeat center center;
        //   backgroundSize: cover;"}   
        style={{background:`url('assets/images/background/login-register.jpg')`,
                 backgroundSize:'cover',
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'center center',
                  overflow:'hidden'
                }}      
      >
       <div className="auth-box p-4 bg-white rounded">
          <div id="loginform">
            <div className="logo">
              <h3 className="box-title mb-3">Sign In</h3>
            </div>
           
            <div className="row">
              <div className="col-12">
                <form
                  className="form-horizontal mt-3 form-material"
                  id="loginform"
                  action="index.html"
                >
                  <div className="form-group mb-3">
                    <div className="">
                      <input
                        className="form-control"
                        type="text"
                        required=""
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="">
                      <input
                        className="form-control"
                        type="password"
                        required=""
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-flex">
                      <div className="checkbox checkbox-info pt-0">
                        <input
                          id="checkbox-signup"
                          type="checkbox"
                          className="material-inputs chk-col-indigo"
                        />
                        <label for="checkbox-signup"> Remember me </label>
                      </div>
                      <div className="ms-auto">
                        <Link
                          to="javascript:void(0)"
                          id="to-recover"
                          className="link font-weight-medium"
                          ><i className="fa fa-lock me-1"></i> Forgot pwd?</Link>
                      </div>
                    </div>
                  </div>
                  <div className="form-group text-center mt-4 mb-3">
                    <div className="col-xs-12">
                      <button
                        className="
                          btn btn-info
                          d-block
                          w-100
                          waves-effect waves-light
                        "
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 text-center gap-3">
                      <div className="social mb-3 ">
                        <Link
                          to="javascript:void(0)"
                          className="btn btn-facebook"
                          data-bs-toggle="tooltip"
                          title="Login with Facebook"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          to="javascript:void(0)"
                          className="btn btn-googleplus"
                          data-bs-toggle="tooltip"
                          title="Login with Google"
                        >
                          <i aria-hidden="true" className="fab fa-google"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-0 mt-4">
                    <div className="col-sm-12 justify-content-center d-flex">
                      <p>
                        Don't have an account?
                        <Link
                          to="authentication-register1.html"
                          className="text-info font-weight-medium ms-1"
                          >Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="recoverform">
            <div className="logo">
              <h3 className="font-weight-medium mb-3">Recover Password</h3>
              <span className="text-muted"
                >Enter your Email and instructions will be sent to you!</span>
            </div>
            <div className="row mt-3 form-material">
             
              <form className="col-12" action="index.html">
          
                <div className="form-group row">
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="Username"
                    />
                  </div>
                </div>
               
                <div className="row mt-3">
                  <div className="col-12">
                    <button
                      className="btn d-block w-100 btn-primary text-uppercase"
                      type="submit"
                      name="action"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
