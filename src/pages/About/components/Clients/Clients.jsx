import React, { useState } from 'react';
import './Clients.scss'; // Import the CSS for styling

const Clients = () => {
    const categories = [
        'Popular',
        'Finance',
        'Startup',
        'E-commerce',
        'Government Projects',
        'Logistics',
        'Media',
        'Travel',
        'Educational Platform',
        'Website',
    ];


    const clients = [
        { name: 'Way', category: 'Popular', logo: '../src/assets/way.png' },
        { name: 'TBC', category: 'Finance', logo: '../src/assets/tbc.png' },
        { name: 'IMAN', category: 'Finance', logo: '../src/assets/iman.png' },
        { name: 'Anorbank', category: 'Finance', logo: '../src/assets/anor.png' },
        { name: 'Bereke Bank', category: 'Finance', logo: '../src/assets/bereke.png' },
        { name: 'Hyssa', category: 'Finance', logo: '../src/assets/hyssa.png' },
        { name: 'Uzum Nasiya', category: 'Popular', logo: '../src/assets/uzum nasiya.png' },
        { name: 'Genus Technologies', category: 'Startup', logo: '../src/assets/genus.png' },
        { name: 'Hamkorbank', category: 'Finance', logo: '../src/assets/hamkor.png' },
        { name: 'Davlat Qomus', category: 'Government Projects', logo: '../src/assets/Bitmap.png' },
        { name: 'Yerelektron', category: 'Startup', logo: '../src/assets/yerelektron.png' },
        { name: 'Education Quality Assurance Inspection', category: 'Government Projects', logo: '../src/assets/mehnat agent.png' },
        { name: 'Zamin Foundation', category: 'Government Projects', logo: '../src/assets/zamin.png' },
        { name: 'Yangi Toshkent', category: 'Government Projects', logo: '../src/assets/yangi tash.png' },
        { name: 'Dastyor', category: 'Startup', logo: '../src/assets/dastyor.png' },
        { name: 'Evos', category: 'Startup', logo: '../src/assets/evos.png' },
        { name: 'Rasta', category: 'Logistics', logo: '../src/assets/rasta.png' },
        { name: 'TextileFinds.com', category: 'E-commerce', logo: '../src/assets/textilefinds.png' },
        { name: 'SamAuto', category: 'Logistics', logo: '../src/assets/samavto (1).png' },
        { name: 'Lebazar', category: 'E-commerce', logo: '../src/assets/lebazar.png' },
        { name: 'GoodZone', category: 'Media', logo: '../src/assets/goodzone.png' },
        { name: 'Space Coworking', category: 'Website', logo: '../src/assets/c-space.png' }
    ];

    const [selectedCategory, setSelectedCategory] = useState('Popular');


    const filteredClients = clients.filter(client =>
        selectedCategory === 'Popular' || client.category === selectedCategory
    );

    return (
        <div className="client">
            <div className="container">
                <div className="client__wrapper">
                    <div className="client__around">
                        <div className="client__title">
                            <p className="client__title-main">Клиенты</p>
                            <p className="client__title-sub">Компании, доверившие нам свои проекты</p>
                        </div>


                        <div className="client__category">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`client__category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>


                        <div className="client__logos">
                            {filteredClients.map((client, index) => (
                                <div key={index} className="client__logo-item">
                                    <img src={client.logo} alt={client.name} className="client__logo-img" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Clients;
