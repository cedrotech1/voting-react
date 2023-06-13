import "../App.css";
import Header from "./imports/header";
import Footer from "./imports/footer";
// import pic1 from "./pics/a.jpeg";
import pic2 from "./pics/c.jpeg";
import { Link } from "react-router-dom";
// import pic3 from "./pics/c.jpeg";
// import pic4 from "./pics/d.jpeg";
// import {Link } from 'react-router-dom';

import { useEffect, useState } from "react";

function Profile(props) 
{

  const [info,setInfo]=useState([]);
  const id=props.id;
  const studentid=props.id;

  useEffect(()=>{
  // const id=6;
    fetch("http://localhost:5000/student/one/"+id).then((res)=>{
      return res.json();
  }).then((resp)=>{
    setInfo(resp);
      console.log(resp)
  }).catch((err)=>{
      console.log(err.message);
  })
  },[]);


  const voteHandle=(id)=>{
    // Navigate("/view/"+id);
    const condidateid=id;
    const obj={studentid,condidateid}
  
    // if(startVote==1){
  
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
    // } 
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
                     {
                  info.map((i)=>(
                    <>
                    <div className="col-md-6 col-lg-6 ">
                        <img src={pic2} alt="" className=" picOne"/>
                      <br/><br/>
                      </div>

                    <div className="col-md-6 col-lg-6 ">
                      <br/>
                      <h4 className="bg-info text-white caption"> PROFILE IDENTIFICATIONS</h4>
                <br/>
              
                    
                      <dl class="row mb-5">
                          <dt class="col-sm-3 col-md-3 text-capitalize">FIRST NAME</dt>
                          <dd class="col-sm-9  col-md-9 text-capitalize"><h5 className="namex"> <b>  {i.fname} </b></h5></dd>

                          <dt class="col-sm-3 col-md-3 text-capitalize">LAST NAME</dt>
                          <dd class="col-sm-9  col-md-9 text-capitalize"><h5 className="namex"> <b>  {i.lname}</b></h5></dd>

                          <dt class="col-sm-3 col-md-3 text-capitalize">DEPARTMENT</dt>
                          <dd class="col-sm-9  col-md-9 text-capitalize"><h4 className="namex">   {i.department}</h4></dd>

                          <dt class="col-sm-3 col-md-3 text-capitalize">ADDRESS</dt>
                          <dd class="col-sm-9  col-md-9 text-capitalize"><h4 className="namex">   {i.address}</h4></dd>

        
                          <dt class="col-sm-3 col-md-3 text-capitalize">PHONE</dt>
                          <dd class="col-sm-9  col-md-9 text-capitalize"><h4 className="namex">   {i.phone}</h4></dd>
                      </dl>
                


                <p className="name"><i className="name"> Runnung to Be: <span className="text-primary">{i.title}</span></i></p>
                
               
               
                <p  className="manifesto"><i>{i.manifesto}</i></p>

                   
                              <br/>
                <div className="row">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                   <button onClick={()=>voteHandle(i.id)} className="btn btn-info col-md-12 col-sm-12 col-sx-12">VOTE NOW</button>
                   </div><br></br>
                   
                
                </div>
                
                     </div> 


                     </>

  ))
                }

                















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

export default Profile;
