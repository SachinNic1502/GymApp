import React, {useRef,useEffect} from "react";
import { gsap} from "gsap";
import './Features.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default  function Features ()  {

let text=useRef(null);

useEffect(() => {

   gsap.to(text, {
      delay:0.4,
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []);


    return (
      <div className="feautures">
        <div className="feautures--container" >
        <div className="heading" ref={el=> {text=el}} >
          <h2 >Features</h2>
          <h1>What we Offer</h1>
          <div className="features--services">
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Group Fitness Classes</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Personal Trainer Sessions</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Indoor Pool</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Steam Room and Souna</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Basketball Court</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Open 24/7</p>
          </div>
          </div>
        
          <div className="image" >
             <img className="features--image" src="https://wallpapercave.com/wp/wp3867926.jpg" alt="gym"/>
          </div>
        </div>
      </div>
    )};
