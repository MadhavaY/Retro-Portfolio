import React,{useRef} from "react";
import './connect.css'
import AnimatedText from "../AnimatedText";

function Connect() {
  const connect_headerRef = useRef(null);
  return (
    <div className="connect">
      <section className="connect-section">
            <AnimatedText className="header4" textToAnimate="Connect" ref={connect_headerRef}></AnimatedText>

            <section className="connect-list">
            <ul>
                <li> <a href="https://github.com/MadhavaY?tab=overview&from=2024-10-01&to=2024-10-15" target="_blank">Github</a> </li>
                <li> <a href="https://www.linkedin.com/in/madhava-y/" target="_blank">LinkedIn</a></li>
                <li> <a href="mailto:madhavayedla@gmail.com" target="_blank">Email</a> </li>
                <li> <a href="https://www.instagram.com/madhava.yedla/" target="_blank">Instagram</a></li>  
                <li> <a href="https://drive.google.com/file/d/1ISw797FlN30-DqPzFjwCedAnTJbGZjRU/view?usp=sharing" target="_blank">CV</a></li>  
            </ul>
 
        </section>
      </section>
    </div>
  );
}

export default Connect;
