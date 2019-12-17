import React, { Component } from 'react'

class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/hike1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1><font color="white">Hi! <br />I'm Vu</font></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1iYbAdykIRtQyaR3q0EVKLR6VGrsDUZtb1hK80rpbEmI/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><font color="white">View CV</font><i className="icon-download4" /></a></p>
                          <p>I come from a non-traditional CS background. When I was pursuing law enforcement, I decided to explore my curiosity with programming. I have spent the last year learning multiple web development languages and technologies, data structures, and solving problems.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/hike2.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1><font color="teal">I love building</font><br /><font color="black">and learning </font><font color="yellow">new things!</font></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/radicalkidd" target="_blank" rel="noopener noreferrer"><font color="white">View Projects</font><i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
};

export default Introduction;
