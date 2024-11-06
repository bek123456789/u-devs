import React from 'react'
import "./Prices.scss"

const Prices = () => {
    return (
        <div className="price">
            <div className="container">
                <div className="price__wrapper">
                    <div className="price___cards_name">
                        <p className='price__tittle'>Наши ценности</p>
                    </div>
                    <div className="price__cards">

                        <div className="price__card">
                            <div>
                                <img src="./src/assets/twomans.png" alt="" />
                            </div>

                            <p className="price__cardname">Клиентоориентированность</p>
                            <p className="price__description">Мы ставим интересы клиента на первое место, внимательно изучаем его потребности и стремимся превзойти ожидания.</p>
                        </div>
                        <div className="price__card">
                            <div>
                                <img src="./src/assets/two.png" alt="" />
                            </div>

                            <p className="price__cardname">Качество</p>
                            <p className="price__description">Наши специалисты обеспечивают высокий уровень качества на каждом этапе разработки, от планирования до финальной реализации.</p>
                        </div>
                        <div className="price__card">
                            <div>
                                <img src="./src/assets/rocket.png" alt="" />
                            </div>

                            <p className="price__cardname">Инновации</p>
                            <p className="price__description">Мы внедряем передовые технологии и методы разработки, чтобы создавать решения, опережающие время.</p>
                        </div>
                        <div className="price__card">
                            <div>
                                <img src="./src/assets/beatiful.png" alt="" />
                            </div>

                            <p className="price__cardname">Прозрачность</p>
                            <p className="price__description">Мы поддерживаем открытое и честное взаимодействие с клиентами, предоставляя полный доступ к информации о ходе проекта.</p>
                        </div>
                        <div className="price__card">
                            <div>
                                <img src="./src/assets/done.png" alt="" />
                            </div>

                            <p className="price__cardname">Ответственность</p>
                            <p className="price__description">Мы отвечаем за каждый проект, гарантируя соблюдение сроков и качества работы.</p>
                        </div>
                        <div className="price__card">
                            <div>
                                <img src="./src/assets/fourslice.png" alt="" />
                            </div>

                            <p className="price__cardname">Командная работа</p>
                            <p className="price__description">Слаженная работа нашей команды позволяет достигать лучших результатов и быстро адаптироваться к изменениям.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices