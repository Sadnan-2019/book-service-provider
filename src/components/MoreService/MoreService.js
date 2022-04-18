import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MoreService = () => {
          const {serviceID }=useParams()
// const [more,setMore] = useState({})
          

//           useEffect(()=>{

//           fetch(`books.json/${serviceID}`)
          
//           .then(res => res.json())
//           .then(data=>setMore(data))
//           },[])
          return (
                    <div>
                          

                         <div className='App'>
                                   <h4>If you are agree to checkout</h4>
                       <Link to="/checkout">

                       <button className='btn btn-info'> Please Checkout</button> 
                       </Link>
                         </div>
                             
                    </div>
          );
};

export default MoreService;