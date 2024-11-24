import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import s from './Main.module.scss';

const Main = () => {
    const [categories, setCategories] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Популярные');

    // Fetch data from the server using axios
    useEffect(() => {
        // Fetch categories data
        axios.get('http://localhost:5000/categories')
            .then((response) => {
                console.log(response.data); // Log the response to see the structure of the data
                setCategories(response.data); // Set categories data
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });

        // Fetch card data
        axios.get('http://localhost:5000/cardData')
            .then((response) => {
                console.log(response.data); // Log the response to see the structure of the data
                setCardData(response.data); // Set card data
            })
            .catch((error) => {
                console.error('Error fetching card data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredCards = cardData.filter(
        (card) => selectedCategory === 'Популярные' || card.category === selectedCategory
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
                                <Link to="/portfolio_inner" key={index} className={s.main__card_link}>
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
