import React, { useState } from 'react';
import { NoPrint, Print } from 'react-easy-print';
import TextSection from './textsection.js';

const GeneralSection = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prevInfo) => {
            let newInfo = { ...prevInfo, [name]: value };
            return newInfo;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode((prevMode) => !prevMode);
    };

    const { firstName, lastName, email, phone } = personalInfo;

    if (!editMode) {
        return (
            <TextSection
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                handleEdit={handleSubmit}
            />
        );
    }

    return (
        <NoPrint>
            <Print printOnly>
                <p className='warning'>Fill in the form.</p>
            </Print>
            <section className='generalSection'>
                <form className='section' action='' onSubmit={handleSubmit}>
                    <label>
                        <p>First Name:</p>
                        <input
                            type='text'
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={firstName}
                            required
                        />
                    </label>

                    <label>
                        <p>Last Name:</p>
                        <input
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={lastName}
                            required
                        />
                    </label>

                    <label>
                        <p>Email:</p>
                        <input
                            type='email'
                            placeholder='example@gmail.com'
                            name='email'
                            onChange={handleChange}
                            value={email}
                            required
                        />
                    </label>
                    <label>
                        <p>Phone Number:</p>
                        <input
                            type='tel'
                            name='phone'
                            placeholder='123-456-7890'
                            onChange={handleChange}
                            value={phone}
                            required
                        />
                    </label>
                    <button className='formBtn generalBtn' type='submit'>
                        Save
                    </button>
                </form>
            </section>
        </NoPrint>
    );
};

export default GeneralSection;