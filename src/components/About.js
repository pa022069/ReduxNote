import React from 'react';

const About = ({address, phone}) => {
    return (
        <div>
            <p>address: {address}</p>
            <p>phone: {phone}</p>
        </div>
    );
}

export default About;