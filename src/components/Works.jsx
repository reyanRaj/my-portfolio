import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github, web } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, live_url }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">

        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute top-2 right-2 rig black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" onClick={() => window.open(live_url, "_blank")}>
          <img src={web} alt={live_url} className="w-1/2 h-1/2 object-contain" />
        </div>

      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] ">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 ">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>

  </motion.div>
)

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following project showcase my skills and talent through ongoing real world projects. Each of these projects are briefly described with a link to live preview. I reflects my ability to solve challenging problems, work with different technologies as well as give you confidence to hire me.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">

        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(Works, "")