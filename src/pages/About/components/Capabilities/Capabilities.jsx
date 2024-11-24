import React, { useState, useEffect } from 'react';
import './Capabilities.scss';

const Capabilities = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [capabilities, setCapabilities] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/capabilities')
            .then((response) => response.json())
            .then((data) => setCapabilities(data))
            .catch((error) => console.log('Error fetching Capabilities', error));
    }, []);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="capabilities">
            <div className="container">
                <div className="capabilities__wrapper">
                    <div className="capabilities__all">
                        <h2>Возможности</h2>
                        {capabilities.map((item, index) => (
                            <div className="capabilities__item" key={index}>
                                <div className="capabilities__header" onClick={() => handleToggle(index)}>
                                    {item.question}
                                    <span className={`icon ${activeIndex === index ? 'expanded' : ''}`}>
                                        {activeIndex === index ? '-' : '+'}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <div className="capabilities__content">
                                        {item.answer || 'Дополнительная информация будет добавлена позже.'}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;
