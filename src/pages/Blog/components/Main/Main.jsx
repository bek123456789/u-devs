import React from 'react';
import "./Main.scss";

const Main = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="blog__wrapper">
                    <div className="blog__title">
                        <p>Добро пожаловать в блоги Udevs</p>
                    </div>
                    <div className="blog__buttons">
                        <button>UI/UX дизайн</button>
                        <button>Frontend разработка</button>
                        <button>Backend разработка</button>
                        <button>QA</button>
                        <button>Проект менеджер</button>
                        <button>Рекрутинг</button>
                        <button>Продажа</button>
                        <button>Мобильная разработка</button>
                    </div>
                    <div className="blog__info">

                        <div className="blog__firstinfo">
                            <p className='blog__firstinfo_p_big'>Что такое UI дизайнЧто такое UX дизайн?Важные направления</p>
                            <p className='blog__firstinfo_p_small'>8 мин. читать</p>
                        </div>
                        <div className="blog__secondinfo">
                            <div className='blog__things'>
                                <p className='blog__bigword'>Что такое Frontend и его основные задачи?</p>
                                <p className='blog__smallword'>10 мин. читать </p>
                            </div>
                            <div className='blog__things'>
                                <p className='blog__bigword'>Building your API stack</p>
                                <p className='blog__smallword'>5 мин. читать</p>
                            </div>
                            <div className='blog__things'>
                                <p className='blog__bigword'>Building your API stack</p>
                                <p className='blog__smallword'>12 мин. читать </p>
                            </div>
                        </div>

                    </div>
                    <div className="blog__news">
                        <div className="blog__news_one">
                            <div className="blog__news_one_left">
                                <p className='blog__news_one_left_p'>3 Июнь, 2024</p>
                            </div>
                            <div className="blog__news_one_right">
                                <p className='ui_ux'>UI/UX Дизайн</p>
                                <p className='top_ten'>Топ-10 трендов в UI/UX Дизайне </p>
                                <p className='framework_p'>Узнайте о значении фреймворков UX-дизайна для успеха проекта. Прочтите о ведущих примерах, которые помогут вам адаптировать то, что соответствует вашим потребностям.</p>
                                <p className='ui_ux'> <img src="/assets/Icon.png" alt="" />12 мин. читать</p>
                            </div>
                        </div>
                        <div className="blog_card">
                            <p className='new_blogs'>New blogs</p>
                            <p className='ux_solutions'>UX Solutions and UI concept</p>
                            <p className='ux_solutions' >Design</p>
                            <p className='ux_solutions'>Product</p>
                            <p className='ux_solutions'>Software Development</p>
                            <p className='ux_solutions'>Customer Success</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;
