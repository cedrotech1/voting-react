import "./Dash.css";

import Footer from "./imports/footer";
// import pic3 from "./pics/c.jpeg";

import Header from "./imports/header";
import Side from "./imports/sideM";
// import Footer from "./imports/footer";
import { useEffect, useState } from "react";
import pic2 from "./pics/b.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// import { useParams } from "react-router-dom";

// import {Link } from 'react-router-dom';
function Home() 
{
  const [info,setInfo]=useState([]);
  const [info1,setInfo1]=useState([]);
 
   const {id}=useParams();

   useEffect(()=>{
    const d=info.filter(d=>d.id==id);
    setInfo1(d);

   },[info]);


   const Navigate=useNavigate();
  useEffect(()=>{

 
    fetch("http://localhost:5000/student/all").then((res)=>{
      return res.json();
  }).then((resp)=>{
    setInfo(resp);
      console.log(resp)
  }).catch((err)=>{
      console.log(err.message);
  })
  },[]);

  const deleteHandle=(id)=>{

    // alert(id);

    if(window.confirm("do you want to delete it"))
    {
        fetch("http://localhost:5000/student/delete/"+id,{method:"POST"}).then((res)=>{
                alert("well deleted");
            // window.location.reload();
            Navigate("/admin/student")
            }).catch((err)=>{
                console.log(err.message);
            })
    }


  }
  return (
   
        // <div className="container-fluid">

        
         
           <div className="container-fluid content">
           <div className="row ">
           <div className="col-md-12 col-lg-12 bg-white  teams teamx">
              <Header/>
               {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend arcu et sem elementum faucibus. Vestibulum faucibus eleifend dolor, id luctus libero. Suspendisse commodo, orci eu mattis mattis, ante ligula porta tortor, ut scelerisque massa risus a quam.</p> */}
             
               </div>  
            </div>
          

            {/* //cards */}
            
            <div className="row">

            <div className="col-md-4 col-lg-3  teamsxx">
                <div className=" text-center  votcard shadow-md bg-white p-4  dash">
                  <br/>
                  <Side/>
                
                </div>
               </div> 
           
                
            <div className="col-md-8 col-lg-9  teams">
                <div className=" text-center mb-4 votcard vx shadow-md bg-white p-4 pt-5">
                  <br/>
                  <h3 className="title">STUDENT LIST</h3>
                  <div className="col-md-12 col-lg-12  resultcd ones">

<div className="row">
    <br/>
    <div className="col-md-6 col-lg-6 ">
        <img src={pic2} alt="" className=" picOne"/>
      <br/><br/>
      </div>


      {
                                    info1.map((i)=>(
    <div className="col-md-6 col-lg-6 ">
      <br/>
      {/* <h4 className="bg-info text-white caption"> PROFILE IDENTIFICATIONS</h4> */}
<br/>
      <dl class="row mb-5">
          <dt class="col-sm-3 col-md-3 text-capitalize">FIRST NAME</dt>
          <dd class="col-sm-9  col-md-9 text-capitalize"><h5 className="namex"> <b> {i.fname}</b></h5></dd>

          <dt class="col-sm-3 col-md-3 text-capitalize">LAST NAME</dt>
          <dd class="col-sm-9  col-md-9 text-capitalize"><h5 className="namex"> <b> {i.lname}</b></h5></dd>

          <dt class="col-sm-3 col-md-3 text-capitalize">ADDRESS</dt>
          <dd class="col-sm-9  col-md-9 text-capitalize"><h5 className="namex"> <b> {i.address}</b></h5></dd>

          <dt class="col-sm-3 col-md-3 text-capitalize">DEPARTMENT</dt>
          <dd class="col-sm-9  col-md-9 text-capitalize"><h5 className="namex"> <b> {i.department}</b></h5></dd>

          <dt class="col-sm-3 col-md-3 text-capitalize">PHONE</dt>
          <dd class="col-sm-9  col-md-9 text-capitalize"><h5 className="namex"> <b> {i.phone}</b></h5></dd>
          
          <dt class="col-sm-3 col-md-3 text-capitalize">USERNAME</dt>
          <dd class="col-sm-9  col-md-9 text-capitalize"><h5 className="namex"> <b> {i.username}</b></h5></dd>

      </dl>



              <br/>
<div className="row">
 <br/>
  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12"> 
  <button onClick={()=>deleteHandle(i.id)} className="btn btn-danger col-md-12 col-sm-12 col-sx-12">DELETE</button>
   </div><br></br>
  

</div>

     </div> 

))
}




</div>
</div> 

               

                <br/>

                <div className="row footer">
             <div className="col-md-12 teams">
                
              
             <Footer/>
               </div> 
                
            </div>
                </div>
               </div> 

            
               


                
            </div>
           
            
           </div>
          
        

        

        // </div>
      
    
  );
}

export default Home;
