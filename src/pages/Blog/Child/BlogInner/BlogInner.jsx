import React from 'react';
import Header from '../../../Main/components/Header/Header';
import "./BlogInner.scss";
import Footer from '../../../Main/components/Footer/Footer';

const BlogInner = () => {
    return (
        <>
            <Header />
            <div className="blog_inner">
                <div className="container">
                    <div className="blog_inner__wrapper">
                        <div className="blog_inner__how">
                            <p> <span>Udevs</span> / <span>Блог</span> / Топ-10 трендов в UI/UX Дизайне </p>
                        </div>
                        <div className="blog_inner__top_ten">
                            <div className="blog_inner__first">
                                <div className="blog_inner__first_child_first">
                                    <p className='ui__uix'>UI/UX Дизайн</p>
                                    <p className='topten_p'>Топ-10 трендов в UI/UX Дизайне </p>
                                    <p className='do_this'>Узнайте о значении фреймворков UX-дизайна для успеха проекта. Прочтите о ведущих примерах, которые помогут вам адаптировать то, что соответствует вашим потребностям.</p>
                                    <p className='write_p'>Написана от <span>Udevs</span> • 19 Января 2024 • 15 мин. чтения</p>
                                </div>
                                <div className="blog_inner__first_child_second">
                                    <p className='three_one_p'>Узнайте о значении фреймворков UX-дизайна для успеха проекта. Прочтите о ведущих примерах, которые помогут вам адаптировать то, что соответствует вашим потребностям.</p>
                                    <p className='three_one_p'>В сфере дизайна есть большой простор для творчества. Решение новых проблем и поиск творческих решений — это скорее привычка для UX-дизайнеров. Это связано с тем, что сама дисциплина очень гибкая и постоянно развивающаяся, что гарантирует дизайнерам возможность экспериментировать с новыми решениями, придумывать новые методы и удовлетворять меняющиеся потребности целевой аудитории. Однако это не означает, что в области дизайна отсутствует структура. На самом деле, существуют определенные принципы UX-дизайна, которым следуют почти все проекты, чтобы быть успешными и полезными для аудитории.</p>
                                    <p className='osnova_p'>Основа трендов</p>
                                    <p className='three_one_p'>Один из способов не отставать от этих принципов — принять заранее определенные стратегии, которые помогут структурировать общий процесс проектирования. За прошедшие годы дизайнеры и исследователи UX разработали определенные концепции, которые можно применять при проектировании продуктов и услуг. Некоторые из этих фреймворков приобрели настолько большую популярность, что их также используют лучшие поставщики услуг UX-дизайна на рынке. От инициации проекта и проведения предварительных исследований до разработки готового продукта и оценки дизайна — UX-фреймворки охватывают все элементы дизайна.</p>
                                    <img className='imggss' src="/assets/Imagef.png" alt="" />
                                </div>
                                <div className="another_text">
                                    <div className='another_possttt'>
                                        <p className='kavicka_p'>“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</p>
                                        <p className='minuss_p'>— Olivia Rhye, Product Designerv</p>
                                    </div>

                                </div>
                                <div className="conclusion">
                                    <p className='conclusion_p'>Conclusion</p>
                                    <p className='conclusion_three_p' >Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse</p>
                                    <p className='conclusion_three_p' >Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                                    <p className='conclusion_three_p' >Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.</p>
                                </div>
                            </div>
                            <div className="blog_inner__second">
                                <p className='doska_p'>Доска контентов</p>
                                <p className='five_one'>UX Solutions and UI concept</p>
                                <p className='five_one'>Design</p>
                                <p className='five_one'>Product</p>
                                <p className='five_one'>Software Development</p>
                                <p className='five_one'>Customer Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogInner;
