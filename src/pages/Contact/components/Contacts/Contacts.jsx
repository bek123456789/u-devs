import React, { useState } from 'react';
import './Contacts.scss';

const ClientForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: ''
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { fullName, phone, email } = formData;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;

        if (!fullName || !phone || !email) {
            return "Please fill in all fields.";
        }
        if (!emailPattern.test(email)) {
            return "Please enter a valid email address.";
        }
        if (!phonePattern.test(phone)) {
            return "Please enter a valid phone number (+998 (55) 000-00-00).";
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data before submitting
        const validationError = validateForm();
        if (validationError) {
            setStatusMessage(validationError);
            return;
        }

        setIsLoading(true);

        // Prepare the payload to send to the local API (json-server)
        const payload = {
            fullName: formData.fullName,
            phone: formData.phone,
            email: formData.email,
        };

        try {
            const response = await fetch('http://localhost:5000/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
            }

            const result = await response.json();
            console.log('Response from db.json:', result);

            // Show success message
            setStatusMessage('Form submitted successfully!');

            // Clear the form
            setFormData({ fullName: '', phone: '', email: '' });
        } catch (error) {
            console.error('Error sending data:', error.message);
            setStatusMessage('Error submitting the form. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="client-form">
            <h1>Станьте клиентом</h1>
            <p>
                Наши клиенты получают наилучшие результаты, когда наша команда занимается их
                бизнесом в течение длительного периода времени.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="fullName">Имя</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Введите имя"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Номер телефона</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+998 (55) 000-00-00"
                        pattern="\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}"
                        title="Please enter a valid phone number in the format +998 (55) 000-00-00"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Почта</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" disabled={isLoading || !formData.fullName || !formData.phone || !formData.email}>
                    {isLoading ? 'Submitting...' : 'Отправить'}
                </button>
            </form>

            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default ClientForm;
