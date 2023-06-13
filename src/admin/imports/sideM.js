
import {Link } from 'react-router-dom';
function header() 
{
  return (
   
<>
          
   
    <ol>
       <div className='list-group'>
             <Link to='/Admin/dashboard' className="text-decoration-none"><li className='list-group-item'>DASHBOARD</li></Link> 
        </div>
        <div className='list-group'>
             <Link to='/Admin/student' className="text-decoration-none"> <li  className='list-group-item'>STUDENTS</li></Link> 
        </div>  
        <div className='list-group'>  
        <Link to='/Admin/condidate' className="text-decoration-none"> <li  className='list-group-item'>ALL CONDIDATES</li></Link> 
        </div>
        <div className='list-group'>  
        <Link to='/Admin/Acondidate' className="text-decoration-none"> <li  className='list-group-item'>ACTIVATED CONDIDATES</li></Link> 
        </div>

        <div className='list-group'>  
        <Link to='/Admin/Dcondidate' className="text-decoration-none"> <li  className='list-group-item'>DISACTIVATED CONDIDATES</li></Link> 
        </div>
        <div className='list-group'>  
        <Link to='/Admin/results' className="text-decoration-none"><li  className='list-group-item'>RESULTS</li></Link>
        </div>
        <div className='list-group'>  
        <Link to='/Admin/position' className="text-decoration-none"><li  className='list-group-item'>POSITION</li></Link>
        </div>
        <div className='list-group'>  
        <Link to='/admin' className="text-decoration-none"> <li  className='list-group-item'> <span>LOGOUT</span></li></Link>
        </div>

        
     </ol> 
     
 </>
      
    
  );
}

export default header;
