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

    <div className="relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors">

        <figure className="img-box rounded-lg mb-5 bg-gray-200">
            <img src={imgSrc} alt={title} loading='lazy' className="items-center text-center" />
        </figure>

        <div className="flex items-center justify-between gap-4">

            <div>
                <h3 className="title-1 mb-3">{title}</h3>

                <div className="flex flex-wrap items-center gap-2">{techStack.map((label, key) => (
                    <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-500/5 grid items-center px-3 rounded-lg">{label}</span>))}</div>
                <p>{description}</p>
            </div>  

            <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_outward
                </span>
            </div>

        </div>

        <a href={github} traget="_blank" className="absolute inset-0"></a>
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