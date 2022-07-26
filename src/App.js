import React, { useState } from "react";
import "./styles.css";
import Box from "./component/Box";
import Slide from "./component/slide";
// import Btn from "./component/Btn"
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [on, setOn] = useState(true);
  function handleClick() {
    if (on === true) {
      setOn(false);
    } else {
      setOn(true);
    }
  }
  return (
    <div className="App">
      <Box name={"Israel"} />
      {/* <Btn />     */}
      <button className="Btn" onClick={handleClick}>
        {on ? "View Box" : "Close Box"}
      </button>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: "100px" }}
          transition={{
            type: "tween",
            duration: 2
          }}
          exit={{ opacity: 0 }}
        />
        <Slide on={on} />

        <motion.div />
      </AnimatePresence>
    </div>
  );
}
