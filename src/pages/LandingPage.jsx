import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const LandingPage = () => {
  const hrStyle = {
    marginTop: "67px",
    color: "gray"
  }
  const color = {
    color: "#929292"
  }
  const radius25 = {
    borderRadius: "25px"
  }
  const radius20 = {
    borderRadius: "20px"
  }
  const radius50Perc = {
    borderRadius: "50%"
  } 
  const radius20BG = {
    borderRadius: "20px",
    backgroundColor: "rgb(229, 227, 227)"
  }
  const radius25BGML ={
    borderRadius: "25px",
     marginLeft: "35%"
    }
    const radius25BGMT ={
      borderRadius: "25px",
       marginTop: "20%"
      }
      const justifyEvenly ={
        "justifyContent":"space-evenly",
        }
  return (
    <>
      <NavBar/>
      <b><hr  style={hrStyle} /></b>
      <div className="">
          <div className="row col-12" >
              <div className="col-lg-6 col-md-12  px-4 pt-4">
                <div className="p-5 ">
                      <h1><b>It's Never Too Late To Take Healthy Steps at Any Age</b></h1>
                      <h3 className="pt-4" style={color}>Supporting statement for your product's tagline. This text should communicate your unique selling proposition to the reader.</h3>
                      <Link to="/signup" className="btn btn-lg btn-primary mt-5 w-50  d-none d-lg-block">LET'S GET STARTED</Link>
                      <Link to="/signup" className="btn btn-sm btn-primary mt-5 d-lg-none">LET'S GET STARTED</Link>

                </div>
              </div>
              <div className="col-lg-6 col-md-12  d-flex justify-content-center align-items-center px-4" >
                  <img className=" shadow" src="/asset/pictures/never-too-late.jpg" alt="walk" width="100%" style={radius25}/>
              </div>
          </div>
      </div>

      <div className="mb-5">
          <div className="d-flex justify-content-center">
              <h3 className="p-3">Most popular exercise activities</h3>
          </div>
          <div className="row  p-3" style={justifyEvenly}>
              <img className="col-lg-2 col-md-3 col-sm-4 col-6 p-2  " style={radius20} src="/asset/popular/running.jpg" alt="popular" width="100%" height="160px"/>
              <img className="col-lg-2 col-md-3 col-sm-4 col-6 p-2  " style={radius20} src="/asset/popular/never late.jpg" alt="popular" width="100%" height="160px"/>
              <img className="col-lg-2 col-md-3 col-sm-4 col-6 p-2  " style={radius20} src="/asset/popular/cycling.jpg" alt="popular" width="100%" height="160px"/>
              <img className="col-lg-2 col-md-3 col-sm-4 col-6 p-2  " style={radius20} src="/asset/popular/hike.jpg" alt="popular" width="100%" height="160px"/>
              <img className="col-lg-2 col-md-3 col-sm-4 col-6 p-2  " style={radius20} src="/asset/popular/swim.jpg" alt="popular" width="100%" height="160px"/>    
          </div>
          <div className="d-flex justify-content-center p-4" style={color}><h4>Join  our workout tracking community</h4></div>
      </div>

      <hr/>
      <div className="row justify-content-evenly  col-12 m-2">
          <div className="col-sm-12 col-md-6 col-lg-4 p-5 justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                  <img className="me-2 p-2" src="/asset/logo/track.png" alt="logo" width="70px" height="70px" style={radius20BG}/>
              </div>
              <div className="row justify-content-center">
                  <h3 className="col-12">Let us keep you on track</h3>
                  <h4 className="col-12" style={color} >Whenever you’re ready to move, bring us with you. Our tracking feature will help you monitor your pace and keep you motivated along the way.</h4>
              </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-5">
              <div className="col-12 d-flex justify-content-center">
                  <img className="me-2 py-2 px-3" src="/asset/logo/result.png" alt="logo" width="70px" height="70px" style={radius20BG}/>
              </div>
              <div className="">
                  <h3>See your results take shape.</h3>
                  <h4 style={color} >Whenever you’re ready to move, bring us with you. Our tracking feature will help you monitor your pace and keep you motivated along the way.</h4>
              </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-5">
              <div className="col-12 d-flex justify-content-center">
                  <img className="me-2 p-2" src="/asset/logo/progress.png" alt="logo" width="70px" height="70px" style={radius20BG}/>
              </div>
              <div className="">
                  <h3>Use your progress as motivation.</h3>
                  <h4 style={color} >Whenever you’re ready to move, bring us with you. Our tracking feature will help you monitor your pace and keep you motivated along the way.</h4>
              </div>
          </div>
      </div>

      <hr/>

      <div className="row justify-content-center m-5">

          <div className="col-lg-5 col-md-12 align-items-center">
              <img src="/asset/benefits/improve.jpg" alt="immprove" width="100%" style={radius25}/>
          </div>
          <div className="col-lg-5 col-md-12 align-items-center p-4 " >
              <h2><b>Improve or prevent conditions</b></h2>
              <h4 className="pt-4" style={color}>Diabetes, heart disease, some forms of cancer, and obesity. But it also keeps your bones, muscles, and joints healthy, lowers your cholesterol and blood pressure, and protects your mental health.</h4>
          </div>
      </div>

      <div className="row justify-content-center mx-5">


          <div className="col-lg-5 col-md-12 align-items-center p-4 " >
              <h2><b>Being physically active</b></h2>
              <h4 className="pt-4" style={color}>improve your brain health, help manage weight, strengthen bones and muscles, relieve feelings of depression, help produce positive feelings and improve your ability to do everyday activities. It seems that exercise can benefit your mood no matter the intensity of the physical activity.             </h4>
          </div>
          <div className="col-lg-5 col-md-12  position-relative ">
              <img className="position-absolute " src="/asset/benefits/happy(1).jpg" alt="" width="60%" height="60%" style={radius25BGML}/>
              <img className="position-absolute " src="/asset/benefits/active.jpg" alt="" width="60%" height="60%" style={radius25BGMT}/>

          </div>
      </div>

      <div className=" row justify-content-evenly bg-light pt-5 pb-3 mt-5 px-4">
          <div className="col-lg-3 col-md-6 col-sm-12 p-3">
              <div className="col-12 d-flex justify-content-center">
                  <img className="py-2  px-3 bg-white" src="/asset/logo/result.png" alt="logo" width="70px" height="70px" style={radius20}/>
              </div>
              <div className="d-flex justify-content-center">
                  <h4>Plan Your Goal</h4>
              </div>
              <div className="d-flex justify-content-center p-2" style={color}>
                  <span>We all begin to exercise because we want to change even if only a change of pace. Our goal-setting tools will help you find the path to change that's right for you.</span>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-3">
              <div className="col-12 d-flex justify-content-center">
                  <img className="-2 p-2 bg-white" src="/asset/logo/track.png" alt="logo" width="70px" height="70px" style={radius20}/>
              </div>
              <div className="d-flex justify-content-center">
                  <h4>Track Your Goal</h4>
              </div>
              <div className=" p-2" style={color}>
                  <span>We know you can achieve your goals. And we think you can do it faster if we show you the way forward. Use our workout goals tracker that is tailor-made for your fitness level and your schedule.</span>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-3">
              <div className="col-12 d-flex justify-content-center">
                  <img className="-2 p-2 bg-white" src="/asset/logo/Progress.png" alt="logo" width="70px" height="70px" style={radius20}/>
              </div>
              <div className="d-flex justify-content-center">
                  <h4>Makes Progress</h4>
              </div>
              <div className="d-flex justify-content-center p-2" style={color}>
                  <span>Makes it more likely to reach and surpass your goal. Allows you to be more efficient in your time and workouts. Lends accountability to yourself and your goals.</span>
              </div>
          </div>
      </div>

      <div className="mt-5 mb-5">
          <div className="d-flex justify-content-center">
              <h3><b> What our user's says</b></h3>
          </div>
          <div className="d-flex justify-content-center p-2" >
              <span style={color}>Some nice word's from our happy client's</span>
          </div>
          <div className="row justify-content-center mx-5">
              <div className="p-4 col-lg-3 col-md-6 col-sm-12 m-4 bg-light" style={radius25}>
                  <div className=" d-flex">
                      <img className="me-3 p-2" src="/asset/users comments/gregory.png" alt="logo" width="90px" height="90px" style={radius50Perc}/>
                      <div className="mt-2">
                          <div className="d-flex align-items-center">
                              <h5>Gregory Jones</h5>
                              <img className="ms-2" src="/asset/logo/true.png" alt="logo" width="20px" height="20px" />
                          </div>
                          <div>
                              <span style={color}>@gregory_jones</span>
                          </div>
                      </div>
                  </div>
                  <div className="p-2">
                      <span >This software works outstandingly well.It grudgingly improves my skills by a lot.</span>
                  </div>
              </div>

              <div className="p-4 col-lg-3 col-md-6 col-sm-12 m-4 bg-light" style={radius25}>
                  <div className=" d-flex">
                      <img className="me-3 p-2" src="/asset/users comments/sylvia.png" alt="logo" width="90px" height="90px" style={radius50Perc}/>
                      <div className="mt-2">
                          <div className="d-flex align-items-centere">
                              <h5>Sylvia Taylor</h5>
                              <img className="ms-2 mt-1" src="/asset/logo/true.png" alt="logo" width="20px" height="20px" />
                          </div>
                          <div>
                              <span style={color}>@sylvia_taylor</span>
                          </div>
                      </div>
                  </div>
                  <div className="p-2">
                      <span >This software works outstandingly well.It grudgingly improves my skills by a lot.</span>
                  </div>
              </div>

              <div className="p-4 col-lg-3 col-md-6 col-sm-12 m-4 bg-light" style={radius25}>
                  <div className=" d-flex">
                      <img className="me-3 p-2" src="/asset/users comments/maria.png" alt="logo" width="90px" height="90px" style={radius50Perc}/>
                      <div className="mt-2">
                          <div className="d-flex align-items-centere">
                              <h5>Maria Gutierrez</h5>
                              <img className="ms-2 mt-1" src="/asset/logo/true.png" alt="logo" width="20px" height="20px" />
                          </div>
                          <div>
                              <span style={color}>@maria_gutierrez</span>
                          </div>
                      </div>
                  </div>
                  <div className="p-2">
                      <span >This software works outstandingly well.It grudgingly improves my skills by a lot.</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="mb-5">
          <div className=" pt-5 d-flex justify-content-center">
              <h3><b>Start tracking your exercises  now</b></h3>
          </div>
          <div className="pt-3 d-flex justify-content-center">
              <span style={color}>Signup now. Its free and takes less than 3 minutes</span>
          </div>
          <div className="pt-3 d-flex justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-8">
                  <input className="mt-4 form-control form-control-lg col-lg-12 col-md-8 col-sm-12" type="text" placeholder="Full Name"/>
                  <input className="mt-4 form-control form-control-lg col-lg-12 col-md-8 col-sm-12" type="email" placeholder="Email address"/>
                  <input className="mt-4 form-control form-control-lg col-lg-12 col-md-8 col-sm-12" type="password" placeholder="Password"/>
                  <input className="mt-4 py-2 form-control form-control-lg col-lg-12 col-md-8 col-sm-12 btn btn-primary" type="submit" value="GET STARTED NOW"/>
              </div>
          </div>
      </div>
      <Footer/>

    </>

  )
}

export default LandingPage