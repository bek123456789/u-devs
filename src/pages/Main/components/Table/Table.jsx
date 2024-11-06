import React, { useState } from 'react';
import './Table.scss';

const stacks = [
    { name: 'Ffmpeg', category: 'Backend', image: '/assets/ffmpeg.png' },
    { name: 'GraphQL', category: 'Backend', image: '/assets/GraphQL.png' },
    { name: 'Nats', category: 'Backend', image: '/assets/Nats.png' },
    { name: 'Kafka', category: 'Backend', image: '/assets/Apache Kafka.png' },
    { name: 'RabbitMQ', category: 'Backend', image: '/assets/RabbitMQ.png' },
    { name: '.Net', category: 'Backend', image: '/assets/net.png' },
    { name: 'C#', category: 'Backend', image: '/assets/c.png' },
    { name: 'React JS', category: 'Frontend', image: '/assets/file_type_reactts logo.png' },
    { name: 'Vue JS', category: 'Frontend', image: '/assets/Vue Js.png' },
    { name: 'Airtable', category: 'PM', image: '/assets/airtable.png' },
    { name: 'Node JS', category: 'Backend', image: '/assets/Node Js.png' },
    { name: 'Next JS', category: 'Frontend', image: '/assets/nextjs.png' },
    { name: 'Nuxt JS', category: 'Frontend', image: '/assets/nuxtjs.png' },
    { name: 'Chakra UI', category: 'Frontend', image: '/assets/chakra ui.png' },
    { name: 'Tailwind', category: 'Frontend', image: '/assets/tailwind.png' },
    { name: 'Material UI', category: 'Frontend', image: '/assets/NET_Core_Logo.svg 1.png' },
    { name: 'Strapi', category: 'Backend', image: '/assets/strapi.png' },
    { name: 'Dart', category: 'Mobile', image: '/assets/dart.png' },
    { name: 'Flutter', category: 'Mobile', image: '/assets/flutter.png' },
    { name: 'Android', category: 'Mobile', image: '/assets/android.png' },
    { name: 'Swift', category: 'Mobile', image: '/assets/swift.png' },
    { name: 'Cypress', category: 'QA', image: '/assets/cypress.png' },
    { name: 'Jira', category: 'PM', image: '/assets/NET_Core_Logo.svg 1 (1).png' },
    { name: 'Playwright', category: 'QA', image: '/assets/playwright.png' },
    { name: 'K6', category: 'QA', image: '/assets/k6.png' },
    { name: 'Cucumber', category: 'QA', image: '/assets/cucumber.png' },
    { name: 'Postman', category: 'QA', image: '/assets/postman.png' },
    { name: 'Figma', category: 'UX/UI', image: '/assets/figma.png' },
    { name: 'Framer', category: 'UX/UI', image: '/assets/framer.png' },
    { name: 'Kubernetes', category: 'DevOps', image: '/assets/Kubernetes.png' }
];

const categories = ['Все', 'Backend', 'Frontend', 'Mobile', 'QA', 'PM', 'UX/UI', 'DevOps', 'SecurityOps'];

const Table = () => {
    const [selectedCategory, setSelectedCategory] = useState('Все');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredStacks = selectedCategory === 'Все'
        ? stacks
        : stacks.filter(stack => stack.category === selectedCategory);

    return (
        <div className="table-container">
            <div className="container">
                <div className="table-container__wrapper">
                    <h1 className="heading">Наши стеки</h1>
                    <div className="categories">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="stacks-grid">
                        {filteredStacks.map(stack => (
                            <div key={stack.name} className="stack-item">
                                <img
                                    src={stack.image}
                                    alt={stack.name}
                                    className="stack-image"
                                />
                                <p>{stack.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
