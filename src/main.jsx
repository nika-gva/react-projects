import { React, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"
import { App as Birthday } from "./1-birthdayToday/main";
import { App as Review } from "./3-reviews/main";
import { Page as Tours } from "./2-tours/main";
import { App as Accordion } from "./4-accordion/main";
import { App as Menu } from "./5-menu/main";
import { App as Expierence } from "./6-expierence/main";
import { App as Slider } from "./7-slider/main";
import { Website1 } from "./8-website1/website1";
import NavData from "./navigation";
const url = "https://api.jsonbin.io/v3/b/6457bd119d312622a35978d3";

function App() {
  const [navigation, setNavigation] = useState(NavData);
  const [active, setActive] = useState();
  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    setActive(index);
    setOpen(false);
  }
  function LandingPage() {
    return (
      <main className="landing-container">
        <section className="landing-box">
          <h1>👋 hello!</h1>
          <p>This is a page where you can see simple react projects.</p>
          <p>Use navigation menu to see all the projects.</p>
        </section>
      </main>
    )
  }
  return (
    <BrowserRouter>
      <div className="main-body">
        <div className={`navigation-bar  ${!open && 'nav-close'}`}>
          <div className="navigation-inner">
            <h1>navigation</h1>
            <ul className="nav-items">
              {navigation.map((link, index) => {
                return (
                  <Link to={link.to} onClick={() => handleClick(index)} className={`link ${index === active && "active-link"}`} key={index}>
                    {link.name}
                  </Link>
                );
              })}
            </ul>
            <button onClick={() => setOpen(false)} className="navigation-button">hide</button>
          </div>
        </div>
        <div className="elements">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/review" element={<Review />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/expierence" element={<Expierence />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/website1" element={<Website1 />} />
          </Routes>
          {!open && <button className="nav-open" onClick={() => setOpen(true)}>
            <FiMenu />
            </button>}
        </div>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
