'use client'
import React, { useEffect, useRef, useState } from "react";

const LineWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const measureLines = () => {
      if (!containerRef.current) return;

      const elements = Array.from(containerRef.current.childNodes);
      const testDiv = document.createElement("div");
      testDiv.style.position = "absolute";
      testDiv.style.visibility = "hidden";
      testDiv.style.whiteSpace = "nowrap";
      testDiv.style.width = `${containerRef.current.clientWidth}px`;
      document.body.appendChild(testDiv);

      let currentLine = [];
      let computedLines = [];

      elements.forEach((element) => {
        testDiv.innerHTML = "";
        testDiv.appendChild(element.cloneNode(true));

        if (testDiv.offsetWidth > containerRef.current.clientWidth) {
          computedLines.push(currentLine);
          currentLine = [element];
        } else {
          currentLine.push(element);
        }
      });
      if (currentLine.length) computedLines.push(currentLine);

      document.body.removeChild(testDiv);
      setLines(computedLines);
    };

    measureLines();
    window.addEventListener("resize", measureLines);
    return () => window.removeEventListener("resize", measureLines);
  }, [children]);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      {lines.map((line, index) => (
        <div key={index} style={{ display: "block" }}>
          {line.map((elem, i) => (
            <span key={i}>{elem}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LineWrapper;

