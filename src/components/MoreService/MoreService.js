import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MoreService = () => {
  const { serviceID } = useParams();
  const [services, setServices] = useState([]);
  // const [servicesDetails,setServicesDetails] = useState([]);

  useEffect(() => {
    fetch(`/books.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const details = services.find((s) => s.id === serviceID);

 

  return (
    <div>
      <div className="App my-5">
       

        <h3>Name:{details?.name}</h3>
        <img src={details?.img} alt="" />
        <h6>Price:${details?.price}</h6>
        <h4>If you are agree to checkout</h4>
        <Link to="/checkout">
          <button className="btn btn-info"> Please Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default MoreService;
