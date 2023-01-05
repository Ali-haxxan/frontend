import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React,{useState} from 'react'
import LandingPage from './pages/LandingPage';
import Blog from './pages/Blog';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forgot from './pages/ForgotPassword';
import DashBoard from './pages/DashBoard';
import AllActivities from './pages/AllActivities';
import CreateActivity from './pages/CreateActivity';
import PasswordChange from './pages/PasswordChange';
import Profile from './pages/Profile';
// import ProtectedRoute from './ProtectedRoute';
// import RedirectRoutes from './RedirectRoutes';
import Logout from './pages/Logout';


    

function App() {
  // const [isAuth, setIsAuth]= useState(false)
  const [user, setUser]= useState("")
  
    const authNotValidate=()=>{
      // setIsAuth(false)
      setUser("")
  }
  const authUser=(id)=>{
    // setUser(id)
    // setIsAuth(true)
  }
  // console.log(isAuth,user)

  return (
    <div>
      <BrowserRouter>
      <Routes>
      {/* <ProtectedRoute></ProtectedRoute> */}
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login'  element={<Login  setUser={authUser} user={user}/>}></Route>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/dashboard' element={<DashBoard user={user}/>}></Route>
        <Route path='/all-activities' element={<AllActivities user={user}/>}></Route>
        <Route path='/create-activity' element={<CreateActivity user={user} />} ></Route>
        <Route path='/change-password' element={<PasswordChange user={user} />} ></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/logout' element={<Logout authNotValidate={authNotValidate}/>}></Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
