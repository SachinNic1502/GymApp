import React from "react";
import Video from '../components/Video'
import HeroSection from '../components/HeroSection'
import Reviews from"../components/Reviews"
import Features from "../components/Features"
import Form from "../components/Form"
import Teams from "../components/Teams"
import Membership from "../components/Membership"


export default function Home() {

  return (
    <>
      <HeroSection/>
      <Features/>
      <Membership/>
      <Teams/>
      <Video url={'https://videos.pexels.com/video-files/6388882/6388882-uhd_3840_2160_25fps.mp4'}/>
      <Reviews/>
      <Form/>

    </>
  );
}