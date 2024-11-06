import React, { useState } from 'react';
import './Capabilities.scss';

const Capabilities = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="capabilities">
            <div className="container">
                <div className="capabilities__wrapper">
                    <div className="capabilities__all">
                        <h2>Возможности</h2>
                        <div className="capabilities__item">
                            <div className="capabilities__header" onClick={() => handleToggle(0)}>
                                Какие решения по разработке программного обеспечения вы предлагаете?
                                <span className={`icon ${activeIndex === 0 ? 'expanded' : ''}`}>?</span>
                            </div>
                            {activeIndex === 0 && (
                                <div className="capabilities__content">
                                    Мы предлагаем разработку программного обеспечения на заказ, включая веб- и мобильные приложения, а также специализированные корпоративные системы, которые полностью соответствуют требованиям вашего бизнеса.
                                </div>
                            )}
                        </div>

                        <div className="capabilities__item">
                            <div className="capabilities__header" onClick={() => handleToggle(1)}>
                                Можете ли вы помочь с интеграцией облачных сервисов?
                                <span className={`icon ${activeIndex === 1 ? 'expanded' : ''}`}>+</span>
                            </div>
                            {activeIndex === 1 && <div className="capabilities__content"></div>}
                        </div>

                        <div className="capabilities__item">
                            <div className="capabilities__header" onClick={() => handleToggle(2)}>
                                Как вы обеспечиваете безопасность данных?
                                <span className={`icon ${activeIndex === 2 ? 'expanded' : ''}`}>+</span>
                            </div>
                            {activeIndex === 2 && <div className="capabilities__content"></div>}
                        </div>

                        <div className="capabilities__item">
                            <div className="capabilities__header" onClick={() => handleToggle(3)}>
                                Какие у вас есть решения для автоматизации бизнес-процессов?
                                <span className={`icon ${activeIndex === 3 ? 'expanded' : ''}`}>+</span>
                            </div>
                            {activeIndex === 3 && <div className="capabilities__content"></div>}
                        </div>

                        <div className="capabilities__item">
                            <div className="capabilities__header" onClick={() => handleToggle(4)}>
                                Какие аналитические решения вы предлагаете?
                                <span className={`icon ${activeIndex === 4 ? 'expanded' : ''}`}>+</span>
                            </div>
                            {activeIndex === 4 && <div className="capabilities__content"></div>}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Capabilities;
