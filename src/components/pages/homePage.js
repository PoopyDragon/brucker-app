import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Logo from "../../images/Logo.jpg";
import Slide1 from "../../images/slide1.jpg";
import Slide2 from "../../images/slide2.jpg";
import Slide3 from "../../images/slide3.jpg";
import Slide4 from "../../images/slide4.jpg";
import Slide5 from "../../images/slide5.jpg";
import Slide6 from "../../images/slide6.jpg";
import Slide7 from "../../images/slide7.jpg";
import Slide8 from "../../images/slide8.jpg";
import Map from "../../images/Map.jpg";




const images = [
  {
    original: Slide1,
    thumbnail: Slide1,
  },
  {
    original: Slide2,
    thumbnail: Slide2,
  },
  {
    original: Slide3,
    thumbnail: Slide3
  },
  {
    original: Slide4,
    thumbnail: Slide4
  },
  {
    original: Slide5,
    thumbnail: Slide5
  },
  {
    original: Slide6,
    thumbnail: Slide6
  },
  {
    original: Slide7,
    thumbnail: Slide7
  },
];

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">
            <br/>

            <body className="homepagebody">
              <ImageGallery
              items={images}
              autoPlay={true}
              slideInterval={2000}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              />

              <div className="homeLogo">
                College Post
              </div>


            </body>



          <div className = "home">
            <div className="grid-container">
                <div className = "Map">
                  <img className="Map" src={Map}/>
                </div>
                <div className="Mission">
                  <div className ="header">
                    <b>Find out more about:</b>
                    <p> </p>
                    </div>
                      <ul>
                        <li>Graduation Rate</li>
                        <li>Freshmen Retention Rate</li>
                        <li>Student to Faculty Ratio</li>
                        <li>School Size</li>
                        <li>Graduate/Professional School Options</li>
                        <li>Jobs Right Out of School</li>
                        <li>Curriculum</li>
                      </ul>
                    </div>
                  </div>
          </div>
      </div>
    );
  }
}

export default Homepage;
