import React from 'react'
import Navbar from '../components/dashboard/Navbar'
import Footer from '../components/dashboard/Footer'
import Sidebar from '../components/dashboard/Sidebar'

const PasswordChange = () => {
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
                                    <h3 className="card-title ml-2">Change Password</h3>
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <form action="" method="post">
                                            <input className="form-control form-control-lg mb-3" type="text" placeholder="Old Password"/>
                                            <input className="form-control form-control-lg mb-3" type="text" placeholder="New Password"/>
                                            <input className="form-control form-control-lg mb-3 btn btn-primary" type="submit" value="Change Password"/>
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

export default PasswordChange