import "../App.css";
import Header from "./imports/header";
import Footer from "./imports/footer";
import pic1 from "./pics/a.jpeg";
// import pic2 from "./pics/b.jpeg";
import { Link, useNavigate } from "react-router-dom";
import pic3 from "./pics/c.jpeg";
// import pic4 from "./pics/d.jpeg";
// import {Link } from 'react-router-dom';

import { useEffect, useState } from "react";

function One(props) 
{
  const navigate=useNavigate();

  
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [department,setdepartment]=useState("");
  const [phone,setphone]=useState("");
  const [username,setusername]=useState("");
  const [address,setaddress]=useState("");


  const [info,setInfo]=useState([]);
  const id=props.id;

  const handlefname=(event)=>{
    setFname(event.target.value);
  }
  const handlelname=(event)=>{
    setLname(event.target.value);
  }
  const handleaddres=(event)=>{
    setaddress(event.target.value);
  }
  const handledepartment=(event)=>{
    setdepartment(event.target.value);
  }
  const handleusername=(event)=>{
    setusername(event.target.value);
  }
  const handlephone=(event)=>{
    setphone(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault(); 
    const obj={fname,lname,phone,username,department,address}   
    console.log(obj)
    // alert(obj);
    const id=props.id;
    fetch("http://localhost:5000/student/update/"+id,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(obj)
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




  useEffect(()=>{
  // const id=6;
    fetch("http://localhost:5000/student/one/"+id).then((res)=>{
      return res.json();
  }).then((resp)=>{
    setFname(resp[0].fname);
    setLname(resp[0].lname);
    setaddress(resp[0].address);
    setphone(resp[0].phone);
    setdepartment(resp[0].department);
    setusername(resp[0].username);
      console.log(resp)
  }).catch((err)=>{
      console.log(err.message);
  })
  },[]);
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
                        <img src={pic3} alt="" className=" picOne"/>
                      <br/><br/>
                      </div>

                    <div className="col-md-6 col-lg-6 profile">
                      <br/>
                      <form onSubmit={handleSubmit} >
                <h4 className="bg-info text-white caption"> EDIT PROFILE FORM {id}</h4>
                <center/>
                        <div className="form-group">
                          <lablel> <h4>First name</h4> </lablel>
                          <input type="text" value={fname} onChange={handlefname} className="form-control"/>
                        </div>
                        <div className="form-group">
                          <lablel> <h4>last name</h4> </lablel>
                          <input type="text" value={lname} onChange={handlelname} className="form-control"/>
                        </div>
                        <div className="form-group">
                          <lablel> <h4>department name</h4> </lablel>
                          <input type="text" value={department} onChange={handledepartment} className="form-control"/>
                        </div>
                        <div className="form-group">
                          <lablel> <h4>address</h4> </lablel>
                          <input type="text" value={address} onChange={handleaddres} className="form-control"/>
                        </div>

                        <div className="form-group">
                          <lablel> <h4>Username</h4> </lablel>
                          <input type="text" value={username} onChange={handleusername} className="form-control"/>
                        </div>

                        <div className="form-group">
                          <lablel> <h4>phone</h4> </lablel>
                          <input type="text" value={phone} onChange={handlephone} className="form-control"/>
                        </div>
                    
                <center/>
                
                <div className="row">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                   <button type='submit' className="btn btn-info col-md-12 col-sm-12 col-sx-12">SAVE CHANGES</button>
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
