import React from 'react'
import Navbar from '../components/dashboard/Navbar'
import Footer from '../components/dashboard/Footer'
import Sidebar from '../components/dashboard/Sidebar'

const Profile = () => {
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
                                    <h3 className="card-title ml-2">Profile</h3>
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <form action="" method="post">
                                            <div className="row justify-content-center mb-4">
                                                <img className="imagePreview col-lg-4 col-md-6 col-sm-8 img-profile rounded-circle" width="300px" height="270px" src="asset/img/profile.svg" alt="user"/>
                                            </div>
                                            <div className="row justify-content-center ">
                                                <label className="mb-3 btn btn-primary" htmlFor="profile_picture">Select Picture</label>
                                                <input id="profile_picture" name="profile_picture" type="file" accept=".png, .jpg, .jpeg" hidden/>
                                            </div>
                                            <input className="form-control form-control-lg mb-3" type="text" placeholder="Full Name"/>
                                            <input className="form-control form-control-lg mb-3" type="text" placeholder="Email" disabled/>
                                            <input className="form-control form-control-lg mb-3" type="text" placeholder="Phone Number"/>
                                            <input className="form-control form-control-lg mb-3" type="text" placeholder="City"/>
                                            <input className="form-control form-control-lg mb-3" type="text" placeholder="Country"/>
                                            <input className="form-control form-control-lg mb-3 btn btn-primary" type="submit" value="Update Profile"/>
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
export default Profile