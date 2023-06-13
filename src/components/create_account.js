import "../App.css";

import { Link ,useNavigate} from "react-router-dom";

import { useEffect, useState } from "react";

function One() 
{

  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [department,setdepartment]=useState("");
  const [phone,setphone]=useState("");
  const [username,setusername]=useState("");
  const [address,setaddress]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();

  

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

  const handlepassword=(event)=>{
    setPassword(event.target.value);
  }


  
  const handleSubmit=(event)=>{
    event.preventDefault(); 
    const obj={fname,lname,phone,username,department,address,password}   
    console.log(obj)
    // alert(obj);
   
    fetch("http://localhost:5000/student/addStudent/",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(obj)
  })
    .then((res)=>{
      return res.json();
  }).then((resp)=>{

    alert(resp.message);
    // navigate("/profile");
    if(resp)
    {
      //console.log("oky");
    }
     
          
      
  }).catch((err)=>{
      console.log(err);
  })
  }


  return (
   
        <div className="container-fluid">

          
<br/><br/><br/>
           <div className="container content">
           <div className="row">
           
                
            </div>
            

            {/* //cards */}
            <div className="row">
            <div className="col-md-4 col-lg-4"></div>
            <div className="col-md-4 col-lg-4   ones">

                <div className="row text-center mb-4 votcard shadow-md bg-white p-4 pt-5 ">
                    
                   

                    <div className="col-md-12 col-lg-12 profile">
                    
                      <form onSubmit={handleSubmit}>
                      <div className="row">
                            <div className="col-md-12">  <h4 className="bg-info text-white caption"> CREATE ACCOUNT  </h4></div>
                           
                        </div>
               
                
                <br/>
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
                        <div className="form-group">
                          <lablel> <h4>password</h4> </lablel>
                          <input type="password" value={password} onChange={handlepassword} className="form-control"/>
                        </div>
                    
                
                
                <div className="row">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                  <button type="submit" className="btn btn-info col-md-12 col-sm-12 col-sx-12">SAVE CHANGES</button>
                   </div><br></br>
                  
                
                </div>
                <br/>
                <div className="row">
                            {/* <div className="col-md-6"> <Link to="/create" className="text-decoration-none">  <h4 className="bg-info text-white caption"> REGISTER </h4></Link></div> */}
                            <div className="col-md-12"><Link to="/login" className="text-decoration-none"> <h4 className="bg-info text-white caption"> LOGIN </h4></Link></div>
                        </div>
                </form>
                     </div> 
                </div>
               </div> 

           
                
          

       
             
               


                
            </div>
           
            
           </div>
       

        

        </div>
      
    
  );
}

export default One;
