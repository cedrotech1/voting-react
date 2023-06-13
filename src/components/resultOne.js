import "../App.css";
import Header from "./imports/header";
import Footer from "./imports/footer";
import pic1 from "./pics/a.jpeg";
// import pic2 from "./pics/b.jpeg";
import pic3 from "./pics/c.jpeg";
import pic4 from "./pics/d.jpeg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home(props) 
{
const ids=props.id;
  const [results,setResults]=useState([]);
  const [pics,setp]=useState([pic3,pic3,pic1,pic4,pic1]); 
  const {id}=useParams();

useEffect(()=>{
  fetch("http://localhost:5000/votes/resultes/"+id).then((res)=>{
    return res.json();
}).then((resp)=>{

    setResults(resp);
    console.log(results)

}).catch((err)=>{
    console.log(err.message);
})
},[])






  return (
   
        <div className="container-fluid">

          <div className="row header"> 
            <Header id={ids}/>

           </div>
<br/><br/><br/>
           <div className="container content">
           {/* <div className="col-md-12 col-lg-10  resultcd position">RESULTS ON POSITION :{results[0].title}</div> */}
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

   
))}
  
           
                
          

       
             
               


                
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

export default Home;
