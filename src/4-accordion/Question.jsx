import { React, useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export function Question({ question,answer,id, active }) {
  const questHight = useRef(null);
  const answerHight = useRef(null);
  const [startHeight, setStartHeight] = useState();
  const [finishHeight, setFinishHeight] = useState();

  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  const handleActive = () => {
    setIsActive(!isActive);
  }
  useEffect(()=>{
    questHight.current.classList.contains('active') ? console.log("true"): console.log("false");;
    setStartHeight(questHight.current.offsetHeight);
    setFinishHeight(answerHight.current.offsetHeight);
  },[questHight,answer])

  return (
    <div className="question-box" style={{height: isActive? startHeight + finishHeight : startHeight}}>
      <div className="quest"  ref={questHight} onClick={() => handleActive()}>
        <h5>{question}</h5>
        <div className="icon">
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <div className="answer" ref={answerHight}>{answer}</div>
    </div>
  );
}
