/** Node modules */
import {useState} from "react";

/** Components */
import Navbar from "./navbar";


const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
      <header className="w-full h-20 flex z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="w-full px-4 flex md:justify-center justify-between items-center">

          <h1>
            <a href="/" className="logo md:hidden justify-start">
            <img src="/Portfolio/logo.png" width={80} height={90} alt="AM" />
            </a>
          </h1>

          <div className="relative md:justify-self-center">
            <button className="menu-btn" onClick={() => setNavOpen((prev) => !prev)}>
              <span className="material-symbols-outlined">{navOpen ? 'close': 'menu'}</span>
            </button>

            <Navbar navOpen={navOpen} onClose={() => setNavOpen(false)}/>
          </div>
        </div>
      </header>
    )
  }

export default Header;
