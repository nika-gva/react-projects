import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://api.jsonbin.io/v3/b/6457c1bc8e4aa6225e98462b";
const url_local = "http://localhost:5173/db.json";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url_local);
    const allJobs = await response.json();
    setJobs(allJobs.experience);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs()
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1 className="loading-content" style={{textAlign: "center"}}>Loading...</h1>
      </div>
    );
  }
  const {company_name,job_title,date,description} = jobs[value];
  return (
    <main className="ex-container">
      <section className="ex-box">
        <div className="ex-title">
          <h1>expierence</h1>
          <hr />
        </div>
        <div className="ex-content">
          <div className="ex-companies">
            {jobs.map((data, index) => {
              return (
                <button className={`ex-button ${index===value && "ex-active"}`} key={index} onClick={() => setValue(index)}>
                  {data.company_name} 
                </button>
              );
            })}
          </div>
          <div className="ex-info">
            <h3>{job_title}</h3>
            <h4>{company_name}</h4>
            <p className="ex-date">{date}</p>
            {description.map((element, index) => {
              return (
                <div key={index} className="ex-desc">
                  <FaAngleDoubleRight color="aqua"/>
                  <p >{element}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
