import React,{useEffect,useState} from 'react'
import Navbar from '../components/dashboard/Navbar'
import Footer from '../components/dashboard/Footer'
import Sidebar from '../components/dashboard/Sidebar'
const DashBoard = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [walk,setWalk] = useState("0")
    const [run,setRun] = useState("0")
    const [bicycle,setBicycle] = useState("0")
    const [hike,setHike] = useState("0")
    const [swim,setSwim] = useState("0")
   
    useEffect(() =>{
        const submit_data =  fetch("http://127.0.0.1:5000/user/activities-count", {
              method: "POST",
              body: JSON.stringify({user}),
              headers: { "Content-Type": "application/json" },
            });
            submit_data.then(res=>{
                let data = res.json();
                data.then(res=>{
                    console.log(res[0].count);;
                    setWalk(res[0].count)
                    setRun(res[1].count)
                    setBicycle(res[2].count)
                    setHike(res[3].count)
                    setSwim(res[4].count)
                })
                
            })
            
    },[])

  const fontSize = {
    fontSizeAdjust: "1"
  }
  const Radius35 = {
    borderRadius: "35px"
  }
  return (
    <div id="wrapper">
    <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column ">
            <div id="content" className="d-flex flex-column ">
                <Navbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 mb-4">
                            <div className="card shadow p-2" style={Radius35}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between  align-items-center">
                                        <img src="asset/img/walking.png" width="90px" height="90px" alt="swiming"/>
                                        <h1 style={fontSize}>{walk}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-4">
                            <div className="card  shadow p-2" style={Radius35}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between  align-items-center">
                                        <img src="asset/img/running.png" width="90px" height="90px" alt="swiming"/>
                                        <h1 style={fontSize}>{run}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-4">
                            <div className="card  shadow p-2" style={Radius35}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between  align-items-center">
                                        <img src="asset/img/bicycling.png" width="90px" height="90px" alt="swiming"/>
                                        <h1 style={fontSize}>{bicycle}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-4">
                            <div className="card  shadow p-2" style={Radius35}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between  align-items-center">
                                        <img src="asset/img/hiking.png" width="90px" height="90px" alt="swiming"/>
                                        <h1 style={fontSize}>{hike}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-4">
                            <div className="card shadow p-2" style={Radius35}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between  align-items-center">
                                        <img src="asset/img/swiming.png" width="110px" height="90px" alt="swiming"/>
                                            <h1 style={fontSize}>{swim}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="card shadow mb-4"  style={Radius35}>
                                <div className="col-12 card-body">
                                    <h3 className="card-title">Active Activities</h3>
                                    <div className="row justify-content-evenly">
                                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                                            <div className="card shadow my-2 " style={Radius35}>
                                                <div className="card-body">
                                                    <div className=" ">
                                                        <div className="">
                                                            <h5><b className="text-dark"> Name: </b><span>Running</span></h5> 
                                                            <h5><b className="text-dark">Description: </b><span>Must run between 6pm to 9pm</span></h5>   
                                                            <h5><b className="text-dark">Activity Type: </b><span> Running</span></h5> 
                                                            <h5><b className="text-dark">Duration (Mins): </b><span>1:00</span></h5>   
                                                            <h5><b className="text-dark">Date: </b><span>28-12-2022</span></h5> 
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    Marked As:<img role={"button"} className=" m-1" src="/asset/logo/checkmark.webp" alt="logo" width="20px" height="20px" />
                                                                    <img role={"button"} className="m-1" src="/asset/logo/x.webp" alt="logo" width="20px" height="20px" />
                                                                </div>
                                                                <div>
                                                                    <img className="mx-2 " role={"button"} onClick={()=>test()} src="asset/img/edit-128.png" width="20px" height="20px" alt="edit"/>
                                                                    <img className="mx-2" role={"button"} src="asset/img/delete-10403.png" width="20px" height="20px" alt="delete"/>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default DashBoard