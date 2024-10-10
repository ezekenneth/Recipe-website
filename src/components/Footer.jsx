import React from 'react'

const Footer = () => {
  return (
    <>
       <footer>
           <div className='row bg-danger'>
              <div className='col-12'>
                <p className='text-white pt-3 fw-5'>
                    &copy;{new Date().getFullYear()} powered by Eze ken
                </p>

              </div>

           </div>


       </footer>
    </>
  )
}

export default Footer
