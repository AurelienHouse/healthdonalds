// "use client"; // Rendu côté client pour Next.js
import React from "react";

import { motion } from "framer-motion";
import AnimatedPath from "./AnimatedPath";

const BurgerLogo = () => {
  const painHautPath =
    "M6.7,0.1H4.2c-1.8,0-3.3,1.5-3.3,3.5v0.6c0,0.1,0.1,0.2,0.2,0.2h8.8c0.1,0,0.2-0.1,0.2-0.2V3.6C10,1.7,8.5,0.1,6.7,0.1z M9.5,3.9H1.4V3.5c0-1.5,1.2-2.7,2.7-2.7h2.6c1.5,0,2.7,1.2,2.7,2.7v0.4H9.5z";
  const contentPath1 =
    "M1.4,5.5h0.3v-1h7.5v0.8h0.3c0.1,0,0.2,0,0.2,0.1V4.2H1.2v1.4C1.2,5.5,1.3,5.5,1.4,5.5z";
  const contentPath2 =
    "M5,5.1H4.7C4.6,5.2,4.6,5.3,4.6,5.4c0,0.2-0.2,0.4-0.4,0.4c-0.3,0-0.4,0-0.5-0.4c0-0.1-0.1-0.2,0-0.3H3.3c0,0.1-0.1,0.2-0.1,0.3c0,0.5,0.4,0.9,0.9,0.9S5,5.9,5,5.4C5.1,5.3,5.1,5.2,5,5.1z";
  const painBasPath =
    "M9.8,8.2H7.6v0.2c0,0.1,0.1,0.3,0,0.3h1.8v0.4C9.4,9.6,9,10,8.5,10H2.3c-0.5,0-0.9-0.4-0.9-0.9V8.8h5.7C7,8.7,6.9,8.6,6.9,8.5L6.8,8.2H1c-0.1,0-0.2,0.1-0.2,0.2v0.7c0,1,0.6,1.6,1.6,1.6h6.1c1,0,1.6-0.5,1.6-1.5V8.4C10.1,8.2,9.9,8.2,9.8,8.2z";

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10.9 10.9"
      className="size-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Partie du pain du bas */}
      <AnimatedPath
        d={painBasPath}
        strokeColor="currentColor"
        fillColor="currentColor"
        strokeWidth={0.1}
        duration={3}
      />

      {/* Partie du contenu */}
      <AnimatedPath
        d={contentPath1}
        strokeColor="currentColor"
        fillColor="currentColor"
        strokeWidth={0.1}
        duration={2}
        delay={0.5}
      />
      <AnimatedPath
        d={contentPath2}
        strokeColor="currentColor"
        fillColor="currentColor"
        strokeWidth={0.1}
        duration={2}
        delay={0.5}
      />
      <g id="Calque_11">
        {/* Premier groupe de chemins */}
        <motion.path
          d="M7.8,5.1c-0.1,0-0.2,0.1-0.2,0.1l0,0v3.2c0,0.2-0.2,0.4-0.3,0.4C7.1,8.8,7,8.7,6.9,8.5V5.2c0,0,0.1-0.1-0.1-0.1H6.3v3.5c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9V5.1H7.8z"
          //   className="stroke-current text-yellow-500"
          //   fill="none"
          //   strokeWidth="0.2"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.g>
          {/* Deuxième groupe de chemins */}
          <motion.path
            d="M6.9,5.2C6.9,5.2,6.9,5.1,6.9,5.2L4.7,5.1C4.6,5.2,4.6,5.3,4.6,5.4s0,0.2-0.1,0.3h2.4V5.2z"
            // className="stroke-current text-yellow-500"
            // fill="none"
            // strokeWidth="0.2"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          />
          <motion.path
            d="M9.4,5.1H7.8c-0.1,0-0.2,0.1-0.2,0.1l0,0v0.4h1.8c0.4,0,0.7,0.3,0.7,0.7C10.1,6.7,9.8,7,9.4,7H7.6v0.6h1.8c0.7,0,1.3-0.6,1.3-1.3C10.7,5.7,10.1,5.1,9.4,5.1z"
            // className="stroke-current text-yellow-500"
            // fill="none"
            // strokeWidth="0.2"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
          />
          <motion.path
            d="M6.8,7H1.4C1.1,7,0.8,6.7,0.8,6.3c0-0.4,0.3-0.7,0.7-0.7h2.1c-0.1,0,0-0.1-0.1-0.2s0-0.2,0-0.3H1.4c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3h5.4V7z"
            // className="stroke-current text-yellow-500"
            // fill="none"
            // strokeWidth="0.2"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
          />
        </motion.g>
        <motion.g>
          {/* Troisième groupe de chemins */}
          <motion.path
            d="M6.9,8.2H1.7V7.1H1.4C1.3,7,1.2,7.2,1.2,7.1v1.3h5.7C6.9,8.4,6.9,8.2,6.9,8.2z"
            // className="stroke-current text-yellow-500"
            // fill="none"
            // strokeWidth="0.2"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
          />
          <motion.path
            d="M9.4,7.2H9.2v1.2H7.6v0.2h2.1V7.1C9.6,7.2,9.5,7.2,9.4,7.2z"
            // className="stroke-current text-yellow-500"
            // fill="none"

            strokeWidth="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          />
        </motion.g>
      </g>

      {/* Partie du pain du haut */}
      <AnimatedPath
        d={painHautPath}
        strokeColor="currentColor"
        fillColor="currentColor"
        strokeWidth={0.1}
        duration={2}
        delay={1}
      />

      {/* Grains de sésame */}
      <g id="Calque_14">
        <AnimatedPath
          d="M2.9,2.3a0.3,0.3,0,1,1,0.6,0.3,0.3,0.3,0,1,1-0.6-0.3"
          strokeColor="none"
          fillColor="currentColor"
          strokeWidth={0}
          duration={1}
          delay={0.5}
        />
        <AnimatedPath
          d="M5.4,2.3a0.3,0.3,0,1,1,0.6,0.3,0.3,0.3,0,1,1-0.6-0.3"
          strokeColor="none"
          fillColor="currentColor"
          strokeWidth={0}
          duration={1}
          delay={0.7}
        />
        <AnimatedPath
          d="M7.9,2.3a0.3,0.3,0,1,1,0.6,0.3,0.3,0.3,0,1,1-0.6-0.3"
          strokeColor="none"
          fillColor="currentColor"
          strokeWidth={0}
          duration={1}
          delay={0.9}
        />
        <AnimatedPath
          d="M6.7,1.7a0.3,0.3,0,1,1,0.6,0.3,0.3,0.3,0,1,1-0.6-0.3"
          strokeColor="none"
          fillColor="currentColor"
          strokeWidth={0}
          duration={1}
          delay={1.1}
        />
        <AnimatedPath
          d="M4.2,1.7a0.3,0.3,0,1,1,0.6,0.3,0.3,0.3,0,1,1-0.6-0.3"
          strokeColor="none"
          fillColor="currentColor"
          strokeWidth={0}
          duration={1}
          delay={1.3}
        />
      </g>
    </motion.svg>
  );
};

export default BurgerLogo;
