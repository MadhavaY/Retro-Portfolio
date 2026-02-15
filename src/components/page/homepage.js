import React, { useRef } from "react";
import "./homepage.scss";
import lewis from "./lewis.jpg";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

function Homepage() {
  const name_headerRef = useRef(null);
  return (
    <div className="homepage">
      <section className="home-section">
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="main-header"
        >
          <AnimatedText
            className="name-heading fade-in"
            textToAnimate="Madhava Yedla"
            ref={name_headerRef}
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={lewis} alt="cool photo you missed"></img>
          <section className="information">
            {" "}
            A Computer Science graduate student with interests in Machine
            Learning and front-end development.
            {/* School has really helped build my interest in developing smart systems while making sure they're
            usable at the same time. */}
            {" "}I just love combining technical problem-solving with the creativity
             of designing interfaces {/* with strong knowledge in algorithms and
            programming.{" "} */}
          </section>

          <section className="information">
            {" "}
            I’m all about machine learning because it’s the only field where
            overthinking is called feature engineering. I also create my own
            websites and nothing sparks joy quite like fixing a div that refuses
            to center, except maybe convincing myself the bug was a feature. I
            use Pytorch for my ML projects and React for the front-end tasks.{" "}
          </section>

          <section className="information">
            {" "}
            Because I have a lot free time, I totally love touch typing, reading
            books, talking tech, space and science and I enjoy watching movies.{" "}
          </section>
        </motion.section>
      </section>
    </div>
  );
}

export default Homepage;

