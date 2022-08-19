import React, { Component } from "react";

// eslint-disable-next-line
import $ from "jquery";

// CSS Import
import "./MembersPage.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";

import ContactModal from "./Components/ContactModal/ContactModal";
import Meetings from "./Components/Meetings/Meetings";

// Library Imports
import ReactTypingEffect from "react-typing-effect";

class AboutPage extends Component {
  state = {
    people: [
      {
        name: "Joshua Evenden-Wallick",
        grade: "11th",
        image: "../images/Members/Josh.png",
        desc: "Someone's concoise (since no one actually wants to read all of it) description here",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="FadeInLoad">
          <div className="LinksPageTitleDiv">
            <ReactTypingEffect
              text={["About"]}
              eraseSpeed="70"
              typingDelay="800"
              speed="180"
              eraseDelay="99999999999999"
              cursor=" "
              className="LinksPageTitle"
              id="PageTyping"
            />
          </div>
        </div>
        <div className="FadeInLoad">
          <hr />
          <h2>General Info</h2>
          <div className="AboutRow">
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutPage">
                <div className="PicturesColumn">
                  <img src="../images/About/Us.png"></img>
                </div>
              </li>
            </ul>
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutPage">
                <div className="TextColumn">
                  <p>Text</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="FadeInLoad">
          <hr />
          <h2>Building Robots</h2>
          <div className="AboutRow">
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutPage">
                <div className="PicturesColumn">
                  <img src="../images/About/Robot1.png"></img>
                </div>
              </li>
            </ul>
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutPage">
                <div className="TextColumn">
                  <p>Text</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="FadeInLoad">
          <hr />
          <h2>Coding</h2>
          <div className="AboutRow">
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutPage">
                <div className="PicturesColumn">
                  <img src="../images/Languages/Java.png"></img>
                </div>
              </li>
            </ul>
            <ul
              style={{ textAlign: "center", listStyle: "none" }}
              className="AboutColumn"
            >
              <li className="AboutPage">
                <div className="TextColumn">
                  <p>Text</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getDayDiff(startDay) {
    var oldDate = new Date(startDay);
    var curDate = new Date();
    var timeDiff = curDate.getTime() - oldDate.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    return dayDiff;
  }
}

export default AboutPage;
