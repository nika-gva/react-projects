import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://api.jsonbin.io/v3/b/6457c1bc8e4aa6225e98462b";

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const allJobs = await response.json();
    setJobs(allJobs.record);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <div className="ex-container">
        <h1 className="ex-box" style={{textAlign: "center"}}>Loading...</h1>
      </div>
    );
  }
  const { title, desc, date, company } = jobs[value];

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
                  {data.company} 
                </button>
              );
            })}
          </div>
          <div className="ex-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="ex-date">{date}</p>
            {desc.map((element, index) => {
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
