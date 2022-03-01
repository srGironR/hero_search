import React from "react"
//import "../Title/title.css"

const img = (props) =>{
  console.log("Parámetros",props);

  //Destructuring
  const{isrc}=props;
    return(
        <div class="o-img">
          <img class="o-img" src={isrc} alt=""></img>
        </div>
    );
}
export default img;

