import user from "../../assets/images/user.png";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDungeon,
  faEnvelope,
  faLocationPin,
  faMessage,
  faMobilePhone,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from 'react'
import Select from 'react-select'

const Profile = () => {

    const category = [
        { value: 'electric', label: 'Electric' },
        { value: 'garden', label: 'Garden' },
        { value: 'civil', label: 'Civil' }
      ]
      

  return (
    <section>
      <div class="form-container">
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <div className="card mx-auto">
            
              <div class="card-body text-center ">
              <img src={user} alt="avatar" className="rounded-circle img-fluid image-size" />  

              

                {/* <div>
                  <h5 class="my-2">John Smith</h5>
                  <FontAwesomeIcon icon={faEnvelope} /> user@gmail.com <br />
                  <FontAwesomeIcon icon={faLocationPin} /> 1333 south park
                  street <br />
                  <FontAwesomeIcon icon={faMobileScreen} /> +1 252 4152251{" "}
                  <br />
                </div> */}

                <div className="col-12 form my-2">
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        id="firstName"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        id="lastName"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile No"
                        name="mobileno"
                        id="mobileno"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        id="address"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        id="password"
                      />
                    </div>
                    <Select isMulti options={category} />

                    <div className="d-grid mt-3">
                      <center>
                        <button type="submit" className="btn btn-secondary">
                          Update
                        </button>
                      </center>
                    </div>
                  </form>
                </div>

                {/* 
                <div className="edit-button d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-secondary">
                    Edit Profile
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Mobile</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;
