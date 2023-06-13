import "./Dash.css";

import Footer from "./imports/footer";
// import pic3 from "./pics/c.jpeg";

import Header from "./imports/header";
import Side from "./imports/sideM";
// import Footer from "./imports/footer";

import { useEffect, useState } from "react";
// import {Link } from 'react-router-dom';
function Home() 
{

   const [info,setInfo]=useState([]);
   const [position,setPosition]=useState([]);
   const [condidates,setcondidates]=useState([]);
   const [result,setResult]=useState([]);

   const [dcondidates,setdcondidates]=useState([]);
   const [acondidates,setacondidates]=useState([]);
  //  const [countR,setcr]=useState([]);
         useEffect(()=>{

           const d=condidates.filter(d=>d.status=="disactivated");
           setdcondidates(d);

         },[condidates]);
         useEffect(()=>{

            const a=condidates.filter(a=>a.status=="activated");
            setacondidates(a);
 
          },[condidates]);
          //_____________________________
          
      

    const students=info.length;
    const cr=result.length;
    
    const condNumber=condidates.length;
    const np=position.length;

    const dc=dcondidates.length;
    const ac=acondidates.length;



   useEffect(()=>{

     fetch("http://localhost:5000/student/all").then((res)=>{
       return res.json();
   }).then((resp)=>{
     setInfo(resp);
      //  console.log(resp)
   }).catch((err)=>{
       console.log(err.message);
   })
   },[]);

   useEffect(()=>{

    fetch("http://localhost:5000/votes/resultes").then((res)=>{
      return res.json();
  }).then((resp)=>{
    setResult(resp);
     //  console.log(resp)
  }).catch((err)=>{
      console.log(err.message);
  })
  },[]);

 

 
   useEffect(()=>{
     fetch("http://localhost:5000/condidate/all").then((res)=>{
       return res.json();
   }).then((resp)=>{
      setcondidates(resp);
       console.log(resp)
   }).catch((err)=>{
       console.log(err.message);
   })
   },[]);

   
   useEffect(()=>{
      fetch("http://localhost:5000/position/all").then((res)=>{
        return res.json();
    }).then((resp)=>{
      setPosition(resp);
        console.log(position)
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
           
                
            <div className="col-md-8 col-lg-9  teams da">
                <div className="row  text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                {/* <div className=" col-md-12 col-lg-1"></div> */}

                <div className="card col-md-12 col-lg-3"><br/><br/> <h4>STUDENTS</h4><h1>{students}</h1> </div>
                <div className="card col-md-12 col-lg-3"><br/><br/> <h4>CONDIDATES</h4><h1>{condNumber}</h1> </div>
                <div className="card col-md-12 col-lg-3"><br/><br/> <h4>POSITIONS</h4><h1>{np}</h1> </div>

                {/* <div className=" col-md-12 col-lg-1"></div> */}

                <div className="card col-md-12 col-lg-3"><br/><br/> <h4>DISACTIVATED</h4><h1>{dc}</h1> </div>
                <div className="card col-md-12 col-lg-3"><br/><br/> <h4>ACTIVATED</h4><h1>{ac}</h1> </div>
                <div className="card col-md-12 col-lg-3"><br/><br/> <h4>VOTES</h4><h1>{cr}</h1> </div>

     
                <div className="row footer">
             <div className="col-md-12 teams tm">
                
              
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
