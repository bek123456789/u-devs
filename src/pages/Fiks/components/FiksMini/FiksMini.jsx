import React, { useState } from 'react';
import "./FiksMini.scss";

const clients = [
    { id: 1, src: "/assets/way.png", alt: "Way" },
    { id: 2, src: "/assets/tbc.png", alt: "TBC" },
    { id: 3, src: "/assets/iman.png", alt: "IMAN" },
    { id: 4, src: "/assets/anor.png", alt: "ANORBANK" },
    { id: 5, src: "/assets/bereke.png", alt: "Bereke Bank" },
    { id: 6, src: "/assets/hyssa.png", alt: "Hyssa" },
    { id: 7, src: "/assets/uzum-nasiya.png", alt: "Uzum Nasiya" },
    { id: 8, src: "/assets/genus.png", alt: "GENUS Technologies" },
    { id: 9, src: "/assets/hamkor.png", alt: "HamkorBank" },
    { id: 10, src: "/assets/soliq.png", alt: "Byakat" },
    { id: 11, src: "/assets/qurilish.png", alt: "Bank" },
    { id: 12, src: "/assets/yerelektron.png", alt: "Yerelektron" },
];

const FiksMini = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "Какие услуги вы предоставляете?",
            answer: "Мы предоставляем услуги по разработке программного обеспечения, веб-разработке, мобильным приложениям, ИТ-консалтингу, поддержке и обслуживанию ИТ-инфраструктуры, а также разработке индивидуальных решений."
        },
        { question: "Как вы обеспечиваете качество работы?" },
        { question: "Как вы управляете проектами?" },
        { question: "Как вы обеспечиваете безопасность данных?" },
        { question: "Какова ваша модель ценообразования?" },
        { question: "Как быстро можно начать сотрудничество?" },
        { question: "Могу ли я изменить требования в процессе работы?" },
        { question: "Какие у вас гарантии на выполненную работу?" },
        { question: "Как мне связаться с вами для получения дополнительной информации?" }
    ];

    return (
        <div className="fiks">
            <div className="container">
                <div className="fiks__wrapper">
                    <div className="fiks__name">
                        <p className="fiks__boldname">Фикс прайс разработка</p>
                        <p className="fiks__simpletext">Гарантированный результат по заранее согласованной цене.</p>
                    </div>

                    <div className="fiks__cards">
                        <p className="fiks__simplename">Этапы разработки</p>
                        <div className="fiks__card">
                            <img src="/assets/bigimg.svg" alt="Этапы разработки" />
                        </div>
                    </div>

                    <div className="sec">
                        <div className="sec__name">
                            <p>Клиенты</p>
                        </div>
                        <div className="sec__cards">
                            {clients.map(client => (
                                <div key={client.id} className="sec__card">
                                    <img src={client.src} alt={client.alt} className="sec__card-image" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="third">
                        <div className="third__name">
                            <p className='third__pp'>Фикс прайс проекты</p>

                            <div className="third__cards">
                                <div className="third__cardss">
                                    <img src="/assets/sss.svg" alt="" />
                                    <p className='sss_text'> Way ll Invest</p>
                                    <p className='third__pppp'>Mobile App • Frontend • Backend • UI/UX дизайн</p>
                                </div>
                                <div className="third__cardss">
                                    <img src="/assets/cccc.png" alt="" />
                                    <p className='sss_text'>Hyssa</p>
                                    <p className='third__pppp'>Mobile App • Frontend • Backend • UI/UX дизайн • QA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq">
                        <h2 className="faq__title">Часто задаваемые вопросы</h2>
                        <div className="faq__items">
                            {faqData.map((item, index) => (
                                <div key={index} className="faq__item">
                                    <div
                                        className="faq__question"
                                        onClick={() => toggleQuestion(index)}
                                    >
                                        <p>{item.question}</p>
                                        <span>{openQuestion === index ? '-' : '+'}</span>
                                    </div>
                                    {openQuestion === index && item.answer && (
                                        <div className="faq__answer">
                                            <p>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiksMini;
