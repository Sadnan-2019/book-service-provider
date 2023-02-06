import React from 'react';
import "./Banner.css"

const Banner = () => {
          return (
                    <div>
                        <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel" data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div class="carousel-caption  mt-5   ">
        {/* <h2>First slide label</h2>
        <h3>Some representative placeholder content for the first slide.</h3> */}
      </div>
            <img
              src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80"
              className="d-block w-100 vh-80   img-thumbnail   img-fluid   "
              alt="..."
              style={{height:"600px"}}
            />
            <div className="text">
              {/* <h1 className='text-light'>Book is more than </h1> */}
            </div>
         
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1535905748047-14b2415c77d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80 "
              className="d-block w-100 img-fluid vh-80   img-thumbnail "
              alt="..." style={{height:"600px"}}
            />
             <div className="text">
              {/* <h1 className='text-light'>Book is more than one </h1> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80"
              className="d-block w-100 img-fluid vh-80  img-thumbnail" 
              alt="..." style={{height:"600px"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>   
                    </div>
          );
};

export default Banner;
