import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const Services = () => {

          const [services,setServices] = useState([]);
          useEffect(()=>{

                    fetch(`books.json`)
                    .then(res => res.json())
                    .then(data =>setServices(data))
          },[])
          return (
                    <div>
                              {/* <h2>{services.length}</h2> */}
                              <h2 className='text-center text-primary'>Our Services</h2>
                            <div className='container'>

                                      <div className='row'>
                                      {
                                        services.map(service=>
                                        <ServicesDetails 
                                        key={service.id}
                                        service={service}
                                        >


                                        </ServicesDetails>)
                              }
                                      </div>
                            </div>
                    </div>
          );
};

export default Services;