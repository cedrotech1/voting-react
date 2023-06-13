import "../App.css";
import { useEffect, useState } from "react";
import Header from "./imports/header";
import Footer from "./imports/footer";
import pic1 from "./pics/a.jpeg";
import pic2 from "./pics/b.jpeg";
import { Link } from "react-router-dom";
import pic3 from "./pics/c.jpeg";
import pic4 from "./pics/d.jpeg";
// import {Link } from 'react-router-dom';




function Register(props) 
{

  const [position,setPosition]=useState(['']);

  const [positionid,setPositionID]=useState("");
  const [manifesto,setManifesto]=useState("");
  const [iscondidate,setiscondidate]=useState();

  useEffect(()=>{
    fetch("http://localhost:5000/decision").then((res)=>{
      return res.json();
  }).then((resp)=>{
    setiscondidate(resp[0].addCondidate);
      console.log(resp[0].addCondidate)
  }).catch((err)=>{
      console.log(err.message);
  })
  },[]);
  
  const studentid=props.id;


  const handleposition=(event)=>{
    setPositionID(event.target.value);
  }

  const handlemanifesto=(event)=>{
    setManifesto(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault(); 
    const obj={studentid,positionid,manifesto}
    console.log(obj);

    if(iscondidate==1){
      fetch("http://localhost:5000/condidate/register",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(obj)
            }).then((res)=>{
              return res.json();
              
            }).then((resp)=>{
              // console.log(resp)
              if(resp.message){
                alert(resp.message);
              }else{
                console.log(resp);
              }
            }).catch((err)=>{
              console.log(err+"vbnmnb")
            })
    }else{
      alert("registration did not started yet");
    }


  }

 
  


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
   
        <div className="container-fluid">

          <div className="row header"> 
            <Header id={studentid}/>

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

                    <div className="col-md-6 col-lg-6 password">
                      <br/>
                      <form  action="" onSubmit={handleSubmit}>
                <h4 className="bg-info text-white caption"> REGISTER AS CONDIDATE {props.id}</h4>
                <br/>
                        <div className="form-group">
                        <lablel> <h4>At which position</h4></lablel>
                         <select className="form-control" onChange={handleposition}>
                         {/* <option unselected>choose......</option>  */}

                        {
                          position.map((p)=>(
                                  <option value={p.id}>{p.title}</option>
                          ))
                        }
                          
                          {/* <option>secretary</option> */}




                          </select>
                        </div>
                        <div className="form-group">
                        <lablel> <h4>Write condidate maniefesto</h4></lablel>
                          <textarea col='10' rows={7} className="form-control" onChange={handlemanifesto}></textarea>
                        </div>
                       
                     
                
                
                <div className="row">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                  <button type="submit" className="btn btn-info col-md-12 col-sm-12 col-sx-12">Register</button>
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

export default Register;
