/*WHEN GETTING IMAGES MAKE SURE TO CROP THEM TO IMAGE SIZE AND NOT INCLUDE ANY EXTRA PADDDING*/

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

        <figure className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-xl overflow-hidden mb-4">
            <img src={imgSrc} alt={title} className="p-2 max-w-full max-h-full"/> 
        </figure>


        <div className="flex items-center justify-between gap-4">

            <div>
                <h3 className="title-1 mb-2">{title}</h3>

                <div className="flex flex-wrap gap-2 mb-3">{techStack.map((label, key) => (
                    <span key={key} className="bg-zinc-700 text-zinc-100 text-xs px-2 py-1 rounded-md">{label}</span>))}</div>
                <p className="text-sm text-zinc-300">{description}</p>
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