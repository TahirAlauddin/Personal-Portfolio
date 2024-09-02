import "./MeetOurTeam.css";
import React from "react";
import { team } from "../../utils/team.json";

const MeetOurTeam: React.FC = () => {
  return (
    <section className="team-container">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
      {team.map((member, index) => (
        <div key={index} className="team-member">
          <div className="team-image-wrapper">
            <img
              src={`/assets/img/${member.picture}`}
              alt={`${member.name}`}
              className="team-image"
            />
          </div>
          <p className="team-name">{member.name}</p>
          <p className="team-role">{member.role}</p>
        </div>
      ))}
            </div>
    </section>
  );
};

export default MeetOurTeam;
