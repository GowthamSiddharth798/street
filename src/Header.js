
import React from "react"; 
import { Card} from 'react-rainbow-components';
import './Header.css';
import 'bootstrap';
import UncontrolledExample from "./Hamber.js";

function Header(){
return(
    

   <>
    <Card className="head-main shining-move"><div className="in-line ">
      <div className="hamb"> <UncontrolledExample /></div>
        <img src="https://i.ibb.co/YZw8yxS/Iot-logo.jpg" class="main-logo" />
        <h1 className="main-heading">GREEN FUSION IoT SOLUTIONS</h1> 
        <div className="title"> <h1 ><i>Street  Lights</i></h1></div>
        <div >
            <img src="https://i.ibb.co/Cm04CR4/vishnu-logo.jpg" class="vit-logo "/>
        </div>
        <h1  class="heading">VISHNU INSTITUTE OF Technology</h1>   
                                              
     </div>
    </Card>
  <div>
  
  </div>
   </>
);  
}

export default Header;

               