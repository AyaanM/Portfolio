import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen, onClose }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const isManualScroll = useRef(false);
    const scrollTimeout = useRef(null);

    const navItems = [
        { label: 'About', link: '#about', className: 'navlink' },
        { label: 'Projects', link: '#projects', className: 'navlink' },
        { label: 'Home', link: '#home', className: 'navlink active', ref: lastActiveLink },
        { label: 'Contact', link: '#contact', className: 'navlink' },
        { label: 'Coffee', link: '#coffee', className: 'navlink' }
    ];

    const moveActiveBox = (target) => {
        activeBox.current.style.top = target.offsetTop + 'px';
        activeBox.current.style.left = target.offsetLeft + 'px';
        activeBox.current.style.width = target.offsetWidth + 'px';
        activeBox.current.style.height = target.offsetHeight + 'px';
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {
            //works only if not manually scrolling
            if (isManualScroll.current) return;

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const navLink = document.querySelector(`.navlink[href="#${id}"]`);

                    if (navLink !== lastActiveLink.current) {
                        lastActiveLink.current?.classList.remove('active');
                        navLink.classList.add('active');
                        lastActiveLink.current = navLink;
                        moveActiveBox(navLink);
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));

        // if scroll stops for 100s, manual mode turns off and observer takes over again
        const handleScroll = () => {
            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                isManualScroll.current = false;}, 100);
        };

        window.addEventListener('scroll', handleScroll);

        // Initial active box position
        moveActiveBox(lastActiveLink.current);

        return () => { //makes sure to unobserve
            sections.forEach(section => observer.unobserve(section));
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const activeCurrentLink = (event) => { //turns on manualscroll upon clicking nav
        isManualScroll.current = true;
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        moveActiveBox(event.target);
        onClose();
    };

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
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
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Navbar;
