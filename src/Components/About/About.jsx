import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlay }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about image" className="about-img" />
        <img
          src={play_icon}
          onClick={() => {
            setPlay(true);
          }}
          alt="play image"
          className="play-icon"
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education program. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          Join a vibrant community of learners and educators who are dedicated
          to fostering innovation and excellence. Our state-of-the-art
          facilities, expert faculty, and immersive learning experiences create
          an environment where students can thrive academically and personally..
        </p>
        <p>
          Through a blend of theoretical foundations and hands-on practice, our
          programs encourage critical thinking and problem-solving skills.
        </p>
      </div>
    </div>
  );
};

export default About;
