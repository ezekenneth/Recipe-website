import React from 'react'
import Banner from '../components/Banner';
import Productcard from '../components/ProductCard';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>

        <div className='container-fluid'>           
           <Banner />
        </div>
        <div>
         <Searchbar />
       </div>

        {/* store list */}

        
        <div className="container py-3 text-center">
                <h1 className="fw-bold"> Choose your favourite meal</h1>
        </div>

        <div className="container rounded-3 p-3">


              {/*categories */}

              <div className='d-flex justify-content-between mx-3'>

              <div className='d-flex justify-content-start mb-2'>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle btn-danger fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
              </div>
              <p className='text-danger fw-bold'>
                 See all <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </p>

              </div>
          
            <div className="row mx-auto">
                
                  <Productcard />
                  
                <div className="col-sm-6 col-md-3">
                   <div className="card text-center m-1 bg-background">
                        <img src="src/assets/images/friedrice.gif" alt="friedrice" className="rounded-3 mx-auto " height="200px" width="100%" />
                        <h5>Fried Rice</h5>
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
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center m-1 bg-background">
                        <img src="src/assets/images/egusisoup.jpeg" alt="egusisoup" className="rounded-3 mx-auto " height="200px" width="100%" />
                        <h5 className='p-1'>Egusi soup</h5>
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
                <div className="col-sm-6 col-md-3">
                   <div className="card text-center m-1 bg-background">
                        <img src="src/assets/images/edikaikong.jpeg" alt="edikaikong" className="rounded-3 mx-auto " height="200px" width="100%" />
                        <h5>Edikaikong</h5>
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
                <div className="col-sm-6 col-md-3">

                  <div className="card text-center m-1 bg-background">
                        <img src="src/assets/images/moimoi.jpeg" alt="moimoi" className="rounded-3 mx-auto " height="200px" width="100%" />
                        <h5>Moi moi</h5>
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
                <div className="col-sm-6 col-md-3 ">
                    <div className="card text-center m-1 bg-background">
                        <img src="src/assets/images/nkwobi.jpeg" alt="nkwobi" className="rounded-3 mx-auto " height="200px" width="100%" />
                        <h5>Nkwobi</h5>
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
                <div className="col-sm-6 col-md-3 ">
                    <div className="card text-center m-1 bg-background">
                        <img src="ofe-nsala.jpeg" alt="ofe-nsala" className="rounded-pill mx-auto " height="70%" width="70%" />
                        <h5>Ofe nsala</h5>
                        <p className="price"><strong>#600</strong></p>
                        <p><button className="btn btn-danger">Add to cart</button></p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center m-1 bg-background">
                        <img src="Fried-Yam.jpeg" alt="Fried-Yam" className="rounded-pill mx-auto " height="70%" width="70%" />
                        <h5>Fried Yam</h5>
                        <p className="price"><strong>#500</strong></p>
                        <p><button className="btn btn-danger">Add to cart</button></p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center m-1 bg-background">
                        <img src="Goat-meat-pepper-soup.jpeg" alt="Goat-meat-pepper-soup" className="rounded-pill mx-auto " height="70%" width="70%" />
                        <h5>Goat Meat pepper soup</h5>
                        <p className="price"><strong>#1500</strong></p>
                        <p><button className="btn btn-danger">Add to cart</button></p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center m-1 bg-background">
                        <img src="supagheti.jpeg" alt="supagheti" className="rounded-pill mx-auto " height="70%" width="70%" />
                        <h5>supagheti</h5>
                        <p className="price"><strong>#500</strong></p>
                        <p><button className="btn btn-danger">Add to cart</button></p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center m-1 bg-background">
                        <img src="ChickenSalad.jpeg" alt="ChickenSalad" className="rounded-pill mx-auto " height="70%" width="70%" />
                        <h5>Chicken salad</h5>
                        <p className="price"><strong>#1500</strong></p>
                        <p><button className="btn btn-danger">Add to cart</button></p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card text-center m-1 bg-background">
                        <img src="coconutrice.jpeg" alt="coconutrice" className="rounded-pill mx-auto " height="70%" width="70%" />
                        <h5>Coconut Rice</h5>
                        <p className="price"><strong>#800</strong></p>
                        <p><button className="btn btn-danger">Add to cart</button></p>
                    </div>
                </div>
               

           </div>

        </div>
        <Footer />
            
    </>
  )
}

export default Home
