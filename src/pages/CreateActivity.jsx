import React,{useState} from 'react'
import Navbar from '../components/dashboard/Navbar'
import Footer from '../components/dashboard/Footer'
import Sidebar from '../components/dashboard/Sidebar'

const CreateActivity = () => {
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(""); 
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const auth = localStorage.getItem("user");
  const activityHandler = async (event) => {
    setErr(null);
    event.preventDefault();
    if (!name || !type || !description || !date || !duration) {
      setErr(true);
      console.log("error");
      return false;
    }
    const userId =  JSON.parse(auth)
    const submit_data = await fetch("http://127.0.0.1:5000/user/new-activity", {
      method: "POST",
      body: JSON.stringify({
        "name": name,
        "description": description,
        "activity": type,
        "date": date,
        "duration": duration,
        "user": userId
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(submit_data)
    if (submit_data) {
      setName(null)
      setDuration(null)
      setDate(null)
      setType(null)
      setDescription(null)
      setSuccess(true);
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
                        <div className="col-xl-12 col-lg-12">
                            <div className="card shadow mb-4"  style={radius35}>
                                <div className="col-12 card-body">
                                    <h3 className="card-title ml-2">Create Activity</h3>
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                    {success && (
                                            <span className="text-success">Activity Saved Successfully!</span>
                                          )}
                                    {err && !description && (
                                            <span className="text-danger">All fields are required</span>
                                          )}
                                        <form action="" method="post" onSubmit={activityHandler}>
                                            <input className="form-control form-control-lg mb-3" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"/>
                                            <select onChange={(e) =>setType(e.target.value)} className="form-control form-control-lg mb-3" >
                                                <option selected>Select Activity Type</option>
                                                <option value="63b46c281857c50eb325eb55">Run</option>
                                                <option value="63b46c281857c50eb325eb54">Walk</option>
                                                <option value="63b46c281857c50eb325eb56">Bicycle Ride</option>
                                                <option value="63b46c281857c50eb325eb57">Hike</option>
                                                <option value="63b46c281857c50eb325eb58">Swim</option>
                                            </select>
                                            <input className="form-control form-control-lg mb-3" onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description"/>
                                            <input className="form-control form-control-lg mb-3" onChange={(e) => setDuration(e.target.value)} type="time" placeholder="Duration"/>
                                            <input className="form-control form-control-lg mb-3" onChange={(e) => setDate(e.target.value)} type="date" placeholder="Date"/>
                                            <input className="form-control form-control-lg mb-3 btn btn-primary" type="submit" value="Create Activity"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <Footer/>
            </div>
        </div>
    </div>
  )
}

export default CreateActivity