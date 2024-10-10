import React from 'react'
import BannerImg from "../assets/images/BannerImg.png"
import './css/Banner.css'
import { useMediaQuery } from 'react-responsive';

const Banner = () => {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

  return (

<div>
          {isDesktopOrLaptop ? (
            <div className='Desktop_view shadow-sm m-10 bg-light' id='BannerD'>
              <div className=''>
                    <div className='row'>
                        <div className='col' id='bannertx'>
                            <div className='mt-4' id='Btext'>Fastest </div>
                            <div className=''><span className='text-danger fw-bold'>Food</span> Booking</div>
                            <div className=''>Order your favourite meal</div>
                            <div className='ms-3'>
                            <div className='btn rounded-pill btn-danger mt-3 btn-lg ms-4'>Get started</div>
                            </div>
                        </div>
                        <div className='col'>
                            <img src={BannerImg} alt='banner'className=' h-100 w-100 pt-3'/>
                        </div>
            
                    </div>
               </div>
          
         </div>
          ) : (
    <div className='mobile_view shadow-sm m-4 bg-light' id='BannerM'>

        <div className='row m-3'>
            <div className='col mt-5 mb-2'>
                 <div className=' fs-1' id='Btext'>Fastest </div>
                 <div className='mt-2 ms-2 '><span className='text-danger'>Food</span> Booking</div>
                 <div className='btn rounded-pill btn-danger mt-2 ms-4 '>Get started</div>
            </div>
            <div className='col'>
                  <img src={BannerImg} alt='banner'className=' h-100 w-100 pt-3'/>
            </div>


        </div>
      
     </div>
  )}
</div>
  )
}

export default Banner
