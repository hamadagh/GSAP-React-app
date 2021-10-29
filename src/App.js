import { useEffect, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";

function App() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { y: 300, repeat: -1, yoyo: true });
  }, []);
  return (
    <div className="App">
      <div className="box" ref={boxRef}>
        <span className="letters">h</span>
        <span className="fade-letters">a</span>
        <span className="letters">mada</span>
        <span className="letters"> Gh</span>
        <span className="fade-letters">a</span>
        <span className="letters">nem</span>
      </div>
    </div>
  );
}

export default App;
