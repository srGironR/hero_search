import React from "react"
//import "../Title/title.css"

const Title = (props) =>{
  console.log("Parámetros",props);

  //Destructuring
  const{name}=props;
    return(
        <div class="o-tileContainer">
          <h4>{name}</h4>
        </div>
    );
}
export default Title;