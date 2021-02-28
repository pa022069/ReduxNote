import React from 'react';

const Profile = ({name, age, changeAge}) => {
    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <button onClick={() => changeAge(1)}>+</button>
            <button onClick={() => changeAge(-1)}>-</button>
        </div>
    );
}

export default Profile;