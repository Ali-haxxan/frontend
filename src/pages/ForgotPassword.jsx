import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const ForgotPassword = () => {

  const radiusTopBottomLeft45 = {
    "borderBottomLeftRadius": "45px",
    "borderTopLeftRadius": "45px",
    "marginLeft": "-25px"
                }
                const color = {
                  color: "#929292"
                }
                const radius45 = {
                  "borderRadius": "45px",
                }
  return (
    <>
      <NavBar/>
        <div className="d-flex justify-content-center m-5">
          <div className="d-flex col-lg-8 col-md-10 col-sm-12 bg-light mt-5" style={radius45}>

            <div className="col-5 d-none d-lg-block justify-content-start" >
              <img className=""   src="/asset/pictures/passwords.jpg" alt="" width="100%" height="100%" style={radiusTopBottomLeft45}/>
            </div>
              <div className="m-5 mt-4 ">
                <div className=" p-2">
                  <img src="/asset/pictures/reached.png" alt="" width="180px" height="150px"/>
                </div>
                <div>
                  <h3 className='pl-2' style={color}>Reset Your Password!</h3>
                  <div className="">
                    <div className="col-12">
                        <input className="mt-4 form-control form-control-lg " type="email" placeholder="Email address"/>
                        <Link to={"/"} className="my-4 py-2 form-control form-control-lg btn btn-primary">Reset Password</Link>

                    </div>
                    <Link className='pl-2' to={"/login"}  style={color} >Back to Login</Link>
                  </div>
                </div>
              </div>

          </div>
        </div>
      <Footer/>
    </>
  )
}

export default ForgotPassword