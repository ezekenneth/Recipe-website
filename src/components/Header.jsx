import React from 'react'
import { useMediaQuery } from 'react-responsive';
import "./css/Header.css"
import Searchbar from '../components/Searchbar';

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });


  return (
    <>
       <div>
      {isDesktopOrLaptop && <DesktopContent />}
      {isTabletOrMobile && <MobileContent />}
       </div>
    </>
  )
}

function DesktopContent() {
    return (
       <div>
        desktop Content
       </div>
    );
  }
  
  function MobileContent() {
    return (
    <>
       <div className='mobile-view'>
           <div className='row bg-danger p-3Name'>
             <div className='col-6 nav-item d-flex'>
               <div className='row mt-1'>
                    <div className='col-6'>
                    <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                       <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                             <a className="nav-link active" aria-current="page" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Contact us</a>
                            </li>
                       </ul>
                    </div>
                    </div>
                    <div className='col-6'>
                        <h2 className='text-white nav-brand'>Foodi</h2>
                    </div>
               </div>
             </div>
             <div className='col-6 nav-item justify-content-between pt-1'>
             <div className='row'>
                    <div className='col-4 mt-1 d-flex px-2'>
                    <div className="dropdown">
                    <button className="btn btn-secondary text-white btn-sm dropdown-toggle transparent-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <i className="fa fa-user-o nav-icon" aria-hidden="true"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Login</a></li>
                        <li><a className="dropdown-item" href="#">Sign up</a></li>
                    </ul>
                    </div>
                    </div>
                    <div className='col-4 d-flex px-2'>
                      <div className='dropdown d-flex mt-1'>
                         <i className="fa fa-cart-arrow-down nav-icon" aria-hidden="true"></i>
                      </div>
                      <div className='cart-bagde'>
                         <span className="badge bg-white text-dark fs-8 rounded-circle">0</span>
                         
                      </div>

                    </div>
                    <div className='col-4 mt-1 px-2'>
                      <i className="fa fa-heart-o nav-icon" aria-hidden="true"></i>
                    </div>
               </div>
             </div>
             
           </div>
       </div>
       
     </>

    );
  }

export default Header
