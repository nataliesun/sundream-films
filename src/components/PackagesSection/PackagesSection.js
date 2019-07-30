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
        </div>
      </>
    );
  }
}

export default PackagesSection;