import React, { useEffect, useRef, useState } from "react";
import "./slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const url = "https://api.jsonbin.io/v3/b/6458e5689d312622a35a05a1";

export function App() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const peopleList = await response.json();
    setPeople(peopleList.record);
    setIsLoading(false);
  };

  
  useEffect(() => {
    fetchData();
    const lastPerson = people.length - 1;
    if (active < 0) {
      setActive(lastPerson);
    }
    if (active > lastPerson) {
      setActive(0);
    }
  }, [active, people]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive(active + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [active]);


  if (isLoading) {
    return (
      <div className="loading">
        <h1 className="loading-content">loading...</h1>
      </div>
    );
  }
  return (
    <section className="people-container">
      <div className="title">
        <h1>people</h1>
        <hr />
      </div>
      <div className="people-content">
        {people.map((person, index) => {
          const { id, image, bio, profession, age, name } = person;
          let position = "user-prev";

          if (index === active) {
            position = "user-active";
          }
          if (
            index === active - 1 ||
            (active === 0 && index === people.length - 1)
          ) {
            position = "user-next";
          }

          return (
            <div className={`user-box ${position}`} key={index}>
              <img src={image} alt={name} className="people-image" />
              <h3>{name}</h3>
              <p>{bio}</p>
            </div>
          );
        })}
        <button className="people-left" onClick={() => setActive(active - 1)}>
          <FaChevronLeft />
        </button>
        <button className="people-right" onClick={() => setActive(active + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
