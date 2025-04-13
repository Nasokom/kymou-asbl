'use client'
import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import * as flubber from "flubber";

const PathMorph = () => {
    const [toggled, setToggled] = useState(false);
    const progress = useMotionValue(0);
  
    // Path representing the target shape (example: circle-like)
    const pathTarget = "M50 10 C75 10, 90 40, 50 90 C10 40, 25 10, 50 10 Z";
  
    // Manually converted path that visually looks like the text "A" (just for demo)
    const textPath = "M10 80 L50 10 L90 80 Z";
  
    const interpolator = flubber.interpolate(textPath, pathTarget);
    const d = useTransform(progress, [0, 1], [textPath, pathTarget], {
      mixer: () => interpolator,
    });
  
    const handleClick = () => {
      setToggled(!toggled);
      animate(progress, toggled ? 0 : 1, { duration: 1 });
    };
  
    return (
      <svg width="200" height="200" onClick={handleClick}>
        {!toggled && (
          <motion.text
            x="50"
            y="100"
            textAnchor="middle"
            fontSize="40"
            fill="#ff008c"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            A
          </motion.text>
        )}
        {toggled && (
          <motion.path
            d={d}
            fill="#ff008c"
            stroke="#000"
            strokeWidth={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        )}
      </svg>
    );
  };
export default PathMorph;
