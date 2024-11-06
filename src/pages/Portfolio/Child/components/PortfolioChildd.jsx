import React from 'react';
import './PortfolioChildd.scss';

const PortfolioChildd = () => {
    return (
        <div className="port_child">
            <div className="container">
                <div className="port_child__wrapper">
                    <div className="for_img">
                        <img src="/assets/Logoway.svg" alt="Company Logo" />
                    </div>
                    <div className="for_about">
                        <div className="for_top">
                            <p className="for_top__one">О работе в компании</p>
                            <p className="for_top__two">
                                Узнайте о значении фреймворков UX-дизайна для успеха проекта. Прочтите о ведущих примерах, которые помогут вам адаптировать то, что соответствует вашим потребностям.
                            </p>
                            <p className="for_top__two">
                                В сфере дизайна есть большой простор для творчества. Решение новых проблем и поиск творческих решений — это скорее привычка для UX-дизайнеров. Это связано с тем, что сама дисциплина очень гибкая и постоянно развивающаяся, что гарантирует дизайнерам возможность экспериментировать с новыми решениями, придумывать новые методы и удовлетворять меняющиеся потребности целевой аудитории.
                            </p>
                            <p className="for_top__one">Сделанные работы</p>
                        </div>
                    </div>

                    <div className="for_btns">
                        <button>
                            <img src="/assets/Featured icon.svg" alt="Mobile App Icon" /> Мобильное приложение
                        </button>
                        <button>
                            <img src="/assets/Featured icon (1).svg" alt="Website Icon" /> Веб-сайт
                        </button>
                        <button>
                            <img src="/assets/Featured icon (2).svg" alt="Backend Development Icon" /> Back-end разработка
                        </button>
                        <button>
                            <img src="/assets/Featured icon (3).svg" alt="Admin Panel Icon" /> Админ панель
                        </button>
                    </div>

                    <div className="for_text_first">
                        <p>
                            Один из способов не отставать от этих принципов — принять заранее определенные стратегии, которые помогут структурировать общий процесс проектирования...
                        </p>
                        <img src="/assets/Content item.svg" alt="Content Item" />
                        <p>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae...
                        </p>
                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus...
                        </p>
                    </div>

                    <div className="for_text_second">
                        <p className="ppp">Other resources</p>
                        <p>
                            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit...
                        </p>
                        <div className="for_img_first">
                            <img src="/assets/Image.svg" alt="Additional Image 1" />
                            <div>
                                <img src="/assets/Image (1).svg" alt="Additional Image 2" />
                                <img src="/assets/Image (2).svg" alt="Additional Image 3" />
                            </div>
                        </div>
                        <p>
                            Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioChildd;
