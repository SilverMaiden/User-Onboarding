import React from 'react';
import "../Form/Form";

const UserCard = (props) => {

    return (
            <div className="card-container">
                {props.users.map(user => (
                    <ul className="card">
                        <li><strong> Name:</strong> {user.name}</li>
                        <li><strong> Email:</strong> {user.email}</li>
                        <li><strong> Role:</strong> {user.role}</li>
                    </ul>
                ))}
            </div>


    )
}

export default UserCard;
