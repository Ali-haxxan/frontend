import React,{useEffect, useState} from 'react'
import Navbar from '../components/dashboard/Navbar'
import Footer from '../components/dashboard/Footer'
import Sidebar from '../components/dashboard/Sidebar'
import Modal from '../components/dashboard/Modal'

const AllActivities = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [data, setData] = useState();
    const [record, setRecord] = useState();
    const fetchData =()=>{
        const submit_data =  fetch("http://127.0.0.1:5000/user/user-activities", {
            method: "POST",
            body: JSON.stringify({
                  "user": user
            }),
            headers: { "Content-Type": "application/json" },
          });
          submit_data.then(res=>{
              let data = res.json();
              data.then(res=>{
                  setData(res);
              })
          })
    }
    useEffect(() =>{
        fetchData()
    },[data])

    const editHandler = (id) => {
        if(id){
          const submitDetail = fetch('http://127.0.0.1:5000/user/fetch-activity',{
            method: "POST",
            body: JSON.stringify({
            "id": id
            }),
            headers: { "Content-Type": "application/json" },
          });
          let result = submitDetail.then((res) => {
            return res.json();
          });
          result.then((res) => {
            // console.log("result", res);
            // console.log(res);
            setRecord(res);
          });
        }
      };
    

    const deleteHandler = async(id) =>{
        // console.log(id);
        if(id){
          const submitDetail = await fetch(`http://127.0.0.1:5000/user/activity-delete`, {
          method: "POST",
          body: JSON.stringify({
            "id": id
      }),
      headers: { "Content-Type": "application/json" },
        });
          let result = await submitDetail.json(); 
          if(submitDetail.status === 200) {
            
            fetchData()
            
            console.log("deleted");
          } else {
            console.log(result.message);
          }
        }
        else {
          console("Please Enter a valid id");
        }
      };

    const radius35={
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
                        <div className="col-12 card-body">
                            <h3 className="card-title">All Activities</h3>
                            <div className="row justify-content-evenly">
                                {data?.map((res,index) =>{
                                    return <div className="col-lg-4 col-md-6 col-sm-12 " key={index} >
                                    <div className="card shadow my-2 " style={radius35}>
                                        <div className="card-body">
                                            <div className=" ">
                                                <div className="">
                                                    <h5><b className="text-dark"> Name: </b><span>{res.name}</span></h5> 
                                                    <h5><b className="text-dark">Description: </b><span>Must run between 6pm to 9pm</span></h5>   
                                                    <h5><b className="text-dark">Activity Type: </b><span> Running</span></h5> 
                                                    <h5><b className="text-dark">Duration (Mins): </b><span>1:00</span></h5>   
                                                    <h5><b className="text-dark">Date: </b><span>28-12-2022</span></h5> 
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            {/* Marked As:<img role={"button"} className=" m-1" src="/asset/logo/checkmark.webp" alt="logo" width="20px" height="20px" />
                                                            <img role={"button"} className="m-1" src="/asset/logo/x.webp" alt="logo" width="20px" height="20px" />
                                                         */}
                                                        </div>
                                                        <div>
                                                            <img className="mx-2 " data-toggle="modal" data-target="#exampleModalCenter" role={"button"} onClick={()=>editHandler(res._id)} src="asset/img/edit-128.png" width="20px" height="20px" alt="edit"/>
                                                            <img className="mx-2" role={"button"} onClick={()=>deleteHandler(res._id)} src="asset/img/delete-10403.png" width="20px" height="20px" alt="delete"/>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Modal data = {record} setData = {fetchData}/>
              <Footer/>
            </div>
        </div>
    </div>
  )
}

export default AllActivities