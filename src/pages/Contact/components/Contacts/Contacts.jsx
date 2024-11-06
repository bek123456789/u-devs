import React, { useState } from 'react';
import './Contacts.scss';

const ClientForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [statusMessage, setStatusMessage] = useState(''); // For success/error messages
    const [isLoading, setIsLoading] = useState(false); // For the loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { name, phone, email } = formData;

        // Basic validation: ensure all fields are filled and email is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/; // Adjust pattern for phone if needed

        if (!name || !phone || !email) {
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
            setStatusMessage(validationError); // Show validation error
            return;
        }

        setIsLoading(true); // Start loading

        // Prepare the payload to send to Google Apps Script
        const payload = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxIvCqocumBrMt6_bOVP3hYL5XuYqLmow1uDWlcHPx5-Z-6KpkH_4WPGt7cqsV6P_yi/exec', {
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
            console.log('Response from Google Sheets:', result);

            // Show success message
            setStatusMessage('Form submitted successfully!');

            // Clear the form
            setFormData({ name: '', phone: '', email: '' });
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
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Введите имя"
                        value={formData.name}
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
                        pattern="\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}" // HTML pattern for the input field
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

                <button type="submit" disabled={isLoading || !formData.name || !formData.phone || !formData.email}>
                    {isLoading ? 'Submitting...' : 'Отправить'}
                </button>
            </form>

            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default ClientForm;
