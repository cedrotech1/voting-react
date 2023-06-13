import "./Dash.css";

import Footer from "./imports/footer";
// import pic3 from "./pics/c.jpeg";

import Header from "./imports/header";
import Side from "./imports/sideM";
// import Footer from "./imports/footer";
import { useEffect, useState } from "react";

import {Link } from 'react-router-dom';
function Home() 
{

   const [position,setPosition]=useState(['']);

  

   
 
 
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
 

   //__________________________________________________________________________
   // const [position,setPosition]=useState(['']);

   const [title,setTitle]=useState("");
   // const [manifesto,setManifesto]=useState("");
 
 
   const handleTitle=(event)=>{
      setTitle(event.target.value);
   }
 
  
   const handleSubmit=(event)=>{
     event.preventDefault(); 
     const obj={title}
     console.log(obj);
     fetch("http://localhost:5000/position/addPosition",{
       method:"POST",
       headers:{"content-type":"application/json"},
       body:JSON.stringify(obj)
           }).then((res)=>{
             return res.json();
             
           }).then((resp)=>{
             // console.log(resp)
            //  if(resp.message){
            //    alert(resp.message);
            //  }else{
               alert(resp.message);
               window.location.reload();
            //  }
           }).catch((err)=>{
             console.log(err+"vbnmnb")
           })
 
   }

   const deleteHandle=(id)=>{

      // alert(id);
  
      if(window.confirm("do you want to delete it"))
      {
          fetch("http://localhost:5000/position/delete/"+id,{method:"POST"}).then((res)=>{
                  alert("well deleted");
              window.location.reload();
            //   Navigate("/admin/student")
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
                     <div className="row">
                           <div className="col-lg-8 col-md-12">
                           <h3 className="title">LIST OF POSITION</h3>
                  <table className="table table-hover table-striped table-responsivenes">
                                    <tr className="th">
                                    <th>NO</th> <th>TITLE</th><th></th>
                                    </tr>
                                  
                                   {
                                    position.map((i)=>(
                                       <tr>
                                         <td>{i.id}</td>  <td>{i.title}</td>   <td>
                                          <button onClick={()=>deleteHandle(i.id)} className="btn btn-sm btn-danger text-dark col-md-6 col-sm-12 col-sx-12">delete</button></td>
                                   
                                   </tr> 
                                    ))
                                   }
                                </table><br/>

                           </div>
                           <div className="col-lg-4 col-md-12">
                           <form onSubmit={handleSubmit}>
                <h4 className=" text-white  caption1"> ADD POSITION</h4>
                
                        <div className="form-group">
                       
                         <input type="text" className="form-control" onChange={handleTitle}/>
                        </div>
                        <br/>
 
                <div className="row">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
               <button type="submit" className="btn btn-info col-md-12 col-sm-12 col-sx-12">Register</button>
                   </div><br></br>
                  
                
                </div>
                </form>
                           </div>


                     </div>

                  
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
