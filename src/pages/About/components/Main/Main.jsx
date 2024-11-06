import React from 'react'
import "./Main.scss"

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__text">
                        <p className='main__tittle'>Мы даем возможность брендам преуспеть в цифровом мире</p>
                        <p className='main__desc'>Udevs — это динамично развивающаяся IT-компания, специализирующаяся на создании инновационных цифровых решений. Мы объединяем передовые технологии и опыт, чтобы предлагать нашим клиентам уникальные продукты и услуги, которые помогают им достигать бизнес-целей. Наша команда состоит из высококвалифицированных специалистов, которые готовы решать сложные задачи и адаптироваться к быстро меняющимся условиям рынка.</p>
                    </div>
                    <div className="number">
                        <div className="number__tittle">
                            <p className='number__title_first'>Наши цифры</p>
                            <p className='number__title_second'>Наши показатели показывает вам на сколько мы активные</p>
                        </div>

                    </div>
                    <div className="box">
                        <div className="box__first">
                            <p className='box__number'>400+</p>
                            <p className='box__desc'>Проекты закрыты</p>
                        </div>
                        <div className="box__first">
                            <p className='box__number'>40+</p>
                            <p className='box__desc'>Высококвалифицированных кадров</p>
                        </div>
                        <div className="box__first">
                            <p className='box__number'>200+</p>
                            <p className='box__desc'>Клиентов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main