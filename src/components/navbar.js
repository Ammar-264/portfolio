import {BsFillXCircleFill  } from "react-icons/bs";
import './navbar.css';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";


function Navbar(props) {
  const [menuIcon , setMenuIcon] = useState(false);
 const {homeId , skillsId , projectsId , contactId} = props;
  return (
   
       <div className="navbar">
         <nav>
           <input type ='checkbox' id='check'/>
           <label className='checkBtn' for='check'>

            {menuIcon == false ? <i onClick={()=>setMenuIcon(true)}><FaBars/></i>: <i onClick={()=>setMenuIcon(false)}><BsFillXCircleFill /></i>}

           </label>
           <label className='logo'>(: AMMAR -- ?</label>
           <ul>
             <li><a href={homeId}>Home</a></li>
             <li><a href={skillsId}>Skill's</a></li>
             <li><a href={projectsId}>Project's</a></li>
             <li><a href={contactId}>Contact</a></li>
           </ul>
         </nav>
       </div>

  
  );
}

export default Navbar;
