import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Project } from "../type";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard: FunctionComponent<{
  project: Project;
}> = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs
  }
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const handlerClick = () => {
    setShowDetail(true);
  }

  return (
    <div className="flex flex-col items-center justify-center m-2 bg-gray-200 rounded-lg shadow-30 dark:bg-dark-200">
      <Image
      id="image"
        src={image_path}
        alt={name}
        width="300"
        height={showDetail ? "200" : "150"}
        className="z-0 cursor-pointer"
        onClick={() => handlerClick()}
      />
      <p className="my-2 text-center">{name}</p>
      {
      showDetail && (
        <div
          className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-200 dark:text-white dark:bg-dark-100"
          id="card-detail-grid-tailored"
        >
          <motion.div variants={variants} initial="initial" animate="animate">
            <div className="flex justify-center m-4 ml-2">
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="200"
                className="flex items-center"
              />
            </div>
            <div className="flex justify-center my-4 ml-2 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-3 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-3 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="m-4"
          >
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-300 rounded-full dark:bg-dark-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <IoMdClose size={30} />
          </button>
        </div>
      )
      }
    </div>
  );
};

export default ProjectCard;
