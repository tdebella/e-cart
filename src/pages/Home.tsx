import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, color: "royalblue" }}
      transition={{ duration: 2 }}
    >
      Home
    </motion.h1>
  );
}

// initial={{ opacity: 0 }}
//   animate={{
//     opacity: 1,
//     backgroundColor: "#eacb4e",
//     boxShadow: "10px 10px 0 rgba(240, 217, 38, 0.2)",
//     transition: {
//       duration: 5,
//       display: "none",
//     },
//   }}
//   exit={{ opacity: 0 }}
