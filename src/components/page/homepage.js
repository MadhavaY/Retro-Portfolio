import React, { useState, useEffect, useRef } from "react";
import "./homepage.scss";
import photo2 from "./photo 2.jpg";
import AnimatedText from "./AnimatedText";
function Homepage() {
  const name_headerRef = useRef(null); 
  return (
    <div className="homepage">
      <section className="home-section">
        <section className="main-header">
          {/* <h1>
            <span className="name-heading">Madhava Yedla</span>
          </h1> */}
          <AnimatedText className='name-heading' textToAnimate="Madhava Yedla" ref={name_headerRef}/>
        </section>

        {/* <img src={photo2}></img> */}

        <section className="information">
          {" "}
          A Computer Science graduate student with interests in Machine Learning
          and front-end development. School has really helped build my interest
          in developing smart systems while making sure they're usable at the
          same time. I just love combining technical problem-solving with the
          creativity of designing interfaces with strong knowledge in algorithms
          and programming. {" "}
        </section>
        <br />

        <section className="information">
          {" "}
          I’m all about machine learning because it’s the only field where
          overthinking is called feature engineering. I also create my own
          websites and nothing sparks joy quite like fixing a div that refuses
          to center, except maybe convincing myself the bug was a feature. I use
          Pytorch for my ML projects and React for the front-end tasks.{" "}
        </section>

        <br />

        <section className="information">
          {" "}
          Because I have a lot free time, I totally love touch typing, reading
          books, talking tech, space and science and I enjoy watching movies.{" "}
        </section>
      </section>
    </div>
  );
}

export default Homepage;

{
  /* <span>
          <span className="text">I build things for the web and </span>
          <span className="text">develop solutions using Machine learning</span>
        </span> */
}
