import React from 'react'

const Hero = () => {
  return (
    
    <section className="">
        <div className="container p-40 md:p-0 md:grid md:grid-cols-2 items-center">

            <div className="text-center tracking-wide">
                <p className='text-md text-cyan-400 my-3'>Hello I'm</p>
                <h1 className="headline-1 my-3">Ayaan Merchant</h1>
                <p className="font-light my-3">Web Developer</p>

                <a href="#coffee" className="coffee-btn">
                    Let's Grab a Virtual Coffee <span className="material-symbols-outlined animate-bounce">local_cafe</span></a>

                <div className="container flex gap-15 justify-center items-center my-3">
                    <div className="socials"><a href="https://github.com/AyaanM" target="_blank"><img src="/Portfolio/github_logo_white.png" alt="GitHub"/></a></div>
                    <div className="socials"><a href="https://www.linkedin.com/in/ayaanm1/" target="_blank"><img src="/Portfolio/link_logo_white.png" className="w-full h-full object-contain" alt="LinkedIn"/></a></div>
                    <div className="socials"><a href="mailto:ayaan.merchant08@gmail.com" target="_blank"><span className="material-symbols-outlined" style={{fontSize: '35px'}}>mail</span></a></div>
                </div>
            </div>

            <figure className="hidden md:block w-full max-w-[480px] ml-auto bg-gradient-to-t from-cyan-400 via-45% via-cyan-700 to-70% rounded-[30px] overflow-hidden">
                <img src="/Portfolio/images/portrait.png" width={400} height={600} alt="Ayaan Merchant Portrait"/>
            </figure>
        </div>
    </section>

  )
}

export default Hero