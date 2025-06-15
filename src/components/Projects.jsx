import ProjectCard from "./ProjectCard"

const project = [
    {
        imgSrc: "/Portfolio/projects/arc.png",
        title: "ARC (Edmonton GovTech Hackathon)",
        techStack: ["Figma"],
        description: "Revolutionizing the Edmonton Transit System ARC card by making it completly online, increasing efficiency and saving costs (Recieved 1st Place Best UI)",
        github: null,
        mockup: "https://www.figma.com/design/cJ1mkLXtyTjKXxN0sXTaMN/Arc-Card-2.0?node-id=0-1&t=oyXFzeihngJwiklW-1",
        documentation: null
    },
    {
        imgSrc: "/Portfolio/projects/drone_network.png",
        title: "Drone Network Emergency Response",
        techStack: ["Python", "Pyomo", "Groubi Solver", "Google Collab"],
        description: "Using drones to reduce OHCA response times in Vatican City",
        github: null,
        mockup: null,
        documentation: "https://drive.google.com/file/d/14nvo4eYjnLqkaKw0UYX8oCPMsVjnye7m/view?usp=sharing"
    },
    {
        imgSrc: "/Portfolio/projects/mood_tracker.png",
        title: "Mood Tracker",
        techStack: ["Java", "Android Studio", "XML/UML", "Lucid Chart"],
        description: "Android app to track, follow, and share moods increasing self-awareness",
        github: "https://github.com/cmput301-w25/project-segfaultsquad",
        mockup: "https://github.com/cmput301-w25/project-segfaultsquad/blob/main/docs/Storyboards/StoryBoard.png",
        documentation: null
    },
    {
        imgSrc: "/Portfolio/projects/business_club.png",
        title: "Business Club Member and Events Tracker",
        techStack: ["Python", "SQL", "UML"],
        description: "Function as a software consultant to design terminal based program to track members, finances, and events",
        github: "https://github.com/AyaanM/Business-Club-Stakeholder-Project",
        mockup: null,
        documentation: "https://github.com/AyaanM/Business-Club-Stakeholder-Project/blob/main/Documentation/Crit_D_Video.mp4"
    },
    {
        imgSrc: "/Portfolio/projects/portfolio.png",
        title: "Personal Portfolio",
        techStack: ["ReactJS", "TailWindCSS", "npm"],
        description: "Exactly what you're looking at right now",
        github: "https://github.com/AyaanM/Portfolio",
        mockup: "https://www.figma.com/design/G4fqd68LXQRlY2RTk7836w/Personal-Portfolio-Website-Template--Community-?node-id=1-23&t=OdznlZzLMM2dpqjt-1",
        documentation: null
    },
    {
        imgSrc: "/Portfolio/projects/rag.png",
        title: "Financial Analysis Rag",
        techStack: ["Python", "HuggingFace", "LangChain", "FAISS"],
        description: "Used HuggingFace Models (Finbert + Flan t5) for financial sentiment analysis and LLM output",
        github: "https://github.com/AyaanM/financial-analysis-rag/tree/main",
        mockup: null,
        documentation: null
    },
]

const Projects = () => {
  return (
    <section id="projects" className="section">
        <div className="container">
            <h2 className="headline-2">My Coolest Projects</h2>
            <div className = "grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">{project.map(({imgSrc, title, techStack, description, github, mockup, documentation}, key) => (
                
                <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    techStack={techStack}
                    description={description}
                    github={github}
                    mockup={mockup}
                    documentation={documentation}
                />
            
            ))}</div>
        </div>
    </section>
  )
}

export default Projects