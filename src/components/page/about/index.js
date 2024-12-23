import React,{useRef} from "react";
import "./about-style.css";
import AnimatedText from "../AnimatedText";

function About() {
  const about_headerRef = useRef(null);
  return (
    <div className="intro">
      <section className="about-section">
          <AnimatedText className="header2" textToAnimate= "About" ref={about_headerRef}></AnimatedText>
        <section className="">
          {" "}

          I’m all about machine learning because it’s the only field where overthinking is called feature engineering.
          I also create my own websites and nothing sparks joy quite like fixing a div that refuses to center, except maybe 
          convincing myself the bug was a feature. I use Pytorch for my ML projects and React for the front-end tasks. I read books, touch type, watch movies and play badminton in my free time.
           Some of my favorite movies are Jersey(2019), La La Land, Whiplash.
       {" "}

          
        </section>
      </section>
    </div>
  );
}

export default About;

// I am a Machine learning enthusiast, with a strong foundation in
// front-end development. I concentrate on GenAI, LLM and NLP with pytorch. With
// a background in Computer Science, I am sensitive towards layout,
// colors, and animation.

// i build things for the web and develop solutions using Machine learning
