import React, { useState } from 'react';
import '../styles/other_styling/Contact.css';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [selectedService, setSelectedService] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '' 
    });
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send(
            'service_96l851n', // Replace with your EmailJS service ID
            'template_dmu8gio', // Replace with your EmailJS template ID
            formData, 
            '8cz9C4EQvPEbct7Cf' // Replace with your EmailJS user ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatusMessage('Your message has been sent successfully!');
            // Clear the form fields
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                service: ''
            });
            setSelectedService(''); // Reset the selected service
        })
        .catch((err) => {
            console.log('FAILED...', err);
            setStatusMessage('Failed to send your message. Please try again.');
        });
    };

    return (
        <div className="contact">
            <h1 className='section_title'>Contact</h1>
            <h3 className='section_subtitle'>Start Your Journey to a Showroom Shine - Reach Out Today!</h3>

            <div className='contact_inner'>
                <h1 className='form_title'>Get a free quote</h1>
                <h5 className='form_subtitle'>Please fill out the form below and we will be in touch within 3 business days.</h5>

                <form onSubmit={handleSubmit}>
                    <div className='form_input_outer'>
                        <p className='form_input_prompt'>Name</p>
                        <input 
                            className='form_input' 
                            type='text' 
                            placeholder='Input name' 
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form_input_outer'>
                        <p className='form_input_prompt'>Email</p>
                        <input 
                            className='form_input' 
                            type='email' 
                            placeholder='Input email' 
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form_input_outer'>
                        <p className='form_input_prompt'>Phone Number</p>
                        <input 
                            className='form_input' 
                            type='tel' 
                            placeholder='Input phone number' 
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='form_radio'>
                        <p className='form_section_title'>Select the service you are interested in</p>
                        <div className='form_radio_inner'>
                            {['Valeting', 'Detailing', 'Ceramic protection / paint protection', 'Other'].map((option, index) => (
                                <div className='form_radio_item' key={index}>
                                    <input 
                                        type='radio' 
                                        id={`service-${index}`} 
                                        name='service' 
                                        value={option} 
                                        checked={selectedService === option} 
                                        onChange={(e) => {
                                            setSelectedService(e.target.value);
                                            setFormData((prevData) => ({
                                                ...prevData,
                                                service: e.target.value
                                            }));
                                        }} 
                                    />
                                    <label htmlFor={`service-${index}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='form_input_outer'>
                        <p className='form_section_title'>
                            {selectedService === 'Other' 
                                ? 'Please type your message below.' 
                                : 'Tell us about your vehicle, ie size, condition etc.'}
                        </p>
                        <textarea 
                            className='form_textarea' 
                            placeholder='Type your message here...' 
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button className='form_submit' type='submit'>Submit</button>
                </form>

                {statusMessage && <p className="status_message">{statusMessage}</p>}
            </div>
        </div>
    );
};
