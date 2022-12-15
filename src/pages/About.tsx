import { motion } from "framer-motion";

//page transition animation using motion.Element(html)
export function About() {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, color: "royalblue"}}
      transition={{ duration: 2 }}
    >
      About
    </motion.h1>
  );
}
