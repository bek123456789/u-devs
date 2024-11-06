import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import s from "./Main.module.scss";

const categories = [
    'Популярные',
    'Финанс',
    'Стартап',
    'Электронная коммерция',
    'Гос. проекты',
    'Логистика',
    'Медиа',
    'Путешествия',
    'Учебная платформа',
    'Вебсайт',
];

const cardData = [
    {
        title: 'Way ll Invest',
        category: 'Финанс',
        description: 'Mobile App • Frontend • Backend • UI/UX дизайн',
        image: './src/assets/ways.png',
    },
    {
        title: 'IMAN Invest Company',
        category: 'Финанс',
        description: 'Mobile App • Frontend • Backend • UI/UX дизайн • QA',
        image: './src/assets/imans.png',
    },
    {
        title: 'Hyssa',
        category: 'Стартап',
        description: 'Mobile App • Frontend • Backend • UI/UX дизайн • QA',
        image: './src/assets/hysa.png',
    },
    {
        title: 'Ташкентский университет',
        category: 'Учебная платформа',
        description: 'Frontend • Backend • UI/UX дизайн',
        image: './src/assets/univer.png',
    },
    {
        title: 'Space Coworking',
        category: 'Электронная коммерция',
        description: 'Frontend • Backend • UI/UX дизайн',
        image: './src/assets/space.png',
    },
    {
        title: 'TBC Bank',
        category: 'Финанс',
        description: 'Mobile App • Frontend • Backend • UI/UX дизайн • QA',
        image: './src/assets/tbcs.png',
    },
    {
        title: 'Qwatt',
        category: 'Электронная коммерция',
        description: 'Mobile App • Backend • QA',
        image: './src/assets/q.watt.png',
    },
];

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('Популярные');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredCards = cardData.filter(card =>
        selectedCategory === 'Популярные' || card.category === selectedCategory
    );

    return (
        <div className={s.main}>
            <div className="container">
                <div className={s.main__wrapper}>
                    <div className={s.main__main}>
                        <div className={s.main__text}>
                            <p className={s.main__name}>
                                Знакомства с нашими <br /> продуктами
                            </p>
                        </div>
                        <div className={s.main__categories}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={
                                        selectedCategory === category
                                            ? `${s.category_button} ${s.selected}`
                                            : s.category_button
                                    }
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className={s.main__cards}>
                            {filteredCards.map((card, index) => (
                                <Link to="/portfolio_inner" key={index} className={s.main__card_link}> {/* Wrap each card in a Link */}
                                    <div className={s.main__card}>
                                        <img src={card.image} alt={card.title} />
                                        <div className={s.main__card_description}>
                                            <p className={s.main__firstp}>{card.title}</p>
                                            <p className={s.main__secondp}>{card.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
