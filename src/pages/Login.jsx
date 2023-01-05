import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Login = (props) => {

  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  console.log(props.user)

  // const isAuth = ()=>{
  //   props.setIsAuth(true);
 
  // }
  const handleLogin= async (e)=>{
    
    setErr(null);
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    if (email && password !== "") {
      const submit_data = await fetch("https://cautious-tiara-tuna.cyclic.app/user/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await submit_data.json();
      console.log(result)
      if (submit_data.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.obj));
        localStorage.setItem("name", JSON.stringify(result.name));

        
        console.log(result);
        
        // props.setUser(result.obj)
        // console.log(props.user)
        navigate('/dashboard');
      } else {
        setErr(result.message);
      }
    }else{
      setErr("Please enter email and password!");

    }
  }
  const color = {
    color: "#929292"
  }
  const radiusTopBottomLeft45 = {
    "borderBottomLeftRadius": "45px",
    "borderTopLeftRadius": "45px",
    "justifyContent":"flex-start",
    "marginLeft": "-25px"
                }
  const radius45={
    "borderRadius": "45px"
  }
  const justifyStart ={
    "justifyContent":"flex-start",
    }
  return (
    <div>
      <NavBar/>
        <div className="d-flex justify-content-center m-5">
        <div className="d-flex col-lg-8 col-md-10 col-sm-12 bg-light mt-5" style={radius45} >
          <div className="col-4 d-none d-lg-block" style={justifyStart}>
            <img className=""   src="/asset/pictures/login.jpg" alt="" width="100%" height="100%" style={radiusTopBottomLeft45} />
          </div>
            <div className="m-5 mt-4 ">
              <div className=" p-2">
                <img src="/asset/pictures/reached.png" alt="" width="180px" height="150px"/>
              </div>
              <div>
                <h3 className='pl-3' style={color}> Welcome Back!</h3>
                <div className="">
                  <div className="col-12">
                    {err }
                  <form onSubmit={handleLogin}>
                      <input className="mt-4 form-control form-control-lg"  name="email" type="email" placeholder="Email address"/>
                      <input className="mt-4 form-control form-control-lg"  name="password" type="password" placeholder="Password"/>
                      <input className="my-4 py-2 form-control form-control-lg btn btn-primary" type="submit" value={"Login"}/>
                      <Link to="/forgot"  style={color} >Forgot password?</Link>
                      <div>

                      <Link to="/signup" style={color} >Don't have an account? Register here</Link>
                      </div>
                  </form>
                  </div>
    
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Login