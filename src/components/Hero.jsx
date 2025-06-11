import React from 'react'

const Hero = () => {
  return (
    
    <section className="">
        <div className="container p-40 md:p-0 md:grid md:grid-cols-2 items-center">

            <div className="text-center tracking-wide">
                <p className='text-md text-cyan-400'>Hello I'm</p>
                <h1 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-5">Ayaan Merchant</h1>
                <p className="">Web Developer</p>
                <button type="button" className="mt-10">
                    <p>Lets Grab a Virtual Coffee
                    {/* <span className="material-symbols-outlined">  local_cafe</span> */}
                    </p>
                </button>

            </div>

            <figure className="hidden md:block w-full max-w-[480px] ml-auto bg-gradient-to-t from-cyan-400 via-45% via-cyan-700 to-70% rounded-[30px] overflow-hidden">
                <img src="/Portfolio/images/portrait.png" width={400} height={600} alt="Ayaan Merchant Portrait"/>
            </figure>
        </div>
    </section>

  )
}

export default Hero