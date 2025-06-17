import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <p className="title-1 text-center">You can also feel free to reach out through:</p>
        <div className="container flex gap-15 justify-center items-center my-5">
            <div className="socials"><a href="https://www.linkedin.com/in/ayaanm1/" target="_blank"><img src="/Portfolio/link_logo_white.png" className="w-full h-full object-contain" alt="LinkedIn"/></a></div>
            <div className="socials"><a href="mailto:ayaan.merchant08@gmail.com" target="_blank"><span className="material-symbols-outlined" style={{fontSize: '35px'}}>mail</span></a></div>
        </div>
    </div>
  )
}

export default Contact