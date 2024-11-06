import React from 'react';
import "./TestimonialSection.scss";

const TestimonialSection = () => {
    return (
        <div className="testimol">
            <div className="container">
                <div className="testimol__wrapper">
                    <div className="testimol__top">
                        <p className='testimol__name'>Наши партнеры говорят</p>
                        <div className="testimol__topchild">
                            <div><img src="./src/assets/way.png" alt="" /></div>
                            <div className='testimol__twobtndiv'>
                                <button className='testimol__btnleftright'><img src="./src/assets/left.png" alt="" /></button>
                                <button className='testimol__btnleftright'><img src="./src/assets/rightt.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="testimol__bottom">
                        <div className="testimol__bottomchildfirst">
                            <img src="./src/assets/akfa.png" alt="" />
                        </div>
                        <div className="testimol__bottomchildsecond">
                            <p className='testimol__bottomp'>“У меня невероятно большие ожидания, и талантливая команда Ramotion не разочаровала. Они предоставили продуманный, безупречный дизайн и код, которые оказали огромное положительное влияние на бизнес, значительно расширив возможности наших клиентов находить и понимать контент сайта поддержки.”</p>
                            <div className="testimol__user">
                                <img src="./src/assets/Avatar.png" alt="" />
                                <div>
                                    <p className='testimol__username'>Caitlyn King</p>
                                    <p className='testimol__userjob'>Менеджер по продажам Way ll</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
