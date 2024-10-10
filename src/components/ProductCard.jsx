import React from 'react'

const Productcard = () => {
  return (
    <>      
         <div className="col-sm-6 col-md-3">
                <div className="card text-center m-1 bg-background">
                    <img src="src/assets/images/jollofrice.jpeg" alt="jollofrice" className="rounded-3 mx-auto" height="200px" width="100%" />
                    <h5>Jollof Rice</h5>
                    <div className='d-flex justify-content-between px-2'>
                        <p className="price"><strong>#600</strong></p>
                        <p><button className="btn btn-sm btn-outline-danger">Read more...</button></p>
                    </div>
                    <div className='d-flex justify-content-between px-2'>
                        <p><button className="btn btn-danger btn-sm">Buy Now</button></p>
                        <p><button className="btn btn-danger rounded-circle mx-auto  btn-sm fw-bold">+</button></p>
                    </div>
                </div>
            </div>
        
    </>
  )
}

export default Productcard
