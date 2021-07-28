import React from "react";

function AboutCard(props) {
  return (
    <div className="secOuterCont">
      <div className="secInnerCont">
        <div className="headings">
          <h1 className="mainHeader">About Me</h1>
          <h2 className="subHeader">
            I am an aspiring developer mainly focussing on front-end development
            but with ability to work on the back-end.
          </h2>
          <p>
            I have an affinity for problem solving which lead me to pursuing
            Mathematics in further education. Using logic alongside imaginative
            solutions lead me to investigate a career in software development,
            naturally starting my journey by learning Python.{" "}
          </p>
          <p>
            After completing a few projects in Python I looked to expand my
            skillset, trying out React, and finding that Front-end development
            was what I wanted to pursue, combining what I already loved about
            coding with visual feedback and aesthetic sensibilty.
          </p>
          <p>
            Given we are firmly in the digital age, it is always incredibly
            frustrating to visit outdated, clunky web apps, and I want to be
            part of providing clean, elegant, and above all functional websites
            that combine ease of use with fast UX and beautiful design.
          </p>
          <p>
            I have now built multiple apps using React, alongside Node.js as the
            backend, and integrating the data in the cloud using mongoDB. With
            each new project I aim to deepen my core knowledge of React
            alongside learning new supplentary skills. To this end I have used
            git, Sass and React Native.
          </p>
          <p>
            Currently I am building ocean rowing boats, and I have recently
            pivoted from constructing the hardware (oars, rowing system etc.) to
            working with the electronics, wiring up the batteries and solar
            panels for instance. I have been lucky in my tenure not only to
            learn the skills specific to rowing, but due to the high pertforance
            nature of the craft we create alongside the stringent safety
            measures has taught me to executue each job to the highest possibkle
            standard, no matter how small.
          </p>
          <p>
            I have recently moved to London, and alongside connecting with
            friends post-lockdown, I am highly excited to explore what the city
            has to offer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
