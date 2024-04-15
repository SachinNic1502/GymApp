import React, {useRef,useEffect} from "react";
import './HeroSection.css';
import {Link} from "react-router-dom"
import { Power3, gsap} from "gsap"
import { Button } from "./Button";
export default function HeroSection (){

 let text=useRef(null);
const tl = gsap.timeline();

useEffect(() => {


    tl.to(text,0.6, {opacity:1,y:0, ease:Power3});
    
  }, []);



  return(
   <div className= "hero-container" id="hero">
      <div className="hero--header" ref={el=> {text=el}}>
    
          <h1>FitApp Gym </h1>
          <h3>Shape your body like the way you want it.</h3>
          <h3>Starts From <span><sup>$</sup>18/<small>month</small></span></h3>
          <div className= "hero-btns">
          <Link to='/'>
            <Button buttonStyle="btn--primary" className="btn" buttonSize="btn--large" >Join Now</Button> </Link>
          </div>
          </div>
    </div>
  )
}