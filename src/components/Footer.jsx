import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  const color = {
                  color: "#929292"
                }
  return (
    <div className="bg-light mt-5">
      <div className=" mt-auto">
        <div className="py-4  row  align-items-center">
          <div className="col-lg-5 col-md-8 col-sm-12 d-flex justify-content-center">
            <span className="mx-2 mt-2" style={color}>
              Follow us
            </span>
            <div className="mx-2 d-flex justify-content-center align-items-center">
              <img
                className="mx-2"
                width="43px"
                height="43px"
                src="/asset/logo/facebook.png"
                alt="facebook"
              />
              <img
                className="mx-2"
                width="50px"
                height="50px"
                src="/asset/logo/twitter.png"
                alt="twitter"
              />
              <img
                className="mx-2"
                width="60px"
                height="60px"
                src="/asset/logo/instagram.png"
                alt="instagram"
              />
              <img
                className="mx-2"
                width="50px"
                height="50px"
                src="/asset/logo/youtube.png"
                alt="youtube"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-1">
        <div className="d-flex justify-content-center">
        <Link to="/blog" style={color}> Blog</Link>
        </div>
      </div>
      <hr />
      <div className="pt-4">
        <div className="d-flex justify-content-center">
          <div>
            <div className=" ">
              <div className="mx-5 d-flex justify-content-center">
                <span style={color}>
                  1792 Harrison St, San Francisco, CA 94353, USA © 2022
                </span>
              </div>
              <div className="mx-5 d-flex justify-content-center">
                <span style={color}>
                  My Workout Traker. All rights reserved.
                </span>
              </div>
            </div>
            <div className="mx-5 my-3 d-flex justify-content-center">
              <span style={color}>
                My workout tracker does not provide medical advice, diagnosis,
                or treatment.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer