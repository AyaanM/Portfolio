import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
 

const navbar = ({navOpen}) => {

    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initAcitveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight+ 'px';
    }

    useEffect(initAcitveBox, []);
    window.addEventListener('resize', initAcitveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active')
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight+ 'px';
    }

    const navItems = [
    {
    label: 'About',
    link:'#about',
    className: 'navlink',
    },
    {
    label: 'Projects',
    link:'#projects',
    className: 'navlink',
    },
    {
    label: 'Home',
    link:'#home',
    className: 'navlink active',
    ref: lastActiveLink
    },
    {
    label: 'Contact',
    link:'#contact',
    className: 'navlink',
    },
    {
    label: 'Coffee',
    link:'#coffee',
    className: 'navlink md:hidden',
    }
    ];

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

navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default navbar