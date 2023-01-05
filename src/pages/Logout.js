import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";


const Logout = (props) => {
  useEffect(() =>{
  navigate("/login")
  })
  const navigate = useNavigate()
  // props.authNotValidate()
  console.log("logout")
}

export default Logout