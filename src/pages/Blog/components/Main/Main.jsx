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
                </div>
            </div>
        </div>
    );
};

export default Main;
