import React, {useRef,useEffect} from "react";
import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import'./Teams.css'



gsap.registerPlugin(ScrollTrigger);

export default function Teams() {

let img1=useRef(null);
let img2=useRef(null);
let img3=useRef(null);
let img4=useRef(null);



useEffect(() => {

   gsap.to(img1, {
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: img1,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    gsap.to(img2, {
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: img2,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    gsap.to(img3, {
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: img3,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    gsap.to(img4, {
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: img4,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []);



  return (
    <div className="team">
     <div className="team--wrapper">
     <div className="team--text">
         <h2 >Private Coaching</h2>
          <h1>Meet Our Trainers </h1>
          <p>All our personal trainers have over 30 years of experience combined. Each trainer specializes in strength and monbility workouts.</p>
    </div>
     <div className="team--text">
         <h2 >Free Trial</h2>
          <h1>Get 7 Days Trial</h1>
          <p>You can work with each trainer for up to 7 days for free in order to see if they are a good fit for your goals.</p>
    </div>

    <div className="team--card" ref={el=> {img1=el}}>
      <p>Sara</p>
      <img src="https://elitefitnesspersonaltraining.com/wp-content/uploads/2019/07/Brittany-12-360x460.jpeg" alt="Trainer Sara" className="team--image"/>
    </div>
    <div className="team--card" ref={el=> {img2=el}}>
      <p>Carlos</p>
      <img src="https://fcfcoaching.com/wp-content/uploads/2018/06/2018-05-24-06.26.33-1-683x1024.jpg" alt="Trainer Carlos" className="team--image"/>
    </div>
     <div className="team--card" ref={el=> {img3=el}}>
      <p>Linda</p>
      <img src="https://granitebillings.com/img/trainers/kari_bogner.jpg" alt="Trainer Linda" className="team--image"/>
      </div>
    <div className="team--card" ref={el=> {img4=el}}>
      <p>Eduard</p>
      <img src="https://content3.jdmagicbox.com/comp/navi-mumbai/s6/022pxx22.xx22.180803185547.n8s6/catalogue/sculpt-fitness-kopar-khairane-navi-mumbai-personal-gym-trainers-aapbjssga4.jpg?clr=4c2e1a" alt="Trainer Eduard" className="team--image"/>
    </div>
   
    </div>
    </div>
    )
    };