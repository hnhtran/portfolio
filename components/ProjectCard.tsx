import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Project } from "../type";

const ProjectCard: FunctionComponent<{ project: Project }> = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    category,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center m-2 overflow-hidden bg-gray-200 rounded-lg shadow-30 dark:bg-dark-200">
      <img onClick={() => setShowDetail(true)} src={image_path} alt={name} className="cursor-pointer " />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full bg-gray-200 dark:text-white dark:bg-dark-200 gap-x-12 md:grid-cols-2">
          <div>
            <img src={image_path} alt={name} />
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span key={tech}
                className="px-2 py-1 my-1 bg-gray-300 rounded-full dark:bg-dark-100"
                >{tech}</span>
              ))}
            </div>
          </div>

          <button onClick={() => setShowDetail(false)}
          className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
            <IoMdClose size={30}/>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
