import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Software Engineer. I enjoy learning about new technologies, solving problems, and building things.</p>
                    <p>I come from a non-traditional CS background. When I was pursuing law enforcement, I decided to explore my curiosity with programming on my free time. I have spent the last year learning multiple web development languages and technologies, data structures, and solving algorithms.</p>
                    <p>I'm looking for a great, enthusiastic engineering team to work for that will provide me with interesting and challenging work that I can learn from and contribute to. My goal is that I'd like to learn as much as I can and grow within a company in order to make a meaningful impact.</p>  
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of the things I do!</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building Full-Stack apps using JavaScript, React, HTML, and CSS.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>Coming from a non Computer Science background, I've learned algorithms and data structures through Medium Articles and Udemy courses.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Opportunity</h3>
                    <p>With my education and drive, I am ready to contribute in the industry given the opportunity.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
