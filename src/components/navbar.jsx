import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const Navbar = ({navOpen, onClose}) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const navItems = [
        {label: 'About', link:'#about', className: 'navlink',},
        {label: 'Projects', link:'#projects', className: 'navlink',},
        {label: 'Home', link:'#home', className: 'navlink active', ref: lastActiveLink},
        {label: 'Contact', link:'#contact', className: 'navlink',},
        {label: 'Coffee', link:'#coffee', className: 'navlink',}
    ];

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight+ 'px';
    }

    useEffect(() => {
        initActiveBox();
        window.addEventListener('resize', initActiveBox);

        const sections = document.querySelectorAll("section"); //get all sections

        const observer = new IntersectionObserver((entries) => { //observe where sections are and alter activebox
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("You have scrolled to #" + entry.target.id);
                }
            });
        }, {
            threshold: 0.5, //only activates when 50% of after id is reached
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            window.removeEventListener('resize', initActiveBox);
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);
    
    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active')
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight+ 'px';

        onClose();
    }

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle(console.log("You have scrolled to" + entry.target.id), entry.isIntersecting)
        })
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}> 
        {
            navItems.map(({label, link, className, ref}, key) => (
            <a 
            href={link} 
            key={key} 
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
            >
                {label}
            </a>
        ))
        }
        <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Navbar