import React, { useState } from 'react';
import '../styles/other_styling/Contact.css';
import contact from '../images/home.jpg';

export const Contact = () => {
    const [selectedService, setSelectedService] = useState('');

    const FormInput = ({ prompt, type, placeholder }) => {
        return (
            <div className='form_input_outer'>
                <p className='form_input_prompt'>{prompt}</p>
                <input className='form_input' type={type} placeholder={placeholder} />
            </div>
        );
    };

    const FormRadioGroup = ({ prompt, name, options }) => {
        return (
            <div className='form_radio'>
                <p className='form_section_title'>{prompt}</p>
                <div className='form_radio_inner'>
                    {options.map((option, index) => (
                        <div className='form_radio_item' key={index}>
                            <input 
                                type='radio' 
                                id={`${name}-${index}`} 
                                name={name} 
                                value={option} 
                                checked={selectedService === option} 
                                onChange={(e) => setSelectedService(e.target.value)} 
                            />
                            <label htmlFor={`${name}-${index}`}>{option}</label>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="contact">
            <h1 className='section_title'>Contact</h1>
            <h3 className='section_subtitle'>Start Your Journey to a Showroom Shine - Reach Out Today!</h3>

            <div className='contact_inner'>
                <h1 className='form_title'>Get a free quote</h1>
                <h5 className='form_subtitle'>Please fill out the form below and we will be in touch within 3 business days.</h5>

                <FormInput prompt='Name' type='text' placeholder='Input name' />
                <FormInput prompt='Email' type='email' placeholder='Input email' />
                <FormInput prompt='Phone Number' type='tel' placeholder='Input phone number' />

                <FormRadioGroup 
                    prompt='Select the service you are interested in' 
                    name='service' 
                    options={['service 1', 'service 2', 'service 3', 'This is not related to booking']} 
                />

                <div className='form_input_outer'>
                    <p className='form_section_title'>
                        {selectedService === 'This is not related to booking' 
                            ? 'Please type your message below.' 
                            : 'Tell us about your vehicle, ie size, condition etc.'}
                    </p>
                    <textarea className='form_textarea' placeholder='Type your message here...'></textarea>
                </div>

                <button className='form_submit'>Submit</button>
            </div>
        </div>
    );
}
