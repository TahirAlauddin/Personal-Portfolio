import "./MeetOurTeam.css";
import React from "react";

const MeetOurTeam: React.FC = () => {
  return (
    <section className="team-container">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {/* Repeat this div for each team member */}
        <div className="team-member">
          <div className="team-image-wrapper">
          <img
            src="/assets/img/tahir/Tahir with shadow.webp"
            alt="Team Member 1"
            className="team-image"
          />
          </div>
          <p className="team-name">John Doe</p>
          <p className="team-role">Web Developer</p>
        </div>
        <div className="team-member">
          <div className="team-image-wrapper">
          <img
            src="/assets/img/tahir/Tahir with shadow.webp"
            alt="Team Member 1"
            className="team-image"
          />
          </div>
          <p className="team-name">John Doe</p>
          <p className="team-role">Web Developer</p>
        </div>
        <div className="team-member">
          <div className="team-image-wrapper">
          <img
            src="/assets/img/tahir/Tahir with shadow.webp"
            alt="Team Member 1"
            className="team-image"
          />
          </div>
          <p className="team-name">John Doe</p>
          <p className="team-role">Web Developer</p>
        </div>
        <div className="team-member">
          <div className="team-image-wrapper">
          <img
            src="/assets/img/tahir/Tahir with shadow.webp"
            alt="Team Member 1"
            className="team-image"
          />
          </div>
          <p className="team-name">John Doe</p>
          <p className="team-role">Web Developer</p>
        </div>
                {/* Add more team members as needed */}
      </div>
    </section>
  );
};

export default MeetOurTeam;
