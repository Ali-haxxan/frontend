import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Signup = () => {
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const signUp = async (e)=>{
    setErr(null);
    e.preventDefault();
    let fullname = e.target.fullname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    if (fullname && email && password !== "") {
      const submit_data = await fetch("https://cautious-tiara-tuna.cyclic.app/user/register", {
        method: "POST",
        body: JSON.stringify(
          {
            "fullname": fullname,
            "email": email,
            "password":password
        }
        ),
        headers: { "Content-Type": "application/json" },
      });
      if (submit_data.status === 200) {

        setSuccess("User Reegistered successfully!")
        setErr(null);
        
      }  
      if(submit_data.status === 409){
        setErr("User alrady exist!");
        setSuccess(null)
      }
    }else{
      setErr("Please enter email and password!");
      setSuccess(null)


    }
  }
  const color = {
    color: "#929292"
  }
  const radiusTopBottomRight45 = {
                "borderBottomRightRadius": "45px",
                "borderTopRightRadius": "45px "
                }
  const radius45={
    "borderRadius": "45px"
  }
  return (
    <>
      <NavBar/>
        <div className="d-flex justify-content-center m-5">
          <div className="d-flex col-lg-8 col-md-10 col-sm-12 bg-light mt-5" style={radius45} >

            <div className=" mt-4 col-lg-7 col-md-12 col-sm-12">
              <div className="pl-2 py-2 mb-1">
                <img src="/asset/pictures/reached.png" alt="" width="160px" height="125px"/>

              </div>
              <div>
                <h3 className='pl-2' style={color}>Please Register!</h3>
                {/* {success}
                {err } */}
                <div className=" col-12">
                {success}
                {err }
                  <div className="">
                  <form onSubmit={signUp}>
                    <input className="mt-4 form-control form-control-lg col-12" name='fullname' type="text" placeholder="Full Name"/>
                    <input className="mt-4 form-control form-control-lg col-12" name='email' type="email" placeholder="Email address"/>
                    <input className="mt-4 form-control form-control-lg col-12" name='password' type="password" placeholder="Password"/>
                    <input className="my-4 py-2 form-control form-control-lg btn btn-primary col-12" type="submit" value="GET STARTED NOW"/>
                  </form>
                  </div>
                  <Link to="/login" style={color}>Already have an account? Login here</Link>
                </div>
              </div>
            </div>

            <div className="ml-4 col-5">
              <img className="d-none d-lg-block"   src="/asset/pictures/signup.jpg" alt="" width="100%" height="100%" style={radiusTopBottomRight45}/>
            </div>

          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Signup