/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  git_server_code,
  live_site,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full  sm:w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <div
              onClick={() => window.open(live_site, "_blank")}
              className="black-gradient relative w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={live}
                alt="live"
                className="w-full h-full object-contain"
              />
              <div className="opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-80 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-bold rounded-full">
                Live
              </div>
            </div>

            {/* client */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient relative w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
              <div className="opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-80 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-bold rounded-full">
                Client
              </div>
            </div>

            {/* server */}
            <div
              onClick={() => window.open(git_server_code, "_blank")}
              className="black-gradient relative w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
              <div className="opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-80 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-white font-bold rounded-full">
                Server
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Project.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Check out these amazing projects that highlight my skills and
          expertise with real-life examples of my work. Each project is
          described briefly and includes links to code repositories and live
          demos. They demonstrate my ability to tackle challenging problems,
          work with various technologies, and successfully manage projects.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
