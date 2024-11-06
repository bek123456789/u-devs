import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleServiceChange = (event) => {
        const selectedService = event.target.value;
        if (selectedService) {
            navigate(selectedService);
            setMenuOpen(false);
        }
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__main">
                        <div className="header__icon">
                            <Link to={'/'}>
                                <img src="/assets/Udevs logo.svg" alt="Logo" />
                            </Link>
                        </div>
                        <div className="header__links">
                            <Link to={'/portfolio'} className="header__link">Портфолио</Link>

                            <select className="header__link header__select" onChange={handleServiceChange} defaultValue="">
                                <option value="" disabled>Услуги</option>
                                <option value="/blog">Blog</option>
                                <option value="/fiks">Fix Price</option>
                                <option value="/service3">Service 3</option>
                            </select>

                            <Link to={'/about'} className="header__link">О нас</Link>
                            <Link className="header__link">Новости</Link>
                            <Link className="header__link">Вакансии</Link>
                        </div>
                        <div className="header__btndiv">
                            <Link to={'/contact'}>
                                <button className="header__btn">
                                    Связаться
                                    <img src="/assets/right.png" alt="Arrow" />
                                </button>
                            </Link>
                        </div>
                        <div className="header__burger" onClick={toggleMenu}>
                            <img src="/assets/burger.png" alt="Menu" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header__fullscreen-menu ${menuOpen ? 'active' : ''}`}>
                <div className="header__menu-header">
                    <img src="/assets/Groupp.png" alt="Logo" />
                    <img src="/assets/close.png" alt="Close" className="header__close-icon" onClick={toggleMenu} />
                </div>
                <div className="header__menu-links">
                    <Link to={'/portfolio'} className="header__link" onClick={toggleMenu}>Портфолио</Link>

                    <select className="header__link header__select" onChange={handleServiceChange} defaultValue="">
                        <option value="" disabled>Услуги</option>
                        <option value="/blog">Blog</option>
                        <option value="/fiks">Fix Price</option>
                        <option value="/service3">Service 3</option>
                    </select>

                    <Link to={'/about'} className="header__link" onClick={toggleMenu}>О нас</Link>
                    <Link className="header__link" onClick={toggleMenu}>Новости</Link>
                    <Link className="header__link" onClick={toggleMenu}>Вакансии</Link>
                </div>

                <Link to={'/contact'} onClick={toggleMenu}>
                    <button className="header__btn">
                        Связаться
                        <img src="/assets/right.png" alt="Arrow" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
