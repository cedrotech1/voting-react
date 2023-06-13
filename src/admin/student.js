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
   const [info1,setInfo1]=useState([]);
   const [data,setData]=useState('');
  
   const filterHandle=(event)=>{
      setData(event.target.value);
   }
  useEffect(()=>{
         const d=info.filter(d=>d.username==data || d.fname==data);
         setInfo1(d);

 },[data]);
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
                  <h3 className="title">STUDENT LIST {data}</h3>
                  <table className="table table-hover table-striped table-responsivenes">
                                    <tr className="th">
                                    <th>NO</th> <th>USERNAME</th><th>FIRST NAME</th>
                                    <th><input type="text" onChange={filterHandle} className="form-control" placeholder="SEARCH HERE !"/></th>
                                    </tr>
                                    {(data=='')?(<tbody>{
                                    info.map((i)=>(
                                       <tr>
                                         <td>{i.id}</td>  <td>{i.username}</td> <td>{i.fname}</td>  <td>
                                          <Link to={`/admin/studentDetails/${i.id}`}>
                                              <button className="btn btn-sm border-info col-md-6 col-sm-12 col-sx-12">VIEW</button>
                                          </Link></td>
                                   
                                       </tr> 
                                    ))
                                   }</tbody>):(<tbody>{
                                    info1.map((i)=>(
                                       <tr>
                                         <td>{i.id}</td>  <td>{i.username}</td> <td>{i.fname}</td>  <td>
                                          <Link to={`/admin/studentDetails/${i.id}`}>
                                              <button className="btn btn-sm border-info col-md-6 col-sm-12 col-sx-12">VIEW</button>
                                          </Link></td>
                                   
                                       </tr> 
                                    ))
                                   }</tbody>)}
                                  
                                   
                                   
                                  
                                                 
                                 
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
