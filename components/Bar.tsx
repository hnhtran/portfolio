import { FunctionComponent } from "react";
import { Skill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
  data: Skill;
}> = ({ data: { Icon, name, level } }) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div
      id="skillBar"
      className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300"
    >
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-700"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon id="skillIcon" className="mr-3 text-4xl" />
        <span id="skillName" className="text-lg">
          {name}
        </span>
      </motion.div>
    </div>
  );
};

export default Bar;
