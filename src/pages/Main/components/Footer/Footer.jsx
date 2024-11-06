import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__btn">
                        <Link to={'/contact'}>
                            <button className='footer__callbtn'>Связаться <img src="./src/assets/right.png" alt="" /></button>

                        </Link>

                    </div>
                    <div className="footer__div">
                        <div className="footer__stroke">
                            <p className='footer__firstp'>Социальная сеть</p>
                            <p className='footer__secondp'>Instagram</p>
                            <p className='footer__secondp'>Telegram</p>
                            <p className='footer__secondp'>Linkedin </p>
                        </div>
                        <div className="footer__stroke">
                            <p className='footer__firstp'>Контакты</p>
                            <p className='footer__secondp'>Проспет Амира Темура, 129Б</p>
                            <p className='footer__secondp'>+998 99 999 99 99</p>
                            <p className='footer__secondp'>udevs@gmail.com</p>
                        </div>
                        <div className="footer__stroke">
                            <p className='footer__firstp'>Основные</p>
                            <p className='footer__secondp'>Вакансии</p>
                            <p className='footer__secondp'>Dribbble</p>
                            <p className='footer__secondp'>GitHub </p>
                            <p className='footer__secondp'>Behance</p>
                        </div>
                        <div className="footer__strokes">
                            <p className='footer__firstp'>Вакансии</p>
                            <p className='footer__secondp'>Golang Backend Developer</p>
                            <p className='footer__secondp'>Frontend Developer</p>
                            <p className='footer__secondp'>UI/UX Дизайнер</p>
                        </div>
                    </div>
                    <div className="footer__end">
                        <p className='footer__endp'>© 2024 Udevs UI. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer