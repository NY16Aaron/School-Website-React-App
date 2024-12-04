import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next icon"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="bac icon"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user 1 image" />
                <div>
                  <h3>Ariana Grandie</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to persue my degree at Educity was one of the best
                decisions I have ever made. The supportive community,
                state-of-the-art faculities, and commitment to acadamic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user 2 image" />
                <div>
                  <h3>Denzel Washington</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to persue my degree at Educity was one of the best
                decisions I have ever made. The supportive community,
                state-of-the-art faculities, and commitment to acadamic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user 3 image" />
                <div>
                  <h3>Tylor Swift</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to persue my degree at Educity was one of the best
                decisions I have ever made. The supportive community,
                state-of-the-art faculities, and commitment to acadamic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user 4 image" />
                <div>
                  <h3>Tom Cruise</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to persue my degree at Educity was one of the best
                decisions I have ever made. The supportive community,
                state-of-the-art faculities, and commitment to acadamic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
