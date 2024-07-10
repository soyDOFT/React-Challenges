import React from 'react';
import './index.css';

function BasicInfo({ person }) {
    return (
        <div>
            <p>{person.name}</p>
            <p>{person.phone}</p>
            <p>{person.birthday}</p>
        </div>
    );
}

export default BasicInfo;