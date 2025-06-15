import PropTypes from "prop-types"

const ProjectCard = ({
    imgSrc,
    title, 
    techStack, 
    description, 
    github, 
    mockup, 
    documentation}) => {

  return (

    <div className="relative p-4 rounded-2xl bg-zinc-800">
        <figure className="">
            <img src={imgSrc} alt={title} className="" />
        </figure>

        <div className="">

            <div>
                <h3>{title}</h3>

                <div className="">{techStack.map((label, key) => (
                    <span key={key} className="">{label}</span>))}</div>

                <p>{description}</p>
            </div>  

            <div className="">
                <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_outward
                </span>
            </div>

        </div>

        <a href={github} traget="_blank" className=""></a>
        <a href={mockup} traget="_blank" className=""></a>
        <a href={documentation} traget="_blank" className=""></a>

    </div>
  )
}

ProjectCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    techStack: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string,
    mockup: PropTypes.string,
    documentation: PropTypes.string
}

export default ProjectCard