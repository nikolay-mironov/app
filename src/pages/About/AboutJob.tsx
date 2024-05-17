import React from "react";
import Location from "../../assets/icon/location.svg";
import Calendar from "../../assets/icon/calendar.svg";
import Company from "../../assets/icon/company.svg";
import { IPractic } from "./../../models";

interface JobProps {
  practic: IPractic;
}

function AboutJob({ practic }: JobProps) {
  return (
    <div className="job">
      <div className="job__first-column">
        <h3 className="job__position">{practic.position}</h3>
        <div className="job__times">Full Time</div>
      </div>
      <div className="job__second-column">
        <div className="job__company">
          <div v-if={practic.link} className="job__company-desc">
            <a href={practic.link}>
              <img src={Company} alt="" />
              <span>{practic.title}</span>{" "}
            </a>
          </div>

          <div className="job__location">
            <img src={Location} alt="icon" />
            <span>{practic.location}</span>
          </div>
        </div>
        <div className="job__years">
          <img src={Calendar} alt="icon" />
          <span>{practic.year}</span>
        </div>
      </div>
    </div>
  );
}

export default AboutJob;
