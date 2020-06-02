import React, { Component } from "react";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import Darren from "../../images/Darren.jpg";
import Tiffany from "../../images/Tiffany.jpg";
import Brooke from "../../images/Brooke.jpg";


class Meettheteam extends Component {

  openPopupbox1() {
    const content = (
      <div>
        <p className = "darrenheader">
          Darren Tang
        </p>
        <div className="grid-container">
          <div>
            <img className="darrensmall" src={Darren}/>
          </div>
          <div>
            <p className="darrenquote">
            Darren Tang is a junior at Mission San Jose High School. He co-founded College Book in order to bridge the gap between high schoolers and alumni.
            </p>
          </div>
        </div>
      </div>
    );

    PopupboxManager.open({
      content,
      config: {
          titleBar: {
            enable: false
          },
          fadeIn: true,
          fadeInSpeed: 500
        }
    });
  }
    openPopupbox2() {
      const content = (
        <div>
          <p className = "tiffanyheader">
            Tiffany Zhang
          </p>
          <div className="grid-container">
            <div>
              <img className="tiffanysmall" src={Tiffany}/>
            </div>
            <div>
              <p className="tiffanyquote">
              Tiffany Zhang is a junior at Mission San Jose High School. She co-founded College Book because she wanted to bring the college visit experience online.
              </p>
            </div>
          </div>
        </div>
      );

      PopupboxManager.open({
        content,
        config: {
            titleBar: {
              enable: false
            },
            fadeIn: true,
            fadeInSpeed: 500
          }
      });
    }

    openPopupbox3() {
      const content = (
        <div>
          <p className = "brookeheader">
            Brooke Zheng
          </p>
          <div className="grid-container">
            <div>
              <img className="brookesmall" src={Brooke}/>
            </div>
            <div>
              <p className="brookequote">
              Broke Zheng is a junior at Mission San Jose High School. She co-founded College Book in order to learn more about the college experience.
              </p>
            </div>
          </div>
        </div>
      );

      PopupboxManager.open({
        content,
        config: {
            titleBar: {
              enable: false
            },
            fadeIn: true,
            fadeInSpeed: 500
          }
      });
    }

render() {
  return (
    <div className="container-fluid">
      <div className="meetTheTeam">
        <div>
          <PopupboxContainer />
        </div>

        <p className="meettheteam">
          Meet The Team
        </p>

        <p className="description">

          The College Book team consists of high schoolers who believe educating students on the college experience is key.
        </p>
        <p className="description1">
          Click on our images for more details.
        </p>
          <body>
            <div className="grid-container">
              <div className = "item1">
                <img className="Darren" src={Darren}onClick={this.openPopupbox1}/>
              </div>
              <div className = "item2">
                <img className="Tiffany" src={Tiffany}onClick={this.openPopupbox2}/>
              </div>
              <div className="item3">
                <img className="Brooke" src={Brooke}onClick={this.openPopupbox3}/>
              </div>
            </div>

          </body>
        </div>
      </div>
    );
  }
}

export default Meettheteam;
