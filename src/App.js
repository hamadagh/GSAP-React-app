import { useEffect, useRef } from "react";
import "./App.css";
import { gsap } from "gsap";

function App() {
  const boxRef = useRef();
  const q = gsap.utils.selector(boxRef);
  gsap.registerEffect({
    name: "fade",
    defaults: { duration: 4 },
    effect: (targets, config) => {
      return gsap.to(targets, { duration: config.duration, opacity: 1 });
    },
  });

  useEffect(() => {
    gsap.to(boxRef.current, { y: 300 });
    gsap.effects.fade(q(".fade-letters"));
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
