import React, { useEffect } from 'react';

const Coffee = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="coffee" className="section text-center mb-5">
      <div className="container">
        <h1 className="headline-2 items-center">Let's Grab a Virtual Coffee</h1>
        <p className="title-1 text-zinc-300">
          I love meeting new people. If there’s a project you’d like to discuss or want to talk about your own innovations, book a time below
        </p>

        {/* Calendly booking widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/ayaanmerchant/15-30-minute-coffee-chat"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </section>
  );
};

export default Coffee;
