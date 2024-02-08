import React from 'react'

function TextNav() {
  return (
   
    <div id="main-wrapper">
      <!-- ============================================================== -->
      <!-- Topbar header - style you can find in pages.scss -->
      <!-- ============================================================== -->
      <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
          <div class="navbar-header border-end">
            <!-- This is for the sidebar toggle which is visible on mobile only -->
            <a
              class="nav-toggler waves-effect waves-light d-block d-md-none"
              href="javascript:void(0)"
              ><i class="ti-menu ti-close"></i
            ></a>
            <a class="navbar-brand" href="index.html">
              <!-- Logo icon -->
              <b class="logo-icon">
                <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                <!-- Dark Logo icon -->
                <img
                  src="../../assets/images/logos/logo-icon.png"
                  alt="homepage"
                  class="dark-logo"
                />
                <!-- Light Logo icon -->
                <img
                  src="../../assets/images/logos/logo-light-icon.png"
                  alt="homepage"
                  class="light-logo"
                />
              </b>
              <!--End Logo icon -->
              <!-- Logo text -->
              <span class="logo-text">
                <!-- dark Logo text -->
                <img
                  src="../../assets/images/logos/logo-text.png"
                  alt="homepage"
                  class="dark-logo"
                />
                <!-- Light Logo text -->
                <img
                  src="../../assets/images/logos/logo-light-text.png"
                  class="light-logo"
                  alt="homepage"
                />
              </span>
            </a>
            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Toggle which is visible on mobile only -->
            <!-- ============================================================== -->
            <a
              class="topbartoggler d-block d-md-none waves-effect waves-light"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              ><i class="ti-more"></i
            ></a>
          </div>
          <!-- ============================================================== -->
          <!-- End Logo -->
          <!-- ============================================================== -->
          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav me-auto">
              <li class="nav-item d-none d-md-block">
                <a
                  class="nav-link sidebartoggler waves-effect waves-light"
                  href="javascript:void(0)"
                  data-sidebartype="mini-sidebar"
                  ><i class="mdi mdi-menu fs-5"></i
                ></a>
              </li>
              <!-- ============================================================== -->
              <!-- Messages -->
              <!-- ============================================================== -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle waves-effect waves-dark"
                  href=""
                  id="2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fs-5 mdi mdi-gmail"></i>
                  <div class="notify">
                    <span class="heartbit"></span>
                    <span class="point"></span>
                  </div>
                </a>
                <div
                  class="
                    dropdown-menu
                    mailbox
                    dropdown-menu-start dropdown-menu-animate-up
                  "
                  aria-labelledby="2"
                >
                  <ul class="list-style-none">
                    <li>
                      <div class="border-bottom rounded-top py-3 px-4">
                        <div class="mb-0 font-weight-medium fs-4">
                          You have 4 new messages
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        class="message-center message-body position-relative"
                        style="height: 230px"
                      >
                        <!-- Message -->
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle online"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3">
                            <h5 class="message-title mb-0 mt-1 fs-3 fw-bold">
                              Pavan kumar
                            </h5>
                            <span
                              class="
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
                              class="
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
                        <!-- Message -->
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle busy"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3">
                            <h5 class="message-title mb-0 mt-1 fs-3 fw-bold">
                              Sonu Nigam
                            </h5>
                            <span
                              class="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >I've sung a song! See you at</span
                            >
                            <span
                              class="
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
                        <!-- Message -->
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/3.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle away"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3">
                            <h5 class="message-title mb-0 mt-1 fs-3 fw-bold">
                              Arijit Sinh
                            </h5>
                            <span
                              class="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >I am a singer!</span
                            >
                            <span
                              class="
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
                        <!-- Message -->
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            class="user-img position-relative d-inline-block"
                          >
                            <img
                              src="../../assets/images/users/4.jpg"
                              alt="user"
                              class="rounded-circle w-100"
                            />
                            <span
                              class="profile-status rounded-circle offline"
                            ></span>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3">
                            <h5 class="message-title mb-0 mt-1 fs-3 fw-bold">
                              Pavan kumar
                            </h5>
                            <span
                              class="
                                fs-2
                                text-nowrap
                                d-block
                                time
                                text-truncate
                              "
                              >Just see the my admin!</span
                            >
                            <span
                              class="
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
                        class="nav-link border-top text-center text-dark pt-3"
                        href="javascript:void(0);"
                      >
                        <b>See all e-Mails</b> <i class="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- ============================================================== -->
              <!-- Comment -->
              <!-- ============================================================== -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle waves-effect waves-dark"
                  href=""
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-check-circle fs-5"></i>
                  <div class="notify">
                    <span class="heartbit"></span>
                    <span class="point"></span>
                  </div>
                </a>
                <div
                  class="
                    dropdown-menu dropdown-menu-start
                    mailbox
                    dropdown-menu-animate-up
                  "
                >
                  <ul class="list-style-none">
                    <li>
                      <div class="border-bottom rounded-top py-3 px-4">
                        <div class="mb-0 font-weight-medium fs-4">
                          Notifications
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        class="message-center notifications position-relative"
                        style="height: 230px"
                      >
                        <!-- Message -->
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            class="btn btn-light-danger text-danger btn-circle"
                          >
                            <i
                              data-feather="link"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3">
                            <h5 class="message-title mb-0 mt-1 fs-3 fw-bold">
                              Luanch Admin
                            </h5>
                            <span
                              class="
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
                              class="
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
                        <!-- Message -->
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            class="
                              btn btn-light-success
                              text-success
                              btn-circle
                            "
                          >
                            <i
                              data-feather="calendar"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3">
                            <h5 class="message-title mb-0 mt-1 fs-3 fw-bold">
                              Event today
                            </h5>
                            <span
                              class="
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
                              class="
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
                        <!-- Message -->
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span class="btn btn-light-info text-info btn-circle">
                            <i
                              data-feather="settings"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3">
                            <h5 class="message-title mb-0 mt-1 fs-3 fw-bold">
                              Settings
                            </h5>
                            <span
                              class="
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
                              class="
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
                        <!-- Message -->
                        <a
                          href="javascript:void(0)"
                          class="
                            message-item
                            d-flex
                            align-items-center
                            border-bottom
                            px-3
                            py-2
                          "
                        >
                          <span
                            class="
                              btn btn-light-primary
                              text-primary
                              btn-circle
                            "
                          >
                            <i
                              data-feather="users"
                              class="feather-sm fill-white"
                            ></i>
                          </span>
                          <div class="w-75 d-inline-block v-middle ps-3">
                            <h5 class="message-title mb-0 mt-1 fs-3 fw-bold">
                              Pavan kumar
                            </h5>
                            <span
                              class="
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
                              class="
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
                        class="nav-link border-top text-center text-dark pt-3"
                        href="javascript:void(0);"
                      >
                        <strong>Check all notifications</strong>
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- ============================================================== -->
              <!-- End Comment -->
              <!-- ============================================================== -->
              <!-- ============================================================== -->
              <!-- mega menu -->
              <!-- ============================================================== -->
              <li class="nav-item dropdown mega-dropdown">
                <a
                  class="nav-link dropdown-toggle waves-effect waves-dark"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="d-none d-md-block"
                    >Mega <i class="icon-options-vertical"></i
                  ></span>
                  <span class="d-block d-md-none"
                    ><i class="mdi mdi-dialpad font-24"></i
                  ></span>
                </a>
                <div class="dropdown-menu dropdown-menu-animate-up">
                  <div class="mega-dropdown-menu row">
                    <div class="col-lg-3 col-xl-2 mb-4">
                      <h4 class="mb-3">CAROUSEL</h4>
                      <!-- CAROUSEL -->
                      <div
                        id="carouselExampleControls"
                        class="carousel slide carousel-dark"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              class="d-block img-fluid"
                              src="../../assets/images/big/img1.jpg"
                              alt="First slide"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block img-fluid"
                              src="../../assets/images/big/img2.jpg"
                              alt="Second slide"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block img-fluid"
                              src="../../assets/images/big/img3.jpg"
                              alt="Third slide"
                            />
                          </div>
                        </div>
                        <a
                          class="carousel-control-prev"
                          href="#carouselExampleControls"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </a>
                        <a
                          class="carousel-control-next"
                          href="#carouselExampleControls"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </a>
                      </div>
                      <!-- End CAROUSEL -->
                    </div>
                    <div class="col-lg-3 mb-4">
                      <h4 class="mb-3">ACCORDION</h4>
                      <!-- Accordian -->
                      <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button
                              class="accordion-button collapsed"
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
                            class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingTwo">
                            <button
                              class="accordion-button collapsed"
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
                            class="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingThree">
                            <button
                              class="accordion-button collapsed"
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
                            class="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 mb-4">
                      <h4 class="mb-3">CONTACT US</h4>
                      <!-- Contact -->
                      <form>
                        <div class="mb-3 form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputname1"
                            placeholder="Enter Name"
                          />
                          <label>Enter Name</label>
                        </div>
                        <div class="mb-3 form-floating">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter email"
                          />
                          <label>Enter Email address</label>
                        </div>
                        <div class="mb-3 form-floating">
                          <textarea
                            class="form-control"
                            id="exampleTextarea"
                            rows="3"
                            placeholder="Message"
                          ></textarea>
                          <label>Enter Message</label>
                        </div>
                        <button
                          type="submit"
                          class="btn px-4 rounded-pill btn-info"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                    <div class="col-lg-3 col-xlg-4 mb-4">
                      <h4 class="mb-3">List style</h4>
                      <!-- List style -->
                      <ul class="list-style-none">
                        <li>
                          <a href="#" class="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              class="feather-sm text-success me-2"
                            ></i>
                            You can give link</a
                          >
                        </li>
                        <li>
                          <a href="#" class="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              class="feather-sm text-success me-2"
                            ></i>
                            Give link</a
                          >
                        </li>
                        <li>
                          <a href="#" class="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              class="feather-sm text-success me-2"
                            ></i>
                            Another Give link</a
                          >
                        </li>
                        <li>
                          <a href="#" class="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              class="feather-sm text-success me-2"
                            ></i>
                            Forth link</a
                          >
                        </li>
                        <li>
                          <a href="#" class="font-weight-medium"
                            ><i
                              data-feather="check-circle"
                              class="feather-sm text-success me-2"
                            ></i>
                            Another fifth link</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <!-- ============================================================== -->
              <!-- End mega menu -->
              <!-- ============================================================== -->
            </ul>
            <!-- ============================================================== -->
            <!-- Right side toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav">
              <!-- ============================================================== -->
              <!-- Search -->
              <!-- ============================================================== -->
              <li class="nav-item search-box">
                <form class="app-search d-none d-lg-block">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                  />
                  <a href="" class="active"><i class="fa fa-search"></i></a>
                </form>
              </li>
              <!-- ============================================================== -->
              <!-- User profile and search -->
              <!-- ============================================================== -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle waves-effect waves-dark"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="../../assets/images/users/1.jpg"
                    alt="user"
                    class="rounded-circle"
                    width="36"
                  />
                  <span class="ms-2 font-weight-medium">Steve</span
                  ><span class="fas fa-angle-down ms-2"></span>
                </a>
                <div
                  class="
                    dropdown-menu dropdown-menu-end
                    user-dd
                    animated
                    flipInY
                  "
                >
                  <div
                    class="
                      d-flex
                      no-block
                      align-items-center
                      p-3
                      bg-info
                      text-white
                      mb-2
                    "
                  >
                    <div class="">
                      <img
                        src="../../assets/images/users/1.jpg"
                        alt="user"
                        class="rounded-circle"
                        width="60"
                      />
                    </div>
                    <div class="ms-2">
                      <h4 class="mb-0 text-white">Steave Jobs</h4>
                      <p class="mb-0">varun@gmail.com</p>
                    </div>
                  </div>
                  <a class="dropdown-item" href="#"
                    ><i
                      data-feather="user"
                      class="feather-sm text-info me-1 ms-1"
                    ></i>
                    My Profile</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i
                      data-feather="credit-card"
                      class="feather-sm text-info me-1 ms-1"
                    ></i>
                    My Balance</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i
                      data-feather="mail"
                      class="feather-sm text-success me-1 ms-1"
                    ></i>
                    Inbox</a
                  >
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"
                    ><i
                      data-feather="settings"
                      class="feather-sm text-warning me-1 ms-1"
                    ></i>
                    Account Setting</a
                  >
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"
                    ><i
                      data-feather="log-out"
                      class="feather-sm text-danger me-1 ms-1"
                    ></i>
                    Logout</a
                  >
                  <div class="dropdown-divider"></div>
                  <div class="ps-4 p-2">
                    <a href="#" class="btn d-block w-100 btn-info rounded-pill"
                      >View Profile</a
                    >
                  </div>
                </div>
              </li>
              <!-- ============================================================== -->
              <!-- User profile and search -->
              <!-- ============================================================== -->
            </ul>
          </div>
        </nav>
      </header>
      <!-- ============================================================== -->
      <!-- End Topbar header -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== -->
      <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
          <!-- Sidebar navigation-->
          <nav class="sidebar-nav">
            <ul id="sidebarnav">
              <li class="sidebar-item">
                <a
                  class="
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
                    class="rounded-circle ms-2"
                    width="30"
                  />
                  <span class="hide-menu">Steve Jection </span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link">
                      <i class="ti-user"></i>
                      <span class="hide-menu"> My Profile </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link">
                      <i class="ti-wallet"></i>
                      <span class="hide-menu"> My Balance </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link">
                      <i class="ti-email"></i>
                      <span class="hide-menu"> Inbox </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link">
                      <i class="ti-settings"></i>
                      <span class="hide-menu"> Account Setting </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link">
                      <i class="fas fa-power-off"></i>
                      <span class="hide-menu"> Logout </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-av-timer"></i>
                  <span class="hide-menu">Dashboard</span>
                  <span
                    class="
                      badge
                      bg-inverse
                      rounded-pill
                      ms-auto
                      me-3
                      font-weight-medium
                      px-2
                      py-1
                    "
                    >6</span
                  >
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="index.html" class="sidebar-link">
                      <i class="mdi mdi-adjust"></i>
                      <span class="hide-menu"> Dashboard 1 </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="index2.html" class="sidebar-link">
                      <i class="mdi mdi-adjust"></i>
                      <span class="hide-menu"> Dashboard 2 </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="index3.html" class="sidebar-link">
                      <i class="mdi mdi-adjust"></i>
                      <span class="hide-menu"> Dashboard 3 </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="index4.html" class="sidebar-link">
                      <i class="mdi mdi-adjust"></i>
                      <span class="hide-menu"> Dashboard 4 </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="index5.html" class="sidebar-link">
                      <i class="mdi mdi-adjust"></i>
                      <span class="hide-menu"> Dashboard 5 </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="index6.html" class="sidebar-link">
                      <i class="mdi mdi-adjust"></i>
                      <span class="hide-menu"> Dashboard 6 </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-cart-outline"></i>
                  <span class="hide-menu">Ecommerce</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="eco-products.html" class="sidebar-link">
                      <i class="mdi mdi-cards-variant"></i>
                      <span class="hide-menu">Products</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-cart.html" class="sidebar-link">
                      <i class="mdi mdi-cart"></i>
                      <span class="hide-menu">Products Cart</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-edit.html" class="sidebar-link">
                      <i class="mdi mdi-cart-plus"></i>
                      <span class="hide-menu">Products Edit</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-detail.html" class="sidebar-link">
                      <i class="mdi mdi-camera-burst"></i>
                      <span class="hide-menu">Product Details</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-orders.html" class="sidebar-link">
                      <i class="mdi mdi-chart-pie"></i>
                      <span class="hide-menu">Product Orders</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="eco-products-checkout.html" class="sidebar-link">
                      <i class="mdi mdi-clipboard-check"></i>
                      <span class="hide-menu">Products Checkout</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-format-color-fill"></i>
                  <span class="hide-menu">Ui Elements </span>
                  <span
                    class="
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
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="ui-accordian.html" class="sidebar-link">
                      <i class="mdi mdi-box-shadow"></i>
                      <span class="hide-menu"> Accordian</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-badge.html" class="sidebar-link">
                      <i class="mdi mdi-application"></i>
                      <span class="hide-menu"> Badge</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-buttons.html" class="sidebar-link">
                      <i class="mdi mdi-toggle-switch"></i>
                      <span class="hide-menu"> Buttons</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-modals.html" class="sidebar-link">
                      <i class="mdi mdi-tablet"></i>
                      <span class="hide-menu"> Modals</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-tab.html" class="sidebar-link">
                      <i class="mdi mdi-sort-variant"></i>
                      <span class="hide-menu"> Tab</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-tooltip-popover.html" class="sidebar-link">
                      <i class="mdi mdi-image-filter-vintage"></i>
                      <span class="hide-menu"> Tooltip &amp; Popover</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-notification.html" class="sidebar-link">
                      <i class="mdi mdi-message-bulleted"></i>
                      <span class="hide-menu"> Notification</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-progressbar.html" class="sidebar-link">
                      <i class="mdi mdi-poll"></i>
                      <span class="hide-menu"> Progressbar</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-typography.html" class="sidebar-link">
                      <i class="mdi mdi-format-line-spacing"></i>
                      <span class="hide-menu"> Typography</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-bootstrap.html" class="sidebar-link">
                      <i class="mdi mdi-bootstrap"></i>
                      <span class="hide-menu"> Bootstrap Ui</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-breadcrumb.html" class="sidebar-link">
                      <i class="mdi mdi-equal"></i>
                      <span class="hide-menu"> Breadcrumb</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-lists.html" class="sidebar-link">
                      <i class="mdi mdi-file-video"></i>
                      <span class="hide-menu"> Lists</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-grid.html" class="sidebar-link">
                      <i class="mdi mdi-view-module"></i>
                      <span class="hide-menu"> Grid</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-carousel.html" class="sidebar-link">
                      <i class="mdi mdi-view-carousel"></i>
                      <span class="hide-menu"> Carousel</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-scrollspy.html" class="sidebar-link">
                      <i class="mdi mdi-crop-free"></i>
                      <span class="hide-menu"> Scrollspy</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-offcanvas.html" class="sidebar-link">
                      <i class="mdi mdi-content-copy"></i>
                      <span class="hide-menu"> Offcanvas</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-spinner.html" class="sidebar-link">
                      <i class="mdi mdi-application"></i>
                      <span class="hide-menu"> Spinner</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-toasts.html" class="sidebar-link">
                      <i class="mdi mdi-apple-safari"></i>
                      <span class="hide-menu"> Toasts</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-content-copy"></i>
                  <span class="hide-menu">Sample Pages</span>
                  <span
                    class="
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
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="starter-kit.html" class="sidebar-link">
                      <i class="mdi mdi-crop-free"></i>
                      <span class="hide-menu">Starter Kit</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-email-open-outline"></i>
                      <span class="hide-menu">Email Templates</span>
                    </a>
                    <ul aria-expanded="false" class="collapse second-level">
                      <li class="sidebar-item">
                        <a
                          href="email-templete-alert.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-message-alert"></i>
                          <span class="hide-menu"> Alert </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="email-templete-basic.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-message-bulleted"></i>
                          <span class="hide-menu"> Basic</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="email-templete-billing.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-message-draw"></i>
                          <span class="hide-menu"> Billing</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="email-templete-password-reset.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-message-bulleted-off"></i>
                          <span class="hide-menu"> Password-Reset</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-account-circle"></i>
                      <span class="hide-menu">Authentication</span>
                    </a>
                    <ul aria-expanded="false" class="collapse second-level">
                      <li class="sidebar-item">
                        <a
                          href="authentication-login1.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-account-key"></i>
                          <span class="hide-menu"> Login </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="authentication-login2.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-account-key"></i>
                          <span class="hide-menu"> Login 2 </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="authentication-login3.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-account-key"></i>
                          <span class="hide-menu"> Login 3 </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="authentication-register1.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-account-plus"></i>
                          <span class="hide-menu"> Register</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="authentication-register2.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-account-plus"></i>
                          <span class="hide-menu"> Register 2</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="authentication-lockscreen.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-account-off"></i>
                          <span class="hide-menu"> Lockscreen</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="authentication-recover-password.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-account-convert"></i>
                          <span class="hide-menu"> Recover password</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-alert-box"></i>
                      <span class="hide-menu">Error Pages</span>
                    </a>
                    <ul aria-expanded="false" class="collapse second-level">
                      <li class="sidebar-item">
                        <a href="error-400.html" class="sidebar-link">
                          <i class="mdi mdi-alert-outline"></i>
                          <span class="hide-menu"> Error 400 </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="error-403.html" class="sidebar-link">
                          <i class="mdi mdi-alert-outline"></i>
                          <span class="hide-menu"> Error 403</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="error-404.html" class="sidebar-link">
                          <i class="mdi mdi-alert-outline"></i>
                          <span class="hide-menu"> Error 404</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="error-500.html" class="sidebar-link">
                          <i class="mdi mdi-alert-outline"></i>
                          <span class="hide-menu"> Error 500</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="error-503.html" class="sidebar-link">
                          <i class="mdi mdi-alert-outline"></i>
                          <span class="hide-menu"> Error 503</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-animation.html" class="sidebar-link">
                      <i class="mdi mdi-debug-step-over"></i>
                      <span class="hide-menu">Animation</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-search-result.html" class="sidebar-link">
                      <i class="mdi mdi-search-web"></i>
                      <span class="hide-menu">Search Result</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-gallery.html" class="sidebar-link">
                      <i class="mdi mdi-camera-iris"></i>
                      <span class="hide-menu">Gallery</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-treeview.html" class="sidebar-link">
                      <i class="mdi mdi-file-tree"></i>
                      <span class="hide-menu">Treeview</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-block-ui.html" class="sidebar-link">
                      <i class="mdi mdi-codepen"></i>
                      <span class="hide-menu">Block UI</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-session-timeout.html" class="sidebar-link">
                      <i class="mdi mdi-timer-off"></i>
                      <span class="hide-menu">Session Timeout</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="pages-session-idle-timeout.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-timer-sand-empty"></i>
                      <span class="hide-menu">Session Idle Timeout</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-utility-classes.html" class="sidebar-link">
                      <i class="mdi mdi-tune"></i>
                      <span class="hide-menu">Helper Classes</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-maintenance.html" class="sidebar-link">
                      <i class="mdi mdi-camera-iris"></i>
                      <span class="hide-menu">Maintenance Page</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-apps"></i>
                  <span class="hide-menu">Apps</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="app-chats.html" class="sidebar-link">
                      <i class="mdi mdi-comment-processing-outline"></i>
                      <span class="hide-menu">Chat Message</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link"
                      href="app-contacts.html"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-account-box"></i>
                      <span class="hide-menu">Contact Table</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link"
                      href="app-notes.html"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-arrange-bring-forward"></i>
                      <span class="hide-menu">Notes</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link"
                      href="app-todo.html"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-clipboard-text"></i>
                      <span class="hide-menu">Todo</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link"
                      href="app-invoice.html"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-book"></i>
                      <span class="hide-menu">Invoice</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-inbox-arrow-down"></i>
                      <span class="hide-menu">Inbox</span>
                    </a>
                    <ul aria-expanded="false" class="collapse second-level">
                      <li class="sidebar-item">
                        <a href="inbox-email.html" class="sidebar-link">
                          <i class="mdi mdi-email"></i>
                          <span class="hide-menu"> Email </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="inbox-email-detail.html" class="sidebar-link">
                          <i class="mdi mdi-email-alert"></i>
                          <span class="hide-menu"> Email Detail </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="inbox-email-compose.html" class="sidebar-link">
                          <i class="mdi mdi-email-secure"></i>
                          <span class="hide-menu"> Email Compose </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="ti-user"></i>
                      <span class="hide-menu">Contacts</span>
                    </a>
                    <ul aria-expanded="false" class="collapse second-level">
                      <li class="sidebar-item">
                        <a href="contact-list.html" class="sidebar-link">
                          <i class="icon-people"></i>
                          <span class="hide-menu"> Contact List </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="contact-grid.html" class="sidebar-link">
                          <i class="icon-user-follow"></i>
                          <span class="hide-menu"> Contacts Grid </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-bookmark-plus-outline"></i>
                      <span class="hide-menu">Tickets</span>
                    </a>
                    <ul aria-expanded="false" class="collapse second-level">
                      <li class="sidebar-item">
                        <a href="ticket-list.html" class="sidebar-link">
                          <i class="mdi mdi-book-multiple"></i>
                          <span class="hide-menu"> Ticket List </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="ticket-detail.html" class="sidebar-link">
                          <i class="mdi mdi-book-plus"></i>
                          <span class="hide-menu"> Ticket Detail </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a href="app-taskboard.html" class="sidebar-link">
                      <i class="mdi mdi-bulletin-board"></i>
                      <span class="hide-menu"> Taskboard </span>
                    </a>
                  </li>
                </ul>
              </li>
              <div class="devider"></div>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-tune-vertical"></i>
                  <span class="hide-menu">Sidebar Type </span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a
                      href="sidebar-type-minisidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-view-quilt"></i>
                      <span class="hide-menu"> Minisidebar </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="sidebar-type-iconsidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-view-parallel"></i>
                      <span class="hide-menu"> Icon Sidebar </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="sidebar-type-overlaysidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-view-day"></i>
                      <span class="hide-menu"> Overlay Sidebar </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="sidebar-type-fullsidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-view-array"></i>
                      <span class="hide-menu"> Full Sidebar </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-content-copy"></i>
                  <span class="hide-menu">Page Layouts </span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a
                      href="layout-inner-fixed-left-sidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-format-align-left"></i>
                      <span class="hide-menu"> Inner Fixed Left Sidebar </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="layout-inner-fixed-right-sidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-format-align-right"></i>
                      <span class="hide-menu"> Inner Fixed Right Sidebar </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="layout-inner-left-sidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-format-float-left"></i>
                      <span class="hide-menu"> Inner Left Sidebar </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="layout-inner-right-sidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-format-float-right"></i>
                      <span class="hide-menu"> Inner Right Sidebar </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="page-layout-fixed-header.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-view-quilt"></i>
                      <span class="hide-menu"> Fixed Header </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="page-layout-fixed-sidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-view-parallel"></i>
                      <span class="hide-menu"> Fixed Sidebar </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="page-layout-fixed-header-sidebar.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-view-column"></i>
                      <span class="hide-menu">
                        Fixed Header &amp; Sidebar
                      </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      href="page-layout-boxed-layout.html"
                      class="sidebar-link"
                    >
                      <i class="mdi mdi-view-carousel"></i>
                      <span class="hide-menu"> Box Layout </span>
                    </a>
                  </li>
                </ul>
              </li>
              <div class="devider"></div>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-clipboard-text"></i>
                  <span class="hide-menu">Forms</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-collage"></i>
                      <span class="hide-menu">Form Elements</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a href="form-inputs.html" class="sidebar-link">
                          <i class="mdi mdi-priority-low"></i>
                          <span class="hide-menu"> Forms Input</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-input-groups.html" class="sidebar-link">
                          <i class="mdi mdi-rounded-corner"></i>
                          <span class="hide-menu"> Input Groups</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-input-grid.html" class="sidebar-link">
                          <i class="mdi mdi-select-all"></i>
                          <span class="hide-menu"> Input Grid</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-checkbox-radio.html" class="sidebar-link">
                          <i class="mdi mdi-shape-plus"></i>
                          <span class="hide-menu">
                            Checkboxes &amp; Radios</span
                          >
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="form-bootstrap-touchspin.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-switch"></i>
                          <span class="hide-menu"> Bootstrap Touchspin</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="form-bootstrap-switch.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-toggle-switch-off"></i>
                          <span class="hide-menu"> Bootstrap Switch</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-select2.html" class="sidebar-link">
                          <i class="mdi mdi-relative-scale"></i>
                          <span class="hide-menu"> Select2</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-dual-listbox.html" class="sidebar-link">
                          <i class="mdi mdi-tab-unselected"></i>
                          <span class="hide-menu"> Dual Listbox</span>
                        </a>
                      </li>
                      
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-receipt"></i>
                      <span class="hide-menu">Form Layouts</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a href="form-basic.html" class="sidebar-link">
                          <i class="mdi mdi-vector-difference-ba"></i>
                          <span class="hide-menu"> Basic Forms</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-horizontal.html" class="sidebar-link">
                          <i class="mdi mdi-file-document-box"></i>
                          <span class="hide-menu"> Form Horizontal</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-actions.html" class="sidebar-link">
                          <i class="mdi mdi-code-greater-than"></i>
                          <span class="hide-menu"> Form Actions</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-row-separator.html" class="sidebar-link">
                          <i class="mdi mdi-code-equal"></i>
                          <span class="hide-menu"> Row Separator</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-bordered.html" class="sidebar-link">
                          <i class="mdi mdi-flip-to-front"></i>
                          <span class="hide-menu"> Form Bordered</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-striped-row.html" class="sidebar-link">
                          <i class="mdi mdi-content-duplicate"></i>
                          <span class="hide-menu"> Striped Rows</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-detail.html" class="sidebar-link">
                          <i class="mdi mdi-cards-outline"></i>
                          <span class="hide-menu"> Form Detail</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-material.html" class="sidebar-link">
                          <i class="mdi mdi-content-duplicate"></i>
                          <span class="hide-menu"> Form Material</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-floating-input.html" class="sidebar-link">
                          <i class="mdi mdi-logout"></i>
                          <span class="hide-menu"> Form Float Input</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-code-equal"></i>
                      <span class="hide-menu">Form Addons</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a href="form-paginator.html" class="sidebar-link">
                          <i class="mdi mdi-export"></i>
                          <span class="hide-menu"> Paginator</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-img-cropper.html" class="sidebar-link">
                          <i class="mdi mdi-crop"></i>
                          <span class="hide-menu"> Image Cropper</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-dropzone.html" class="sidebar-link">
                          <i class="mdi mdi-crosshairs-gps"></i>
                          <span class="hide-menu"> Dropzone</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-mask.html" class="sidebar-link">
                          <i class="mdi mdi-box-shadow"></i>
                          <span class="hide-menu"> Form Mask</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-typeahead.html" class="sidebar-link">
                          <i class="mdi mdi-cards-variant"></i>
                          <span class="hide-menu"> Form Typehead</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="ui-custom-switch.html" class="sidebar-link">
                          <i class="mdi mdi-toggle-switch-off"></i>
                          <span class="hide-menu"> Custom Switch</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-alert-box"></i>
                      <span class="hide-menu">Form Validation</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a
                          href="form-bootstrap-validation.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-credit-card-scan"></i>
                          <span class="hide-menu"> Bootstrap Validation</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="form-custom-validation.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-credit-card-plus"></i>
                          <span class="hide-menu"> Custom Validation</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-pencil-box-outline"></i>
                      <span class="hide-menu">Form Pickers</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a
                          href="form-picker-colorpicker.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-calendar-plus"></i>
                          <span class="hide-menu"> Form Colorpicker</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="form-picker-datetimepicker.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-calendar-clock"></i>
                          <span class="hide-menu"> Form Datetimepicker</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="form-picker-bootstrap-rangepicker.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-calendar-range"></i>
                          <span class="hide-menu">
                            Form Bootstrap Rangepicker</span
                          >
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="form-picker-bootstrap-datepicker.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-calendar-check"></i>
                          <span class="hide-menu">
                            Form Bootstrap Datepicker</span
                          >
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="form-picker-material-datepicker.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-calendar-text"></i>
                          <span class="hide-menu">
                            Form Material Datepicker</span
                          >
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-dns"></i>
                      <span class="hide-menu">Form Editor</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a
                          href="form-editor-ckeditor.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-drawing"></i>
                          <span class="hide-menu">Ck Editor</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-editor-quill.html" class="sidebar-link">
                          <i class="mdi mdi-drupal"></i>
                          <span class="hide-menu">Quill Editor</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="form-editor-summernote.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-brightness-6"></i>
                          <span class="hide-menu">Summernote Editor</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="form-editor-tinymce.html" class="sidebar-link">
                          <i class="mdi mdi-bowling"></i>
                          <span class="hide-menu">Tinymce Edtor</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a href="form-wizard.html" class="sidebar-link">
                      <i class="mdi mdi-cube-send"></i>
                      <span class="hide-menu">Form Wizard</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="form-repeater.html" class="sidebar-link">
                      <i class="mdi mdi-creation"></i>
                      <span class="hide-menu">Form Repeater</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-table"></i>
                  <span class="hide-menu">Tables</span>
                  <span
                    class="
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
                    >11</span
                  >
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-border-none"></i>
                      <span class="hide-menu">Bootstrap Tables</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a href="table-basic.html" class="sidebar-link">
                          <i class="mdi mdi-border-all"></i>
                          <span class="hide-menu">Basic Table </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="table-dark-basic.html" class="sidebar-link">
                          <i class="mdi mdi-border-start"></i>
                          <span class="hide-menu">Dark Basic Table </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="table-sizing.html" class="sidebar-link">
                          <i class="mdi mdi-border-outside"></i>
                          <span class="hide-menu">Sizing Table </span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="table-layout-coloured.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-border-bottom"></i>
                          <span class="hide-menu">Coloured Table Layout</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-border-inside"></i>
                      <span class="hide-menu">Datatables</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a
                          href="table-datatable-basic.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-border-vertical"></i>
                          <span class="hide-menu"> Basic Initialisation</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="table-datatable-api.html" class="sidebar-link">
                          <i class="mdi mdi-blur-linear"></i>
                          <span class="hide-menu"> API</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="table-datatable-advanced.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-border-style"></i>
                          <span class="hide-menu">
                            Advanced Initialisation</span
                          >
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a href="table-bootstrap.html" class="sidebar-link">
                      <i class="mdi mdi-border-horizontal"></i>
                      <span class="hide-menu">Table Bootstrap</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="table-jsgrid.html" class="sidebar-link">
                      <i class="mdi mdi-border-top"></i>
                      <span class="hide-menu">Table Jsgrid</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="table-responsive.html" class="sidebar-link">
                      <i class="mdi mdi-border-style"></i>
                      <span class="hide-menu">Table Responsive</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="table-footable.html" class="sidebar-link">
                      <i class="mdi mdi-tab-unselected"></i>
                      <span class="hide-menu">Table Footable</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-chart-bar"></i>
                  <span class="hide-menu">Charts</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="chart-morris.html" class="sidebar-link">
                      <i class="mdi mdi-image-filter-tilt-shift"></i>
                      <span class="hide-menu">Morris Chart</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-chart-js.html" class="sidebar-link">
                      <i class="mdi mdi-svg"></i>
                      <span class="hide-menu">Chartjs</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-sparkline.html" class="sidebar-link">
                      <i class="mdi mdi-chart-histogram"></i>
                      <span class="hide-menu">Sparkline Chart</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="chart-chartist.html" class="sidebar-link">
                      <i class="mdi mdi-blur"></i>
                      <span class="hide-menu">Chartist Chart</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                      ><i class="mdi mdi-blur-radial"></i
                      ><span class="hide-menu">Apex Charts</span></a
                    >
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a href="chart-apex-line.html" class="sidebar-link"
                          ><i class="mdi mdi-chart-line"></i>
                          <span class="hide-menu">Line Chart</span></a
                        >
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-apex-area.html" class="sidebar-link"
                          ><i class="mdi mdi-chart-areaspline"></i>
                          <span class="hide-menu">Area Chart</span></a
                        >
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-apex-bar.html" class="sidebar-link"
                          ><i class="mdi mdi-chart-gantt"></i>
                          <span class="hide-menu">Bar Chart</span></a
                        >
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-apex-pie.html" class="sidebar-link"
                          ><i class="mdi mdi-chart-pie"></i>
                          <span class="hide-menu">Pie Chart</span></a
                        >
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-apex-radial.html" class="sidebar-link"
                          ><i class="mdi mdi-chart-arc"></i>
                          <span class="hide-menu">Radial Chart</span></a
                        >
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-apex-radar.html" class="sidebar-link"
                          ><i class="mdi mdi-hexagon-outline"></i>
                          <span class="hide-menu">Radar Chart</span></a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-chemical-weapon"></i>
                      <span class="hide-menu">C3 Charts</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a href="chart-c3-axis.html" class="sidebar-link">
                          <i class="mdi mdi-arrange-bring-to-front"></i>
                          <span class="hide-menu">Axis Chart</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-c3-bar.html" class="sidebar-link">
                          <i class="mdi mdi-arrange-send-to-back"></i>
                          <span class="hide-menu">Bar Chart</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-c3-data.html" class="sidebar-link">
                          <i class="mdi mdi-backup-restore"></i>
                          <span class="hide-menu">Data Chart</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-c3-line.html" class="sidebar-link">
                          <i class="mdi mdi-backburger"></i>
                          <span class="hide-menu">Line Chart</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="sidebar-link has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-chart-areaspline"></i>
                      <span class="hide-menu">Echarts</span>
                    </a>
                    <ul aria-expanded="false" class="collapse first-level">
                      <li class="sidebar-item">
                        <a href="chart-echart-basic.html" class="sidebar-link">
                          <i class="mdi mdi-chart-line"></i>
                          <span class="hide-menu">Basic Charts</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="chart-echart-bar.html" class="sidebar-link">
                          <i class="mdi mdi-chart-scatterplot-hexbin"></i>
                          <span class="hide-menu">Bar Chart</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a
                          href="chart-echart-pie-doughnut.html"
                          class="sidebar-link"
                        >
                          <i class="mdi mdi-chart-pie"></i>
                          <span class="hide-menu"
                            >Pie &amp; Doughnut Chart</span
                          >
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <div class="devider"></div>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-credit-card-multiple"></i>
                  <span class="hide-menu">Cards</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="ui-cards.html" class="sidebar-link">
                      <i class="mdi mdi-layers"></i>
                      <span class="hide-menu"> Basic Cards</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-card-customs.html" class="sidebar-link">
                      <i class="mdi mdi-credit-card-scan"></i>
                      <span class="hide-menu">Custom Cards</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-card-weather.html" class="sidebar-link">
                      <i class="mdi mdi-weather-fog"></i>
                      <span class="hide-menu">Weather Cards</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-card-draggable.html" class="sidebar-link">
                      <i class="mdi mdi-bandcamp"></i>
                      <span class="hide-menu">Draggable Cards</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-credit-card-multiple"></i>
                  <span class="hide-menu">Components</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="component-sweetalert.html" class="sidebar-link">
                      <i class="mdi mdi-layers"></i>
                      <span class="hide-menu"> Sweet Alert</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="component-nestable.html" class="sidebar-link">
                      <i class="mdi mdi-credit-card-scan"></i>
                      <span class="hide-menu">Nestable</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="component-noui-slider.html" class="sidebar-link">
                      <i class="mdi mdi-weather-fog"></i>
                      <span class="hide-menu">Noui slider</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="component-rating.html" class="sidebar-link">
                      <i class="mdi mdi-bandcamp"></i>
                      <span class="hide-menu">Rating</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="component-toastr.html" class="sidebar-link">
                      <i class="mdi mdi-poll"></i>
                      <span class="hide-menu">Toastr</span>
                    </a>
                  </li>
                </ul>
              </li>
              <div class="devider"></div>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-settings"></i>
                  <span class="hide-menu">Widgets </span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="widgets-feeds.html" class="sidebar-link">
                      <i class="mdi mdi-account-box"></i>
                      <span class="hide-menu"> Feed Widgets </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="widgets-apps.html" class="sidebar-link">
                      <i class="mdi mdi-comment-processing-outline"></i>
                      <span class="hide-menu"> Apps Widgets </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="widgets-data.html" class="sidebar-link">
                      <i class="mdi mdi-calendar"></i>
                      <span class="hide-menu"> Data Widgets </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="widgets-charts.html" class="sidebar-link">
                      <i class="mdi mdi-bulletin-board"></i>
                      <span class="hide-menu"> Charts Widgets</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-face"></i>
                  <span class="hide-menu">Icons</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="icon-material.html" class="sidebar-link">
                      <i class="mdi mdi-feather"></i>
                      <span class="hide-menu"> Feather Icons </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-material.html" class="sidebar-link">
                      <i class="mdi mdi-emoticon"></i>
                      <span class="hide-menu"> Material Icons </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-fontawesome.html" class="sidebar-link">
                      <i class="mdi mdi-emoticon-cool"></i>
                      <span class="hide-menu"> Fontawesome Icons</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-themify.html" class="sidebar-link">
                      <i class="mdi mdi-chart-bubble"></i>
                      <span class="hide-menu"> Themify Icons</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-weather.html" class="sidebar-link">
                      <i class="mdi mdi-weather-cloudy"></i>
                      <span class="hide-menu"> Weather Icons</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-simple-lineicon.html" class="sidebar-link">
                      <i class="mdi mdi mdi-image-broken-variant"></i>
                      <span class="hide-menu"> Simple Line icons</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="icon-flag.html" class="sidebar-link">
                      <i class="mdi mdi-flag-triangle"></i>
                      <span class="hide-menu"> Flag Icons</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="map-google.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-google-maps"></i>
                  <span class="hide-menu">Google Map</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="map-vector.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-map-marker-radius"></i>
                  <span class="hide-menu">Vector Map</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-account-multiple"></i>
                  <span class="hide-menu">Users</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="ui-user-card.html" class="sidebar-link">
                      <i class="mdi mdi-account-box"></i>
                      <span class="hide-menu"> User Card </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-profile.html" class="sidebar-link">
                      <i class="mdi mdi-account-network"></i>
                      <span class="hide-menu"> User Profile</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="ui-user-contacts.html" class="sidebar-link">
                      <i class="mdi mdi-account-star-variant"></i>
                      <span class="hide-menu"> User Contact</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-ungroup"></i>
                  <span class="hide-menu">Invoice</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="pages-invoice.html" class="sidebar-link">
                      <i class="mdi mdi-vector-triangle"></i>
                      <span class="hide-menu"> Invoice Layout </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="pages-invoice-list.html" class="sidebar-link">
                      <i class="mdi mdi-vector-rectangle"></i>
                      <span class="hide-menu"> Invoice List</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-apple-safari"></i>
                  <span class="hide-menu">Timeline</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="timeline-center.html" class="sidebar-link">
                      <i class="mdi mdi-clock-fast"></i>
                      <span class="hide-menu"> Center Timeline </span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="timeline-horizontal.html" class="sidebar-link">
                      <i class="mdi mdi-clock-end"></i>
                      <span class="hide-menu"> Horizontal Timeline</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="timeline-left.html" class="sidebar-link">
                      <i class="mdi mdi-clock-in"></i>
                      <span class="hide-menu"> Left Timeline</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="timeline-right.html" class="sidebar-link">
                      <i class="mdi mdi-clock-start"></i>
                      <span class="hide-menu"> Right Timeline</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="app-calendar.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-calendar-check"></i>
                  <span class="hide-menu">Calendar</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-notification-clear-all"></i>
                  <span class="hide-menu">Multi level dd</span>
                </a>
                <ul aria-expanded="false" class="collapse first-level">
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link">
                      <i class="mdi mdi-octagram"></i>
                      <span class="hide-menu"> item 1.1</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link">
                      <i class="mdi mdi-octagram"></i>
                      <span class="hide-menu"> item 1.2</span>
                    </a>
                  </li>
                  <li class="sidebar-item">
                    <a
                      class="has-arrow sidebar-link"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-playlist-plus"></i>
                      <span class="hide-menu">Menu 1.3</span>
                    </a>
                    <ul aria-expanded="false" class="collapse second-level">
                      <li class="sidebar-item">
                        <a href="javascript:void(0)" class="sidebar-link">
                          <i class="mdi mdi-octagram"></i>
                          <span class="hide-menu"> item 1.3.1</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="javascript:void(0)" class="sidebar-link">
                          <i class="mdi mdi-octagram"></i>
                          <span class="hide-menu"> item 1.3.2</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="javascript:void(0)" class="sidebar-link">
                          <i class="mdi mdi-octagram"></i>
                          <span class="hide-menu"> item 1.3.3</span>
                        </a>
                      </li>
                      <li class="sidebar-item">
                        <a href="javascript:void(0)" class="sidebar-link">
                          <i class="mdi mdi-octagram"></i>
                          <span class="hide-menu"> item 1.3.4</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="sidebar-item">
                    <a href="javascript:void(0)" class="sidebar-link">
                      <i class="mdi mdi-playlist-check"></i>
                      <span class="hide-menu"> item 1.4</span>
                    </a>
                  </li>
                </ul>
              </li>
              <div class="devider"></div>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="../../../docs/documentation.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-adjust text-danger"></i>
                  <span class="hide-menu">Documentation</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="authentication-login3.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-adjust text-info"></i>
                  <span class="hide-menu">Log Out</span>
                </a>
              </li>
              <li class="sidebar-item">
                <a
                  class="sidebar-link waves-effect waves-dark sidebar-link"
                  href="pages-faq.html"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-adjust text-success"></i>
                  <span class="hide-menu">FAQs</span>
                </a>
              </li>
            </ul>
          </nav>
          <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
      </aside>
      <!-- ============================================================== -->
      <!-- End Left Sidebar - style you can find in sidebar.scss  -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Page wrapper  -->
      <!-- ============================================================== -->
      <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <div class="page-breadcrumb border-bottom">
          <div class="row">
            <div
              class="
                col-lg-3 col-md-4 col-xs-12
                justify-content-start
                d-flex
                align-items-center
              "
            >
              <h5 class="font-weight-medium text-uppercase mb-0">Dashboard</h5>
            </div>
            <div
              class="
                col-lg-9 col-md-8 col-xs-12
                d-flex
                justify-content-start justify-content-md-end
                align-self-center
              "
            >
              <nav aria-label="breadcrumb" class="mt-2">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              <button class="btn btn-danger text-white ms-3 d-none d-md-block">
                Buy Ample Admin
              </button>
            </div>
          </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="page-content container-fluid">
          <!-- ============================================================== -->
          <!-- Card Group  -->
          <!-- ============================================================== -->
          <div class="card-group">
            <div class="card p-2 p-lg-3">
              <div class="p-lg-3 p-2">
                <div class="d-flex align-items-center">
                  <button
                    class="btn btn-circle btn-danger text-white btn-lg"
                    href="javascript:void(0)"
                  >
                    <i class="ti-clipboard"></i>
                  </button>
                  <div class="ms-4" style="width: 38%">
                    <h4 class="fw-normal">Total Projects</h4>
                    <div class="progress">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="40"
                      ></div>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <h2 class="display-7 mb-0">23</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-2 p-lg-3">
              <div class="p-lg-3 p-2">
                <div class="d-flex align-items-center">
                  <button
                    class="btn btn-circle btn-cyan text-white btn-lg"
                    href="javascript:void(0)"
                  >
                    <i class="ti-wallet"></i>
                  </button>
                  <div class="ms-4" style="width: 38%">
                    <h4 class="fw-normal">Total Earnings</h4>
                    <div class="progress">
                      <div
                        class="progress-bar bg-cyan"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="40"
                      ></div>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <h2 class="display-7 mb-0">76</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="card p-2 p-lg-3">
              <div class="p-lg-3 p-2">
                <div class="d-flex align-items-center">
                  <button
                    class="btn btn-circle btn-warning text-white btn-lg"
                    href="javascript:void(0)"
                  >
                    <i class="fas fa-dollar-sign"></i>
                  </button>
                  <div class="ms-4" style="width: 38%">
                    <h4 class="fw-normal">Total Earnings</h4>
                    <div class="progress">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="40"
                      ></div>
                    </div>
                  </div>
                  <div class="ms-auto">
                    <h2 class="display-7 mb-0">83</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- Products yearly sales, Weather Cards Section  -->
          <!-- ============================================================== -->
          <div class="row">
            <div class="d-flex align-items-stretch col-lg-8">
              <div class="card w-100">
                <div class="card-body">
                  <div class="d-md-flex align-items-center">
                    <h5 class="card-title">Products Yearly Sales</h5>
                    <ul class="list-inline dl mb-0 ms-auto">
                      <li class="list-inline-item text-danger">
                        <i class="fa fa-circle"></i> Mac
                      </li>
                      <li class="list-inline-item text-info">
                        <i class="fa fa-circle"></i> Windows
                      </li>
                    </ul>
                  </div>

                  <div id="products-yearly-sales"></div>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-stretch col-lg-4">
              <div class="card w-100">
                <div class="bg-danger d-flex justify-content-center">
                  <div
                    id="week-sales"
                    class="mx-auto"
                    style="height: 304px"
                  ></div>
                </div>
                <div class="p-4">
                  <div class="d-flex align-items-center">
                    <div>
                      <h4 class="font-weight-medium card-title">Week Sales</h4>
                      <h5 class="card-subtitle mb-0">Ios app - 160 sales</h5>
                    </div>
                    <div class="ms-auto">
                      <button
                        class="btn btn-circle btn-info text-white btn-lg"
                        href="javascript:void(0)"
                      >
                        <i class="ti-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- Manage Table & Walet Cards Section  -->
          <!-- ============================================================== -->
          <div class="row">
            <div class="col-lg-8 d-flex align-items-stretch">
              <div class="card w-100">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs manage-tabs" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#users"
                      role="tab"
                    >
                      <span class="hidden-sm-up">
                        <h4><i data-feather="users" class="feather-sm"></i></h4>
                      </span>
                      <span class="d-none d-md-block">Select Users</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="tab"
                      href="#permissions"
                      role="tab"
                    >
                      <span class="hidden-sm-up">
                        <h4><i data-feather="lock" class="feather-sm"></i></h4>
                      </span>
                      <span class="d-none d-md-block">Set Permissions</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="tab"
                      href="#messages"
                      role="tab"
                    >
                      <span class="hidden-sm-up">
                        <h4>
                          <i data-feather="file-text" class="feather-sm"></i>
                        </h4>
                      </span>
                      <span class="d-none d-md-block">Message Users</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="tab"
                      href="#save"
                      role="tab"
                    >
                      <span class="hidden-sm-up">
                        <h4>
                          <i data-feather="check-circle" class="feather-sm"></i>
                        </h4>
                      </span>
                      <span class="d-none d-md-block">Save and Finish</span>
                    </a>
                  </li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                  <div class="tab-pane active" id="users" role="tabpanel">
                    <div class="row py-4 px-5 no-gutters mt-3">
                      <div
                        class="col-sm-12 col-md-6 d-flex justify-content-start"
                      >
                        <h3 class="card-title mb-0">Select Users to Manage</h3>
                      </div>
                      <div
                        class="col-sm-12 col-md-6 justify-content-end d-flex"
                      >
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" class="btn btn-secondary">
                            <i data-feather="user-plus" class="feather-sm"></i>
                            <span class="ms-2 fw-normal fs-4">Add User</span>
                          </button>
                          <button type="button" class="btn btn-secondary">
                            <i data-feather="edit-2" class="feather-sm"></i>
                            <span class="ms-2 fw-normal">Edit User</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="bg-light">
                      <div
                        class="
                          table-responsive
                          border-top
                          manage-table
                          px-4
                          py-3
                        "
                      >
                        <table class="table no-wrap">
                          <thead>
                            <tr>
                              <th scope="col" class="border-0"></th>
                              <th scope="col" class="border-0"></th>
                              <th scope="col" class="border-0">Name</th>
                              <th scope="col" class="border-0">Position</th>
                              <th scope="col" class="border-0">Joined</th>
                              <th scope="col" class="border-0">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="advanced-table active">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c1"
                                    checked=""
                                  />
                                  <label class="form-check-label" for="c1"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/1.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Andrew Simons</td>
                              <td>Modulator</td>
                              <td>6 May 2021</td>
                              <td>Gujrat, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c2"
                                  />
                                  <label class="form-check-label" for="c2"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/2.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Hanna Gover</td>
                              <td>Admin</td>
                              <td>13 Jan 2005</td>
                              <td>Texas, United states</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c3"
                                  />
                                  <label class="form-check-label" for="c3"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/3.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Nirav</td>
                              <td>Admin</td>
                              <td>21 Mar 2001</td>
                              <td>Bhavnagar, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c4"
                                  />
                                  <label class="form-check-label" for="c4"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/4.jpg"
                                  class="rounded-circle"
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
                    <div class="d-flex align-items-center p-4 mt-2">
                      <h3 class="card-title mb-0">1 members selected</h3>
                      <div class="ms-auto">
                        <button
                          class="
                            btn btn-danger
                            text-white
                            btn-rounded
                            py-2
                            px-3
                          "
                        >
                          Next <i class="ti-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="permissions" role="tabpanel">
                    <div class="row py-4 px-5 no-gutters mt-3">
                      <div
                        class="col-sm-12 col-md-6 d-flex justify-content-start"
                      >
                        <h3 class="card-title mb-0">Set User Permission</h3>
                      </div>
                      <div
                        class="col-sm-12 col-md-6 justify-content-end d-flex"
                      >
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" class="btn btn-secondary">
                            <i data-feather="user-plus" class="feather-sm"></i>
                            <span class="ms-2 fw-normal fs-4">Add User</span>
                          </button>
                          <button type="button" class="btn btn-secondary">
                            <i data-feather="edit-2" class="feather-sm"></i>
                            <span class="ms-2 fw-normal">Edit User</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="bg-light">
                      <div
                        class="
                          table-responsive
                          border-top
                          manage-table
                          px-4
                          py-3
                        "
                      >
                        <table class="table no-wrap">
                          <thead>
                            <tr>
                              <th scope="col" class="border-0"></th>
                              <th scope="col" class="border-0"></th>
                              <th scope="col" class="border-0">Name</th>
                              <th scope="col" class="border-0">Position</th>
                              <th scope="col" class="border-0">Joined</th>
                              <th scope="col" class="border-0">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c5"
                                  />
                                  <label class="form-check-label" for="c5"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/1.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Andrew Simons</td>
                              <td>Modulator</td>
                              <td>6 May 2021</td>
                              <td>Gujrat, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table active">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c6"
                                    checked=""
                                  />
                                  <label class="form-check-label" for="c6"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/2.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Hanna Gover</td>
                              <td>Admin</td>
                              <td>13 Jan 2005</td>
                              <td>Texas, United states</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c7"
                                  />
                                  <label class="form-check-label" for="c7"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/3.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Nirav</td>
                              <td>Admin</td>
                              <td>21 Mar 2001</td>
                              <td>Bhavnagar, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c8"
                                  />
                                  <label class="form-check-label" for="c8"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/4.jpg"
                                  class="rounded-circle"
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
                    <div class="d-flex align-items-center p-4 mt-2">
                      <h3 class="card-title mb-0">1 members selected</h3>
                      <div class="ms-auto">
                        <button
                          class="
                            btn btn-danger
                            text-white
                            btn-rounded
                            py-2
                            px-3
                          "
                        >
                          Next <i class="ti-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="messages" role="tabpanel">
                    <div class="row py-4 px-5 no-gutters mt-3">
                      <div
                        class="col-sm-12 col-md-6 d-flex justify-content-start"
                      >
                        <h3 class="card-title mb-0">Manage Users</h3>
                      </div>
                      <div
                        class="col-sm-12 col-md-6 justify-content-end d-flex"
                      >
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" class="btn btn-secondary">
                            <i data-feather="user-plus" class="feather-sm"></i>
                            <span class="ms-2 fw-normal fs-4">Add User</span>
                          </button>
                          <button type="button" class="btn btn-secondary">
                            <i data-feather="edit-2" class="feather-sm"></i>
                            <span class="ms-2 fw-normal">Edit User</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="bg-light">
                      <div
                        class="
                          table-responsive
                          border-top
                          manage-table
                          px-4
                          py-3
                        "
                      >
                        <table class="table no-wrap">
                          <thead>
                            <tr>
                              <th scope="col" class="border-0"></th>
                              <th scope="col" class="border-0"></th>
                              <th scope="col" class="border-0">Name</th>
                              <th scope="col" class="border-0">Position</th>
                              <th scope="col" class="border-0">Joined</th>
                              <th scope="col" class="border-0">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c9"
                                  />
                                  <label class="form-check-label" for="c9"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/1.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Andrew Simons</td>
                              <td>Modulator</td>
                              <td>6 May 2021</td>
                              <td>Gujrat, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c10"
                                  />
                                  <label class="form-check-label" for="c10"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/2.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Hanna Gover</td>
                              <td>Admin</td>
                              <td>13 Jan 2005</td>
                              <td>Texas, United states</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table active">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c11"
                                    checked=""
                                  />
                                  <label class="form-check-label" for="c11"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/3.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Nirav</td>
                              <td>Admin</td>
                              <td>21 Mar 2001</td>
                              <td>Bhavnagar, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c12"
                                  />
                                  <label class="form-check-label" for="c12"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/4.jpg"
                                  class="rounded-circle"
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
                    <div class="d-flex align-items-center p-4 mt-2">
                      <h3 class="card-title mb-0">1 members selected</h3>
                      <div class="ms-auto">
                        <button
                          class="
                            btn btn-danger
                            text-white
                            btn-rounded
                            py-2
                            px-3
                          "
                        >
                          Next <i class="ti-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="save" role="tabpanel">
                    <div class="row py-4 px-5 no-gutters mt-3">
                      <div
                        class="col-sm-12 col-md-6 d-flex justify-content-start"
                      >
                        <h3 class="card-title mb-0">Save & Finish</h3>
                      </div>
                      <div
                        class="col-sm-12 col-md-6 justify-content-end d-flex"
                      >
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" class="btn btn-secondary">
                            <i data-feather="user-plus" class="feather-sm"></i>
                            <span class="ms-2 fw-normal fs-4">Add User</span>
                          </button>
                          <button type="button" class="btn btn-secondary">
                            <i data-feather="edit-2" class="feather-sm"></i>
                            <span class="ms-2 fw-normal">Edit User</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="bg-light">
                      <div
                        class="
                          table-responsive
                          border-top
                          manage-table
                          px-4
                          py-3
                        "
                      >
                        <table class="table no-wrap">
                          <thead>
                            <tr>
                              <th scope="col" class="border-0"></th>
                              <th scope="col" class="border-0"></th>
                              <th scope="col" class="border-0">Name</th>
                              <th scope="col" class="border-0">Position</th>
                              <th scope="col" class="border-0">Joined</th>
                              <th scope="col" class="border-0">Location</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c13"
                                  />
                                  <label class="form-check-label" for="c13"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/1.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Andrew Simons</td>
                              <td>Modulator</td>
                              <td>6 May 2021</td>
                              <td>Gujrat, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c14"
                                  />
                                  <label class="form-check-label" for="c14"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/2.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Hanna Gover</td>
                              <td>Admin</td>
                              <td>13 Jan 2005</td>
                              <td>Texas, United states</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c15"
                                  />
                                  <label class="form-check-label" for="c15"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/3.jpg"
                                  class="rounded-circle"
                                  width="30"
                                />
                              </td>
                              <td>Joshi Nirav</td>
                              <td>Admin</td>
                              <td>21 Mar 2001</td>
                              <td>Bhavnagar, India</td>
                            </tr>
                            <tr>
                              <td colspan="6" class="sml-pd"></td>
                            </tr>
                            <tr class="advanced-table active">
                              <td class="ps-3">
                                <div class="form-check">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="c16"
                                    checked=""
                                  />
                                  <label class="form-check-label" for="c16"
                                    >&nbsp;</label
                                  >
                                </div>
                              </td>
                              <td>
                                <img
                                  src="../../assets/images/users/4.jpg"
                                  class="rounded-circle"
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
                    <div class="d-flex align-items-center p-4 mt-2">
                      <h3 class="card-title mb-0">1 members selected</h3>
                      <div class="ms-auto">
                        <button
                          class="
                            btn btn-danger
                            text-white
                            btn-rounded
                            py-2
                            px-3
                          "
                        >
                          Next <i class="ti-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="card-body">
                  <div class="d-flex mt-3">
                    <button
                      class="btn btn-circle btn-success text-white btn-lg"
                      href="javascript:void(0)"
                    >
                      <i class="ti-plus"></i>
                    </button>
                    <div class="ms-3">
                      <h2 class="display-6">$456.90</h2>
                      <h5 class="fw-light">Your wallet Balance</h5>
                    </div>
                  </div>
                  <div id="wallet-balance" class="mt-3"></div>
                </div>
                <ul class="list-style-none">
                  <li class="py-2 px-4 border-top">
                    <div class="d-flex align-items-center">
                      <i class="ti-wallet font-24 text-info"></i>
                      <a href="#" class="ms-3 fs-4">Withdrow money</a>
                    </div>
                  </li>
                  <li class="py-2 px-4 border-top">
                    <div class="d-flex align-items-center">
                      <i class="ti-bag font-24 text-info"></i>
                      <a href="#" class="ms-3 fs-4">Shop Now</a>
                    </div>
                  </li>
                  <li class="py-2 px-4 border-top">
                    <div class="d-flex align-items-center">
                      <i class="ti-briefcase font-24 text-info"></i>
                      <a href="#" class="ms-3 fs-4">Add funds</a>
                    </div>
                  </li>
                  <li class="py-2 px-4 border-top">
                    <div class="d-flex align-items-center">
                      <i class="ti-wallet font-24 text-info"></i>
                      <a href="#" class="ms-3 fs-4">Shop Now</a>
                    </div>
                  </li>
                  <li class="py-2 px-4 border-top">
                    <div class="d-flex align-items-center">
                      <i class="ti-wallet font-24 text-info"></i>
                      <a href="#" class="ms-3 fs-4">Withdrow money</a>
                    </div>
                  </li>
                  <li class="py-2 px-4 border-top">
                    <div class="d-flex align-items-center">
                      <i class="ti-bag font-24 text-info"></i>
                      <a href="#" class="ms-3 fs-4">Shop Now</a>
                    </div>
                  </li>
                  <li class="py-2 px-4 border-top">
                    <div class="d-flex align-items-center">
                      <i class="ti-wallet font-24 text-info"></i>
                      <a href="#" class="ms-3 fs-4">Withdrow money</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- User Table & Profile Cards Section  -->
          <!-- ============================================================== -->
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-0">Manage Users</h5>
                </div>
                <div class="table-responsive">
                  <table class="table no-wrap user-table mb-0">
                    <thead class="table-light">
                      <tr>
                        <th
                          scope="col"
                          class="border-0 fs-4 font-weight-medium ps-4"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          class="border-0 fs-4 font-weight-medium"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="border-0 fs-4 font-weight-medium"
                        >
                          Occupation
                        </th>
                        <th
                          scope="col"
                          class="border-0 fs-4 font-weight-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          class="border-0 fs-4 font-weight-medium"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          class="border-0 fs-4 font-weight-medium"
                        >
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="ps-4">1</td>
                        <td>
                          <h5 class="font-weight-medium mb-0">
                            Daniel Kristeen
                          </h5>
                          <span class="text-muted">Texas, Unitedd states</span>
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
                            class="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" class="text-info edit"
                            ><i
                              data-feather="eye"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                          <a
                            href="javascript:void(0)"
                            class="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-4">2</td>
                        <td>
                          <h5 class="font-weight-medium mb-0">Emma Smith</h5>
                          <span class="text-muted">Texas, Unitedd states</span>
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
                            class="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" class="text-info edit"
                            ><i
                              data-feather="eye"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                          <a
                            href="javascript:void(0)"
                            class="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-4">3</td>
                        <td>
                          <h5 class="font-weight-medium mb-0">
                            Olivia Johnson
                          </h5>
                          <span class="text-muted">Texas, Unitedd states</span>
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
                            class="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" class="text-info edit"
                            ><i
                              data-feather="eye"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                          <a
                            href="javascript:void(0)"
                            class="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-4">4</td>
                        <td>
                          <h5 class="font-weight-medium mb-0">
                            Isabella Williams
                          </h5>
                          <span class="text-muted">Texas, Unitedd states</span>
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
                            class="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" class="text-info edit"
                            ><i
                              data-feather="eye"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                          <a
                            href="javascript:void(0)"
                            class="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-4">5</td>
                        <td>
                          <h5 class="font-weight-medium mb-0">Sophia Jones</h5>
                          <span class="text-muted">Texas, Unitedd states</span>
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
                            class="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" class="text-info edit"
                            ><i
                              data-feather="eye"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                          <a
                            href="javascript:void(0)"
                            class="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="ps-4">6</td>
                        <td>
                          <h5 class="font-weight-medium mb-0">
                            Charlotte Brown
                          </h5>
                          <span class="text-muted">Texas, Unitedd states</span>
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
                            class="form-select category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <a href="javascript:void(0)" class="text-info edit"
                            ><i
                              data-feather="eye"
                              class="feather-sm fill-white"
                            ></i
                          ></a>
                          <a
                            href="javascript:void(0)"
                            class="text-dark delete ms-2"
                            ><i
                              data-feather="trash-2"
                              class="feather-sm fill-white"
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
          <!-- ============================================================== -->
          <!-- Todo list & Calender application  -->
          <!-- ============================================================== -->
          <div class="row">
            <div class="col-lg-4 d-flex align-items-stretch">
              <div class="card w-100">
                <div class="d-flex align-items-center px-3 py-4 border-bottom">
                  <div>
                    <h4 class="card-title">To-do List</h4>
                    <h5 class="card-subtitle mb-0">This Months Task</h5>
                  </div>
                  <div class="ms-auto">
                    <button
                      class="btn btn-danger text-white btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#addtask"
                    >
                      Add Task
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="todo-widget">
                    <ul
                      class="list-task todo-list list-group mb-0"
                      data-role="tasklist"
                    >
                      <li
                        class="list-group-item border-0 mb-0 pb-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          class="
                            form-check
                            border-start border-2 border-info
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            class="form-check-input ms-2"
                            id="inputSchedule"
                            name="inputCheckboxesSchedule"
                          />
                          <label
                            for="inputSchedule"
                            class="form-check-label ps-2 fw-normal"
                          >
                            <span>Schedule meeting with</span>
                          </label>
                        </div>
                        <ul class="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Steave"
                            />
                          </li>
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Jessica"
                            />
                          </li>
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
                              src="../../assets/images/users/3.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Priyanka"
                            />
                          </li>
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
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
                        class="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          class="
                            form-check
                            border-start border-2 border-danger
                            ps-1
                            d-flex
                          "
                        >
                          <input
                            type="checkbox"
                            class="form-check-input ms-2"
                            id="inputCall"
                            name="inputCheckboxesCall"
                          />
                          <label
                            for="inputCall"
                            class="form-check-label ps-2 fw-normal"
                          >
                            <span>Give Purchase report to</span>
                            <span class="badge bg-light-danger text-danger"
                              >Today</span
                            >
                          </label>
                        </div>
                        <ul class="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
                              src="../../assets/images/users/3.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Priyanka"
                            />
                          </li>
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
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
                        class="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          class="
                            form-check
                            border-start border-2 border-primary
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            class="form-check-input ms-2"
                            id="inputBook"
                            name="inputCheckboxesBook"
                          />
                          <label
                            for="inputBook"
                            class="form-check-label ps-2 fw-normal"
                          >
                            <span>Book flight for holiday</span>
                          </label>
                        </div>
                        <div
                          class="
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
                        class="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          class="
                            form-check
                            border-start border-2 border-warning
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            class="form-check-input ms-2"
                            id="inputForward"
                            name="inputCheckboxesForward"
                          />
                          <label
                            for="inputForward"
                            class="form-check-label ps-2 fw-normal"
                          >
                            <span>Forward all tasks</span>
                            <span class="badge bg-light-warning text-warning"
                              >2 weeks</span
                            >
                          </label>
                        </div>
                        <div
                          class="
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
                        class="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          class="
                            form-check
                            border-start border-2 border-primary
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            class="form-check-input ms-2"
                            id="inputRecieve"
                            name="inputCheckboxesRecieve"
                          />
                          <label
                            for="inputRecieve"
                            class="form-check-label ps-2 fw-normal"
                          >
                            <span>Recieve shipment</span>
                          </label>
                        </div>
                        <div
                          class="
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
                        class="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          class="
                            form-check
                            border-start border-2 border-info
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            class="form-check-input ms-2"
                            id="inputpayment"
                            name="inputCheckboxespayment"
                          />
                          <label
                            for="inputpayment"
                            class="form-check-label ps-2 fw-normal"
                          >
                            <span>Send payment today</span>
                          </label>
                        </div>
                        <div
                          class="
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
                        class="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                        data-role="task"
                      >
                        <div
                          class="
                            form-check
                            border-start border-2 border-success
                            ps-1
                          "
                        >
                          <input
                            type="checkbox"
                            class="form-check-input ms-2"
                            id="inputForward2"
                            name="inputCheckboxesd"
                          />
                          <label
                            for="inputForward2"
                            class="form-check-label ps-2 fw-normal"
                          >
                            <span>Important tasks</span>
                            <span class="badge bg-light-success text-success"
                              >2 weeks</span
                            >
                          </label>
                        </div>
                        <ul class="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
                              src="../../assets/images/users/1.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Assign to Steave"
                            />
                          </li>
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
                              src="../../assets/images/users/2.jpg"
                              alt="user"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-original-title="Assign to Jessica"
                            />
                          </li>
                          <li class="list-inline-item">
                            <img
                              class="rounded-circle"
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
                <!-- Modal -->
                <div
                  class="modal fade"
                  id="addtask"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header d-flex align-items-center">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Add Task
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                            <label for="text_name">Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="text_name"
                              placeholder="Enter your Name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="txt_email">Email Address</label>
                            <input
                              type="email"
                              class="form-control"
                              id="txt_email"
                              placeholder="Enter Email"
                            />
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 d-flex align-items-stretch">
              <div class="card w-100 scrollable" style="max-height: 716px;">
                <div class="calender-sidebar app-calendar p-4">
                  <div id="calendar"></div>
                </div>
                <!-- BEGIN MODAL -->
                <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title" id="eventModalLabel">
                                  Add / Edit Event
                              </h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                              <div class="row">
                                  <div class="col-md-12">
                                      <div class="">
                                          <label class="form-label">Event Title</label>
                                          <input id="event-title" type="text" class="form-control" />
                                      </div>
                                  </div>
                                  <div class="col-md-12 mt-4">
                                      <div><label class="form-label">Event Color</label></div>
                                      <div class="d-flex">
                                          <div class="n-chk">
                                              <div class="form-check form-check-primary form-check-inline">
                                                  <input class="form-check-input" type="radio" name="event-level" value="Danger" id="modalDanger" />
                                                  <label class="form-check-label" for="modalDanger">Danger</label>
                                              </div>
                                          </div>
                                          <div class="n-chk">
                                              <div class="form-check form-check-warning form-check-inline">
                                                  <input class="form-check-input" type="radio" name="event-level" value="Success" id="modalSuccess" />
                                                  <label class="form-check-label" for="modalSuccess">Success</label>
                                              </div>
                                          </div>
                                          <div class="n-chk">
                                              <div class="form-check form-check-success form-check-inline">
                                                  <input class="form-check-input" type="radio" name="event-level" value="Primary" id="modalPrimary" />
                                                  <label class="form-check-label" for="modalPrimary">Primary</label>
                                              </div>
                                          </div>
                                          <div class="n-chk">
                                              <div class="form-check form-check-danger form-check-inline">
                                                  <input class="form-check-input" type="radio" name="event-level" value="Warning" id="modalWarning" />
                                                  <label class="form-check-label" for="modalWarning">Warning</label>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="col-md-12 d-none">
                                      <div class="">
                                          <label class="form-label">Enter Start Date</label>
                                          <input id="event-start-date" type="text" class="form-control" />
                                      </div>
                                  </div>

                                  <div class="col-md-12 d-none">
                                      <div class="">
                                          <label class="form-label">Enter End Date</label>
                                          <input id="event-end-date" type="text" class="form-control" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn" data-bs-dismiss="modal">
                                  Close
                              </button>
                              <button type="button" class="btn btn-success btn-update-event" data-fc-event-public-id="">
                                  Update changes
                              </button>
                              <button type="button" class="btn btn-primary btn-add-event">
                                  Add Event
                              </button>
                          </div>
                      </div>
                  </div>
                </div>
                <!-- END MODAL -->
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- Social Cards  -->
          <!-- ============================================================== -->
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../assets/images/big/img1.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <span class="text-muted"
                      ><i
                        data-feather="calendar"
                        class="feather-sm text-info"
                      ></i>
                      May 16</span
                    >
                    <div class="ms-auto">
                      <a href="javascript:void(0)" class="text-muted"
                        ><i
                          data-feather="heart"
                          class="feather-sm text-danger"
                        ></i>
                        30</a
                      >
                    </div>
                  </div>
                  <h4 class="mt-3">Top 20 Models are on the ramp</h4>
                  <p class="mt-3 text-muted">
                    Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper
                    quam.
                  </p>
                  <button
                    class="
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
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../assets/images/big/img2.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <span class="text-muted"
                      ><i
                        data-feather="calendar"
                        class="feather-sm text-info"
                      ></i>
                      May 16</span
                    >
                    <div class="ms-auto">
                      <a href="javascript:void(0)" class="text-muted"
                        ><i
                          data-feather="heart"
                          class="feather-sm text-danger"
                        ></i>
                        30</a
                      >
                    </div>
                  </div>
                  <h4 class="mt-3">Top 20 Models are on the ramp</h4>
                  <p class="mt-3 text-muted">
                    Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper
                    quam.
                  </p>
                  <button
                    class="
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
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../assets/images/big/img3.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <div class="d-flex align-items-center mb-3">
                    <span class="text-muted"
                      ><i
                        data-feather="calendar"
                        class="feather-sm text-info"
                      ></i>
                      May 16</span
                    >
                    <div class="ms-auto">
                      <a href="javascript:void(0)" class="text-muted"
                        ><i
                          data-feather="heart"
                          class="feather-sm text-danger"
                        ></i>
                        30</a
                      >
                    </div>
                  </div>
                  <h4 class="mt-3">Top 20 Models are on the ramp</h4>
                  <p class="mt-3 text-muted">
                    Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper
                    quam.
                  </p>
                  <button
                    class="
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
          <!-- ============================================================== -->
          <!-- Chat App, Timeline & Chat Listing  -->
          <!-- ============================================================== -->
          <div class="row">
            <div class="col-md-12 col-lg-4 d-flex align-items-stretch">
              <div class="card w-100">
                <h5 class="card-title p-3 card-header mb-0">Chat Listing</h5>
                <div class="p-3">
                  <ul class="list-style-none chat-list">
                    <li class="mb-3">
                      <a href="javascript:void(0)">
                        <div class="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/1.jpg"
                            class="rounded-circle"
                            width="40"
                          />
                          <div class="ms-3">
                            <h5 class="mb-0">Varun Dhavan</h5>
                            <small class="text-success">Online</small>
                          </div>
                          <div class="ms-auto chat-icon">
                            <button
                              type="button"
                              class="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" class="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              class="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                class="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="javascript:void(0)">
                        <div class="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/2.jpg"
                            class="rounded-circle"
                            width="40"
                          />
                          <div class="ms-3">
                            <h5 class="mb-0">Akshay Kumar</h5>
                            <small class="text-muted">Offline</small>
                          </div>
                          <div class="ms-auto chat-icon">
                            <button
                              type="button"
                              class="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" class="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              class="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                class="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="javascript:void(0)">
                        <div class="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/3.jpg"
                            class="rounded-circle"
                            width="40"
                          />
                          <div class="ms-3">
                            <h5 class="mb-0">Shraddha Kapoor</h5>
                            <small class="text-success">Online</small>
                          </div>
                          <div class="ms-auto chat-icon">
                            <button
                              type="button"
                              class="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" class="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              class="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                class="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="javascript:void(0)">
                        <div class="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/4.jpg"
                            class="rounded-circle"
                            width="40"
                          />
                          <div class="ms-3">
                            <h5 class="mb-0">Madhuri Dixit</h5>
                            <small class="text-danger">Busy</small>
                          </div>
                          <div class="ms-auto chat-icon">
                            <button
                              type="button"
                              class="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" class="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              class="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                class="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="javascript:void(0)">
                        <div class="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/5.jpg"
                            class="rounded-circle"
                            width="40"
                          />
                          <div class="ms-3">
                            <h5 class="mb-0">Shaina Nehwal</h5>
                            <small class="text-muted">Offline</small>
                          </div>
                          <div class="ms-auto chat-icon">
                            <button
                              type="button"
                              class="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" class="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              class="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                class="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="javascript:void(0)">
                        <div class="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/6.jpg"
                            class="rounded-circle"
                            width="40"
                          />
                          <div class="ms-3">
                            <h5 class="mb-0">Varun Dhavan</h5>
                            <small class="text-success">Online</small>
                          </div>
                          <div class="ms-auto chat-icon">
                            <button
                              type="button"
                              class="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" class="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              class="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                class="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="javascript:void(0)">
                        <div class="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/2.jpg"
                            class="rounded-circle"
                            width="40"
                          />
                          <div class="ms-3">
                            <h5 class="mb-0">Akshay Kumar</h5>
                            <small class="text-muted">Offline</small>
                          </div>
                          <div class="ms-auto chat-icon">
                            <button
                              type="button"
                              class="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" class="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              class="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                class="feather-sm"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div class="d-flex align-items-center">
                          <img
                            src="../../assets/images/users/3.jpg"
                            class="rounded-circle"
                            width="40"
                          />
                          <div class="ms-3">
                            <h5 class="mb-0">Shraddha Kapoor</h5>
                            <small class="text-success">Online</small>
                          </div>
                          <div class="ms-auto chat-icon">
                            <button
                              type="button"
                              class="
                                btn btn-light-success
                                text-success
                                btn-circle btn-circle
                              "
                            >
                              <i data-feather="phone" class="feather-sm"></i>
                            </button>
                            <button
                              type="button"
                              class="
                                btn btn-light-info
                                text-info
                                btn-circle btn-circle
                                ms-2
                              "
                            >
                              <i
                                data-feather="message-circle"
                                class="feather-sm"
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
            <div class="col-md-12 col-lg-4 d-flex align-items-stretch">
              <div class="card w-100">
                <h5 class="card-title p-3 card-header mb-0">User Activity</h5>
                <div class="card-body scrollable" style="height: 598px">
                  <div class="steamline mt-0">
                    <div class="sl-item">
                      <div class="sl-left">
                        <button
                          type="button"
                          class="
                            btn btn-success btn-circle btn-circle
                            text-white
                          "
                        >
                          <i class="ti-user"></i>
                        </button>
                      </div>
                      <div class="sl-right">
                        <div class="d-flex align-items-center">
                          <h5 class="mb-0">John Doe</h5>
                          <span class="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p class="mt-1">Contrary to popular belief</p>
                      </div>
                    </div>
                    <div class="sl-item">
                      <div class="sl-left">
                        <button
                          type="button"
                          class="btn btn-info btn-circle btn-circle text-white"
                        >
                          <i class="fas fa-image"></i>
                        </button>
                      </div>
                      <div class="sl-right">
                        <div class="d-flex align-items-center">
                          <h5 class="mb-0">Hritik Roshan</h5>
                          <span class="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p class="mt-1">Lorem Ipsum is simply dummy</p>
                        <div class="row mb-3">
                          <div class="col">
                            <img
                              src="../../assets/images/big/img1.jpg"
                              class="img-fluid"
                            />
                          </div>
                          <div class="col">
                            <img
                              src="../../assets/images/big/img2.jpg"
                              class="img-fluid"
                            />
                          </div>
                          <div class="col">
                            <img
                              src="../../assets/images/big/img3.jpg"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sl-item">
                      <div class="sl-left">
                        <img
                          src="../../assets/images/users/1.jpg"
                          alt="user"
                          class="rounded-circle"
                        />
                      </div>
                      <div class="sl-right">
                        <div class="d-flex align-items-center">
                          <h5 class="mb-0">Gohn Doe</h5>
                          <span class="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p class="mt-1">The standard chunk of ipsum</p>
                      </div>
                    </div>
                    <div class="sl-item">
                      <div class="sl-left">
                        <img
                          src="../../assets/images/users/2.jpg"
                          alt="user"
                          class="rounded-circle"
                        />
                      </div>
                      <div class="sl-right">
                        <div class="d-flex align-items-center">
                          <h5 class="mb-0">Herry Deo</h5>
                          <span class="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p class="">Contrary to popular belief hi there..!</p>
                      </div>
                    </div>
                    <div class="sl-item">
                      <div class="sl-left">
                        <img
                          src="../../assets/images/users/5.jpg"
                          alt="user"
                          class="rounded-circle"
                        />
                      </div>
                      <div class="sl-right">
                        <div class="d-flex align-items-center">
                          <h5 class="mb-0">Tiger Sroff</h5>
                          <span class="sl-date ms-2">5 minutes ago</span>
                        </div>
                        <p class="mt-1">The generated lorem ipsum</p>
                        <button
                          class="btn btn-outline-success btn-rounded mb-3"
                        >
                          Approve
                        </button>
                        <button
                          class="btn btn-outline-danger btn-rounded mb-3 ms-2"
                        >
                          Refuse
                        </button>
                      </div>
                    </div>
                    <div class="sl-item">
                      <div class="sl-left">
                        <button
                          type="button"
                          class="
                            btn btn-success btn-circle btn-circle
                            text-white
                          "
                        >
                          <i class="ti-user"></i>
                        </button>
                      </div>
                      <div class="sl-right">
                        <div class="d-flex align-items-center">
                          <h5 class="mb-0">Peterson</h5>
                          <span class="sl-date ms-2">15 minutes ago</span>
                        </div>
                        <p class="mt-1">Contrary to popular belief</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-4 d-flex align-items-stretch">
              <div class="card w-100">
                <h5 class="card-title p-3 card-header mb-0">Recent Chat</h5>
                <div class="card-body">
                  <div class="chat-box scrollable" style="height: 434px">
                    <!--chat Row -->
                    <ul class="chat-list m-0 p-0">
                      <!--chat Row -->
                      <li class="mt-4">
                        <div class="chat-img d-inline-block align-top">
                          <img
                            src="../../assets/images/users/1.jpg"
                            alt="user"
                            class="rounded-circle"
                          />
                        </div>
                        <div class="chat-content ps-3 d-inline-block">
                          <h5 class="text-muted fs-3 fw-normal">
                            James Anderson
                          </h5>
                          <div
                            class="
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
                          class="
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
                      <!--chat Row -->
                      <li class="mt-4">
                        <div class="chat-img d-inline-block align-top">
                          <img
                            src="../../assets/images/users/2.jpg"
                            alt="user"
                            class="rounded-circle"
                          />
                        </div>
                        <div class="chat-content ps-3 d-inline-block">
                          <h5 class="text-muted fs-3 fw-normal">Bianca Doe</h5>
                          <div
                            class="
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
                          class="
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
                      <!--chat Row -->
                      <li class="odd mt-4">
                        <div class="chat-content ps-3 d-inline-block text-end">
                          <div
                            class="
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
                          class="
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
                      <!--chat Row -->
                      <li class="odd mt-4">
                        <div class="chat-content ps-3 d-inline-block text-end">
                          <div
                            class="
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
                          class="
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
                      <!--chat Row -->
                      <li class="mt-4">
                        <div class="chat-img d-inline-block align-top">
                          <img
                            src="../../assets/images/users/3.jpg"
                            alt="user"
                            class="rounded-circle"
                          />
                        </div>
                        <div class="chat-content ps-3 d-inline-block">
                          <h5 class="text-muted fs-3 fw-normal">
                            Angelina Rhodes
                          </h5>
                          <div
                            class="
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
                          class="
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
                      <!--chat Row -->
                      <li class="mt-4">
                        <div class="chat-img d-inline-block align-top">
                          <img
                            src="../../assets/images/users/1.jpg"
                            alt="user"
                            class="rounded-circle"
                          />
                        </div>
                        <div class="chat-content ps-3 d-inline-block">
                          <h5 class="text-muted fs-3 fw-normal">
                            James Anderson
                          </h5>
                          <div
                            class="
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
                          class="
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
                      <!--chat Row -->
                      <li class="odd mt-4">
                        <div class="chat-content ps-3 d-inline-block text-end">
                          <div
                            class="
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
                          class="
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
                <div class="card-body border-top">
                  <div class="row">
                    <div class="col-9">
                      <div class="input-field mt-0 mb-0">
                        <input
                          type="text"
                          id="textarea1"
                          placeholder="Type and enter"
                          class="form-control border-0"
                        />
                      </div>
                    </div>
                    <div class="col-3 text-end">
                      <a
                        class="btn-circle btn-lg btn-success btn text-white"
                        href="javascript:void(0)"
                        ><i data-feather="send" class="feather-sm"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== -->
        <footer class="footer text-center">
          All Rights Reserved by Ample admin. .
        </footer>
        <!-- ============================================================== -->
        <!-- End footer -->
        <!-- ============================================================== -->
      </div>
      <!-- ============================================================== -->
      <!-- End Page wrapper  -->
      <!-- ============================================================== -->
    </div>
  )
}

export default TextNav