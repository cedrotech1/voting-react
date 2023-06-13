
import {Link, useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Header(props) 
{
const [condidates,setCondidates]=useState([]);
const [acondidates,setacondidates]=useState([]);
const Navigate=useNavigate();

// useEffect(()=>{
  // const id=6;
  // id=
   const id=props.id;
  // },[]);


  useEffect(()=>{
    fetch("http://localhost:5000/condidate/all").then((res)=>{
      return res.json();
  }).then((resp)=>{
      setCondidates(resp);
      // console.log(condidates)
  }).catch((err)=>{
      console.log(err.message);
  })
  },[])
  
 

useEffect(()=>{

  const d=condidates.filter(d=>d.id==id);
  setacondidates(d);

},[condidates]);

 const cl=acondidates.length;


const logout=()=>{
  localStorage.removeItem('users');
  localStorage.setItem('users',JSON.stringify({isLognin:false}));
  Navigate("/login");
}



  // const {id}=useParams();
  return (
   
<>
    <div className="col-lg-3 logo"> <h2>ONLINE VOTING {id}</h2></div>
             
    <div className="col-lg-9 col-md-12 menu"> 
    <ol>
       
        <Link to='/' className="text-decoration-none"><li>vote</li></Link> 
        <Link to="/result" className="text-decoration-none"> <li>result</li></Link>     
        <Link to='/profile' className="text-decoration-none"> <li>profile</li></Link> 

        {(cl===1)?(<span></span>):(<Link to='/register' className="text-decoration-none"><li>register as condidate</li></Link>)}
       
       
        <li className="logout" onClick={logout}> <span>logout</span></li>
        
     </ol> 
     </div>
 </>
      
    
  );
}

export default Header;
