import "../App.css";
import Header from "./imports/header";
import Footer from "./imports/footer";
import pic1 from "./pics/a.jpeg";
import pic2 from "./pics/b.jpeg";
import pic3 from "./pics/c.jpeg";
import pic4 from "./pics/d.jpeg";
import Login from './login';

import { useNavigate} from 'react-router-dom';

import {Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
 
function Home(props) 
{
  const Navigate=useNavigate();
  const [condidates,setCondidates]=useState([]);
  const [pics,setp]=useState([pic3,pic3,pic1,pic4,pic2,pic3,pic3,pic1,pic4,pic2,pic3,pic3,pic1,pic4,pic2,pic1,pic4,pic2,pic3,pic3,pic1,pic4,pic2]);
  axios.defaults.withCredentials=true;
  let studentid=props.id;
  
  // const studentidx= ParseInt(studentid=useParams())


  const [startVote,setstartVote]=useState("");
  useEffect(()=>{
    fetch("http://localhost:5000/decision").then((res)=>{
      return res.json();
  }).then((resp)=>{
    setstartVote(resp[0].startVote);
      console.log(resp[0].startVote)
  }).catch((err)=>{
      console.log(err.message);
  })
  },[]);



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

const [acondidates,setacondidates]=useState([]);
useEffect(()=>{

  const d=condidates.filter(d=>d.status=="activated");
  setacondidates(d);

},[condidates]);


// useEffect(()=>{
//   fetch("http://localhost:5000/student/logined").then((res)=>{
//       return res.json();
//   }).then((resp)=>{
//       // setSkills(resp);
//       console.log(resp)
//   }).catch((err)=>{
//       console.log(err.message);
//   })
// },[])

const voteHandle=(id)=>{
  // Navigate("/view/"+id);
  const condidateid=id;
  const obj={studentid,condidateid}

  if(startVote==1){

  fetch("http://localhost:5000/votes",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(obj)
    }).then((res)=>{
      return res.json();
      
    }).then((resp)=>{
      // console.log(resp)
      // if(resp.message)
      alert(resp.message);
    }).catch((err)=>{
      console.log(err)
    })
  } else{
    alert("voting did not started yet");
  }

}


const Handle=()=>{
  // Navigate("/view/"+id);

    alert("voting did not started yet");
  

}
let user;
// let username;
let puser;

let [log,setLog]=useState();
let [username,setUsername]=useState();

useEffect(()=>{
  user=localStorage.getItem("users");
   puser=JSON.parse(user);
  setLog(puser.isLognin)
 setUsername(puser.username)
   username=puser.username;
  studentid=localStorage.getItem("user");
},[log])


console.log(log);
console.log(username)


const data=localStorage.getItem('banner');
console.log(data)

// localStorage.setItem('user',JSON.stringify({isLognin:false}));



// if(log)
  return (
   
        <div className="container-fluid">

          <div className="row header"> 
            <Header id={studentid}/>

           </div>

           <div className="container content">
           <div className="row ">
             
               
                {(data=='true')?(
                    <>
                      <div className="col-md-12 teams teamx bg-white">
                        <h3> welcome <span style={{color:"red"}}>{username}</span> read teams and condition ! after vote here{log}</h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend arcu et sem elementum faucibus. Vestibulum faucibus eleifend dolor, id luctus libero. Suspendisse commodo, orci eu mattis mattis, ante ligula porta tortor, ut scelerisque massa risus a quam.</p>
                        <center>
                           <button className="btn btn-dark" onClick={()=>{
                            window.localStorage.setItem('banner',false);
                            window.location.reload();}}>
                              hide</button></center> 
                      </div> 
                    </>
                  ):
                  (
                    <span></span>
                  )
                }
               
              
                
            </div>
          

            {/* //cards */}
            <div className="row">

{acondidates.map((c)=>(
  
   <div className="col-md-6 col-lg-4  teams">
   <div className=" text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
     <br/>

   <center>  <img src={pics[c.id]} alt="" className="rounded-pill shadow-md p-2 pic"/>
   <br/><br/>
   <h5> <b>  {c.fname}  {c.lname}</b></h5>
   <p><i> Runnung to Be: <span className="text-primary"> {c.title}</span></i></p>
   
  
  
   <p>{c.manifesto}</p>
   <div className="row">
     <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6">
     <Link to='/one'> <button className="btn btn-info col-md-12 col-sm-12 col-sx-12">view info</button></Link>
        </div>
     <div className=" col-lg-6 col-md-6 col-sm-6 col-xs-6"> 
      {(startVote==1)?( <button onClick={()=>voteHandle(c.id)}  className="btn btn-danger col-md-12 col-sm-12 col-sx-12">vote</button>):
      ( <div onClick={()=>Handle(c.id)} style={{height:'auto',borderRadius:'3px',padding:'0.19cm'}}  className="bg-danger col-md-12 col-sm-12 col-sx-12">vote</div>)
      }
     
     
      </div>
   
   </div>
   </center>
   </div>
  </div> 
)
)}
  



          
         


                
            </div>
           
            
           </div>
          
           <div className="row footer">
             <div className="col-md-12 teams">
                
              
             <Footer/>
               </div> 
                
            </div>

        

        </div>
      
    
  );
//   else 
//   Navigate("/login")
}

export default Home;
