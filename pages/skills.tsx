import React from "react";
import { languages, toolsFramework } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";

export default function skills() {
  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
  }
}
  return (
    <div className="px-6 py-2 overflow-auto">
      <div className="grid gap-9 lg:grid-cols-2">
        <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </motion.div>
        <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Cloud, Tools & Frameworks</h5>
          <div className="my-2">
            {toolsFramework.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
