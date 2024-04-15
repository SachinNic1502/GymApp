import { Button } from '../components/Button';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Plan.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Membership from '../components/Membership'

gsap.registerPlugin(ScrollTrigger);

export default function Plans() {
  const newv = useRef([]);
  const corRef = useRef(null);
  const corriRef = useRef(null);
  const memRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(newv.current, {
      delay: 0.4,
      duration: 1,
      y: '0',
      opacity: 1,
      stagger: 0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.plan--info',
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
      },
    });

    gsap.to(corRef.current, {
      delay: 0.4,
      duration: 1,
      x: '0',
      y: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: corRef.current,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete',
      },
    });

    gsap.to(corriRef.current, {
      delay: 0.4,
      duration: 1,
      x: '0',
      y: '0',
      opacity: 1,
      stagger: 0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: corriRef.current,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
      },
    });

    gsap.to(memRef.current, {
      delay: 0.4,
      duration: 1,
      y: '0',
      opacity: 1,
      stagger: 0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: memRef.current,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
      },
    });

    gsap.from(textRef.current, {
      delay: 0.4,
      duration: 1,
      y: '0',
      x: '0',
      opacity: 0,
      scale: 0.5,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
      },
    });
  }, []);

  return (
    <>
      <div className="faq--header">
        <h1>Plans</h1>
      </div>
      <div className="fet--contain">
        <div className="title">
          <h2>Why FitApp?</h2>
          <div className="underline"></div>
          <div className="">
            <p>
              Turn your life around with a membership that fits your life and
              needs. Whether you’re a fresh beginner or a committed expert,
              FitApp memberships are for those who insist on the best.
            </p>
          </div>
        </div>
      </div>
      <div className="plan__container">
        <div className="plan--info" ref={(el) => (newv.current[0] = el)}>
          <h4>Consistent Results</h4>
          <p>
            Give your body the attention it's been craving by staying active,
            consistent, and most importantly, patient. Do the workout to see the
            results.
          </p>
        </div>
        <div className="plan--info" ref={(el) => (newv.current[1] = el)}>
          <h4>Contagious Enthusiasm</h4>
          <p>
            Enjoying your workout is only part of the journey with us! Train
            with the latest fitness technologies and our up to speed health
            programs crafted for each member. After all, enthusiasm is a
            language we all speak, why not make it a daily staple?
          </p>
        </div>
        <div className="plan--info" ref={(el) => (newv.current[2] = el)}>
          <h4>Sheer Convenience</h4>
          <p>
            FitApp Gym is not your average health club; our membership plans,
            personal training programs, and the International Passport system
            gives you the utmost accessibility and satisfaction. Join one to
            join them all, experience convenience and practicality at its peak.
          </p>
        </div>
      </div>
      <div className="join-us">
        <div className="joinus--container">
          <img
            src="https://sm.askmen.com/t/askmen_in/photo/default/askmen-coolestgym-th_fmq6.h720.jpg"
            alt="membership"
            ref={(el) => (corRef.current = el)}
          />
          <div className="joinus--headline" ref={(el) => (corriRef.current = el)}>
            <h3>How to Join</h3>
            <p>
              Apply online or visit your nearest club and activate your FitApp
              memberships in minutes to train for the future. Our memberships
              are your shortcut to your fitness ambitions.
            </p>
            <Button buttonStyle="btn--primary" buttonSize="btn--large">
              Join Us{' '}
            </Button>
          </div>
        </div>
      </div>
      <div className="plans--ben" ref={memRef}>
        <div className="title">
          <h2>Membership Benefits</h2>
          <div className="underline"></div>
        </div>
        <div className="plans--ben--cont">
          <div className="plans-b">
            <p>
              <i className="fas fa-check-circle"></i>+8000 Group Exercise
              Classes monthly
            </p>
            <p>
              <i className="fas fa-check-circle"></i>International Passport
              Access to over 200 Clubs
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Access to the latest
              Fitness Innovations & Exclusive Programs
            </p>
          </div>
          <div className="plans-b">
            <p>
              <i className="fas fa-check-circle"></i>1500+ Certified Personal
              Trainers
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Access to Good Vibes App
              with 400+ Partner Discounts
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Basketball Court Access{' '}
            </p>
          </div>
          <div className="plans-b">
            <p>
              <i className="fas fa-check-circle"></i>Access to 20 Swimming Pools
            </p>
            <p>
              <i className="fas fa-check-circle"></i>2 Getting You Started
              Personal Training Sessions
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Over 50+ Kids Classes
            </p>
          </div>
        </div>
        <span className="memb--but">
          <Button buttonStyle="btn--primary" buttonSize="btn--large">
            Join Us{' '}
          </Button>{' '}
        </span>
      </div>
      <Membership />
      <div className="refer" ref={textRef}>
        <div className="title">
          <h2>Refer a Friend</h2>
          <div className="underline"></div>
          <div className="refer--headline">
            <p>
              Whether it's competitive camaraderie or a calorie burning catch
              up, working out together gives you a shared high that creates a
              reason to come back for more. Your friends keep you accountable
              for your workout every time, meaning you'll go further in the gym,
              and in life.
            </p>
          </div>
        </div>

        <span className="memb--but">
          <Button buttonStyle="btn--primary" buttonSize="btn--large">
            Join Us{' '}
          </Button>{' '}
        </span>
      </div>
    </>
  );
}
