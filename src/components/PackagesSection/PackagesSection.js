import React, { Component } from 'react';
import './PackagesSection.scss';

class PackagesSection extends Component {
  render() {
    return (
      <>
        <section className="PackagesSection">
          <h2>Packages</h2>
          <p>What's Included</p>
        </section>
        <div>
          <h3>Base Package $1350</h3>
          <p className="italic">Start with our base wedding cinematography package and add-on extra elements as you need.</p>
          <p>Our base wedding cinematography package is a perfect all around package providing you with 2 cinematographers for 8 hours capturing all the essential elements of your wedding professionally and creatively. We create a gorgeous cinematic short film telling your wedding story.</p>
          <h4>Overview</h4>
          <ul>
            <li>8 hours of coverage</li>
            <li>Filmed in HD 1080p</li>
            <li>4-6 min Cinematic Short Film</li>
            <li>Digital Download </li>
            <li>Footage from 2-3 cameras and drone footage (venue location and weather permitting)</li>
          </ul>
          <p>The Cinematic Short Film captures your story, emotions, and the unique details of your unforgettable day. We hand-pick special moments from your full wedding day, ceremony, key speeches or toasts, beautiful shots of your venue and put together a 4-6 minute cinematic film. Our creative approach to filming and our diligence in editing allows us to create a beautiful memory that will last forever.</p>
        </div>
      </>
    );
  }
}

export default PackagesSection;