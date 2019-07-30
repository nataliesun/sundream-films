import React, { Component } from 'react';
import PhotoBar from '../../components/PhotoBar/PhotoBar';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import PackagesSection from '../../components/PackagesSection/PackagesSection';

import './LandingPage.scss';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h1>Sundream Films</h1>
        <p>Wedding Videography For You</p>
        <section className="about-me">
          <h3>About Me</h3>
          <p>I am a wedding & travel videographer based in the Northern Virginia area. Capturing memories and immersing myself in everyday stories and culture is a passion that I have fed for many years. I have traveled to over fifteen countries, filming my love for this world and the people in it. I hope to say that my experiences outside of these familiar boundaries helped shape my style, creating an eye that captures beauty from all places and faces.</p>
          <p>I graduated from the University of Virginia with a Bachelor’s Degree in Media Studies and Economics & a Master’s degree in Marketing and Management.  Today I’m here to use my love of film to tell your unique story.</p>
        </section>
        <button className="contact-btn">Contact</button>
        <PhotoBar />
        <VideoPlayer />
        <PackagesSection />
      </div>
    );
  }
}

export default LandingPage;