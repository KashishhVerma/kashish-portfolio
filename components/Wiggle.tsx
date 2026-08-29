"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

export default function Wiggle({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}) {
  const [count, setCount] = useState(0);
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      onClick={() => setCount((c) => c + 1)}
      whileHover={{ rotate: [0, -2, 2, -1, 0], transition: { duration: 0.5 } }}
      animate={count > 0 ? { rotate: [0, -7, 7, -4, 4, 0] } : {}}
      transition={{ duration: 0.5 }}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {children}
    </MotionTag>
  );
}
