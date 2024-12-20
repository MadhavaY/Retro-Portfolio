import React from "react";
import "./homepage.scss";

function Homepage() {
  return (
    <div className="homepage">
      <section className="home-section">


        <section className="main-header">
          <h1>
            <span className="name-heading">Madhava Yedla</span> 
          </h1>
        </section>

        <section className="information">
          {" "}
          A Computer Science graduate student with interests in Machine Learning
          and front-end development. School has really helped build my interest
          in developing smart systems while making sure they're usable at the
          same time. I just love combining technical problem-solving with the
          creativity of designing interfaces with strong knowledge in algorithms
          and programming. I look forward to creating new applications, using
          those skills to push beyond what is possible in both AI and web
          development.{" "}
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
