import "../App.css";
import Header from "./imports/header";
import Footer from "./imports/footer";
import pic1 from "./pics/a.jpeg";
// import pic2 from "./pics/b.jpeg";
import pic3 from "./pics/c.jpeg";
import pic4 from "./pics/d.jpeg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home(props) 
{


  const [results,setResults]=useState([]);
  const [pics,setp]=useState([pic3,pic3,pic1,pic4,pic1]);

  const [position,setPosition]=useState(['']);
  const [positionid,setPositionID]=useState("");
  const Navigate=useNavigate();
  // ;
useEffect(()=>{
  fetch("http://localhost:5000/votes/resultes").then((res)=>{
    return res.json();
}).then((resp)=>{
  setResults(resp);
    console.log(results)
    // console.log(resp)
}).catch((err)=>{
    console.log(err.message);
})
},[])


const handleposition=(event)=>{
  setPositionID(event.target.value);
}
const handleSubmit=(event)=>{
  event.preventDefault(); 
  if(positionid!='')
  {
    Navigate("/resultOne/"+positionid)
  }else{
    alert("please chse position carefull");
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
// const =props.id;
 
let id=props.id;
// alert(idx);

let user;

const [log,setLog]=useState();
useEffect(()=>{
  user=localStorage.getItem("users");
  const puser=JSON.parse(user);
  setLog(puser.isLognin)
  id=localStorage.getItem("users");
},[log])

console.log(log)

if(log)
  return (
   
        <div className="container-fluid">

          <div className="row header"> 
            <Header id={id}/>

           </div>
<br/><br/><br/>
           <div className="container content">
           <div className="row "><form  action="" onSubmit={handleSubmit}>
           <div className="col-md-1 col-lg-1"></div>

            <div className="col-md-12 col-lg-5  resultcd">
              
            
            <select className="form-control" onChange={handleposition}>
                         {/* <option unselected>choose......</option>  */}

                        {
                          position.map((p)=>(
                                  <option value={p.id}>{p.title}</option>
                          ))
                        }
                          
                          </select>
                          <br/>
                 
                         
                </div>

                <div className="col-md-12 col-lg-5  resultcd">
               <button type="submit" className="btn btn-info col-md-12 col-sm-12 col-sx-12">filter positions</button> 
               
     </div> 
     </form> 
         
            </div>
            <br/>

            {/* //cards */}
            <div className="row">
            {/* <div className="col-md-1 col-lg-1"></div> */}




            {results.map((r)=>(
  
            <div className="col-md-12 col-lg-5  resultcd">

                <div className="row text-center mb-4 votcard shadow-md bg-white p-4 pt-5 ">
                    
                    <div className="col-md-4 col-lg-4 ">
                        <img src={pics[r.id]}  alt="" className="rounded-pill shadow-md p-2 pic"/>
                      <br/>
                      </div>

                    <div className="col-md-8 col-lg-8 ">
                      
                          <h4> <b>  {r.fname}  {r.lname}</b></h4>
                          <p><i> Runnung to Be: <span className="text-primary">{r.title} </span></i></p>
                          <p><i>votes <span className="text-primary">{r.total_votes} </span></i></p>
                          <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" aria-label="Example with label"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{r.total_votes*100/4}%</div>
                          </div>
                
                     </div> 
                </div>
               </div> 

   
)
)}
  
           
                
          

       
             
               


                
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
  else{
    // alert("you are not autorised to access this page login ferst")
    Navigate("/login")
  }
}

export default Home;
