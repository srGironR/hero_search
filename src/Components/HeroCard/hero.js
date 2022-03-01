import React from 'react';
import Title from "../Title/title";
import Descript from "../Description/descript";
import Imag from "../Image/img";
import '../HeroCard/hero.css'




const HeroInfo = (props) =>{
  
    const{title, description, isrc}=props;
    return(
        <div className="o-content">
            <Imag isrc={isrc}></Imag>
            <Title name={title}></Title>     
            <div>
             <Descript descript={description}></Descript>          
            </div>                   
        </div>        
    );
}
 
export default HeroInfo;

