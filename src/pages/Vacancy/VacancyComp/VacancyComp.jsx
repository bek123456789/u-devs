import React from 'react';
import "./VacancyComp.scss";
import { Link } from 'react-router-dom';

const VacancyComp = () => {
    return (
        <div className="vacancy_comp">
            <div className="container">
                <div className="vacancy_comp__wrapper">
                    <div className="vacancy_comp__first_p">
                        <p>Присоединяйся в нашу команду</p>
                    </div>
                    <div className="vacancy_comp__open">
                        <p className='open_vacancy'>Открытые вакансии</p>
                        <p className='hundred_active'>Мы — 100% активная команда, работающая усердно. Присоединяйтесь к нам!</p>
                    </div>

                    <div className="money_vacancy">
                        <div className="first_money">
                            {/* First Vacancy */}
                            <div className="first_money_left">
                                <Link to={'/vacancy_inner'}>
                                    <p className='ui__designf'>UI/UX дизайн</p>
                                </Link>

                                <p className='position_desc'>Открытые позиции в нашу дизайнерскую команду</p>
                            </div>
                            <div className='for_bug'>
                                <div className="first_money_right">
                                    <div className="first_money_right_img">
                                        <img src="/assets/figma_border.svg" alt="" />
                                    </div>
                                    <div className="first_money_right_desc">
                                        <div className='ui_designer'>
                                            <Link to={'/vacancy_inner'}>
                                                <p className='ui__designf'>UI/UX дизайн</p>
                                            </Link>
                                            <button className='dot__btn'><img src="/assets/_Dot.svg" alt="" />Middle +</button>
                                        </div>
                                        <div>
                                            <p className='position_desc'>В нашу команду мы ищем продуктового дизайнера среднего звена.</p>
                                        </div>
                                        <div className='ui_designer'>
                                            <p className='position_desc'> <img src="/assets/clock.svg" alt="" />Полный график</p>
                                            <p className='position_desc'> <img src="/assets/currency-dollar-circle.svg" alt="" />1 000 000 сум - 4 000 000 сум</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Vacancy */}
                                <div className="first_money_right">
                                    <div className="first_money_right_img">
                                        <img src="/assets/figma_border.svg" alt="" />
                                    </div>
                                    <div className="first_money_right_desc">
                                        <div className='ui_designer'>
                                            <Link to={'/vacancy_inner'}>
                                                <p className='ui__designf'>UI/UX дизайн</p>
                                            </Link>
                                            <button className='dot__btn'><img src="/assets/_Dot.svg" alt="" />Middle +</button>
                                        </div>
                                        <div>
                                            <p className='position_desc'>В нашу команду мы ищем продуктового дизайнера среднего звена.</p>
                                        </div>
                                        <div className='ui_designer'>
                                            <p className='position_desc'> <img src="/assets/clock.svg" alt="" />Полный график</p>
                                            <p className='position_desc'> <img src="/assets/currency-dollar-circle.svg" alt="" />1 000 000 сум - 4 000 000 сум</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Position Section */}
                        <div className="second_money">
                            <div className="first_money_left">
                                <p className='ui__designf'>Frontend разработчик</p>
                                <p className='position_desc'>Открытые позиции в нашу Frontend разработческую команду</p>
                            </div>
                            <div className='for_bug'>
                                <div className="first_money_right">
                                    <div className="first_money_right_img">
                                        <img src="/assets/git.svg" alt="" />
                                    </div>
                                    <div className="first_money_right_desc">
                                        <div className='ui_designer'>
                                            <p className='ui__designf'>JS разработчик</p>
                                            <button className='dot__btn'><img src="/assets/_Dot.svg" alt="" /> Junior</button>
                                        </div>
                                        <div>
                                            <p className='position_desc'>В нашу команду мы ищем продуктового дизайнера среднего звена.</p>
                                        </div>
                                        <div className='ui_designer'>
                                            <p className='position_desc'> <img src="/assets/clock.svg" alt="" />Полный график</p>
                                            <p className='position_desc'> <img src="/assets/currency-dollar-circle.svg" alt="" />1 000 000 сум - 4 000 000 сум</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="second_money">
                            <div className="first_money_left">
                                <p className='ui__designf'>Проект менеджер</p>
                                <p className='position_desc'>Открытые позиции в нашу Проект менеджерскую команду</p>
                            </div>
                            <div className='for_bug'>
                                <div className="first_money_right">
                                    <div className="first_money_right_img">
                                        <img src="/assets/linkedin.svg" alt="" />
                                    </div>
                                    <div className="first_money_right_desc">
                                        <div className='ui_designer'>
                                            <p className='ui__designf'>Проект манеджер</p>
                                            <button className='dot__btn'><img src="/assets/_Dot.svg" alt="" /> Junior</button>
                                        </div>
                                        <div>
                                            <p className='position_desc'>В нашу команду мы ищем продуктового дизайнера среднего звена.</p>
                                        </div>
                                        <div className='ui_designer'>
                                            <p className='position_desc'> <img src="/assets/clock.svg" alt="" />Полный график</p>
                                            <p className='position_desc'> <img src="/assets/currency-dollar-circle.svg" alt="" />1 000 000 сум - 4 000 000 сум</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacancyComp;
