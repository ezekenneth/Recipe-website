import React from 'react'

const Singleproduct = () => {
  return (
    <>

    <div className='single-product p-5'>

        <div className='row'>
            <div className='col-6'>
            <img src="src/assets/images/friedrice.gif" alt="friedrice" className="rounded-3 mx-auto " height="200px" width="100%" />
            </div>
            <div className='col-6'>
            <h5>Fried Rice</h5>
                        <div className='d-flex justify-content-between px-2'>
                            <p className="price"><strong>#600</strong></p>
                            <p><button className="btn btn-sm btn-outline-danger"></button></p>
                        </div>
                        <div className='d-flex justify-content-between px-2'>
                            <p><button className="btn btn-danger btn-sm">Buy Now</button></p>
                            <p><button className="btn btn-danger rounded-circle mx-auto  btn-sm fw-bold">+</button></p>
                        </div>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Singleproduct
