import React from 'react'

const Hero = () => {
  return (
    
    <section className="">
        <div className="container p-40 md:p-0 md:grid md:grid-cols-2 items-center">

            <div className="text-center tracking-wide">
                <p className='text-md text-cyan-400'>Hello I'm</p>
                <h1 className="headline-1 max-w-[15ch] sm:max-w-[20ch] my-3">Ayaan Merchant</h1>
                <p className="font-light">Web Developer</p>

                <a href="#coffee" className="inline-block mt-5 px-6 py-3 ring-cyan text-cyan-400 rounded">
                    Let's Grab a Virtual Coffee</a>

                <div className="container grid grid-cols-3">
                    <img src="/Portfolio/github_logo_white.png" width={40} height={40} alt="GitHub" />
                    <img src="/Portfolio/link_logo_white.png" width={40} height={40} alt="LinkedIn"/>
                    <span className='material-symbols-outlined' width={40} height={40}>mail</span>
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