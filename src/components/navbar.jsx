import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
 

const navbar = ({navOpen}) => {

    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initAcitveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    }

    useEffect(initAcitveBox, []);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active')
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
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