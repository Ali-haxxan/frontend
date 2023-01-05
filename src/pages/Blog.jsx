import React from 'react'
// import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Blog = () => {
  const hrStyle = {
    marginTop: "67px",
    color: "gray"
  }
  // const color = {
  //   color: "#929292"
  // }
  // const bgImage = {
  //   height: "100vh",
  //    width: "100%",
  //    "background-size": "cover", 
  //    "background-repeat": "no-repeat",
  //    opacity: "0.7",
  //   }
  // const fullScreen = {
  //   height: "65vh",
  //   }
  return (
    <div>
      <NavBar/>
      <b><hr  style={hrStyle} /></b>
      <Footer/>
    </div>
  )
}

export default Blog