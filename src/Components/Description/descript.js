import React from "react"
import ToggleBox from "../ToggleBox";
import "../Description/desp.css"

const Descrip = (props) =>{
  console.log("Descripción",props);
  //Destructuring
const{descript}=props;

return(
      <ToggleBox title="Comics">
        <div class="o-desContainer">  
      <p>{descript}</p>
      </div>
      </ToggleBox> 
);
}

export default Descrip;

