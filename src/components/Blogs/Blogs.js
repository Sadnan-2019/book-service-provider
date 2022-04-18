import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-4">Answer The Question</h1>
        <div className="row g-4 my-5">
          <div
            className="col-md-6 col-lg-6   "
            //   data-aos="fade-down"
            //   data-aos-offset="300"
            //   data-aos-delay="5000"
            //   data-aos-duration="3000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          >
            <div className="p-3   text-light    bg-dark">
              <h5 className="text-light">
                Difference between authorization and authentication?
              </h5>
              <h6
                data-aos="fade-up-right"
                data-aos-offset="300"
                data-aos-delay="5000"
                data-aos-duration="3000"
              >
                 
                <span className="text-info">Authentication:</span> Authentication is the act of validating that
                users are whom they claim to be.This is the first step in any
                security process.Username & Password are the most common
                authentication factors if a user enter the correct datathe
                system assums the identify valid and accept access.<br></br>
                <span className="text-info">Authorization :</span> 
                Authorization in a system security is the process of giving the use permission
                 to access a specific resources.This terms of the used in changeable with acces or
                 clint privillige.User shouls first prove that identites an admin grant access. 
              </h6>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-6 text-light"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="p-3    bg-dark">
              <img
                src="https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="container">
      
        <div className="row g-4 my-5">
          <div
            className="col-md-6 col-lg-6   "
            //   data-aos="fade-down"
            //   data-aos-offset="300"
            //   data-aos-delay="5000"
            //   data-aos-duration="3000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          >
            <div className="p-3   text-light    bg-dark">
              <h5 className="text-light">
              Why are you using firebase? What other options do you have to implement authentication?
              </h5>
              <h6
                data-aos="fade-up-right"
                data-aos-offset="300"
                data-aos-delay="5000"
                data-aos-duration="3000"
              >
                 
                <span className="text-info">Why are you using firebase:</span>  Firebase provided
                
                authentication system backend services,easy to create user sign in reset password
                verify email hosting easy to use SDK.Firebase provided also social plateform like
                google,twiter,apple,microsoft etc.
                
                .<br></br>
                <span className="text-info">What other options do you have to implement authentication:</span> 
               Bank card,Ratina Scans,Voice Recognition,Fingerprints, 
              </h6>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-6 text-light"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="p-3    bg-dark">
              <img
                src="https://firebase.google.com/images/products/auth/auth-3.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      
        <div className="row g-4 my-5">
          <div
            className="col-md-6 col-lg-6   "
            //   data-aos="fade-down"
            //   data-aos-offset="300"
            //   data-aos-delay="5000"
            //   data-aos-duration="3000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          >
            <div className="p-3   text-light    bg-dark">
              <h5 className="text-light">
              What other services does firebase provide other than authentication?
              </h5>
              <h6
                data-aos="fade-up-right"
                data-aos-offset="300"
                data-aos-delay="5000"
                data-aos-duration="3000"
              >
                 
      

                <li className="text-info">Parse – Open Source Backend Platform</li>   
                <li className="text-info">Back4app – Parse Hosting Platform</li>   
                <li className="text-info">Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise</li>   
                <li className="text-info">Backendless – Mobile Backend and API Services Platform</li>   
                 
                <li className="text-info">Kumulos – App Performance Management</li>   
                <li className="text-info">Game Sparks – Game Backend Platform</li>   
                <li className="text-info">Amplify JS – Open-source Javascript framework</li>
                <p>More than authentication have fire base.</p>   
              </h6>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-6 text-light"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="p-3    bg-dark">
              <img
                src="https://static.javatpoint.com/tutorial/firebase/images/firebase-introduction2.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
