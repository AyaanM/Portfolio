import React from 'react'

const About = () => {
  return (
    <section id="about" className="section">
    
        <div className="container md:flex items-center gap-15">

          <div className="about-pics">
            <img src="/Portfolio/self/UMaryland-talk.png" className="w-full rotate-[-6deg] rounded-[2vw] relative"/>
            <img src="/Portfolio/self/budgies.png" className="w-full rounded-xl -mt-10 ml-10 relative" />
            <img src="/Portfolio/self/golden_circle.png" className="w-full rounded-xl -mt-10" />
          </div>

          <div className="ring-2 mb-4 ring-cyan-400 rounded-2xl p-6 text-zinc-300 text-base md:text-lg max-w-xl text-center bg-slate-800 shadow-lg">
            <h1 className="headline-2">Who am I?</h1>
            <p className="mb-4">Hi, I’m Ayaan Merchant! A Computing Science and Business Student at the University of Alberta.</p>
            <p className="mb-4">I’m an aspiring data scientist who has worked in data analysis and business optimization. I also love public speaking and building, having co-founded The Business Club and Gaia, a JA Company, which won JA Canada Company of the Year!</p>
            <p className="mb-4">I’ve done much freelance work, including website development, UI/UX, and AI consulting.</p>
            <p className="mb-4">Living intentionally, I’ve kept close with my passions. Experimenting with music production, boxing, hiking, biking (my PR is 90km), and working out are a part of who I am. I also share my house with 7 budgies.</p>
            <p>Continue scrolling to see some of the projects I've worked on, including websites and mockups. Give me a shout if you want to geek out about any of them.</p>
          </div>

          <div className="about-pics">
            <img src="/Portfolio/self/talk.jpg" className="w-full -mb-10 z-2 ml-10 rounded-xl shadow-lg" />
            <img src="/Portfolio/self/trail-bike.jpg" className="w-full -mb-5 rounded-xl shadow-lg" />
            <img src="/Portfolio/self/washington.jpg" className="w-full rounded-xl rotate-9" />
          </div>

          {/* pics in mobile version */}
          <div className="about-pics-mobile">
            <img src="/Portfolio/self/UMaryland-talk.png" className="rotate-[-6deg] rounded-[2vw] -mr-20 z-1 relative"/>
            <img src="/Portfolio/self/golden_circle.png" className="rounded-xl relative" />
            <img src="/Portfolio/self/talk.jpg" className="rotate-[12deg] -ml-5 rounded-xl relative" />
          </div>

        </div>
    </section>
  )
}

export default About