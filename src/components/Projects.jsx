import React from 'react'

const project = [
    {
        img: "/projects/arc.png",
        title: "ARC (Edmonton GovTech Hackathon)",
        techStack: ["Figma"],
        description: "Revolutionizing the Edmonton Transit System ARC card by making it completly online, increasing efficiency and saving costs (Recieved 1st Place Best UI)",
        github_link: null,
        mockup_link: "https://www.figma.com/design/cJ1mkLXtyTjKXxN0sXTaMN/Arc-Card-2.0?node-id=0-1&t=oyXFzeihngJwiklW-1"
    },
    {
        img: "/projects/mood_tracker.png",
        title: "Mood Tracker",
        techStack: ["Java", "Android Studio", "XML/UML", "Lucid Chart"],
        description: "Android app to track, follow, and share moods increasing self-awareness",
        github_link: "https://github.com/cmput301-w25/project-segfaultsquad",
        mockup_link: "https://github.com/cmput301-w25/project-segfaultsquad/blob/main/docs/Storyboards/StoryBoard.png"
    },
    {
        img: "/projects/drone_network.png",
        title: "Drone Network Emergency Response",
        techStack: ["Python", "Pyomo", "Groubi Solver", "Google Collab"],
        description: "Using drones to reduce OHCA response times in Vatican City",
        github_link: null,
        mockup_link: null,
        documentation: "https://drive.google.com/file/d/14nvo4eYjnLqkaKw0UYX8oCPMsVjnye7m/view?usp=sharing"
    },
    {
        img: "/projects/business_club.png",
        title: "Business Club Member and Events Tracker",
        techStack: ["Python", "SQL", "UML"],
        description: "Function as a software consultant to design terminal based program to track members, finances, and events",
        github_link: "https://github.com/AyaanM/Business-Club-Stakeholder-Project",
        mockup_link: null,
        documentation: "https://github.com/AyaanM/Business-Club-Stakeholder-Project/blob/main/Documentation/Crit_D_Video.mp4"
    },
    {
        img: "/projects/portfolio.png",
        title: "Personal Portfolio",
        techStack: ["ReactJS", "TailWindCSS", "npm"],
        description: "Exactly what you're looking at right now",
        github_link: "https://github.com/AyaanM/Portfolio",
        mockup_link: "https://www.figma.com/design/G4fqd68LXQRlY2RTk7836w/Personal-Portfolio-Website-Template--Community-?node-id=1-23&t=OdznlZzLMM2dpqjt-1",
        documentation: null
    },
    {
        img: "/projects/rag.png",
        title: "Financial Analysis Rag",
        techStack: ["Python", "HuggingFace", "LangChain", "FAISS"],
        description: "Used HuggingFace Models (Finbert + Flan t5) for financial sentiment analysis and LLM output",
        github_link: "https://github.com/AyaanM/financial-analysis-rag/tree/main",
        documentation: null
    },
]

const Projects = () => {
  return (
    <div>Projects</div>
  )
}

export default Projects