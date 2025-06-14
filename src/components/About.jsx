import React from 'react'

const About = () => {
  return (
    <section id="about" className="section">
    
        <div className="container flex items-center gap-15">

          <div className="hidden md:block md:flex flex-col gap-6 md:w-1/4">
            <img src="Portfolio/images/UMaryland-talk.png" className="w-full rotate-[-6deg] rounded-[2vw] relative"/>
            <img src="Portfolio/images/budgies.png" className="w-full rounded-xl -mt-10 ml-10 relative" />
            <img src="Portfolio/images/golden_circle.png" className="w-full rounded-xl -mt-10" />
          </div>

          <div className="ring-2 ring-cyan-400 rounded-2xl p-6 text-zinc-300 text-base md:text-lg max-w-xl text-center bg-slate-800 shadow-lg">
            <p className="mb-4">Hi, I’m Ayaan Merchant! A Computing Science and Business Student at University of Alberta.</p>
            <p className="mb-4">I’m an aspiring data scientist who has worked extensively in data analysis and business optimization. I also love public speaking and building, having co-founded The Business Club and Gaia, a JA Company, which won JA Canada Company of the Year!</p>
            <p className="mb-4">I’ve done much freelance work, including website development, UI/UX, and business and AI consulting.</p>
            <p className="mb-4">Living intentionally, I’ve kept close with my passions. Experimenting with music production, boxing, hiking, biking (my PR is 90km), and working out are a part of who I am. I house about 7 budgies in my house as well.</p>
            <p>Continue scrolling to see some of the projects I've worked on, including websites and mockups. Give me a shout if you want to geek out about any of them.</p>
          </div>

          <div className="hidden md:block md:flex flex-col gap-6 md:w-1/4">
            <img src="Portfolio/images/talk.jpg" className="w-full rounded-xl shadow-lg" />
            <img src="Portfolio/images/trail-bike.jpg" className="w-full rounded-xl shadow-lg" />
            <img src="Portfolio/images/washington.jpg" className="w-full rounded-xl rotate-9" />
          </div>


        </div>
    </section>
  )
}

export default About