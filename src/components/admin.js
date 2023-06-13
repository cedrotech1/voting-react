import "../App.css";

import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from 'axios';



function Login() 
{

  // useEffect(()=>{
  //   fetch("http://localhost:5000/user").then((res)=>{
  //       return res.json();
  //   }).then((resp)=>{
  //       // setSkills(resp);
  //       console.log(resp)
  //   }).catch((err)=>{
  //       console.log(err.message);
  //   })
  // },[])
axios.defaults.withCredentials=true;
  useEffect(()=>{
    fetch("http://localhost:5000/student/logined").then((res)=>{
        return res.json();
    }).then((resp)=>{
        // setSkills(resp);
        console.log(resp)
    }).catch((err)=>{
        console.log(err.message);
    })
  },[])
  
  const Navigate=useNavigate();

  const [username,setusername]=useState("");
  const [password,setPassword]=useState("");
  // const [loginStatus,setLoginStatus]=useState("");
  axios.defaults.withCredentials=false;

  const handleusername=(event)=>{
      setusername(event.target.value);
  }
  const handlepassword=(event)=>{
    setPassword(event.target.value);
  }

  const handleSubmit=(event)=>
  { event.preventDefault();     
      const user={username,password}
      console.log(user);
      
    //   fetch("http://localhost:5000/login").then((res)=>{
    //     return res.json();
    // }).then((resp)=>{
    //     // setSkills(resp);
    //     console.log(resp)
    // }).catch((err)=>{
    //     console.log(err.message);
    // })



      fetch("http://localhost:5000/admin/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(user)
    })
      .then((res)=>{
        return res.json();
    }).then((resp)=>{
        // setSkills(resp);
         console.log(resp)
        if(resp.message=="user not exist")
        {
            alert("that user name does not exist");
        }
        if(resp.message=="password missmatch")
        {
            alert("your password is incorrect");
        }
        if(resp.message=="well match")
        {
            // alert("well ");
            Navigate("/Admin/dashboard");
            // console.log(resp.userinfo[0].id);
            // Navigate("/"+resp.userinfo[0].id);
        }
    }).catch((err)=>{
        console.log(err.message);
    })
  }

  // const logout=(event)=>
  // { event.preventDefault();     
  //     const user={username,password}
  //     console.log(user);
      
  //     fetch("http://localhost:5000/user").then((res)=>{
  //       return res.json();
  //   }).then((resp)=>{
  //       // setSkills(resp);
  //       console.log(resp)
  //   }).catch((err)=>{
  //       console.log(err.message);
  //   })
  // }

  // useEffect(()=>{
  //     axios.get("http://localhost:5000/admin/login").then((response)=>{
  //         console.log(response.data)
  //         //setLoginStatus(response.data.user[0].username)
  //     })
  // },[]);
  
  return (
   
        <div className="container-fluid">


           <div className="container content login">
          

            {/* //cards */}
            <div className="row">
            <div className="col-md-4 col-lg-4"></div>
            <div className="col-md-4 col-lg-4   ones">

                <div className="row text-center mb-4 votcard shadow-md bg-white p-4 pt-5 ">
                    
                   

                    <div className="col-md-12 col-lg-12 profile">
                    
                      <form  action="" onSubmit={handleSubmit}>
                      <div className="row">
                            <div className="col-md-12">  <h4 className="bg-info text-white caption"> ADMIN LOGIN </h4></div>
                           
                        </div>
                
                <br/>
               
                        <div className="form-group">
                         
                          <input type="text" className="form-control"  value={username} onChange={handleusername} placeholder="ENTER YOUR USERNAME"/>
                        </div>
                        <div className="form-group">
                          
                          <input type="password" className="form-control" value={password} onChange={handlepassword} placeholder="ENTER YOUR PASSWORD"/>
                        </div>
                    
                
                
                <div className="row">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                   <input type="submit" className="btn btn-info col-md-12 col-sm-12 col-sx-12" value="SAVE CHANGES"/>
                   {/* <input type="button" onClick={logout} className="btn btn-info col-md-12 col-sm-12 col-sx-12" value="logout"/> */}
                   </div><br></br>
                  
                
                </div>
                <br/>
                <div className="row">
                            <div className="col-md-6"> <Link to="/create" className="text-decoration-none">  <h4 className="bg-info text-white caption"> REGISTER </h4></Link></div>
                            <div className="col-md-6"><Link to="/login" className="text-decoration-none"> <h4 className="bg-info text-white caption"> STUDENT </h4></Link></div>
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

export default Login;
