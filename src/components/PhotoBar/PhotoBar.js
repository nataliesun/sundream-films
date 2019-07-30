import React, { Component } from 'react';
import './PhotoBar.scss';

class PhotoBar extends Component {
  render() {
    return (
      <div className="PhotoBar">
        <div class="image">
          <img src="https://static.wixstatic.com/media/589d3a_9c24f8c6fef64948a5b6d706f0f931cb~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_681,h_454,al_c,q_90,usm_0.66_1.00_0.01/IMG_5023.webp" alt="" />
        </div>
        <div class="image">
          <img src="https://static.wixstatic.com/media/589d3a_aae073831f31451db4acc4388eae8cad~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_681,h_454,al_c,q_90,usm_0.66_1.00_0.01/Snapseed%205.webp" alt="" />
        </div>
        <div class="image">
          <img src="https://static.wixstatic.com/media/589d3a_993423f081424dc8bcf94c16af3c4e9d~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_681,h_454,al_c,q_90,usm_0.66_1.00_0.01/IMG_9836_JPG.webp" alt="" />
        </div>
        <div class="image">
          <img src="https://static.wixstatic.com/media/589d3a_d0171f6c450243e4a082e99420258f4b~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_681,h_454,al_c,q_90,usm_0.66_1.00_0.01/IMG_3737_JPG.webp" alt="" />
        </div>
      </div>
    );
  }
}

export default PhotoBar;