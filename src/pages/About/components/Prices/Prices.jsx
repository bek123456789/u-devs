import React from 'react';
import "./Prices.scss";

const valuesData = [
    { id: 1, imgSrc: "/assets/twomans.png", title: "Клиентоориентированность", description: "Мы ставим интересы клиента на первое место, внимательно изучаем его потребности и стремимся превзойти ожидания." },
    { id: 2, imgSrc: "/assets/two.png", title: "Качество", description: "Наши специалисты обеспечивают высокий уровень качества на каждом этапе разработки, от планирования до финальной реализации." },
    { id: 3, imgSrc: "/assets/rocket.png", title: "Инновации", description: "Мы внедряем передовые технологии и методы разработки, чтобы создавать решения, опережающие время." },
    { id: 4, imgSrc: "/assets/beatiful.png", title: "Прозрачность", description: "Мы поддерживаем открытое и честное взаимодействие с клиентами, предоставляя полный доступ к информации о ходе проекта." },
    { id: 5, imgSrc: "/assets/done.png", title: "Ответственность", description: "Мы отвечаем за каждый проект, гарантируя соблюдение сроков и качества работы." },
    { id: 6, imgSrc: "/assets/fourslice.png", title: "Командная работа", description: "Слаженная работа нашей команды позволяет достигать лучших результатов и быстро адаптироваться к изменениям." }
];

const PriceCard = ({ imgSrc, title, description }) => (
    <div className="price__card">
        <div className="price__card-image">
            <img src={imgSrc} alt={title} />
        </div>
        <p className="price__cardname">{title}</p>
        <p className="price__description">{description}</p>
    </div>
);

const Prices = () => {
    return (
        <div className="price">
            <div className="container">
                <div className="price__wrapper">
                    <div className="price__header">
                        <p className="price__title">Наши ценности</p>
                    </div>
                    <div className="price__cards">
                        {valuesData.map(value => (
                            <PriceCard
                                key={value.id}
                                imgSrc={value.imgSrc}
                                title={value.title}
                                description={value.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;
