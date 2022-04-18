import React from 'react';

const Footer = () => {
          return (
                    <div>
                       <footer className='bg-dark col-12 col-sm-12 col-md-6  col-lg-12' style={{height:"100px"}}>

                         <div className='d-flex justify-content-center align-items-center' >

                         <img className='m-2' style={{height:"25px"}} src='https://cdn.freebiesupply.com/logos/large/2x/google-plus-3-logo-png-transparent.png' alt=''></img>
                          <img className='m-2'  style={{height:"25px"}} src='https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png' alt=''></img>
                          <img className='m-2'  style={{height:"25px"}} src='https://png.pngtree.com/element_our/md/20180524/md_5b072d393d61e.jpg' alt=''></img>
                         </div>
                              <p className='text-center text-light'>copy-right &copy; 2022 </p>

                                 </footer>       
                    </div>
          );
};

export default Footer;