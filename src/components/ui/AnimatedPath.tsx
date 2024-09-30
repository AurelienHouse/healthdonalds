import { motion } from "framer-motion";
import React from "react";

// eslint-disable-next-line
type AnimatedPathProps = {
  d: string;
  strokeColor: string;
  fillColor?: string;
  strokeWidth?: number;
  duration: number;
  delay?: number;
};

const AnimatedPath: React.FC<AnimatedPathProps> = ({
  d,
  strokeColor,
  fillColor = "transparent",
  strokeWidth = 1,
  duration,
  delay = 0,
}) => {
  return (
    <>
      {/* Animation du tracé */}
      <motion.path
        d={d}
        fill="transparent" // Remplissage transparent pendant l'animation
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray="1000" // Valeur assez grande pour couvrir le tracé complet
        strokeDashoffset="1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />

      {/* Remplissage apparaissant après l'animation du tracé */}
      <motion.path
        d={d}
        fill={fillColor} // Remplissage de la couleur après l'animation
        stroke="none"
        strokeWidth="0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: duration + delay }} // Apparition du remplissage après l'animation
      />
    </>
  );
};

export default AnimatedPath;
