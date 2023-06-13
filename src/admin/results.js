import "./Dash.css";

import Footer from "./imports/footer";
// import pic3 from "./pics/c.jpeg";

import Header from "./imports/header";
import Side from "./imports/sideM";
// import Footer from "./imports/footer";


import {Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() 
{

   const [info,setInfo]=useState([]);
   const id=1;
 
   useEffect(()=>{
   const id=9;
     fetch("http://localhost:5000/votes/resultes").then((res)=>{
       return res.json();
   }).then((resp)=>{
     setInfo(resp);
       console.log(resp)
   }).catch((err)=>{
       console.log(err.message);
   })
   },[]);
 
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
                  <h3 className="title">VOTING RESULTES</h3>
                  <table className="table table-hover table-striped table-responsivenes">
                                    <tr className="th">
                                    <th>NO</th> <th>LAST NAME</th><th>POSITION</th><th>TOTAL VOTES</th><th></th>
                                    </tr>

                                  
                                   {
                                    info.map((i)=>(
                                       <tr>
                                         <td>{i.id}</td>  <td>{i.fname}</td> <td>{i.title}</td><td>{i.total_votes}</td>   <td><button className="btn btn-sm btn-info col-md-6 col-sm-12 col-sx-12">VIEW</button></td>
                                   
                                   </tr> 
                                    ))
                                   }
                                   
                                  
                                                 
                                 
                                </table>

               

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
