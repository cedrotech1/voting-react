import "../App.css";
import Header from "./imports/header";
import Footer from "./imports/footer";
// import pic1 from "./pics/a.jpeg";
import pic2 from "./pics/b.jpeg";
import { Link, useNavigate } from "react-router-dom";
// import pic3 from "./pics/c.jpeg";
// import pic4 from "./pics/d.jpeg";
// import {Link } from 'react-router-dom';
import axios from 'axios';
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



function One(props) 
{
  const navigate=useNavigate();

  const id=props.id;

  const [newpassword,setnewpassword]=useState("");
  const [currentpassword,setcurrentpassword]=useState("");
  const [confirmedpassword,setconfirmedpassword]=useState("");

  // const [loginStatus,setLoginStatus]=useState("");
  axios.defaults.withCredentials=false;

  const handlenewpassword=(event)=>{
    setnewpassword(event.target.value);
  }
  const handlecurrentpassword=(event)=>{
    setcurrentpassword(event.target.value);
  }
  const handleconfirmedpassword=(event)=>{
    setconfirmedpassword(event.target.value);
  }


  const handleSubmit=(event)=>
  { event.preventDefault();     
      const user={newpassword,currentpassword,confirmedpassword}
      console.log(user);
      
      
      fetch("http://localhost:5000/student/change/"+id,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(user)
    })
      .then((res)=>{
        return res.json();
    }).then((resp)=>{

      alert(resp.message);
      navigate("/profile");
       
            // console.log(resp);
        
    }).catch((err)=>{
        console.log(err);
    })
  }










  return (
   
        <div className="container-fluid">

          <div className="row header"> 
            <Header id={id}/>

           </div>
<br/><br/><br/>
           <div className="container content">
           <div className="row">
           
                
            </div>
            

            {/* //cards */}
            <div className="row">
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-md-12 col-lg-10  resultcd ones">

                <div className="row text-center mb-4 votcard shadow-md bg-white p-4 pt-5 ">
                    <br/>
                    <div className="col-md-6 col-lg-6 ">
                        <img src={pic2} alt="" className=" picOne"/>
                      <br/><br/>
                      </div>

                    <div className="col-md-6 col-lg-6 password">
                      <br/>
                      <form onSubmit={handleSubmit}>
                <h4 className="bg-info text-white caption"> CHANGE PASSWORD</h4>
                <br/>
                        <div className="form-group">
                          <input type="password" className="form-control" value={currentpassword} onChange={handlecurrentpassword} placeholder="ENTER CURRENT PASSWORD"/>
                        </div>
                        <div className="form-group">
                         
                          <input type="password" className="form-control" value={newpassword} onChange={handlenewpassword} placeholder="ENTER NEW PASSWORD"/>
                        </div>
                        <div className="form-group">
                          
                          <input type="password" className="form-control" value={confirmedpassword} onChange={handleconfirmedpassword} placeholder="ENTER CONFIRM PASSWORD"/>
                        </div>
                     
                
                
                <div className="row">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                  <button type="submit" className="btn btn-info col-md-12 col-sm-12 col-sx-12">SAVE CHANGES</button>
                   </div><br></br>
                  
                
                </div>
                </form>
                     </div> 
                </div>
               </div> 

           
                
          

       
             
               


                
            </div>
           
            
           </div>
           <br/><br/><br/>
           <div className="row footer">
             <div className="col-md-12 teams">
                
              
             <Footer/>
               </div> 
                
            </div>

        

        </div>
      
    
  );
}

export default One;
