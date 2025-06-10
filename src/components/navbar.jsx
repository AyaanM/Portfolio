import {useRef} from 'react';
import PropTypes from 'prop-types';
 

const navbar = ({navOpen}) => {

    const lastActiveLink = useRef();
    const activeBox = useRef();

    const navItems = [
    {
    label: 'About',
    link:'#about',
    className: 'nav-link',
    },
    {
    label: 'Projects',
    link:'#projects',
    className: 'nav-link',
    },
    {
    label: 'Home',
    link:'#home',
    className: 'nav-link active',
    ref: lastActiveLink
    },
    {
    label: 'Contact',
    link:'#contact',
    className: 'nav-link',
    },
    {
    label: 'Coffee',
    link:'#coffee',
    className: 'nav-link md:hidden',
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
            onClick={null}
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