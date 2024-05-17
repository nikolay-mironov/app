import React from "react";
import AboutJob from "./AboutJob";
import { useAppSelector } from "../../hook";

export default function AboutJobs() {
  const jobs = useAppSelector((store) => store.data.aboutMe.jobs);
  return (
    <div className="jobs">
      <div className="jobs__title">
        <h2>Работа</h2>
      </div>
      <div className="jobs__items">
        {jobs.map((job) => (
          <AboutJob practic={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}
