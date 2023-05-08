import React, { useState } from "react";
import "./accordion.css";
import { Question } from "./Question";
import Data from "./data";

export function App() {
  const [data, setData] = useState(Data);
  const testVar = "";
  return (
    <div className="accordion-container">
      <div className="accordion-content">
        <div className="title">questions and answers</div>
        <div className="questions-container">
          {
            data.map((item)=>{
              return <Question key={item.id} {...item} data={data}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

