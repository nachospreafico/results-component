import { useState, useEffect } from "react";

import Reaction from "./assets/assets/images/icon-reaction.svg";
import Memory from "./assets/assets/images/icon-memory.svg";
import Verbal from "./assets/assets/images/icon-verbal.svg";
import Visual from "./assets/assets/images/icon-visual.svg";
import Score from "./components/Score";
import Summary from "./components/Summary";

function App() {
  const [isMobile, setIsMobile] = useState(true);

  const summaryData = [
    { icon: Reaction, title: "Reaction", score: "80", color: "#ff5757" },
    { icon: Memory, title: "Memory", score: "92", color: "#ffb01f" },
    { icon: Verbal, title: "Verbal", score: "61", color: "#00bd91" },
    { icon: Visual, title: "Visual", score: "72", color: "#1125d4" },
  ];

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    setIsMobile(window.innerWidth < 768);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <main
      style={{ gridTemplateColumns: "1fr 1fr" }}
      className={`flex flex-col md:grid md:max-w-[733px] md:shadow-xl md:rounded-3xl overflow-hidden`}
    >
      <Score />
      <Summary summaryData={summaryData} />
    </main>
  );
}

export default App;
