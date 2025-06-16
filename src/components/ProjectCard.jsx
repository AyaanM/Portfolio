/*WHEN GETTING IMAGES MAKE SURE TO CROP THEM TO IMAGE SIZE AND NOT INCLUDE ANY EXTRA PADDDING*/

import PropTypes from "prop-types"

const ProjectCard = ({
    imgSrc,
    title, 
    techStack, 
    description, 
    github, 
    mockup, 
    docs}) => {

  return (

    <div className="relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors">

        <figure className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-xl overflow-hidden mb-4">
            <img src={imgSrc} alt={title} className="p-2 max-w-full max-h-full"/> 
        </figure>

        <div className="mb-2 space-y-3">
            <h3 className="title-1">{title}</h3>

            <div className="flex flex-wrap gap-2">
                {techStack.map((label, key) => (
                <span key={key} className="bg-zinc-700 text-zinc-100 text-xs px-2 py-1 rounded-md">{label}</span>
                ))}
            </div>
            
            <p className="text-sm text-zinc-300">{description}</p>
        </div>

        <script>

        </script>
        
        {/* if lefthand side true (&& = AND) then return righthand side */}
        <div className="flex gap-5 my-4">
            {github && <a href={github} target="_blank" className="project-btn">GitHub</a>}
            {mockup && <a href={mockup} target="_blank" className="project-btn">Mockup</a>}
            {docs && <a href={docs} className="project-btn">Docs</a>}
        </div>

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
    docs: PropTypes.string
}

export default ProjectCard