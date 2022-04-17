import { Button } from 'bootstrap';
import React from 'react';

const ServicesDetails = ({service}) => {
          const {name,img,description,price} = service
          return (
                    <div className="col-sm-12 col-md-6 col-lg-4 g-4">
                    <div className="card h-100   text-light">
                      <img src={img} className="card-img-top img-fluid p-4" alt="..."/>
                      <div className="card-body bg-dark text-light">
                        <h5 className="card-title">{name}</h5>
                        <p>Price:{price}</p>
                        <p className="card-text">{description}</p>
                      </div>
                      <div className="card-footer">
                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        <button className='btn btn-primary'>Service Details</button>
                      </div>
                    </div>
                  </div> 
          );
};

export default ServicesDetails;