import React from 'react';

function Portfolio() {
  return (
    <html>
      <head>
        <title>Portfolio</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        {/* Hero/Navigation */}
        <div className="hero">
          <nav>
            <ul>
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact-me">Contact Me</a></li>
            </ul>
          </nav>
          <div className="content">
            <h4>Hello, my name is</h4>
            <h1>Gabrielle Judilla</h1>
          </div>
        </div>
        
        {/* About Me */}
        <section className="about">
          <div className="main">
            <img src="images/me.jpeg" alt="me-pic" />
            <div className="about-me">
              <h2 id="about-me">About Me</h2>
              <h4>Aspiring Developer. Plant Mom. Caffeine Addict.</h4>
              <p> I am a Bay Area native, born and raised in the foggy suburb of Daly City. I graduated from UC Berkeley with a degree in Molecular Cell Biology 
                and spent several years post-grad working in healthcare settings. In the pursuit to learn something new, I enrolled in a coding
                bootcamp, offered through my former college. Currently, I am learning the skills necessary to usher my way into the world of tech.
                Feel free to contact me below if you'd like to connect, discuss coding, or just want to join me for a cup of joe.</p>
            </div> 
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects">
          <div className="title" id="portfolio">
            <h2>My Projects</h2>
          </div>
          <div className="box">
            <div className="card">
              <h5>Semantic HTML</h5>
              <a href="http://127.0.0.1:5503/index.html"><img src="images/bread.jpeg" alt="bread-pic" /></a>
            </div> 
            <div className="card">
              <h5>Password Generator</h5>
              <a href="http://127.0.0.1:5502/index.html"><img src="images/flower.jpeg" alt="flower-pic" /></a>
            </div> 
            <div className="card">
              <h5>Timed Quiz</h5>
              <a href="http://127.0.0.1:5500/index.html"><img src="images/plant.jpeg" alt="plant-pic" /></a>
            </div> 
          </div>
        </section>

        {/* Resume Section */}
        <section className="resume">
          <div className="linked-in">
            <img src="images/beach.jpeg" alt="beach-pic" />
            <div className="resume-attach">
              <h2 id="resume">Peep my Resume</h2>
              <p> Check out my <a href="https://www.linkedin.com/in/gjudilla" alt="resume">LinkedIn</a> (Work in Progress)</p>
            </div> 
          </div>
        </section>

        {/* Contact Me Section */}
        <section className="contact-me">
          <div className="footer">
            <h2 id="contact-me">contact me</h2>
            <form>
              <div className="input-row">
                <div className="input-group">
                  <label>Name:</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="input-group">
                  <label>Email:</label>
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="input-group">
                  <label>Phone Number:</label>
                  <input type="text" placeholder="Your Phone Number" />
                </div>
                <div className="input-group">
                  <label>GitHub:</label>
                  <input type="text" placeholder="Your GitHub" />
                </div>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </body>
    </html>
  );
}

export default Portfolio;
