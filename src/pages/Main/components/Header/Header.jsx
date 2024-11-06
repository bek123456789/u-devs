import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.scss";

// Importing images from the assets folder
import RightArrow from '../../../../assets/right.png';
import BurgerIcon from '../../../../assets/burger.png';
import CloseIcon from '../../../../assets/close.png'; // New close icon

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Handler for the select menu
    const handleServiceChange = (event) => {
        const selectedService = event.target.value;
        if (selectedService) {
            navigate(selectedService); // Navigate to the selected route
            setMenuOpen(false); // Close the menu if needed
        }
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__main">
                        <div className="header__icon">
                            <Link to={'/'}><img src="./src/assets/Udevs logo.svg" alt="Logo" /></Link>
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
                                    <img src={RightArrow} alt="Arrow" />
                                </button>
                            </Link>
                        </div>
                        <div className="header__burger" onClick={toggleMenu}>
                            <img src={BurgerIcon} alt="Menu" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header__fullscreen-menu ${menuOpen ? 'active' : ''}`}>
                <div className="header__menu-header">
                    <img src="./src/assets/Groupp.png" alt="Logo" />
                    <img src={CloseIcon} alt="Close" className="header__close-icon" onClick={toggleMenu} />
                </div>
                <div className="header__menu-links">
                    <Link to={'/portfolio'} className="header__link" onClick={toggleMenu}>Портфолио</Link>

                    {/* Repeat the dropdown in fullscreen menu */}
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
                        <img src={RightArrow} alt="Arrow" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
