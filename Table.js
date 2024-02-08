import React from 'react'

function Table() {
  return (
   
       <div className=" container card pt-3">
      
            <div className="card-body">
              <h4 className="card-title">Dark Table</h4>
              <h6 className="card-subtitle lh-base">
                You can also invert the colors—with light text on dark
                backgrounds—with .table-dark class with .table class.
              </h6>
            </div>
            <div className="table-responsive">
              <table
                className="
                  table
                  customize-table
                  table-dark table-striped
                  mb-0
                  v-middle
                "
              >
                <thead className="bg-dark">
                  <tr>
                    <th>User</th>
                    <th>Project Name</th>
                    <th>Users</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/users/1.jpg"
                          className="rounded-circle"
                          width="40"
                        />
                        <span className="ms-3 fw-normal">John Smith</span>
                      </div>
                    </td>
                    <td>Xtreme admin</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#">
                          <img
                            src="../../assets/images/users/1.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="../../assets/images/users/2.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="../../assets/images/users/4.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <span
                        className="badge bg-light-success text-success fw-normal"
                        >Active</span
                      >
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            data-feather="more-horizontal"
                            className="feather-sm"
                          ></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li><a className="dropdown-item" href="#">Edit</a></li>
                          <li><a className="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/users/1.jpg"
                          className="rounded-circle"
                          width="40"
                        />
                        <span className="ms-3 fw-normal">Robert Smith</span>
                      </div>
                    </td>
                    <td>Adminpro admin</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#">
                          <img
                            src="../../assets/images/users/5.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="../../assets/images/users/6.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <span
                        className="badge bg-light-warning text-warning fw-normal"
                        >Pending</span
                      >
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            data-feather="more-horizontal"
                            className="feather-sm"
                          ></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li><a className="dropdown-item" href="#">Edit</a></li>
                          <li><a className="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/users/1.jpg"
                          className="rounded-circle"
                          width="40"
                        />
                        <span className="ms-3 fw-normal">Maria Hernandez</span>
                      </div>
                    </td>
                    <td>Monster admin</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#">
                          <img
                            src="../../assets/images/users/1.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="../../assets/images/users/2.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="../../assets/images/users/4.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-light-info text-info fw-normal"
                        >Completed</span
                      >
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            data-feather="more-horizontal"
                            className="feather-sm"
                          ></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li><a className="dropdown-item" href="#">Edit</a></li>
                          <li><a className="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/users/1.jpg"
                          className="rounded-circle"
                          width="40"
                        />
                        <span className="ms-3 fw-normal">Maria Rodriguez</span>
                      </div>
                    </td>
                    <td>Materialpro admin</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#">
                          <img
                            src="../../assets/images/users/1.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="../../assets/images/users/4.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <span
                        className="badge bg-light-warning text-warning fw-normal"
                        >Pending</span
                      >
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            data-feather="more-horizontal"
                            className="feather-sm"
                          ></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li><a className="dropdown-item" href="#">Edit</a></li>
                          <li><a className="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/users/1.jpg"
                          className="rounded-circle"
                          width="40"
                        />
                        <span className="ms-3 fw-normal">Mary Deo</span>
                      </div>
                    </td>
                    <td>Elegant admin</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a href="#">
                          <img
                            src="../../assets/images/users/1.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="../../assets/images/users/2.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="../../assets/images/users/4.jpg"
                            className="
                              rounded-circle
                              me-n2
                              card-hover
                              border border-2 border-white
                            "
                            width="35"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-light-danger text-danger fw-normal"
                        >Cancel</span
                      >
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            data-feather="more-horizontal"
                            className="feather-sm"
                          ></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li><a className="dropdown-item" href="#">Edit</a></li>
                          <li><a className="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
       
          
  ) 
}

export default Table;