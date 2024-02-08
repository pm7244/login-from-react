import React from 'react'

function TextNav() {
  return (
   
    <div id="main-wrapper">
   
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header border-end">
           
            <a
              className="nav-toggler waves-effect waves-light d-block d-md-none"
              href="javascript:void(0)"
              ><i className="ti-menu ti-close"></i
            ></a>
            <a className="navbar-brand" href="index.html">
             
              <b className="logo-icon">
               
                <img
                  src="../../assets/images/logos/logo-icon.png"
                  alt="homepage"
                  className="dark-logo"
                />
               
                <img
                  src="../../assets/images/logos/logo-light-icon.png"
                  alt="homepage"
                  className="light-logo"
                />
              </b>
             
              <span className="logo-text">
               
                <img
                  src="../../assets/images/logos/logo-text.png"
                  alt="homepage"
                  className="dark-logo"
                />
              
                <img
                  src="../../assets/images/logos/logo-light-text.png"
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </a>
          
            <a
              className="topbartoggler d-block d-md-none waves-effect waves-light"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              ><i className="ti-more"></i></a>
          </div>
        
          <div className="navbar-collapse collapse" id="navbarSupportedContent">
           
            <ul className="navbar-nav me-auto">
              <li className="nav-item d-none d-md-block">
                <a
                  className="nav-link sidebartoggler waves-effect waves-light"
                  href="javascript:void(0)"
                  data-sidebartype="mini-sidebar"
                  ><i className="mdi mdi-menu fs-5"></i
                ></a>
              </li>
             
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href=""
                  id="2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fs-5 mdi mdi-gmail"></i>
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                </a>
                <div
                  className="
                    dropdown-menu
                    mailbox
                    dropdown-menu-start dropdown-menu-animate-up
                  "
                  aria-labelledby="2"
                >
                  <ul className="list-style-none">
                    <li>
                      <div className="border-bottom rounded-top py-3 px-4">
                        <div className="mb-0 font-weight-medium fs-4">
                          You have 4 new messages
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className="message-center message-body position-relative"
                        style="height: 230px"
                      >
                       
                        <a
                          href="javascript:void(0)"
                          className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            className="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span
                              className="profile-status rounded-circle online"
                            ></span>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Pavan kumar
                            </h5>
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                mt-1
                              "
                              >Just see the my admin!</span
                            >
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:30 AM</span
                            >
                          </div>
                        </a>
                     
                        <a
                          href="javascript:void(0)"
                          className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            className="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span
                              className="profile-status rounded-circle busy"
                            ></span>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Sonu Nigam
                            </h5>
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >I've sung a song! See you at</span
                            >
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:10 AM</span
                            >
                          </div>
                        </a>
                       
                        <a
                          href="javascript:void(0)"
                          className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            className="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/3.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span
                              className="profile-status rounded-circle away"
                            ></span>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Arijit Sinh
                            </h5>
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >I am a singer!</span
                            >
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:08 AM</span
                            >
                          </div>
                        </a>
                        
                        <a
                          href="javascript:void(0)"
                          className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            className="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/4.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span
                              className="profile-status rounded-circle offline"
                            ></span>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Pavan kumar
                            </h5>
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >Just see the my admin!</span
                            >
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:02 AM</span>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <a
                        className="nav-link border-top text-center text-dark pt-3"
                        href="javascript:void(0);"
                      >
                        <b>See all e-Mails</b> <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
           
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href=""
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-check-circle fs-5"></i>
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                </a>
                <div
                  className="
                    dropdown-menu dropdown-menu-start
                    mailbox
                    dropdown-menu-animate-up
                  "
                >
                  <ul className="list-style-none">
                    <li>
                      <div className="border-bottom rounded-top py-3 px-4">
                        <div className="mb-0 font-weight-medium fs-4">
                          Notifications
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className="message-center notifications position-relative"
                        style="height: 230px"
                      >
                      
                        <a
                          href="javascript:void(0)"
                          className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            className="btn btn-light-danger text-danger btn-circle"
                          >
                            <i
                              data-feather="link"
                              className="feather-sm fill-white"
                            ></i>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Luanch Admin
                            </h5>
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >Just see the my new admin!</span
                            >
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:30 AM</span
                            >
                          </div>
                        </a>
                        
                        <a
                          href="javascript:void(0)"
                          className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            className="
                              btn btn-light-success
                              text-success
                              btn-circle
                            "
                          >
                            <i
                              data-feather="calendar"
                              className="feather-sm fill-white"
                            ></i>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Event today
                            </h5>
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >Just a reminder that you have event</span
                            >
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:10 AM</span
                            >
                          </div>
                        </a>
                       
                        <a
                          href="javascript:void(0)"
                          className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span className="btn btn-light-info text-info btn-circle">
                            <i
                              data-feather="settings"
                              className="feather-sm fill-white"
                            ></i>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Settings
                            </h5>
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >You can customize this template as you want</span
                            >
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:08 AM</span
                            >
                          </div>
                        </a>
                        
                        <a
                          href="javascript:void(0)"
                          className="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            className="
                              btn btn-light-primary
                              text-primary
                              btn-circle
                            "
                          >
                            <i
                              data-feather="users"
                              className="feather-sm fill-white"
                            ></i>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Pavan kumar
                            </h5>
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                                fw-normal
                                text-muted
                                mt-1
                              "
                              >Just see the my admin!</span
                            >
                            <span
                              className="
                                fs-2
                                text-nowrap
                                d-block
                                subtext
                                text-muted
                              "
                              >9:02 AM</span
                            >
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <a
                        className="nav-link border-top text-center text-dark pt-3"
                        href="javascript:void(0);"
                      >
                        <strong>Check all notifications</strong>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
           
              <li className="nav-item dropdown mega-dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="d-none d-md-block"
                    >Mega <i className="icon-options-vertical"></i >
                  </span>
                  <span className="d-block d-md-none"
                    ><i className="mdi mdi-dialpad font-24"></i >
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-animate-up">
                  <div className="mega-dropdown-menu row">
                    <div className="col-lg-3 col-xl-2 mb-4">
                      <h4 className="mb-3">CAROUSEL</h4>
                     
                      <div
                        id="carouselExampleControls"
                        className="carousel slide carousel-dark"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block img-fluid"
                              src="../../assets/images/big/img1.jpg"
                              alt="First slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block img-fluid"
                              src="../../assets/images/big/img2.jpg"
                              alt="Second slide"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block img-fluid"
                              src="../../assets/images/big/img3.jpg"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleControls"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleControls"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                     
                    </div>
                    <div className="col-lg-3 mb-4">
                      <h4 className="mb-3">ACCORDION</h4>
                     
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Accordion Item #1
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Accordion Item #2
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              Accordion Item #3
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 mb-4">
                      <h4 className="mb-3">CONTACT US</h4>
                    
                      <form>
                        <div className="mb-3 form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputname1"
                            placeholder="Enter Name"
                          />
                          <label>Enter Name</label>
                        </div>
                        <div className="mb-3 form-floating">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                          />
                          <label>Enter Email address</label>
                        </div>
                        <div className="mb-3 form-floating">
                          <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows="3"
                            placeholder="Message"
                          ></textarea>
                          <label>Enter Message</label>
                        </div>
                        <button
                          type="submit"
                          className="btn px-4 rounded-pill btn-info"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="col-lg-3 col-xlg-4 mb-4">
                      <h4 className="mb-3">List style</h4>
                     
                      <ul className="list-style-none">
                        <li>
                          <a href="#" className="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              className="feather-sm text-success me-2"
                            ></i>
                            You can give link</a >
                          
                        </li>
                        <li>
                          <a href="#" className="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              className="feather-sm text-success me-2"
                            ></i>
                            Give link</a >
                          
                        </li>
                        <li>
                          <a href="#" className="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              className="feather-sm text-success me-2"
                            ></i>
                            Another Give link</a >
                          
                        </li>
                        <li>
                          <a href="#" className="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              className="feather-sm text-success me-2"
                            ></i>
                            Forth link</a >
                          
                        </li>
                        <li>
                          <a href="#" className="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              className="feather-sm text-success me-2"
                            ></i>
                            Another fifth link</a >
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
           
            </ul>
       
            <ul className="navbar-nav">
              
              <li className="nav-item search-box">
                <form className="app-search d-none d-lg-block">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <a href="" className="active"><i className="fa fa-search"></i></a>
                </form>
              </li>
            
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="../../assets/images/users/1.jpg"
                    alt="user"
                    className="rounded-circle"
                    width="36"
                  />
                  <span className="ms-2 font-weight-medium">Steve</span >
                  <span className="fas fa-angle-down ms-2"></span>
                </a>
                <div
                  className="
                    dropdown-menu dropdown-menu-end
                    user-dd
                    animated
                    flipInY
                  "
                >
                  <div
                    className="
                      d-flex
                      no-block
                      align-items-center
                      p-3
                      bg-info
                      text-white
                      mb-2
                    "
                  >
                    <div className="">
                      <img
                        src="../../assets/images/users/1.jpg"
                        alt="user"
                        className="rounded-circle"
                        width="60"
                      />
                    </div>
                    <div className="ms-2">
                      <h4 className="mb-0 text-white">Steave Jobs</h4>
                      <p className="mb-0">varun@gmail.com</p>
                    </div>
                  </div>
                  <a className="dropdown-item" href="#"
                    ><i
                      data-feather="user"
                      className="feather-sm text-info me-1 ms-1"
                    ></i>
                    My Profile</a >
                  
                  <a className="dropdown-item" href="#"
                    ><i
                      data-feather="credit-card"
                      className="feather-sm text-info me-1 ms-1"
                    ></i>
                    My Balance</a >
                  
                  <a className="dropdown-item" href="#"
                    ><i
                      data-feather="mail"
                      className="feather-sm text-success me-1 ms-1"
                    ></i>
                    Inbox</a >
                  
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"
                    ><i
                      data-feather="settings"
                      className="feather-sm text-warning me-1 ms-1"
                    ></i>
                    Account Setting</a >
                  
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"
                    ><i
                      data-feather="log-out"
                      className="feather-sm text-danger me-1 ms-1"
                    ></i>
                    Logout</ >
                  
                  <div className="dropdown-divider"></div>
                  <div className="ps-4 p-2">
                    <a href="#" className="btn d-block w-100 btn-info rounded-pill"
                      >View Profile</a >
                    
                  </div>
                </div>
              </li>
          
            </ul>
          </div>
        </nav>
      </header>
   
      <aside className="left-sidebar">
       
        <div className="scroll-sidebar">
         
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="sidebar-item">
                <a
                  className="
                    sidebar-link
                    has-arrow
                    waves-effect waves-dark
                    profile-dd
                  "
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="../../assets/images/users/1.jpg"
                    className="rounded-circle ms-2"
                    width="30"
                  />
                  <span className="hide-menu">Steve Jection </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="ti-user"></i>
                      <span className="hide-menu"> My Profile </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="ti-wallet"></i>
                      <span className="hide-menu"> My Balance </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="ti-email"></i>
                      <span className="hide-menu"> Inbox </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="ti-settings"></i>
                      <span className="hide-menu"> Account Setting </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="fas fa-power-off"></i>
                      <span className="hide-menu"> Logout </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-av-timer"></i>
                  <span className="hide-menu">Dashboard</span>
                  <span
                    className="
                      badge
                      bg-inverse
                      rounded-pill
                      ms-auto
                      me-3
                      font-weight-medium
                      px-2
                      py-1
                    "
                    >6</span >
                  
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="index.html" className="sidebar-link">
                      <i className="mdi mdi-adjust"></i>
                      <span className="hide-menu"> Dashboard 1 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="index2.html" className="sidebar-link">
                      <i className="mdi mdi-adjust"></i>
                      <span className="hide-menu"> Dashboard 2 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="index3.html" className="sidebar-link">
                      <i className="mdi mdi-adjust"></i>
                      <span className="hide-menu"> Dashboard 3 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="index4.html" className="sidebar-link">
                      <i className="mdi mdi-adjust"></i>
                      <span className="hide-menu"> Dashboard 4 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="index5.html" className="sidebar-link">
                      <i className="mdi mdi-adjust"></i>
                      <span className="hide-menu"> Dashboard 5 </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="index6.html" className="sidebar-link">
                      <i className="mdi mdi-adjust"></i>
                      <span className="hide-menu"> Dashboard 6 </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-cart-outline"></i>
                  <span className="hide-menu">Ecommerce</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="eco-products.html" className="sidebar-link">
                      <i className="mdi mdi-cards-variant"></i>
                      <span className="hide-menu">Products</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="eco-products-cart.html" className="sidebar-link">
                      <i className="mdi mdi-cart"></i>
                      <span className="hide-menu">Products Cart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="eco-products-edit.html" className="sidebar-link">
                      <i className="mdi mdi-cart-plus"></i>
                      <span className="hide-menu">Products Edit</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="eco-products-detail.html" className="sidebar-link">
                      <i className="mdi mdi-camera-burst"></i>
                      <span className="hide-menu">Product Details</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="eco-products-orders.html" className="sidebar-link">
                      <i className="mdi mdi-chart-pie"></i>
                      <span className="hide-menu">Product Orders</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="eco-products-checkout.html" className="sidebar-link">
                      <i className="mdi mdi-clipboard-check"></i>
                      <span className="hide-menu">Products Checkout</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-format-color-fill"></i>
                  <span className="hide-menu">Ui Elements </span>
                  <span
                    className="
                      badge
                      bg-info
                      rounded-pill
                      ms-auto
                      me-3
                      font-weight-medium
                      px-2
                      py-1
                    "
                    >12</span
                  >
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="ui-accordian.html" className="sidebar-link">
                      <i className="mdi mdi-box-shadow"></i>
                      <span className="hide-menu"> Accordian</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-badge.html" className="sidebar-link">
                      <i className="mdi mdi-application"></i>
                      <span className="hide-menu"> Badge</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-buttons.html" className="sidebar-link">
                      <i className="mdi mdi-toggle-switch"></i>
                      <span className="hide-menu"> Buttons</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-modals.html" className="sidebar-link">
                      <i className="mdi mdi-tablet"></i>
                      <span className="hide-menu"> Modals</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-tab.html" className="sidebar-link">
                      <i className="mdi mdi-sort-variant"></i>
                      <span className="hide-menu"> Tab</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-tooltip-popover.html" className="sidebar-link">
                      <i className="mdi mdi-image-filter-vintage"></i>
                      <span className="hide-menu"> Tooltip &amp; Popover</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-notification.html" className="sidebar-link">
                      <i className="mdi mdi-message-bulleted"></i>
                      <span className="hide-menu"> Notification</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-progressbar.html" className="sidebar-link">
                      <i className="mdi mdi-poll"></i>
                      <span className="hide-menu"> Progressbar</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-typography.html" className="sidebar-link">
                      <i className="mdi mdi-format-line-spacing"></i>
                      <span className="hide-menu"> Typography</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-bootstrap.html" className="sidebar-link">
                      <i className="mdi mdi-bootstrap"></i>
                      <span className="hide-menu"> Bootstrap Ui</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-breadcrumb.html" className="sidebar-link">
                      <i className="mdi mdi-equal"></i>
                      <span className="hide-menu"> Breadcrumb</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-lists.html" className="sidebar-link">
                      <i className="mdi mdi-file-video"></i>
                      <span className="hide-menu"> Lists</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-grid.html" className="sidebar-link">
                      <i className="mdi mdi-view-module"></i>
                      <span className="hide-menu"> Grid</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-carousel.html" className="sidebar-link">
                      <i className="mdi mdi-view-carousel"></i>
                      <span className="hide-menu"> Carousel</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-scrollspy.html" className="sidebar-link">
                      <i className="mdi mdi-crop-free"></i>
                      <span className="hide-menu"> Scrollspy</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-offcanvas.html" className="sidebar-link">
                      <i className="mdi mdi-content-copy"></i>
                      <span className="hide-menu"> Offcanvas</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-spinner.html" className="sidebar-link">
                      <i className="mdi mdi-application"></i>
                      <span className="hide-menu"> Spinner</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-toasts.html" className="sidebar-link">
                      <i className="mdi mdi-apple-safari"></i>
                      <span className="hide-menu"> Toasts</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-content-copy"></i>
                  <span className="hide-menu">Sample Pages</span>
                  <span
                    className="
                      badge
                      bg-warning
                      text-white
                      rounded-pill
                      ms-auto
                      me-3
                      font-weight-medium
                      px-2
                      py-1
                    "
                    >25</span
                  >
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="starter-kit.html" className="sidebar-link">
                      <i className="mdi mdi-crop-free"></i>
                      <span className="hide-menu">Starter Kit</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-email-open-outline"></i>
                      <span className="hide-menu">Email Templates</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a
                          href="email-templete-alert.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-message-alert"></i>
                          <span className="hide-menu"> Alert </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="email-templete-basic.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-message-bulleted"></i>
                          <span className="hide-menu"> Basic</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="email-templete-billing.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-message-draw"></i>
                          <span className="hide-menu"> Billing</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="email-templete-password-reset.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-message-bulleted-off"></i>
                          <span className="hide-menu"> Password-Reset</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-account-circle"></i>
                      <span className="hide-menu">Authentication</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a
                          href="authentication-login1.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-account-key"></i>
                          <span className="hide-menu"> Login </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="authentication-login2.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-account-key"></i>
                          <span className="hide-menu"> Login 2 </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="authentication-login3.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-account-key"></i>
                          <span className="hide-menu"> Login 3 </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="authentication-register1.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-account-plus"></i>
                          <span className="hide-menu"> Register</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="authentication-register2.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-account-plus"></i>
                          <span className="hide-menu"> Register 2</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="authentication-lockscreen.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-account-off"></i>
                          <span className="hide-menu"> Lockscreen</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="authentication-recover-password.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-account-convert"></i>
                          <span className="hide-menu"> Recover password</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-alert-box"></i>
                      <span className="hide-menu">Error Pages</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a href="error-400.html" className="sidebar-link">
                          <i className="mdi mdi-alert-outline"></i>
                          <span className="hide-menu"> Error 400 </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="error-403.html" className="sidebar-link">
                          <i className="mdi mdi-alert-outline"></i>
                          <span className="hide-menu"> Error 403</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="error-404.html" className="sidebar-link">
                          <i className="mdi mdi-alert-outline"></i>
                          <span className="hide-menu"> Error 404</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="error-500.html" className="sidebar-link">
                          <i className="mdi mdi-alert-outline"></i>
                          <span className="hide-menu"> Error 500</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="error-503.html" className="sidebar-link">
                          <i className="mdi mdi-alert-outline"></i>
                          <span className="hide-menu"> Error 503</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-animation.html" className="sidebar-link">
                      <i className="mdi mdi-debug-step-over"></i>
                      <span className="hide-menu">Animation</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-search-result.html" className="sidebar-link">
                      <i className="mdi mdi-search-web"></i>
                      <span className="hide-menu">Search Result</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-gallery.html" className="sidebar-link">
                      <i className="mdi mdi-camera-iris"></i>
                      <span className="hide-menu">Gallery</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-treeview.html" className="sidebar-link">
                      <i className="mdi mdi-file-tree"></i>
                      <span className="hide-menu">Treeview</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-block-ui.html" className="sidebar-link">
                      <i className="mdi mdi-codepen"></i>
                      <span className="hide-menu">Block UI</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-session-timeout.html" className="sidebar-link">
                      <i className="mdi mdi-timer-off"></i>
                      <span className="hide-menu">Session Timeout</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="pages-session-idle-timeout.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-timer-sand-empty"></i>
                      <span className="hide-menu">Session Idle Timeout</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-utility-classes.html" className="sidebar-link">
                      <i className="mdi mdi-tune"></i>
                      <span className="hide-menu">Helper Classes</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-maintenance.html" className="sidebar-link">
                      <i className="mdi mdi-camera-iris"></i>
                      <span className="hide-menu">Maintenance Page</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-apps"></i>
                  <span className="hide-menu">Apps</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="app-chats.html" className="sidebar-link">
                      <i className="mdi mdi-comment-processing-outline"></i>
                      <span className="hide-menu">Chat Message</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="app-contacts.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-account-box"></i>
                      <span className="hide-menu">Contact Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="app-notes.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-arrange-bring-forward"></i>
                      <span className="hide-menu">Notes</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="app-todo.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-clipboard-text"></i>
                      <span className="hide-menu">Todo</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="app-invoice.html"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-book"></i>
                      <span className="hide-menu">Invoice</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-inbox-arrow-down"></i>
                      <span className="hide-menu">Inbox</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a href="inbox-email.html" className="sidebar-link">
                          <i className="mdi mdi-email"></i>
                          <span className="hide-menu"> Email </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="inbox-email-detail.html" className="sidebar-link">
                          <i className="mdi mdi-email-alert"></i>
                          <span className="hide-menu"> Email Detail </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="inbox-email-compose.html" className="sidebar-link">
                          <i className="mdi mdi-email-secure"></i>
                          <span className="hide-menu"> Email Compose </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="ti-user"></i>
                      <span className="hide-menu">Contacts</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a href="contact-list.html" className="sidebar-link">
                          <i className="icon-people"></i>
                          <span className="hide-menu"> Contact List </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="contact-grid.html" className="sidebar-link">
                          <i className="icon-user-follow"></i>
                          <span className="hide-menu"> Contacts Grid </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-bookmark-plus-outline"></i>
                      <span className="hide-menu">Tickets</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a href="ticket-list.html" className="sidebar-link">
                          <i className="mdi mdi-book-multiple"></i>
                          <span className="hide-menu"> Ticket List </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ticket-detail.html" className="sidebar-link">
                          <i className="mdi mdi-book-plus"></i>
                          <span className="hide-menu"> Ticket Detail </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="app-taskboard.html" className="sidebar-link">
                      <i className="mdi mdi-bulletin-board"></i>
                      <span className="hide-menu"> Taskboard </span>
                    </a>
                  </li>
                </ul>
              </li>
              <div className="devider"></div>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-tune-vertical"></i>
                  <span className="hide-menu">Sidebar Type </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      href="sidebar-type-minisidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-view-quilt"></i>
                      <span className="hide-menu"> Minisidebar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="sidebar-type-iconsidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-view-parallel"></i>
                      <span className="hide-menu"> Icon Sidebar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="sidebar-type-overlaysidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-view-day"></i>
                      <span className="hide-menu"> Overlay Sidebar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="sidebar-type-fullsidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-view-array"></i>
                      <span className="hide-menu"> Full Sidebar </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-content-copy"></i>
                  <span className="hide-menu">Page Layouts </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      href="layout-inner-fixed-left-sidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-format-align-left"></i>
                      <span className="hide-menu"> Inner Fixed Left Sidebar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="layout-inner-fixed-right-sidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-format-align-right"></i>
                      <span className="hide-menu"> Inner Fixed Right Sidebar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="layout-inner-left-sidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-format-float-left"></i>
                      <span className="hide-menu"> Inner Left Sidebar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="layout-inner-right-sidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-format-float-right"></i>
                      <span className="hide-menu"> Inner Right Sidebar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="page-layout-fixed-header.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-view-quilt"></i>
                      <span className="hide-menu"> Fixed Header </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="page-layout-fixed-sidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-view-parallel"></i>
                      <span className="hide-menu"> Fixed Sidebar </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="page-layout-fixed-header-sidebar.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-view-column"></i>
                      <span className="hide-menu">
                        Fixed Header &amp; Sidebar
                      </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="page-layout-boxed-layout.html"
                      className="sidebar-link"
                    >
                      <i className="mdi mdi-view-carousel"></i>
                      <span className="hide-menu"> Box Layout </span>
                    </a>
                  </li>
                </ul>
              </li>
              <div className="devider"></div>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-clipboard-text"></i>
                  <span className="hide-menu">Forms</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-collage"></i>
                      <span className="hide-menu">Form Elements</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="form-inputs.html" className="sidebar-link">
                          <i className="mdi mdi-priority-low"></i>
                          <span className="hide-menu"> Forms Input</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-input-groups.html" className="sidebar-link">
                          <i className="mdi mdi-rounded-corner"></i>
                          <span className="hide-menu"> Input Groups</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-input-grid.html" className="sidebar-link">
                          <i className="mdi mdi-select-all"></i>
                          <span className="hide-menu"> Input Grid</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-checkbox-radio.html" className="sidebar-link">
                          <i className="mdi mdi-shape-plus"></i>
                          <span className="hide-menu">
                            Checkboxes &amp; Radios</span
                          >
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="form-bootstrap-touchspin.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-switch"></i>
                          <span className="hide-menu"> Bootstrap Touchspin</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="form-bootstrap-switch.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-toggle-switch-off"></i>
                          <span className="hide-menu"> Bootstrap Switch</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-select2.html" className="sidebar-link">
                          <i className="mdi mdi-relative-scale"></i>
                          <span className="hide-menu"> Select2</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-dual-listbox.html" className="sidebar-link">
                          <i className="mdi mdi-tab-unselected"></i>
                          <span className="hide-menu"> Dual Listbox</span>
                        </a>
                      </li>
                      
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-receipt"></i>
                      <span className="hide-menu">Form Layouts</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="form-basic.html" className="sidebar-link">
                          <i className="mdi mdi-vector-difference-ba"></i>
                          <span className="hide-menu"> Basic Forms</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-horizontal.html" className="sidebar-link">
                          <i className="mdi mdi-file-document-box"></i>
                          <span className="hide-menu"> Form Horizontal</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-actions.html" className="sidebar-link">
                          <i className="mdi mdi-code-greater-than"></i>
                          <span className="hide-menu"> Form Actions</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-row-separator.html" className="sidebar-link">
                          <i className="mdi mdi-code-equal"></i>
                          <span className="hide-menu"> Row Separator</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-bordered.html" className="sidebar-link">
                          <i className="mdi mdi-flip-to-front"></i>
                          <span className="hide-menu"> Form Bordered</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-striped-row.html" className="sidebar-link">
                          <i className="mdi mdi-content-duplicate"></i>
                          <span className="hide-menu"> Striped Rows</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-detail.html" className="sidebar-link">
                          <i className="mdi mdi-cards-outline"></i>
                          <span className="hide-menu"> Form Detail</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-material.html" className="sidebar-link">
                          <i className="mdi mdi-content-duplicate"></i>
                          <span className="hide-menu"> Form Material</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-floating-input.html" className="sidebar-link">
                          <i className="mdi mdi-logout"></i>
                          <span className="hide-menu"> Form Float Input</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-code-equal"></i>
                      <span className="hide-menu">Form Addons</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="form-paginator.html" className="sidebar-link">
                          <i className="mdi mdi-export"></i>
                          <span className="hide-menu"> Paginator</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-img-cropper.html" className="sidebar-link">
                          <i className="mdi mdi-crop"></i>
                          <span className="hide-menu"> Image Cropper</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-dropzone.html" className="sidebar-link">
                          <i className="mdi mdi-crosshairs-gps"></i>
                          <span className="hide-menu"> Dropzone</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-mask.html" className="sidebar-link">
                          <i className="mdi mdi-box-shadow"></i>
                          <span className="hide-menu"> Form Mask</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-typeahead.html" className="sidebar-link">
                          <i className="mdi mdi-cards-variant"></i>
                          <span className="hide-menu"> Form Typehead</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="ui-custom-switch.html" className="sidebar-link">
                          <i className="mdi mdi-toggle-switch-off"></i>
                          <span className="hide-menu"> Custom Switch</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-alert-box"></i>
                      <span className="hide-menu">Form Validation</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a
                          href="form-bootstrap-validation.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-credit-card-scan"></i>
                          <span className="hide-menu"> Bootstrap Validation</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="form-custom-validation.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-credit-card-plus"></i>
                          <span className="hide-menu"> Custom Validation</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-pencil-box-outline"></i>
                      <span className="hide-menu">Form Pickers</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a
                          href="form-picker-colorpicker.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-calendar-plus"></i>
                          <span className="hide-menu"> Form Colorpicker</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="form-picker-datetimepicker.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-calendar-clock"></i>
                          <span className="hide-menu"> Form Datetimepicker</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="form-picker-bootstrap-rangepicker.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-calendar-range"></i>
                          <span className="hide-menu">
                            Form Bootstrap Rangepicker</span >
                          
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="form-picker-bootstrap-datepicker.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-calendar-check"></i>
                          <span className="hide-menu">
                            Form Bootstrap Datepicker</span >
                          
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="form-picker-material-datepicker.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-calendar-text"></i>
                          <span className="hide-menu">
                            Form Material Datepicker</span >
                          
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dns"></i>
                      <span className="hide-menu">Form Editor</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a
                          href="form-editor-ckeditor.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-drawing"></i>
                          <span className="hide-menu">Ck Editor</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-editor-quill.html" className="sidebar-link">
                          <i className="mdi mdi-drupal"></i>
                          <span className="hide-menu">Quill Editor</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="form-editor-summernote.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-brightness-6"></i>
                          <span className="hide-menu">Summernote Editor</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="form-editor-tinymce.html" className="sidebar-link">
                          <i className="mdi mdi-bowling"></i>
                          <span className="hide-menu">Tinymce Edtor</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-wizard.html" className="sidebar-link">
                      <i className="mdi mdi-cube-send"></i>
                      <span className="hide-menu">Form Wizard</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-repeater.html" className="sidebar-link">
                      <i className="mdi mdi-creation"></i>
                      <span className="hide-menu">Form Repeater</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-table"></i>
                  <span className="hide-menu">Tables</span>
                  <span
                    className="
                      badge
                      bg-danger
                      text-white
                      rounded-pill
                      ms-auto
                      me-3
                      font-weight-medium
                      px-2
                      py-1
                    "
                    >11</span >
                  
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-border-none"></i>
                      <span className="hide-menu">Bootstrap Tables</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="table-basic.html" className="sidebar-link">
                          <i className="mdi mdi-border-all"></i>
                          <span className="hide-menu">Basic Table </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="table-dark-basic.html" className="sidebar-link">
                          <i className="mdi mdi-border-start"></i>
                          <span className="hide-menu">Dark Basic Table </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="table-sizing.html" className="sidebar-link">
                          <i className="mdi mdi-border-outside"></i>
                          <span className="hide-menu">Sizing Table </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="table-layout-coloured.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-border-bottom"></i>
                          <span className="hide-menu">Coloured Table Layout</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-border-inside"></i>
                      <span className="hide-menu">Datatables</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a
                          href="table-datatable-basic.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-border-vertical"></i>
                          <span className="hide-menu"> Basic Initialisation</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="table-datatable-api.html" className="sidebar-link">
                          <i className="mdi mdi-blur-linear"></i>
                          <span className="hide-menu"> API</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="table-datatable-advanced.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-border-style"></i>
                          <span className="hide-menu">
                            Advanced Initialisation</span >
                          
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="table-bootstrap.html" className="sidebar-link">
                      <i className="mdi mdi-border-horizontal"></i>
                      <span className="hide-menu">Table Bootstrap</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="table-jsgrid.html" className="sidebar-link">
                      <i className="mdi mdi-border-top"></i>
                      <span className="hide-menu">Table Jsgrid</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="table-responsive.html" className="sidebar-link">
                      <i className="mdi mdi-border-style"></i>
                      <span className="hide-menu">Table Responsive</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="table-footable.html" className="sidebar-link">
                      <i className="mdi mdi-tab-unselected"></i>
                      <span className="hide-menu">Table Footable</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-chart-bar"></i>
                  <span className="hide-menu">Charts</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="chart-morris.html" className="sidebar-link">
                      <i className="mdi mdi-image-filter-tilt-shift"></i>
                      <span className="hide-menu">Morris Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="chart-chart-js.html" className="sidebar-link">
                      <i className="mdi mdi-svg"></i>
                      <span className="hide-menu">Chartjs</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="chart-sparkline.html" className="sidebar-link">
                      <i className="mdi mdi-chart-histogram"></i>
                      <span className="hide-menu">Sparkline Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="chart-chartist.html" className="sidebar-link">
                      <i className="mdi mdi-blur"></i>
                      <span className="hide-menu">Chartist Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                      ><i className="mdi mdi-blur-radial"></i >
                      <span className="hide-menu">Apex Charts</span></a
                    >
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="chart-apex-line.html" className="sidebar-link"
                          ><i className="mdi mdi-chart-line"></i>
                          <span className="hide-menu">Line Chart</span></a
                        >
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-apex-area.html" className="sidebar-link"
                          ><i className="mdi mdi-chart-areaspline"></i>
                          <span className="hide-menu">Area Chart</span></a
                        >
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-apex-bar.html" className="sidebar-link"
                          ><i className="mdi mdi-chart-gantt"></i>
                          <span className="hide-menu">Bar Chart</span></a
                        >
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-apex-pie.html" className="sidebar-link"
                          ><i className="mdi mdi-chart-pie"></i>
                          <span className="hide-menu">Pie Chart</span></a
                        >
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-apex-radial.html" className="sidebar-link"
                          ><i className="mdi mdi-chart-arc"></i>
                          <span className="hide-menu">Radial Chart</span></a
                        >
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-apex-radar.html" className="sidebar-link"
                          ><i className="mdi mdi-hexagon-outline"></i>
                          <span className="hide-menu">Radar Chart</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-chemical-weapon"></i>
                      <span className="hide-menu">C3 Charts</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="chart-c3-axis.html" className="sidebar-link">
                          <i className="mdi mdi-arrange-bring-to-front"></i>
                          <span className="hide-menu">Axis Chart</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-c3-bar.html" className="sidebar-link">
                          <i className="mdi mdi-arrange-send-to-back"></i>
                          <span className="hide-menu">Bar Chart</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-c3-data.html" className="sidebar-link">
                          <i className="mdi mdi-backup-restore"></i>
                          <span className="hide-menu">Data Chart</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-c3-line.html" className="sidebar-link">
                          <i className="mdi mdi-backburger"></i>
                          <span className="hide-menu">Line Chart</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-chart-areaspline"></i>
                      <span className="hide-menu">Echarts</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a href="chart-echart-basic.html" className="sidebar-link">
                          <i className="mdi mdi-chart-line"></i>
                          <span className="hide-menu">Basic Charts</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="chart-echart-bar.html" className="sidebar-link">
                          <i className="mdi mdi-chart-scatterplot-hexbin"></i>
                          <span className="hide-menu">Bar Chart</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          href="chart-echart-pie-doughnut.html"
                          className="sidebar-link"
                        >
                          <i className="mdi mdi-chart-pie"></i>
                          <span className="hide-menu"
                            >Pie &amp; Doughnut Chart</span
                          >
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <div className="devider"></div>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-credit-card-multiple"></i>
                  <span className="hide-menu">Cards</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="ui-cards.html" className="sidebar-link">
                      <i className="mdi mdi-layers"></i>
                      <span className="hide-menu"> Basic Cards</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-card-customs.html" className="sidebar-link">
                      <i className="mdi mdi-credit-card-scan"></i>
                      <span className="hide-menu">Custom Cards</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-card-weather.html" className="sidebar-link">
                      <i className="mdi mdi-weather-fog"></i>
                      <span className="hide-menu">Weather Cards</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-card-draggable.html" className="sidebar-link">
                      <i className="mdi mdi-bandcamp"></i>
                      <span className="hide-menu">Draggable Cards</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-credit-card-multiple"></i>
                  <span className="hide-menu">Components</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="component-sweetalert.html" className="sidebar-link">
                      <i className="mdi mdi-layers"></i>
                      <span className="hide-menu"> Sweet Alert</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="component-nestable.html" className="sidebar-link">
                      <i className="mdi mdi-credit-card-scan"></i>
                      <span className="hide-menu">Nestable</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="component-noui-slider.html" className="sidebar-link">
                      <i className="mdi mdi-weather-fog"></i>
                      <span className="hide-menu">Noui slider</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="component-rating.html" className="sidebar-link">
                      <i className="mdi mdi-bandcamp"></i>
                      <span className="hide-menu">Rating</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="component-toastr.html" className="sidebar-link">
                      <i className="mdi mdi-poll"></i>
                      <span className="hide-menu">Toastr</span>
                    </a>
                  </li>
                </ul>
              </li>
              <div className="devider"></div>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-settings"></i>
                  <span className="hide-menu">Widgets </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="widgets-feeds.html" className="sidebar-link">
                      <i className="mdi mdi-account-box"></i>
                      <span className="hide-menu"> Feed Widgets </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="widgets-apps.html" className="sidebar-link">
                      <i className="mdi mdi-comment-processing-outline"></i>
                      <span className="hide-menu"> Apps Widgets </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="widgets-data.html" className="sidebar-link">
                      <i className="mdi mdi-calendar"></i>
                      <span className="hide-menu"> Data Widgets </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="widgets-charts.html" className="sidebar-link">
                      <i className="mdi mdi-bulletin-board"></i>
                      <span className="hide-menu"> Charts Widgets</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-face"></i>
                  <span className="hide-menu">Icons</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="icon-material.html" className="sidebar-link">
                      <i className="mdi mdi-feather"></i>
                      <span className="hide-menu"> Feather Icons </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="icon-material.html" className="sidebar-link">
                      <i className="mdi mdi-emoticon"></i>
                      <span className="hide-menu"> Material Icons </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="icon-fontawesome.html" className="sidebar-link">
                      <i className="mdi mdi-emoticon-cool"></i>
                      <span className="hide-menu"> Fontawesome Icons</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="icon-themify.html" className="sidebar-link">
                      <i className="mdi mdi-chart-bubble"></i>
                      <span className="hide-menu"> Themify Icons</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="icon-weather.html" className="sidebar-link">
                      <i className="mdi mdi-weather-cloudy"></i>
                      <span className="hide-menu"> Weather Icons</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="icon-simple-lineicon.html" className="sidebar-link">
                      <i className="mdi mdi mdi-image-broken-variant"></i>
                      <span className="hide-menu"> Simple Line icons</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="icon-flag.html" className="sidebar-link">
                      <i className="mdi mdi-flag-triangle"></i>
                      <span className="hide-menu"> Flag Icons</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="map-google.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-google-maps"></i>
                  <span className="hide-menu">Google Map</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="map-vector.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-map-marker-radius"></i>
                  <span className="hide-menu">Vector Map</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-account-multiple"></i>
                  <span className="hide-menu">Users</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="ui-user-card.html" className="sidebar-link">
                      <i className="mdi mdi-account-box"></i>
                      <span className="hide-menu"> User Card </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-profile.html" className="sidebar-link">
                      <i className="mdi mdi-account-network"></i>
                      <span className="hide-menu"> User Profile</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-user-contacts.html" className="sidebar-link">
                      <i className="mdi mdi-account-star-variant"></i>
                      <span className="hide-menu"> User Contact</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-ungroup"></i>
                  <span className="hide-menu">Invoice</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="pages-invoice.html" className="sidebar-link">
                      <i className="mdi mdi-vector-triangle"></i>
                      <span className="hide-menu"> Invoice Layout </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="pages-invoice-list.html" className="sidebar-link">
                      <i className="mdi mdi-vector-rectangle"></i>
                      <span className="hide-menu"> Invoice List</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-apple-safari"></i>
                  <span className="hide-menu">Timeline</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="timeline-center.html" className="sidebar-link">
                      <i className="mdi mdi-clock-fast"></i>
                      <span className="hide-menu"> Center Timeline </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="timeline-horizontal.html" className="sidebar-link">
                      <i className="mdi mdi-clock-end"></i>
                      <span className="hide-menu"> Horizontal Timeline</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="timeline-left.html" className="sidebar-link">
                      <i className="mdi mdi-clock-in"></i>
                      <span className="hide-menu"> Left Timeline</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="timeline-right.html" className="sidebar-link">
                      <i className="mdi mdi-clock-start"></i>
                      <span className="hide-menu"> Right Timeline</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-calendar.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-calendar-check"></i>
                  <span className="hide-menu">Calendar</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-notification-clear-all"></i>
                  <span className="hide-menu">Multi level dd</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="mdi mdi-octagram"></i>
                      <span className="hide-menu"> item 1.1</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="mdi mdi-octagram"></i>
                      <span className="hide-menu"> item 1.2</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-playlist-plus"></i>
                      <span className="hide-menu">Menu 1.3</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="mdi mdi-octagram"></i>
                          <span className="hide-menu"> item 1.3.1</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="mdi mdi-octagram"></i>
                          <span className="hide-menu"> item 1.3.2</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="mdi mdi-octagram"></i>
                          <span className="hide-menu"> item 1.3.3</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="mdi mdi-octagram"></i>
                          <span className="hide-menu"> item 1.3.4</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="mdi mdi-playlist-check"></i>
                      <span className="hide-menu"> item 1.4</span>
                    </a>
                  </li>
                </ul>
              </li>
              <div className="devider"></div>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="../../../docs/documentation.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-adjust text-danger"></i>
                  <span className="hide-menu">Documentation</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="authentication-login3.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-adjust text-info"></i>
                  <span className="hide-menu">Log Out</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="pages-faq.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-adjust text-success"></i>
                  <span className="hide-menu">FAQs</span>
                </a>
              </li>
            </ul>
          </nav>
         
        </div>
      
      </aside>
      
      
      <div className="page-wrapper">
       
        <div className="page-breadcrumb border-bottom">
          <div className="row">
            <div
              className="
                col-lg-3 col-md-4 col-xs-12
                justify-content-start
                d-flex
                align-items-center
              "
            >
              <h5 className="font-weight-medium text-uppercase mb-0">Dashboard</h5>
            </div>
            <div
              className="
                col-lg-9 col-md-8 col-xs-12
                d-flex
                justify-content-start justify-content-md-end
                align-self-center
              "
            >
              <nav aria-label="breadcrumb" className="mt-2">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              <button className="btn btn-danger text-white ms-3 d-none d-md-block">
                Buy Ample Admin
              </button>
            </div>
          </div>
        </div>
        
        <div className="page-content container-fluid">
          
          <div className="card-group">
            <div className="card p-2 p-lg-3">
              <div className="p-lg-3 p-2">
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-circle btn-danger text-white btn-lg"
                    href="javascript:void(0)"
                  >
                    <i className="ti-clipboard"></i>
                  </button>
                  <div className="ms-4" style="width: 38%">
                    <h4 className="fw-normal">Total Projects</h4>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="40"
                      ></div>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <h2 className="display-7 mb-0">23</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-2 p-lg-3">
              <div className="p-lg-3 p-2">
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-circle btn-cyan text-white btn-lg"
                    href="javascript:void(0)"
                  >
                    <i className="ti-wallet"></i>
                  </button>
                  <div className="ms-4" style="width: 38%">
                    <h4 className="fw-normal">Total Earnings</h4>
                    <div className="progress">
                      <div
                        className="progress-bar bg-cyan"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="40"
                      ></div>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <h2 className="display-7 mb-0">76</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-2 p-lg-3">
              <div className="p-lg-3 p-2">
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-circle btn-warning text-white btn-lg"
                    href="javascript:void(0)"
                  >
                    <i className="fas fa-dollar-sign"></i>
                  </button>
                  <div className="ms-4" style="width: 38%">
                    <h4 className="fw-normal">Total Earnings</h4>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="40"
                      ></div>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <h2 className="display-7 mb-0">83</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="d-flex align-items-stretch col-lg-8">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <h5 className="card-title">Products Yearly Sales</h5>
                    <ul className="list-inline dl mb-0 ms-auto">
                      <li className="list-inline-item text-danger">
                        <i className="fa fa-circle"></i> Mac
                      </li>
                      <li className="list-inline-item text-info">
                        <i className="fa fa-circle"></i> Windows
                      </li>
                    </ul>
                  </div>

                  <div id="products-yearly-sales"></div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-stretch col-lg-4">
              <div className="card w-100">
                <div className="bg-danger d-flex justify-content-center">
                  <div
                    id="week-sales"
                    className="mx-auto"
                    style="height: 304px"
                  ></div>
                </div>
                <div className="p-4">
                  <div className="d-flex align-items-center">
                    <div>
                      <h4 className="font-weight-medium card-title">Week Sales</h4>
                      <h5 className="card-subtitle mb-0">Ios app - 160 sales</h5>
                    </div>
                    <div className="ms-auto">
                      <button
                        className="btn btn-circle btn-info text-white btn-lg"
                        href="javascript:void(0)"
                      >
                        <i className="ti-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="row">
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="card w-100">
                
                <ul className="nav nav-tabs manage-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#users"
                      role="tab"
                    >
                      <span className="hidden-sm-up">
                        <h4><i data-feather="users" className="feather-sm"></i></h4>
                      </span>
                      <span className="d-none d-md-block">Select Users</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#permissions"
                      role="tab"
                    >
                      <span className="hidden-sm-up">
                        <h4><i data-feather="lock" className="feather-sm"></i></h4>
                      </span>
                      <span className="d-none d-md-block">Set Permissions</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#messages"
                      role="tab"
                    >
                      <span className="hidden-sm-up">
                        <h4>
                          <i data-feather="file-text" className="feather-sm"></i>
                        </h4>
                      </span>
                      <span className="d-none d-md-block">Message Users</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#save"
                      role="tab"
                    >
                      <span className="hidden-sm-up">
                        <h4>
                          <i data-feather="check-circle" className="feather-sm"></i>
                        </h4>
                      </span>
                      <span className="d-none d-md-block">Save and Finish</span>
                    </a>
                  </li>
                </ul>
               
                <div className="tab-content">
                  <div className="tab-pane active" id="users" role="tabpanel">
                    <div className="row py-4 px-5 no-gutters mt-3">
                      <div
                        className="col-sm-12 col-md-6 d-flex justify-content-start"
                      >
                        <h3 className="card-title mb-0">Select Users to Manage</h3>
                      </div>
                      <div
                        className="col-sm-12 col-md-6 justify-content-end d-flex"
                      >
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" className="btn btn-secondary">
                            <i data-feather="user-plus" className="feather-sm"></i>
                            <span className="ms-2 fw-normal fs-4">Add User</span>
                          </button>
                          <button type="button" className="btn btn-secondary">
                            <i data-feather="edit-2" className="feather-sm"></i>
                            <span className="ms-2 fw-normal">Edit User</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light">
                      <div
                        className="
                          table-responsive
                          border-top
                          manage-table
                          px-4
                          py-3
                        "
                      >
                        <table className="table no-wrap">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0"></th>
                              <th scope="col" className="border-0"></th>
                              <th scope="col" className="border-0">Name</th>
                              <th scope="col" className="border-0">Position</th>
                              <th scope="col" className="border-0">Joined</th>
                              <th scope="col" className="border-0">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="advanced-table active">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c1"
                                    checked=""
                                  />
                                  <label className="form-check-label" for="c1"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/1.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Andrew Simons</td>
                              <td>Modulator</td>
                              <td>6 May 2021</td>
                              <td>Gujrat, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c2"
                                  />
                                  <label className="form-check-label" for="c2"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/2.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Hanna Gover</td>
                              <td>Admin</td>
                              <td>13 Jan 2005</td>
                              <td>Texas, United states</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c3"
                                  />
                                  <label className="form-check-label" for="c3"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/3.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Nirav</td>
                              <td>Admin</td>
                              <td>21 Mar 2001</td>
                              <td>Bhavnagar, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c4"
                                  />
                                  <label className="form-check-label" for="c4"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/4.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Sunil</td>
                              <td>Admin</td>
                              <td>21 Mar 2004</td>
                              <td>Gujarat, India</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="d-flex align-items-center p-4 mt-2">
                      <h3 className="card-title mb-0">1 members selected</h3>
                      <div className="ms-auto">
                        <button
                          className="
                            btn btn-danger
                            text-white
                            btn-rounded
                            py-2
                            px-3
                          "
                        >
                          Next <i className="ti-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="permissions" role="tabpanel">
                    <div className="row py-4 px-5 no-gutters mt-3">
                      <div
                        className="col-sm-12 col-md-6 d-flex justify-content-start"
                      >
                        <h3 className="card-title mb-0">Set User Permission</h3>
                      </div>
                      <div
                        className="col-sm-12 col-md-6 justify-content-end d-flex"
                      >
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" className="btn btn-secondary">
                            <i data-feather="user-plus" className="feather-sm"></i>
                            <span className="ms-2 fw-normal fs-4">Add User</span>
                          </button>
                          <button type="button" className="btn btn-secondary">
                            <i data-feather="edit-2" className="feather-sm"></i>
                            <span className="ms-2 fw-normal">Edit User</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light">
                      <div
                        className="
                          table-responsive
                          border-top
                          manage-table
                          px-4
                          py-3
                        "
                      >
                        <table className="table no-wrap">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0"></th>
                              <th scope="col" className="border-0"></th>
                              <th scope="col" className="border-0">Name</th>
                              <th scope="col" className="border-0">Position</th>
                              <th scope="col" className="border-0">Joined</th>
                              <th scope="col" className="border-0">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c5"
                                  />
                                  <label className="form-check-label" for="c5"
                                    >&nbsp;</label >
                                  
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/1.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Andrew Simons</td>
                              <td>Modulator</td>
                              <td>6 May 2021</td>
                              <td>Gujrat, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table active">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c6"
                                    checked=""
                                  />
                                  <label className="form-check-label" for="c6"
                                    >&nbsp;</label >
                                  
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/2.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Hanna Gover</td>
                              <td>Admin</td>
                              <td>13 Jan 2005</td>
                              <td>Texas, United states</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c7"
                                  />
                                  <label className="form-check-label" for="c7"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/3.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Nirav</td>
                              <td>Admin</td>
                              <td>21 Mar 2001</td>
                              <td>Bhavnagar, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c8"
                                  />
                                  <label className="form-check-label" for="c8"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/4.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Sunil</td>
                              <td>Admin</td>
                              <td>21 Mar 2004</td>
                              <td>Gujarat, India</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="d-flex align-items-center p-4 mt-2">
                      <h3 className="card-title mb-0">1 members selected</h3>
                      <div className="ms-auto">
                        <button
                          className="
                            btn btn-danger
                            text-white
                            btn-rounded
                            py-2
                            px-3
                          "
                        >
                          Next <i className="ti-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="messages" role="tabpanel">
                    <div className="row py-4 px-5 no-gutters mt-3">
                      <div
                        className="col-sm-12 col-md-6 d-flex justify-content-start"
                      >
                        <h3 className="card-title mb-0">Manage Users</h3>
                      </div>
                      <div
                        className="col-sm-12 col-md-6 justify-content-end d-flex"
                      >
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" className="btn btn-secondary">
                            <i data-feather="user-plus" className="feather-sm"></i>
                            <span className="ms-2 fw-normal fs-4">Add User</span>
                          </button>
                          <button type="button" className="btn btn-secondary">
                            <i data-feather="edit-2" className="feather-sm"></i>
                            <span className="ms-2 fw-normal">Edit User</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light">
                      <div
                        className="
                          table-responsive
                          border-top
                          manage-table
                          px-4
                          py-3
                        "
                      >
                        <table className="table no-wrap">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0"></th>
                              <th scope="col" className="border-0"></th>
                              <th scope="col" className="border-0">Name</th>
                              <th scope="col" className="border-0">Position</th>
                              <th scope="col" className="border-0">Joined</th>
                              <th scope="col" className="border-0">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c9"
                                  />
                                  <label className="form-check-label" for="c9"
                                    >&nbsp;</label >
                                  
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/1.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Andrew Simons</td>
                              <td>Modulator</td>
                              <td>6 May 2021</td>
                              <td>Gujrat, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c10"
                                  />
                                  <label className="form-check-label" for="c10"
                                    >&nbsp;</label >
                                  
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/2.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Hanna Gover</td>
                              <td>Admin</td>
                              <td>13 Jan 2005</td>
                              <td>Texas, United states</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table active">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c11"
                                    checked=""
                                  />
                                  <label className="form-check-label" for="c11"
                                    >&nbsp;</label >
                                  
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/3.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Nirav</td>
                              <td>Admin</td>
                              <td>21 Mar 2001</td>
                              <td>Bhavnagar, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c12"
                                  />
                                  <label className="form-check-label" for="c12"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/4.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Sunil</td>
                              <td>Admin</td>
                              <td>21 Mar 2004</td>
                              <td>Gujarat, India</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="d-flex align-items-center p-4 mt-2">
                      <h3 className="card-title mb-0">1 members selected</h3>
                      <div className="ms-auto">
                        <button
                          className="
                            btn btn-danger
                            text-white
                            btn-rounded
                            py-2
                            px-3
                          "
                        >
                          Next <i className="ti-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="save" role="tabpanel">
                    <div className="row py-4 px-5 no-gutters mt-3">
                      <div
                        className="col-sm-12 col-md-6 d-flex justify-content-start"
                      >
                        <h3 className="card-title mb-0">Save & Finish</h3>
                      </div>
                      <div
                        className="col-sm-12 col-md-6 justify-content-end d-flex"
                      >
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" className="btn btn-secondary">
                            <i data-feather="user-plus" className="feather-sm"></i>
                            <span className="ms-2 fw-normal fs-4">Add User</span>
                          </button>
                          <button type="button" className="btn btn-secondary">
                            <i data-feather="edit-2" className="feather-sm"></i>
                            <span className="ms-2 fw-normal">Edit User</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light">
                      <div
                        className="
                          table-responsive
                          border-top
                          manage-table
                          px-4
                          py-3
                        "
                      >
                        <table className="table no-wrap">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0"></th>
                              <th scope="col" className="border-0"></th>
                              <th scope="col" className="border-0">Name</th>
                              <th scope="col" className="border-0">Position</th>
                              <th scope="col" className="border-0">Joined</th>
                              <th scope="col" className="border-0">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c13"
                                  />
                                  <label className="form-check-label" for="c13"
                                    >&nbsp;</label >
                                  
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/1.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Andrew Simons</td>
                              <td>Modulator</td>
                              <td>6 May 2021</td>
                              <td>Gujrat, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c14"
                                  />
                                  <label className="form-check-label" for="c14"
                                    >&nbsp;</label >
                                 
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/2.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Hanna Gover</td>
                              <td>Admin</td>
                              <td>13 Jan 2005</td>
                              <td>Texas, United states</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c15"
                                  />
                                  <label className="form-check-label" for="c15"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/3.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Nirav</td>
                              <td>Admin</td>
                              <td>21 Mar 2001</td>
                              <td>Bhavnagar, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" className="sml-pd"></td>
                            </tr>
                            <tr className="advanced-table active">
                              <td className="ps-3">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="c16"
                                    checked=""
                                  />
                                  <label className="form-check-label" for="c16"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/4.jpg"
                                  className="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Sunil</td>
                              <td>Admin</td>
                              <td>21 Mar 2004</td>
                              <td>Gujarat, India</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="d-flex align-items-center p-4 mt-2">
                      <h3 className="card-title mb-0">1 members selected</h3>
                      <div className="ms-auto">
                        <button
                          className="
                            btn btn-danger
                            text-white
                            btn-rounded
                            py-2
                            px-3
                          "
                        >
                          Next <i className="ti-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-flex mt-3">
                    <button
                      className="btn btn-circle btn-success text-white btn-lg"
                      href="javascript:void(0)"
                    >
                      <i className="ti-plus"></i>
                    </button>
                    <div className="ms-3">
                      <h2 className="display-6">$456.90</h2>
                      <h5 className="fw-light">Your wallet Balance</h5>
                    </div>
                  </div>
                  <div id="wallet-balance" className="mt-3"></div>
                </div>
                <ul className="list-style-none">
                  <li className="py-2 px-4 border-top">
                    <div className="d-flex align-items-center">
                      <i className="ti-wallet font-24 text-info"></i>
                      <a href="#" className="ms-3 fs-4">Withdrow money</a>
                    </div>
                  </li>
                  <li className="py-2 px-4 border-top">
                    <div className="d-flex align-items-center">
                      <i className="ti-bag font-24 text-info"></i>
                      <a href="#" className="ms-3 fs-4">Shop Now</a>
                    </div>
                  </li>
                  <li className="py-2 px-4 border-top">
                    <div className="d-flex align-items-center">
                      <i className="ti-briefcase font-24 text-info"></i>
                      <a href="#" className="ms-3 fs-4">Add funds</a>
                    </div>
                  </li>
                  <li className="py-2 px-4 border-top">
                    <div className="d-flex align-items-center">
                      <i className="ti-wallet font-24 text-info"></i>
                      <a href="#" className="ms-3 fs-4">Shop Now</a>
                    </div>
                  </li>
                  <li className="py-2 px-4 border-top">
                    <div className="d-flex align-items-center">
                      <i className="ti-wallet font-24 text-info"></i>
                      <a href="#" className="ms-3 fs-4">Withdrow money</a>
                    </div>
                  </li>
                  <li className="py-2 px-4 border-top">
                    <div className="d-flex align-items-center">
                      <i className="ti-bag font-24 text-info"></i>
                      <a href="#" className="ms-3 fs-4">Shop Now</a>
                    </div>
                  </li>
                  <li className="py-2 px-4 border-top">
                    <div className="d-flex align-items-center">
                      <i className="ti-wallet font-24 text-info"></i>
                      <a href="#" className="ms-3 fs-4">Withdrow money</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-0">Manage Users</h5>
                </div>
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th
                          scope="col"
                          className="border-0 fs-4 font-weight-medium ps-4"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="border-0 fs-4 font-weight-medium"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border-0 fs-4 font-weight-medium"
                        >
                          Occupation
                        </th>
                        <th
                          scope="col"
                          className="border-0 fs-4 font-weight-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="border-0 fs-4 font-weight-medium"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="border-0 fs-4 font-weight-medium"
                        >
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ps-4">1</td>
                        <td>
                          <h5 className="font-weight-medium mb-0">
                            Daniel Kristeen
                          </h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                        </td>
                        <td>
                          <span>Visual Designer</span><br />
                          <span>Past : teacher</span>
                        </td>
                        <td>
                          <span>daniel@website.com</span><br />
                          <span>999 - 444 - 555</span>
                        </td>
                        <td>
                          <select
                            className="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" className="text-info edit"
                            ><i
                              data-feather="eye"
                              className="feather-sm fill-white"
                            ></i
                          ></a>
                          <a
                            href="javascript:void(0)"
                            className="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              className="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-4">2</td>
                        <td>
                          <h5 className="font-weight-medium mb-0">Emma Smith</h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                        </td>
                        <td>
                          <span>Visual Designer</span><br />
                          <span>Past : teacher</span>
                        </td>
                        <td>
                          <span>daniel@website.com</span><br />
                          <span>999 - 444 - 555</span>
                        </td>
                        <td>
                          <select
                            className="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" className="text-info edit"
                            ><i
                              data-feather="eye"
                              className="feather-sm fill-white"
                            ></i></a>
                          
                          <a
                            href="javascript:void(0)"
                            className="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              className="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-4">3</td>
                        <td>
                          <h5 className="font-weight-medium mb-0">
                            Olivia Johnson
                          </h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                        </td>
                        <td>
                          <span>Visual Designer</span><br />
                          <span>Past : teacher</span>
                        </td>
                        <td>
                          <span>daniel@website.com</span><br />
                          <span>999 - 444 - 555</span>
                        </td>
                        <td>
                          <select
                            className="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" className="text-info edit"
                            ><i
                              data-feather="eye"
                              className="feather-sm fill-white"
                            ></i></a>
                          <a
                            href="javascript:void(0)"
                            className="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              className="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-4">4</td>
                        <td>
                          <h5 className="font-weight-medium mb-0">
                            Isabella Williams
                          </h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                        </td>
                        <td>
                          <span>Visual Designer</span><br />
                          <span>Past : teacher</span>
                        </td>
                        <td>
                          <span>daniel@website.com</span><br />
                          <span>999 - 444 - 555</span>
                        </td>
                        <td>
                          <select
                            className="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" className="text-info edit"
                            ><i
                              data-feather="eye"
                              className="feather-sm fill-white"
                            ></i></a>
                          <a
                            href="javascript:void(0)"
                            className="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              className="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-4">5</td>
                        <td>
                          <h5 className="font-weight-medium mb-0">Sophia Jones</h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                        </td>
                        <td>
                          <span>Visual Designer</span><br />
                          <span>Past : teacher</span>
                        </td>
                        <td>
                          <span>daniel@website.com</span><br />
                          <span>999 - 444 - 555</span>
                        </td>
                        <td>
                          <select
                            className="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" className="text-info edit"
                            ><i
                              data-feather="eye"
                              className="feather-sm fill-white"
                            ></i
                          ></a>
                          <a
                            href="javascript:void(0)"
                            className="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              className="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-4">6</td>
                        <td>
                          <h5 className="font-weight-medium mb-0">
                            Charlotte Brown
                          </h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                        </td>
                        <td>
                          <span>Visual Designer</span><br />
                          <span>Past : teacher</span>
                        </td>
                        <td>
                          <span>daniel@website.com</span><br />
                          <span>999 - 444 - 555</span>
                        </td>
                        <td>
                          <select
                            className="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" className="text-info edit"
                            ><i
                              data-feather="eye"
                              className="feather-sm fill-white"
                            ></i></a>
                          <a
                            href="javascript:void(0)"
                            className="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              className="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
     
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="d-flex align-items-center px-3 py-4 border-bottom">
                  <div>
                    <h4 className="card-title">To-do List</h4>
                    <h5 className="card-subtitle mb-0">This Months Task</h5>
                  </div>
                  <div className="ms-auto">
                    <button
                      className="btn btn-danger text-white btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#addtask"
                    >
                      Add Task
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="todo-widget">
                    <ul
                      className="list-task todo-list list-group mb-0"
                      data-role="tasklist"
                    >
                      <li
                        className="list-group-item border-0 mb-0 pb-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          className="
                            form-check
                            border-start border-2 border-info
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            id="inputSchedule"
                            name="inputCheckboxesSchedule"
                          />
                          <label
                            for="inputSchedule"
                            className="form-check-label ps-2 fw-normal"
                          >
                            <span>Schedule meeting with</span>
                          </label>
                        </div>
                        <ul className="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Steave"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Jessica"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/3.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Priyanka"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/4.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Selina"
                            />
                          </li>
                        </ul>
                      </li>
                      <li
                        className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          className="
                            form-check
                            border-start border-2 border-danger
                            ps-1
                            d-flex
                          "
                        >
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            id="inputCall"
                            name="inputCheckboxesCall"
                          />
                          <label
                            for="inputCall"
                            className="form-check-label ps-2 fw-normal"
                          >
                            <span>Give Purchase report to</span>
                            <span className="badge bg-light-danger text-danger"
                              >Today</span
                            >
                          </label>
                        </div>
                        <ul className="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/3.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Priyanka"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/4.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Selina"
                            />
                          </li>
                        </ul>
                      </li>
                      <li
                        className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          className="
                            form-check
                            border-start border-2 border-primary
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            id="inputBook"
                            name="inputCheckboxesBook"
                          />
                          <label
                            for="inputBook"
                            className="form-check-label ps-2 fw-normal"
                          >
                            <span>Book flight for holiday</span>
                          </label>
                        </div>
                        <div
                          className="
                            item-date
                            fs-2
                            ps-4
                            ms-3
                            text-muted
                            d-inline-block
                          "
                        >
                          26 jun 2021
                        </div>
                      </li>
                      <li
                        className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          className="
                            form-check
                            border-start border-2 border-warning
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            id="inputForward"
                            name="inputCheckboxesForward"
                          />
                          <label
                            for="inputForward"
                            className="form-check-label ps-2 fw-normal"
                          >
                            <span>Forward all tasks</span>
                            <span className="badge bg-light-warning text-warning"
                              >2 weeks</span>
                          </label>
                        </div>
                        <div
                          className="
                            item-date
                            fs-2
                            ps-4
                            ms-3
                            text-muted
                            d-inline-block
                          "
                        >
                          26 jun 2021
                        </div>
                      </li>
                      <li
                        className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          className="
                            form-check
                            border-start border-2 border-primary
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            id="inputRecieve"
                            name="inputCheckboxesRecieve"
                          />
                          <label
                            for="inputRecieve"
                            className="form-check-label ps-2 fw-normal"
                          >
                            <span>Recieve shipment</span>
                          </label>
                        </div>
                        <div
                          className="
                            item-date
                            fs-2
                            ps-4
                            ms-3
                            text-muted
                            d-inline-block
                          "
                        >
                          26 jun 2021
                        </div>
                      </li>
                      <li
                        className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          className="
                            form-check
                            border-start border-2 border-info
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            id="inputpayment"
                            name="inputCheckboxespayment"
                          />
                          <label
                            for="inputpayment"
                            className="form-check-label ps-2 fw-normal"
                          >
                            <span>Send payment today</span>
                          </label>
                        </div>
                        <div
                          className="
                            item-date
                            fs-2
                            ps-4
                            ms-3
                            text-muted
                            d-inline-block
                          "
                        >
                          26 jun 2021
                        </div>
                      </li>
                      <li
                        className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          className="
                            form-check
                            border-start border-2 border-success
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            className="form-check-input ms-2"
                            id="inputForward2"
                            name="inputCheckboxesd"
                          />
                          <label
                            for="inputForward2"
                            className="form-check-label ps-2 fw-normal"
                          >
                            <span>Important tasks</span>
                            <span className="badge bg-light-success text-success"
                              >2 weeks</span>
                          </label>
                        </div>
                        <ul className="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Assign to Steave"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Assign to Jessica"
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              className="rounded-circle"
                              src="../../assets/images/users/4.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Assign to Selina"
                            />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
               
                <div
                  className="modal fade"
                  id="addtask"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header d-flex align-items-center">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add Task
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label for="text_name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="text_name"
                              placeholder="Enter your Name"
                            />
                          </div>
                          <div className="form-group">
                            <label for="txt_email">Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              id="txt_email"
                              placeholder="Enter Email"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="card w-100 scrollable" style="max-height: 716px;">
                <div className="calender-sidebar app-calendar p-4">
                  <div id="calendar"></div>
                </div>
              
                <div className="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h5 className="modal-title" id="eventModalLabel">
                                  Add / Edit Event
                              </h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="">
                                          <label className="form-label">Event Title</label>
                                          <input id="event-title" type="text" className="form-control" />
                                      </div>
                                  </div>
                                  <div className="col-md-12 mt-4">
                                      <div><label className="form-label">Event Color</label></div>
                                      <div className="d-flex">
                                          <div className="n-chk">
                                              <div className="form-check form-check-primary form-check-inline">
                                                  <input className="form-check-input" type="radio" name="event-level" value="Danger" id="modalDanger" />
                                                  <label className="form-check-label" for="modalDanger">Danger</label>
                                              </div>
                                          </div>
                                          <div className="n-chk">
                                              <div className="form-check form-check-warning form-check-inline">
                                                  <input className="form-check-input" type="radio" name="event-level" value="Success" id="modalSuccess" />
                                                  <label className="form-check-label" for="modalSuccess">Success</label>
                                              </div>
                                          </div>
                                          <div className="n-chk">
                                              <div className="form-check form-check-success form-check-inline">
                                                  <input className="form-check-input" type="radio" name="event-level" value="Primary" id="modalPrimary" />
                                                  <label className="form-check-label" for="modalPrimary">Primary</label>
                                              </div>
                                          </div>
                                          <div className="n-chk">
                                              <div className="form-check form-check-danger form-check-inline">
                                                  <input className="form-check-input" type="radio" name="event-level" value="Warning" id="modalWarning" />
                                                  <label className="form-check-label" for="modalWarning">Warning</label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-12 d-none">
                                      <div className="">
                                          <label className="form-label">Enter Start Date</label>
                                          <input id="event-start-date" type="text" className="form-control" />
                                      </div>
                                  </div>

                                  <div className="col-md-12 d-none">
                                      <div className="">
                                          <label className="form-label">Enter End Date</label>
                                          <input id="event-end-date" type="text" className="form-control" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn" data-bs-dismiss="modal">
                                  Close
                              </button>
                              <button type="button" className="btn btn-success btn-update-event" data-fc-event-public-id="">
                                  Update changes
                              </button>
                              <button type="button" className="btn btn-primary btn-add-event">
                                  Add Event
                              </button>
                          </div>
                      </div>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="../../assets/images/big/img1.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <span className="text-muted"
                      ><i
                        data-feather="calendar"
                        className="feather-sm text-info"
                      ></i>
                      May 16</span
                    >
                    <div className="ms-auto">
                      <a href="javascript:void(0)" className="text-muted"
                        ><i
                          data-feather="heart"
                          className="feather-sm text-danger"
                        ></i>
                        30</a
                      >
                    </div>
                  </div>
                  <h4 className="mt-3">Top 20 Models are on the ramp</h4>
                  <p className="mt-3 text-muted">
                    Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper
                    quam.
                  </p>
                  <button
                    className="
                      btn btn-light-primary
                      text-primary
                      btn-rounded
                      waves-effect waves-light
                      mt-2
                    "
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="../../assets/images/big/img2.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <span className="text-muted"
                      ><i
                        data-feather="calendar"
                        className="feather-sm text-info"
                      ></i>
                      May 16</span
                    >
                    <div className="ms-auto">
                      <a href="javascript:void(0)" className="text-muted"
                        ><i
                          data-feather="heart"
                          className="feather-sm text-danger"
                        ></i>
                        30</a
                      >
                    </div>
                  </div>
                  <h4 className="mt-3">Top 20 Models are on the ramp</h4>
                  <p className="mt-3 text-muted">
                    Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper
                    quam.
                  </p>
                  <button
                    className="
                      btn btn-light-primary
                      text-primary
                      btn-rounded
                      waves-effect waves-light
                      mt-2
                    "
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="../../assets/images/big/img3.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <span className="text-muted"
                      ><i
                        data-feather="calendar"
                        className="feather-sm text-info"
                      ></i>
                      May 16</span
                    >
                    <div className="ms-auto">
                      <a href="javascript:void(0)" className="text-muted"
                        ><i
                          data-feather="heart"
                          className="feather-sm text-danger"
                        ></i>
                        30</a
                      >
                    </div>
                  </div>
                  <h4 className="mt-3">Top 20 Models are on the ramp</h4>
                  <p className="mt-3 text-muted">
                    Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper
                    quam.
                  </p>
                  <button
                    className="
                      btn btn-light-primary
                      text-primary
                      btn-rounded
                      waves-effect waves-light
                      mt-2
                    "
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
       
          <div className="row">
            <div className="col-md-12 col-lg-4 d-flex align-items-stretch">
              <div className="card w-100">
                <h5 className="card-title p-3 card-header mb-0">Chat Listing</h5>
                <div className="p-3">
                  <ul className="list-style-none chat-list">
                    <li className="mb-3">
                      <a href="javascript:void(0)">
                        <div className="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/1.jpg"
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h5 className="mb-0">Varun Dhavan</h5>
                            <small className="text-success">Online</small>
                          </div>
                          <div className="ms-auto chat-icon">
                            <button
                              type="button"
                              className="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" className="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              className="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                className="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0)">
                        <div className="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/2.jpg"
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h5 className="mb-0">Akshay Kumar</h5>
                            <small className="text-muted">Offline</small>
                          </div>
                          <div className="ms-auto chat-icon">
                            <button
                              type="button"
                              className="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" className="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              className="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                className="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0)">
                        <div className="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/3.jpg"
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h5 className="mb-0">Shraddha Kapoor</h5>
                            <small className="text-success">Online</small>
                          </div>
                          <div className="ms-auto chat-icon">
                            <button
                              type="button"
                              className="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" className="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              className="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                className="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0)">
                        <div className="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/4.jpg"
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h5 className="mb-0">Madhuri Dixit</h5>
                            <small className="text-danger">Busy</small>
                          </div>
                          <div className="ms-auto chat-icon">
                            <button
                              type="button"
                              className="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" className="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              className="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                className="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0)">
                        <div className="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/5.jpg"
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h5 className="mb-0">Shaina Nehwal</h5>
                            <small className="text-muted">Offline</small>
                          </div>
                          <div className="ms-auto chat-icon">
                            <button
                              type="button"
                              className="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" className="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              className="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                className="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0)">
                        <div className="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/6.jpg"
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h5 className="mb-0">Varun Dhavan</h5>
                            <small className="text-success">Online</small>
                          </div>
                          <div className="ms-auto chat-icon">
                            <button
                              type="button"
                              className="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" className="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              className="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                className="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0)">
                        <div className="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/2.jpg"
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h5 className="mb-0">Akshay Kumar</h5>
                            <small className="text-muted">Offline</small>
                          </div>
                          <div className="ms-auto chat-icon">
                            <button
                              type="button"
                              className="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" className="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              className="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                className="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div className="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/3.jpg"
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h5 className="mb-0">Shraddha Kapoor</h5>
                            <small className="text-success">Online</small>
                          </div>
                          <div className="ms-auto chat-icon">
                            <button
                              type="button"
                              className="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" className="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              className="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                className="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 d-flex align-items-stretch">
              <div className="card w-100">
                <h5 className="card-title p-3 card-header mb-0">User Activity</h5>
                <div className="card-body scrollable" style="height: 598px">
                  <div className="steamline mt-0">
                    <div className="sl-item">
                      <div className="sl-left">
                        <button
                          type="button"
                          className="
                            btn btn-success btn-circle btn-circle
                            text-white
                          "
                        >
                          <i className="ti-user"></i>
                        </button>
                      </div>
                      <div className="sl-right">
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">John Doe</h5>
                          <span className="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p className="mt-1">Contrary to popular belief</p>
                      </div>
                    </div>
                    <div className="sl-item">
                      <div className="sl-left">
                        <button
                          type="button"
                          className="btn btn-info btn-circle btn-circle text-white"
                        >
                          <i className="fas fa-image"></i>
                        </button>
                      </div>
                      <div className="sl-right">
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Hritik Roshan</h5>
                          <span className="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p className="mt-1">Lorem Ipsum is simply dummy</p>
                        <div className="row mb-3">
                          <div className="col">
                            <img
                              src="../../assets/images/big/img1.jpg"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col">
                            <img
                              src="../../assets/images/big/img2.jpg"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col">
                            <img
                              src="../../assets/images/big/img3.jpg"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sl-item">
                      <div className="sl-left">
                        <img
                          src="../../assets/images/users/1.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="sl-right">
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Gohn Doe</h5>
                          <span className="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p className="mt-1">The standard chunk of ipsum</p>
                      </div>
                    </div>
                    <div className="sl-item">
                      <div className="sl-left">
                        <img
                          src="../../assets/images/users/2.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="sl-right">
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Herry Deo</h5>
                          <span className="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p className="">Contrary to popular belief hi there..!</p>
                      </div>
                    </div>
                    <div className="sl-item">
                      <div className="sl-left">
                        <img
                          src="../../assets/images/users/5.jpg"
                          alt="user"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="sl-right">
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Tiger Sroff</h5>
                          <span className="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p className="mt-1">The generated lorem ipsum</p>
                        <button
                          className="btn btn-outline-success btn-rounded mb-3"
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-outline-danger btn-rounded mb-3 ms-2"
                        >
                          Refuse
                        </button>
                      </div>
                    </div>
                    <div className="sl-item">
                      <div className="sl-left">
                        <button
                          type="button"
                          className="
                            btn btn-success btn-circle btn-circle
                            text-white
                          "
                        >
                          <i className="ti-user"></i>
                        </button>
                      </div>
                      <div className="sl-right">
                        <div className="d-flex align-items-center">
                          <h5 className="mb-0">Peterson</h5>
                          <span className="sl-date ms-2">15 minutes ago</span>
                        </div>
                        <p className="mt-1">Contrary to popular belief</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 d-flex align-items-stretch">
              <div className="card w-100">
                <h5 className="card-title p-3 card-header mb-0">Recent Chat</h5>
                <div className="card-body">
                  <div className="chat-box scrollable" style="height: 434px">
                 
                    <ul className="chat-list m-0 p-0">
                     
                      <li className="mt-4">
                        <div className="chat-img d-inline-block align-top">
                          <img
                            src="../../assets/images/users/1.jpg"
                            alt="user"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="chat-content ps-3 d-inline-block">
                          <h5 className="text-muted fs-3 fw-normal">
                            James Anderson
                          </h5>
                          <div
                            className="
                              message
                              fs-3
                              bg-primary
                              text-white
                              d-inline-block
                              mb-2
                              fw-normal
                              shadow
                            "
                          >
                            Lorem Ipsum is simply dummy text of the printing &
                            type setting industry.
                          </div>
                        </div>
                        <div
                          className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                        >
                          10:56 am
                        </div>
                      </li>
                     
                      <li className="mt-4">
                        <div className="chat-img d-inline-block align-top">
                          <img
                            src="../../assets/images/users/2.jpg"
                            alt="user"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="chat-content ps-3 d-inline-block">
                          <h5 className="text-muted fs-3 fw-normal">Bianca Doe</h5>
                          <div
                            className="
                              message
                              fs-3
                              bg-primary
                              text-white
                              d-inline-block
                              mb-2
                              fw-normal
                              shadow
                            "
                          >
                            It’s Great opportunity to work.
                          </div>
                        </div>
                        <div
                          className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                        >
                          10:57 am
                        </div>
                      </li>
                     
                      <li className="odd mt-4">
                        <div className="chat-content ps-3 d-inline-block text-end">
                          <div
                            className="
                              message
                              fs-3
                              bg-light-inverse
                              d-inline-block
                              mb-2
                              font-weight-medium
                            "
                          >
                            I would love to join the team.
                          </div>
                          <br />
                        </div>
                        <div
                          className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                        >
                          10:58 am
                        </div>
                      </li>
                    
                      <li className="odd mt-4">
                        <div className="chat-content ps-3 d-inline-block text-end">
                          <div
                            className="
                              message
                              fs-3
                              bg-light-inverse
                              d-inline-block
                              mb-2
                              font-weight-medium
                            "
                          >
                            Whats budget of the ample admin project.
                          </div>
                          <br />
                        </div>
                        <div
                          className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                        >
                          10:59 am
                        </div>
                      </li>
                      
                      <li className="mt-4">
                        <div className="chat-img d-inline-block align-top">
                          <img
                            src="../../assets/images/users/3.jpg"
                            alt="user"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="chat-content ps-3 d-inline-block">
                          <h5 className="text-muted fs-3 fw-normal">
                            Angelina Rhodes
                          </h5>
                          <div
                            className="
                              message
                              fs-3
                              bg-primary
                              text-white
                              d-inline-block
                              mb-2
                              fw-normal
                              shadow
                            "
                          >
                            Well we have good budget for the project
                          </div>
                        </div>
                        <div
                          className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                        >
                          11:00 am
                        </div>
                      </li>
                      
                      <li className="mt-4">
                        <div className="chat-img d-inline-block align-top">
                          <img
                            src="../../assets/images/users/1.jpg"
                            alt="user"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="chat-content ps-3 d-inline-block">
                          <h5 className="text-muted fs-3 fw-normal">
                            James Anderson
                          </h5>
                          <div
                            className="
                              message
                              fs-3
                              bg-primary
                              text-white
                              d-inline-block
                              mb-2
                              fw-normal
                              shadow
                            "
                          >
                            Lorem Ipsum is simply dummy text of the printing &
                            type setting industry.
                          </div>
                        </div>
                        <div
                          className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                        >
                          10:56 am
                        </div>
                      </li>
                    
                      <li className="odd mt-4">
                        <div className="chat-content ps-3 d-inline-block text-end">
                          <div
                            className="
                              message
                              fs-3
                              bg-light-inverse
                              d-inline-block
                              mb-2
                              font-weight-medium
                            "
                          >
                            Whats budget of the new project.
                          </div>
                          <br />
                        </div>
                        <div
                          className="
                            chat-time
                            d-inline-block
                            text-end
                            fs-2
                            font-weight-medium
                          "
                        >
                          10:59 am
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body border-top">
                  <div className="row">
                    <div className="col-9">
                      <div className="input-field mt-0 mb-0">
                        <input
                          type="text"
                          id="textarea1"
                          placeholder="Type and enter"
                          className="form-control border-0"
                        />
                      </div>
                    </div>
                    <div className="col-3 text-end">
                      <a
                        className="btn-circle btn-lg btn-success btn text-white"
                        href="javascript:void(0)"
                        ><i data-feather="send" className="feather-sm"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center">
          All Rights Reserved by Ample admin. .
        </footer>
       
      </div>
      </div>
     
    
  )
}

export default TextNav;