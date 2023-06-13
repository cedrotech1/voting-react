import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Result from './components/result';
import One from './components/oneCondidate';
import Profile from './components/profile';
import EditProfile from './components/editProfile';
import EditPassword from './components/editPassword';
import Register from './components/register';
import ResultOne from './components/resultOne';

import Create from './components/create_account';
import Login from './components/login';
import Admin from './components/admin';

// admin pages
import HomeA from './admin/home';
import Student from './admin/student';
import Condidate from './admin/condidate';
import ACondidate from './admin/acondidate';
import DCondidate from './admin/dcondidate';

import ResultsA from './admin/results';
import Position from './admin/position';
// import Logout from './admin/logout';

import StudentDetails from './admin/studentDetails';
import CondidateDetails from './admin/condidateDetails';
import { useEffect } from 'react';




function App() 
{
  let x=0;
  let user;

  useEffect(()=>{
     user=localStorage.getItem("users");
    },[]);
  // const Navigate=useNavigate();
  
 let id=0; 
  user=localStorage.getItem("users");
  // localStorage.setItem('users',JSON.stringify({isLognin:false}));
    // useEffect(()=>{
      if(user)
      {
       
      const puser=JSON.parse(user);
      let  idx=puser.id;
      
       id=idx;
      // // },[]);
      }
     else{
       id=0;
     }
    

    
      
  return (
   

        <BrowserRouter>
          <Routes>
           
            <Route path='/' element={<Home id={id}/>}></Route>
            <Route path='/result' element={<Result id={id}/>}></Route>
            <Route path='/one' element={<One id={id}/>}></Route>
            <Route path='/profile' element={<Profile id={id}/>}></Route>
            <Route path='/editProfile' element={<EditProfile id={id}/>}></Route>
            <Route path='/editPassword' element={<EditPassword id={id}/>}></Route>
            <Route path='/Register' element={<Register id={id}/>}></Route>
            <Route path='/resultOne/:id' element={<ResultOne id={id}/>}></Route>

            <Route path='/create' element={<Create/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            {/* //ADMIN */}
            <Route path='/Admin/dashboard' element={<HomeA/>}></Route>
            <Route path='/Admin/student' element={<Student/>}></Route>
            <Route path='/Admin/condidate' element={<Condidate/>}></Route>
            <Route path='/Admin/acondidate' element={<ACondidate/>}></Route>
            <Route path='/Admin/dcondidate' element={<DCondidate/>}></Route>
            <Route path='/Admin/results' element={<ResultsA/>}></Route>
            <Route path='/Admin/position' element={<Position/>}></Route>
           

            <Route path='/Admin/studentDetails/:id' element={<StudentDetails/>}></Route>
            <Route path='/Admin/condidateDetails/:id' element={<CondidateDetails/>}></Route>
      
          </Routes>
        </BrowserRouter>
      
    
  );
}

export default App;
