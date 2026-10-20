"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

// Cycles through phrases letter by letter with a blur-in. Every phrase is laid out
// invisibly in the same grid cell so the width never jumps.
export function RotatingText({ items, interval = 2800 }: { items: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className="inline-grid align-baseline font-medium">
      {items.map((item) => (
        <span key={item} aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
          {item}
        </span>
      ))}
      <span className="sr-only">{items[0]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={items[index]}
          aria-hidden
          className="col-start-1 row-start-1 whitespace-nowrap"
          exit={reduce ? undefined : { opacity: 0, filter: "blur(4px)", transition: { duration: 0.25 } }}
        >
          {items[index].split("").map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block whitespace-pre"
              initial={reduce ? false : { opacity: 0, filter: "blur(6px)", y: 2 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.025 }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
